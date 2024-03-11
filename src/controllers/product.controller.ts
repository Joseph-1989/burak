import { Request, Response } from "express";
import Errors from "../libs/Error";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";

const productService = ProductService;

const productController: T = {};

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts"); //    eslint-disable-line no-console
    res.render("products");
    // TODO: TOKENS AUTHENTICATION 생성하여 보내   주기
  } catch (err) {
    //catch any error that may occur during the execution of the function
    console.log("Error :getAllProducts ", err); //  print out the error message if any error occurs when processing sign up request
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard.message);
  }
};

productController.createNewProduct = async (req: Request, res: Response) => {
  try {
    console.log("createNewProduct"); //
    // TODO: TOKENS AUTHENTICATION 생성하여 보내   주기
  } catch (err) {
    //catch any error that may occur during the execution of the function
    console.log("Error :createNewProduct ", err); //  print out the error message if any error occurs when processing sign up request
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard.message);
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct"); //
    // TODO: TOKENS AUTHENTICATION 생성하여 보내   주기
  } catch (err) {
    //catch any error that may occur during the execution of the function
    console.log("Error :updateChosenProduct ", err); //  print out the error message if any error occurs when processing sign up request
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard.message);
  }
};

export default productController;
