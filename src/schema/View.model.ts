import mongoose, { Schema } from "mongoose";
import { ViewGroup } from "../libs/enums/view.enum";

interface ViewSchema {
  viewGroup: ViewGroup;
  memberId: mongoose.Types.ObjectId;
  viewRefId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const viewSchema = new Schema<ViewSchema>(
  {
    viewGroup: {
      type: String,
      enum: Object.values(ViewGroup),
      required: true,
    },
    memberId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Member",
    },
    viewRefId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model("view", viewSchema);
