import express from "express";

import isAuth from "../middlewares/isAuth.js";
import { changes, generateWebsite, getAll, getwebsiteById } from "../controllers/website.controllers.js";

const websiteRouter=express.Router()

websiteRouter.post("/generate",isAuth,generateWebsite)
websiteRouter.post("/update/:id",isAuth,changes)
websiteRouter.get("/get-by-id/:id",isAuth,getwebsiteById)
websiteRouter.get("/get-all",isAuth,getAll)
export default websiteRouter