import { NextFunction, Request, Response, response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import session from "express-session";
import Errors, { HttpCode, Message } from "../libs/Error";

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
    console.log("processSignup!\n"); //
    const file = req.file; //express-fileupload middleware
    console.log("File : ", file);

    if (!file)
      throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

    const newMember: MemberInput = req.body; // get the data from client side to server side by using 'body-parser' middleware
    newMember.memberImage = file?.path.replace(/\\/g, "/");
    newMember.memberType = MemberType.RESTAURANT; //set the default member type to be "Restaurant"
    const result = await memberService.processSignup(newMember);

    // console.log("\n REQ.BODY: \n", req.body); //  for test
    // console.log("\n newMember: \n ", newMember);
    // console.log("\n file \n", file);
    // console.log("\n newMember.memberImage:\n", newMember.memberImage);
    // console.log("\n MemberType.RESTAURANT: \n ", MemberType.RESTAURANT);
    // console.log("\n newMember.memberType : \n", newMember.memberType);
    // console.log("\n Result of processSignup: \n", result);
    // TODO: SESSIONS ATHENTICATION - save user info into session object and send it back to client side

    req.session.member = result; //save the returned value from service layer into session object
    req.session.save(function () {
      // res.send(result);

      res.redirect("/admin/product/all");

      // console.log("\n req.session.member: \n", req.session.member);
      // console.log("\n Session saved!", req.session);
    });
  } catch (err) {
    //catch any error that may occur during the execution of the function
    console.error("\n Error : processSignup \n", err); //  print out the error message if any error occurs when processing sign up request
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG; //get customized error message or a general one
    res.send(
      `<script>alert("${message}"); window.location.replace("admin/signup");</script>`
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
      res.redirect("/admin/product/all");
    }); //send the response data back to client-side
  } catch (err) {
    console.error("Error : processLogin ", err); //  print error message on console
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG; //get customized error message or a general one
    res.send(
      `<script>alert("${message}"); window.location.replace("admin/login");</script>`
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

restaurantController.verifyRestaurant = (
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
    req.member = req.session.member;
    next();
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script>alert(" ${message}"); window.location.replace("admin/login");</script>`
    ); // send back a response with status code and error message
  }
};

export default restaurantController;
