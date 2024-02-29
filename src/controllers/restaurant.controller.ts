import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home Page");
  } catch (err) {
    console.log("Error : Go Home", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login Page");
  } catch (err) {
    console.error("Error : Get Login", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");

    res.send("Signup Page");
  } catch (err) {
    console.error("Error : Get SignUp", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("processLogin Page: DONE");
  } catch (err) {
    console.error("Error : processLogin ", err);
  }
};

restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    res.send("processSignup Page: DONE");
  } catch (err) {
    console.error("Error : processSignup ", err);
  }
};

export default restaurantController;
