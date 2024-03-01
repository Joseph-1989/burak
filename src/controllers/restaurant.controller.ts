import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

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
    // console.log("req.body:", req.body);
    // const input: LoginInput = req.body;
    // const memberService = new MemberService();
    res.send("Signup Page");
  } catch (err) {
    console.error("Error : Get SignUp", err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log(
      "ProcessLogin: the body information contains in postman app: ",
      req.body
    );
    const input: LoginInput = req.body;
    // input.memberType = MemberType.RESTAURANT;
    const meberService = new MemberService();
    const result = await meberService.processLogin(input);
    res.send(result);
  } catch (err) {
    console.error("Error : processLogin ", err);
    res.send(err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup: this is restaurant.controller module!");
    console.log("the body information contains in postman app: ", req.body);

    const newMember = req.body; // get the data from client side to server side by using 'body-parser' middleware
    newMember.memberType = MemberType.RESTAURANT; //set the default member type to be "Restaurant"

    const meberService = new MemberService();
    const result = await meberService.processSignup(newMember);
    res.send(result);
  } catch (err) {
    console.error("Error : processSignup ", err);
    res.send(err);
  }
};

export default restaurantController;
