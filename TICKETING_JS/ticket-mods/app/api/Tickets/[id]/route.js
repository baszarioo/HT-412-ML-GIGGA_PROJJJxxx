import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, {params}){
    try {
        const {id}=params'
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({message: "Ticket Deleted successfully"}, {status: 200});
    }catch (err){
        return NextResponse.error({message: "Error deleting", err}, {status: 500});
    }
}