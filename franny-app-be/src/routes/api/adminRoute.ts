import express from "express";
import { adminHandler } from "../../handlers/adminHandler";
import verifyToken from "../../middlewares/auth";
import { upload } from "../../middlewares/upload";

const adminRouter = express.Router();
const methods = new adminHandler();


/**
 * @swagger
 * /api/admins:
 *   post:
 *     summary: Admin authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 description: The admin name.
 *     responses:
 *       201:
 *         description: Admin created successfully.
 */
adminRouter.post("",methods.create);

/**
 * @swagger
 * /api/admins/:email:
 *   get:
 *     summary: Admin List
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *             properties:
 *               email:
 *                 type: string
 *                 description: .
 *     responses:
 *       200:
 *         description: Get the list of admins.
 */
adminRouter.get("",verifyToken,methods.index);

/**
 * @swagger
 * /api/admins/:email:
 *   get:
 *     summary: Get the data of the connected admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 description: The region name.
 *               password:
 *                  type: string
 *                  description: The password define while authenticating
 *     responses:
 *       200:
 *         description: Admin  successfully login.
 */
adminRouter.get("/:email",verifyToken, methods.home);

/**
 * @swagger
 * /api/admins/signin:
 *   get:
 *     summary: Admin Singin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The region name.
 *     responses:
 *       200:
 *         description: Admin  data collected.
 */
adminRouter.post("/signin", methods.show);

/**
 * @swagger
 * /api/admins/reset:
 *   put:
 *     summary: Admin reset password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The region name.
 *               password:
 *                  type: string
 *                  description: The password define while authenticating
 *     responses:
 *       200:
 *         description: Admin password  successfully reset.
 */
adminRouter.put("/reset",methods.update);

/**
 * @swagger
 * /api/admins/delete:
 *   delete:
 *     summary: Admin Singin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The region name.
 *               password:
 *                  type: string
 *                  description: The password define while authenticating
 *     responses:
 *       200:
 *         description: Admin  successfully login.
 */
adminRouter.delete("/delete",verifyToken, methods.delete);


export default adminRouter;