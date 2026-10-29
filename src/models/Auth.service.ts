import { AUTH_TIME } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import type { Member } from "../libs/types/member";
import jwt from "jsonwebtoken";

class AuthService {
  constructor() {}
  public async cretaeToken(payload: Member) {
    return new Promise((resolve, reject) => {
      const duration = `${AUTH_TIME}h`;
      const tokenPayload = {
        _id: payload._id.toString(),
        memberType: payload.memberType,
        memberNick: payload.memberNick,
      };
      jwt.sign(
        tokenPayload,
        process.env.SECRET_TOKEN as string,
        { expiresIn: duration },
        (err, token) => {
          if (err)
            reject(new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION));
          else resolve(token as string);
        },
      );
    });
  }
}

export default AuthService;
