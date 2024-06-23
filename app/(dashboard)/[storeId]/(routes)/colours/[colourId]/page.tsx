import prismadb from "@/lib/prismadb";
import { ColourForm } from "./components/colour-form";

const ColourPage = async ({
    params
}: {
    params: { colourId: string }
}) => {
    let colour = null;
    if(params.colourId !== 'new'){
        colour = await prismadb.colour.findUnique({
            where: {
                id: params.colourId
            }
        });
    }
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8">
                <ColourForm initialData={colour} />
            </div>
        </div>
    );
}

export default ColourPage;