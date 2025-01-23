import express from 'express'
import cors from 'cors'
import todoRoutes from './routes/todo.routes.js'
import productRoutes from './routes/product.routes.js'
import dotenv from 'dotenv'

dotenv.config();


const PORT = 3000;
const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());



app.use('/api/todos',todoRoutes)
app.use('/api/products',productRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on the ${PORT}`);
});






// app.post("/users", async (req, res) => {
//   const { name, email } = req.body;

//   console.log(req.body);

//   try {
//     const newUser = await prisma.user.create({
//       data: { name, email },
//     });
//     res.json(newUser);
//   } catch (error) {
//     console.error("Error creating user", error);
//     res.status(500).json({ error: "Failed to create user" });
//   }
// });




// app.post("/todos", async (req, res) => {
//   const { name } = req.body;

//   try {
//     const newTodo = await prisma.todo.create({
//       data: { name },
//     });

//     res.json(newTodo);
//   } catch (error) {
//     console.error("Error creating todo", error);
//   }
// });
