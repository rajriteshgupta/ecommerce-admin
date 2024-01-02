import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function POST(
    req : Request,
    { params }: { params: { storeId: string } }
    ) {
    try {
        const { userId } = auth();
        const body = await req.json();

        const { name, value } = body;
        
        if(!userId){
            return new NextResponse("Unauthenticated", {status: 401});
        }

        if(!name) {
            return new NextResponse("Name is required", {status: 400});
        }
        
        if(!value) {
            return new NextResponse("Value is required", {status: 400});
        }

        if(!params.storeId){
            return new NextResponse("Store ID is required", {status: 400});
        }

        const storeByUserId = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId
            }
        });

        if(!storeByUserId){
            return new NextResponse("Unauthorized", {status: 403});
        }

        const colour = await prismadb.colour.create({
            data: {
                name,
                value,
                storeId: params.storeId
            }
        });

        return NextResponse.json(colour);
    } catch (error) {
        console.log('[COLOURS_POST]', error);
        return new NextResponse("Internal error", {status: 500});
    }
}

export async function GET(
    req : Request,
    { params }: { params: { storeId: string } }
    ) {
    try {
        if(!params.storeId){
            return new NextResponse("Store ID is required", {status: 400});
        }

        const colours = await prismadb.colour.findMany({
            where: {
                storeId: params.storeId
            }
        });

        return NextResponse.json(colours);
    } catch (error) {
        console.log('[COLOURS_GET]', error);
        return new NextResponse("Internal error", {status: 500});
    }
}