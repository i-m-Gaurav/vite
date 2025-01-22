// import prisma from "../prisma.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodos = async (req,res) => {
    try {
        const todos = await prisma.todo.findMany();
        res.status(200).json({success : true, data : todos});
    } catch (error) {
        console.error("Database connection error:", {
            message: error.message,
            code: error.code,
            clientVersion: error.clientVersion
        });
        res.status(500).json({
            success: false, 
            message: "Database connection error",
            error: error.message
        });
    }
}