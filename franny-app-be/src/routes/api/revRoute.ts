import express from "express";
import { revHandler } from "../../handlers/revHandler";
import verifyToken from "../../middlewares/auth";

const revRouter = express.Router();
const methods =  new revHandler();


/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Create a new review
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
revRouter.post("",methods.create);

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Get all reviews 
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
 *         description:Get all reviews
 */
revRouter.get("", methods.index);

/**
 * @swagger
 * /api/reviews/:id:
 *   get:
 *     summary: Get a single review
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
 *                  description: The appointment id
 *     responses:
 *       200:
 *         description: Get a single review
 */
revRouter.get("/:id", verifyToken, methods.show);

export default revRouter;