// import express, { Request, Response } from "express";
import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

// router.get("/", (req: Request, res: Response) => {
//   res.send("Home page");
// });

router.get("/", memberController.goHome);

// router.get("/login", (req: Request, res: Response) => {
//   res.send("Login page");
// });

router.get("/login", memberController.getLogin);

// router.get("/signup", (req: Request, res: Response) => {
//   res.send("Signup page");
// });

router.get("/signup", memberController.getSignup);

export default router;
