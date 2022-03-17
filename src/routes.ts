import {Router} from "express";
// import { ActivitiesController } from "./controller/ActivitiesController";
import { AuthenticateUserConntroller } from "./controller/AuthenticateUserConntroller";
import { UserController } from "./controller/UserController";


const router = Router();

const userController = new UserController();
// const activitiesController= new ActivitiesController();
const authenticateController = new AuthenticateUserConntroller();

router.post("/user", userController.handle);
// router.post("/activity",activitiesController.handle);
router.post("/login",authenticateController.handle);
export {router}