const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const PORT = 3000;
const app = express();

const prisma = new PrismaClient();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  console.log(req.body);

  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.json(newUser);
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

app.post("/todos", async (req, res) => {
  const { name } = req.body;

  try {
    const newTodo = await prisma.todo.create({
      data: { name },
    });

    res.json(newTodo);
  } catch (error) {
    console.error("Error creating todo", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on the ${PORT}`);
});
