import express from "express"
import auth from "../middlewares/auth.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").post(auth, registerCompany);
router.route("/get").get(auth, getCompany);
router.route("/get/:id").get(auth, getCompanyById);
router.route("/update/:id").put(auth, updateCompany);
 
export default router;