import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import type { T } from "../libs/types/common";
import ProductService from "../models/Product.servise";
import type { ProductInput, ProductInquiry } from "../libs/types/product";
import type { AdminRequest, ExtendedRequest } from "../libs/types/member";
import type { ProductCollection } from "../libs/enums/product.enum";
import { Types } from "mongoose";
const productService = new ProductService();

const productController: T = {};
/** SPA: Mahsulotlar ro'yxatini filtrlash va pagination bilan olish **/
productController.getProducts = async (req: Request, res: Response) => {
  try {
    console.log("getProducts");
    // Query orqali kelgan parametrlarni destructuring qilib ajratib olyapmiz
    const { page, limit, order, productCollection, search } = req.query;

    // Olingan propertylarni kerakli data type'ga o‘tkazib inquiry obyektini quryapmiz
    const inquiry: ProductInquiry = {
      order: String(order),
      page: Number(page),
      limit: Number(limit),
    };
    // Agar kategoriya tanlangan bo'lsa, qidiruv shartiga qo'shamiz
    if (productCollection)
      inquiry.productCollection = productCollection as ProductCollection;
    // Agar qidiruv matni kiritilgan bo'lsa, uni ham inquiry'ga biriktiramiz
    if (search) inquiry.search = String(search);

    // Servis orqali bazadan filtrlangan mahsulotlarni olib kelyapmiz
    const result = await productService.getProducts(inquiry);

    // Natijani React (SPA) frontendga JSON formatida qaytaramiz
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProducts", err);

    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

/** SPA: Bitta tanlangan mahsulot tafsilotlarini olish **/
productController.getProduct = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("getProduct");
    // URL parametridan mahsulot ID sini ajratib olyapmiz
    const { id } = req.params;
    // Foydalanuvchi login bo'lgan bo'lsa uning ID sini olamiz, aks holda null
    const memberId = req.member?._id ?? null,
      // Mahsulotni topish va ko'rishlar sonini (views) hisoblash mantiqini bajaramiz
      result = await productService.getProduct(memberId, id);

    // Mahsulot ma'lumotlarini JSON qilib qaytaramiz
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

/** SSR: Admin panel uchun barcha mahsulotlarni sahifaga render qilish **/
productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    // Bazadagi barcha mahsulotlar ro'yxatini servisdan qabul qilib olamiz
    const data = await productService.getAllProducts();

    // EJS frontend sahifasiga ma'lumotlarni jo'natib, HTML qilib render qilamiz
    res.render("products", { products: data });
  } catch (err) {
    console.log("Error, getAllProducts", err);

    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

///////////////////////////////// CREATE: Yangi mahsulot qo'shish (Admin SSR)

productController.createNewProduct = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("createNewProduct");
    console.log("files", req.files);

    // Kamida bitta rasm yuklanganligini tekshiramiz, bo'lmasa xatolik otamiz
    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    // Formadan (req.body) kelgan matnli ma'lumotlarni olamiz
    const data: ProductInput = req.body;
    // Multer yuklagan rasmlarning serverdagi yo'llarini (path) massiv qilib olamiz
    data.productImages = req.files?.map((ele) => {
      return ele.path;
    });
    // Yangi mahsulotni bazada saqlash uchun servisga uzatamiz
    await productService.createNewProduct(data);

    // Muvaffaqiyatli saqlangach, xabar chiqarib yana mahsulotlar sahifasiga qaytaramiz
    res.send(
      `<script> alert ("Succesfully created!"); window.location.replace('/admin/product/all')</script> `,
    );
  } catch (err) {
    console.log("Error, createNewProduct", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert ("${message}"); window.location.replace('/admin/product/all')</script> `,
    );
  }
};

//////////////////////// UPDATE: Tanlangan mahsulotni tahrirlash (Admin status o'zgartirish)

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
    // URL orqali kelgan mahsulotning ID sini olamiz
    const id = req.params.id;
    // Servis orqali mahsulot statusi yoki ma'lumotlarini yangilaymiz
    const result = await productService.updateChosenProduct(id, req.body);

    // Yangilangan natijani JSON qilib qaytaramiz
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error, updateChosenProduct", err);

    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
export default productController;
