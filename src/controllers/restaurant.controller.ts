import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import session from "express-session";
import Errors, { Message } from "../libs/Error";

const memberService = new MemberService(); //create an instance of member model service class

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.render("home");
  } catch (err) {
    console.log("Error: Go Home", err);
    res.redirect("/admin");
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
  } catch (err) {
    console.error("Error : Get SignUp", err);
    res.redirect("/admin");
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
  } catch (err) {
    console.error("Error : Get Login", err);
    res.redirect("/admin");
  }
};

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processSignup: this is restaurant.controller module!"); //
    console.log("the body information contains in postman app: ", req.body); //  for test
    const newMember = req.body; // get the data from client side to server side by using 'body-parser' middleware
    newMember.memberType = MemberType.RESTAURANT; //set the default member type to be "Restaurant"
    const result = await memberService.processSignup(newMember);

    // TODO: SESSIONS ATHENTICATION - save user info into session object and send it back to client side

    req.session.member = result; //save the returned value from service layer into session object
    req.session.save(function () {
      res.send(result);
    }); //send the response data back to client-side
  } catch (err) {
    //    catch any error that may occur during the execution of the function
    console.error("Error : processSignup ", err); //  print out the error message if any error occurs when processing sign up request
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG; //get customized error message or a general one
    res.send(
      `<script>alert("${message}"); wondow.location.replace("admin/signup");</script>`
    );
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processLogin");
    console.log("ProcessLogin: ", req.body); //  JSON data you sent to server
    const input: LoginInput = req.body; //   get data from client side
    const result = await memberService.processLogin(input); //    call service class function
    // TODO: SESSIONS ATHENTICATION

    req.session.member = result; //save the returned value from service layer into session object
    req.session.save(function () {
      res.send(result); // return the login result back to client side
    }); //send the response data back to client-side
  } catch (err) {
    console.error("Error : processLogin ", err); //  print error message on console
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG; //get customized error message or a general one
    res.send(
      `<script>alert("${message}"); wondow.location.replace("admin/login");</script>`
    ); // return
  }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout");
    console.log("logout:", req.body); //  JSON data you sent to server

    req.session.destroy(() => {
      res.redirect("/admin"); // redirect to admin page after log out
    });
  } catch (err) {
    console.error("Error : logout ", err); //  print error message on console
    res.send(err); // send back a response with status code and error message
  }
};

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    console.log("checkAuthSession: ", req.body); //  JSON data you sent to server

    if (req.session.member)
      res.send(`<script>alert(" ${req.session.member.memberNick}")</script>`);
    else res.send(`<script>alert(" ${Message.NOT_AUTHENTICATED}")</script>`);
  } catch (err) {
    console.error("Error : checkAuthSession ", err); //  print error message on console
    res.send(err); // send back a response with status code and error message
  }
};

export default restaurantController;
