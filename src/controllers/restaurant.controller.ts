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
      req.body //  JSON data you sent to server
    );
    const input: LoginInput = req.body; //   get data from client side
    // input.memberType = MemberType.RESTAURANT;
    const meberService = new MemberService(); //   create an instance of service class
    const result = await meberService.processLogin(input); //    call service class function
    res.send(result); // send back the response to client side
  } catch (err) {
    console.error("Error : processLogin ", err); //  print error message on console
    res.send(err); //     send back a response with status code and error message
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  //
  try {
    console.log("processSignup: this is restaurant.controller module!"); //
    console.log("the body information contains in postman app: ", req.body); //  for test

    const newMember = req.body; // get the data from client side to server side by using 'body-parser' middleware
    newMember.memberType = MemberType.RESTAURANT; //set the default member type to be "Restaurant"

    const meberService = new MemberService();
    const result = await meberService.processSignup(newMember);
    res.send(result);
  } catch (err) {
    //    catch any error that may occur during the execution of the function
    console.error("Error : processSignup ", err); //  print out the error message if any error occurs when processing sign up request
    res.send(err); //return error message back to client side if any error occurs during sign up process
  }
};

export default restaurantController;
