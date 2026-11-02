import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import productController from "./controllers/product.controller";

router.get("/member/restaurant", memberController.getRestaurant);
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
router.get("/member/get-users", memberController.getTopUsers);
/**Product */
router.get("/product/all", productController.getProducts);
router.get(
  "/product/:id",
  memberController.retrieveAuth,
  productController.getProduct,
);
/**Orders */
export default router;
