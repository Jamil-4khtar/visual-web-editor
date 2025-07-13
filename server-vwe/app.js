import express from "express";
import { configDotenv } from "dotenv";
import cors from 'cors'
import connectDb from "./config/db.js";
import errHandler from "./middleware/errHandler.js";
import templateRouter from "./route/templateRoute.js";

const app = express();
configDotenv();
connectDb();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}))


app.use("/api/template", templateRouter)


app.get("/*assemble", (req, res) => {
  console.log("No page in this url: ", req.params.assemble);
  res.json({ message: "No Page Found" });
});

app.use(errHandler);



app.listen(PORT, () => console.log(`Server is up at ${PORT}`));
