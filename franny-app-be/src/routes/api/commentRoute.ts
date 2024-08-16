import express from "express";
import { commentHandler } from "../../handlers/commentHandler";
import verifyToken from "../../middlewares/auth";

const commentRouter = express.Router();
const methods =  new commentHandler();

/**
 * @swagger
 * /api/comments:
 *   post:
 *     summary: Add  a new comments to a blog post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - comment
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user email.
 *               comment:
 *                  type: string
 *                  description: The comment authored by the user
 *     responses:
 *       200:
 *         description: Add a new comment to a blog post
 */
commentRouter.post("", methods.create);

/**
 * @swagger
 * /api/comments/:id:
 *   get:
 *     summary: Get all the comments related to a blogpost
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
 *                 type: string
 *                 description: The blogpost id
 *     responses:
 *       200:
 *         description: Get all the comments related to a blogpost.
 */
commentRouter.get("/:id", methods.index);

/**
 * @swagger
 * /api/comments:
 *   get:
 *     summary: Count all the comment associated to a blogpost
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               password:
 *                  type: string
 *                  description: Count all the comment associated to a blogpost
 *     responses:
 *       200:
 *         description: Count all the comment associated to a blogpost.
 */
commentRouter.get("/count", methods.count);

/**
 * @swagger
 * /api/comments:
 *   delete:
 *     summary: Delete a user comment on a blogpost
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
 *         description: Delete a user comment on a blogpost
 */
commentRouter.delete("/:id",verifyToken,methods.delete);

export default commentRouter;




