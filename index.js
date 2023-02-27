import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

// const uri =
//   "mongodb+srv://19-Arid-839:19arid839@cluster0.9vnpfwl.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(
    "mongodb+srv://19-Arid-839:19arid839@cluster0.9vnpfwl.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Unable to make connection with mongodb", err));
app.get("/", async (req, resp) => {
  resp.send("hello");
});
app.post("/", async (req, resp) => {
    resp.send("api in progress");
  });

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("server running on 8000 port"));
