import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.servise";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";
// React uchun
const memberService = new MemberService();
const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("Sign up");
    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);
    //TODO tokens
    console.log("RESULT:", result);
    res.json({ member: result });
  } catch (err) {
    console.log("Error, Signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
//Define
memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("Login");
    const input: LoginInput = req.body,
      result = await memberService.login(input);
    //TODO tokens
    res.json({ member: result });
  } catch (err) {
    console.log("Error, Login", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;
