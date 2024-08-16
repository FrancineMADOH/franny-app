import express from "express";
import { presHandler } from "../../handlers/presHandler";
import verifyToken from "../../middlewares/auth";

const presRouter = express.Router();
const methods =  new presHandler();


/**
 * @swagger
 * /api/prestations:
 *   post:
 *     summary: Create a new prestation
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
 *                  type: number
 *                  description: The blogpost id
 *     responses:
 *       200:
 *         description: Create a new prestation
 */
presRouter.post("",verifyToken, methods.create);


/**
 * @swagger
 * /api/prestations:
 *   get:
 *     summary: Get the list of all prestations
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
 *                  type: number
 *                  description: The blogpost id
 *     responses:
 *       200:
 *         description: Get the list of all prestations
 */
presRouter.get("", methods.index);


/**
 * @swagger
 * /api/prestations/:id:
 *   get:
 *     summary: Get one prestations
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
 *                  type: number
 *                  description: The blogpost id
 *     responses:
 *       200:
 *         description: Get one prestations
 */
presRouter.get("/:id",methods.show);


/**
 * @swagger
 * /api/prestations/:id:
 *   put:
 *     summary: update a prestations data
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
 *                  type: number
 *                  description: The blogpost id
 *     responses:
 *       200:
 *         description: Create a new blogpost
 */
presRouter.put("/:id",verifyToken, methods.update);



/**
 * @swagger
 * /api/prestations/category/:category:
 *   get:
 *     summary: Get prestation by their category
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
 *                  type: number
 *                  description: The blogpost id
 *     responses:
 *       200:
 *         description: Get prestation by their category
 */
presRouter.get("/category/:category", methods.category);

export default presRouter;