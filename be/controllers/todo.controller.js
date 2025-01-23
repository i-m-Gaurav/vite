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

export const deleteTodo = async (req,res) => {
    try {

        const { id } = req.params;
        console.log(req.params)

        await prisma.todo.delete({
            where: {
                id : id,
            }
        });
        res.status(200).json({success : true, message : "Deleted the todo"});
        
    } catch (error) {

        console.error("error deleting the todo", error);
        res.status(500).json({success : false, message : "failed to deletd the todo"});
        
    }
}

// create todo here

export const createTodo = async (req,res) => {

    const {name} = req.body;
    console.log(req.body)

    try {

        const newTodo = await prisma.todo.create({
            data : {name}
        })

        res.status(201).json(newTodo);
        
    } catch (error) {

        res.status(500).json({success : false, message : "Failed to create the todo"});
        
    }

}