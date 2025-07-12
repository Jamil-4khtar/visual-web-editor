import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import connectDb from "./config/db.js";
import errHandler from "./middleware/errHandler.js";
import templateRouter from "./route/templateRoute.js";

const app = express();
const PORT = process.env.PORT;
connectDb();

app.use(express.json());


app.use("/api/template", templateRouter)


app.get("/*assemble", (req, res) => {
  console.log("No page in this url: ", req.params.assemble);
  res.json({ message: "No Page Found" });
});

app.use(errHandler);



app.listen(PORT, () => console.log(`Server is up at ${PORT}`));
