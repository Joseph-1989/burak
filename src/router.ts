// import express, { Request, Response } from "express";
import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

router.post("/login", memberController.login);
router.post("/signup", memberController.signup);

// router.get("/login", (req: Request, res: Response) => {
//   res.send("Login page");
// });

// router.get("/login", memberController.getLogin);

// router.get("/signup", (req: Request, res: Response) => {
//   res.send("Signup page");
// });

// router.get("/signup", memberController.getSignup);

export default router;
