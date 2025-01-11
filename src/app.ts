import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT =process.env.PORT || 5050

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World",
  })
});



app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    message: "Not Found",
  });
})

// Server
app.listen(PORT , () => {
  console.log("Server is running on port " + PORT);
});