import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.servise";
const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send(" home page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Log in page");
  } catch (err) {
    console.log("Error, getLogin", err);
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup page");
  } catch (err) {
    console.log("Error, Signup", err);
  }
};
export default restaurantController;
