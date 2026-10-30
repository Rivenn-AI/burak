import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
  "/member/logout",
  memberController.verfyAuth,
  memberController.logout,
);
router.get(
  "/member/detail",
  memberController.verfyAuth,
  memberController.getMemberDetail,
);

/**Product */

/**Orders */
export default router;
