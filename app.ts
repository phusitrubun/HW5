import express from "express";
import bodyParser from "body-parser";
import { router as insert } from "./api/insert";
import { router as deletes } from "./api/delete";
import { router as search } from "./api/search";

export const app = express();

// app.use("/", (req, res) => {
//   res.send("Hello World!!!");
// });

app.use(bodyParser.text());
app.use(bodyParser.json());

app.use('/insert',insert);
app.use('/delete',deletes);
app.use('/search',search);