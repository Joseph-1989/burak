import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Error";
import { T } from "../libs/types/common";
import { ProductInput } from "../libs/types/product";
import { AdminRequest } from "../libs/types/member";
import ProductService from "../models/Product.service";

const productService = new ProductService();

const productController: T = {};

// SPA

// SSR

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts"); //eslint-disable-line no-console
    res.render("products");
    // TODO: TOKENS AUTHENTICATION 생성하여 보내   주기
  } catch (err) {
    //catch any error that may occur during the execution of the function
    console.log("Error :getAllProducts ", err); //  print out the error message if any error occurs when processing sign up request
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard.message);
  }
};

productController.createNewProduct = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("createNewProduct \n");
    console.log("\n req.files:\n", req.files);
    // res.send("\nCreate new product success!\n");
    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      console.log("req.files?.map : \n", req.files?.map);
      console.log("ele: \n", ele);
      console.log("ele.filename: \n ", ele.filename);
      console.log("\n data.productImages :>> \n ", data.productImages);
      console.log(`\n ele.path : ${ele.path} \n`);
      return ele.path.replace(/\\/g, "/");
    });

    await productService.createNewProduct(data);
    res.send(
      `<script>alert("Successfull creation!"); window.location.replace("admin/product/all");</script>`
    );

    // TODO: TOKENS AUTHENTICATION 생성하여 보내 주기
  } catch (err) {
    //catch any error that may occur during the execution of the function
    console.log("Error :createNewProduct ", err); //  print out the error message if any error occurs when processing sign up request
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script>alert("${message}"); window.location.replace("admin/product/all");</script>`
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct"); //
    res.send("Update chosen product success!");
    // TODO: TOKENS AUTHENTICATION 생성하여 보내   주기
  } catch (err) {
    //catch any error that may occur during the execution of the function
    console.log("Error :updateChosenProduct ", err); //  print out the error message if any error occurs when processing sign up request
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard.message);
  }
};

export default productController;
