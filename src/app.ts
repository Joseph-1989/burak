import express from "express";
import path from "path";

// #1-ENTRENCE
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // for
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// #2-SESSIONS
// #3-VIEWS
// #4-ROUTERS

export default app; //module
