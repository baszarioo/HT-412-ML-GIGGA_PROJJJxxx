import mongoose, { Schema } from "mongoose";
import { Truculenta } from "next/font/google";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;


const ticketSchema = new Schema (
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,
    },
    {
        timestamps: true,
    }
);
const Ticket = mongoose.models.Ticket || mongoose.models("Ticket", ticketSchema);
export default Ticket;