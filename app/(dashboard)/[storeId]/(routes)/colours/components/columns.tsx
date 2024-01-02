"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type ColourColumn = {
  id: string
  name: string
  value: string
  createdAt: string
}

export const columns: ColumnDef<ColourColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row}) =>(
      <div className="flex items-center gap-x-2">
        {row.original.value}
        <div 
          className="h-6 w-6 rounded-full border"
          style={{backgroundColor: row.original.value}}
        />
      </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "actions",
    cell: ({row}) => <CellAction data={row.original} />,
  },
]