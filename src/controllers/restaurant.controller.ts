import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.servise";
import { Member, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { LoginInput } from "../libs/types/member";
const memberService = new MemberService();
const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    // Logics
    //Service modelgamurojat qilnadi
    // ... errorni chop etadi bu loyhani standarti
    res.send(" Home page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup page");
  } catch (err) {
    console.log("Error, Signup", err);
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Log in page");
  } catch (err) {
    console.log("Error, getLogin", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSign up");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    //TODO Sessions AUTHINTICATION
    res.send(result);
  } catch (err) {
    console.log("Error, Signup", err);
    res.send(err);
  }
};
restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");

    const input: LoginInput = req.body,
      result = await memberService.processLogin(input);
    //TODO Sessions AUTHINTICATION
    res.send(result);
  } catch (err) {
    console.log("Error, Login", err);
    res.send(err);
  }
};

export default restaurantController;
