export const MORGAN_FORMAT = ":method :url :response-time  []:status] \n";
export const AUTH_TIME = 24;
import mongoose from "mongoose";
export const shapeIntoMongooseObjectId = (target: any) => {
  return typeof target === "string"
    ? new mongoose.Types.ObjectId(target)
    : target;
};
