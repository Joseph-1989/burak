// import express, { Request, Response } from "express";
import express, { Router } from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";

// RESTAURANT:
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);
routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

// PRODUCTS:
routerAdmin.get("/product/all", productController.getAllProducts);
routerAdmin.post("/product/:id", productController.updateChosenProduct);
routerAdmin.post("/product/create", productController.createNewProduct);

// USER:

export default routerAdmin;
