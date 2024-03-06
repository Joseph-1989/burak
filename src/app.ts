import express from "express";
import path from "path"; //Used to resolve paths for serving static files
import router from "./router"; //Our custom Express.js router
import routerAdmin from "./route-admin"; //Router for admin functions (login, logout)
import morgan from "morgan"; //Logging middleware for Express 4
import { MORGAN_FORMAT } from "./libs/config"; //Config variable holding the logging format

// #1-ENTRENCE
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // for  static files (css, js) in public folder
//__dirname is a special variable in Node.js that represents the directory name of the current module. It provides the absolute path of the directory containing the JavaScript file being executed.
app.use(express.urlencoded({ extended: true })); //for parsing application/x-www-form-urlencoded
app.use(express.json()); //for parsing application/json
app.use(morgan(MORGAN_FORMAT)); //log request to console

// #2-SESSIONS

// #3-VIEWS
app.set("views", path.join(__dirname, "views")); // set views folder
app.set("view engine", "ejs"); // set template engine ejs

// #4-ROUTERS
app.use("/admin", routerAdmin); //SSR: EJS  render on server side
app.use("/", router); //SPA : REACT  render on client side

export default app; //module     exportation

//The use method is a fundamental part of Express,
//and it is used for adding middleware to the application's
//request-handling pipeline.

//In Express.js, the express.static middleware is used to serve static files
//such as images, CSS files, and JavaScript files. It's a built-in middleware
//function that takes a root directory path as an argument and serves static files
//relative to that path.
