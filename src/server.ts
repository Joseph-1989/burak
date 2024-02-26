// console.log("EXECUTED!");
// import moment from "moment";
// const currentTime = moment().format("YYYY:MM:DD HH:mm");
// console.log(currentTime);
// const person: string = "Martin";
// const count: number = 100;

// Ushbu architectural va Design patternlarni yaxshi bilib olsangiz, programming
// language dan boshqa programming language ga o`tish qiyinchilik tug`dirmaydi.
// Architectural pattern:
// 1. Backend: MVC (model view controller), DI (Dependency  Injection),
// 2. Frontend: MVP (Modal view presenter)
//  Design patterns: Middleware, Decorator

// Architectural pattern, bu backend yoki frontend ni qurib beruvchi suyagi bo`ladi. Backend da ma`lumotlar oqimini
// tartibga soluvchi vosita, arxitekturasi hisoblanadi.
// Design pattern: bu backend da ma`lum bir bo`laklarni strukturasini yechishda xizmat qiladigan
// vositalar. Design pattern hisoblanadi.

import dotenv from "dotenv";
dotenv.config();

import app from "./app";

console.log("PORT:", process.env.PORT);

console.log("MONGO_URL:", process.env.MONGO_URL);

// CLUSTER => DATABASE => COLLECTION => DOCUMENTS

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connected successfully...");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, () => {
      console.log(`Server is running successfully on port ${PORT}`);
    });
  })
  .catch((err) =>
    console.log("MongoDB: Error on connection to MONGODB: ", err)
  );
