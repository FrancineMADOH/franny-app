import express from "express";
import { beautyHandler } from "../../handlers/beauyHandler";
import verifyToken from "../../middlewares/auth";
import paginate from "../../middlewares/paginate";

const beautyRouter  =  express.Router();
const methods =  new beautyHandler();


/**
 * @swagger
 * /api/beautifyers:
 *   post:
 *     summary: Create a new beauty agent
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
 *         description: Create a new beauty agent.
 */
beautyRouter.post("",verifyToken, methods.create);

/**
 * @swagger
 * /api/beautifyers:
 *   get:
 *     summary: Get all beauty agent data
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
beautyRouter.get("",verifyToken,methods.index);

/**
 * @swagger
 * /api/beautifyers/:id:
 *   put:
 *     summary: Get beauty agent data
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
 *         description: Get a beauty agent data.
 */
beautyRouter.get("/:id",verifyToken,methods.show);

/**
 * @swagger
 * /api/beautifyers/:id:
 *   put:
 *     summary: Update Beauty Agent informations
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               email:
 *                 type: string
 *                 description: The region name.
 *               password:
 *                  type: string
 *                  description: The password define while authenticating
 *     responses:
 *       200:
 *         description: Beauty agent data successfully updated.
 */
beautyRouter.put("/update/:id",verifyToken, methods.update);

/**
 * @swagger
 * /api/beautifyers:
 *   delete:
 *     summary: Delete Beauty agent account and data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: number
 *                 description: The region name.
 *     responses:
 *       200:
 *         description: Delete Beauty agent account.
 */
beautyRouter.delete("/:id",verifyToken, methods.delete);
//TODO: implement a route for beautifyer deletion


export default beautyRouter;