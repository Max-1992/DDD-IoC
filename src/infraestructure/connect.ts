// Requiere Modules
import db from "mongoose"

export const connect = async (dbConnect: any) => {
    await db.connect( dbConnect, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    console.log(`Database is connected on`, `${dbConnect}`);
}