import express from "express";
import { postHandler } from "../../handlers/postHandler";
import verifyToken from "../../middlewares/auth";
import {uploadillustration } from "../../middlewares/upload";
const methods = new postHandler();
const postRouter =  express.Router();



/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new blogpost
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
postRouter.post("",verifyToken,uploadillustration.single('illustration'),methods.create);


/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get the list of all blog post
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
 *         description: Get the list of all blog post
 */
postRouter.get("",methods.index);



postRouter.get("/topten/:id",methods.topten);


/**
 * @swagger
 * /api/posts/topapplause:
 *   get:
 *     summary: Get the most liked posts
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
 *         description: Get the most liked posts
 */
postRouter.get("/topapplause",methods.topapplause);
//postRouter.get("/:term", methods.search);


/**
 * @swagger
 * /api/posts/category/:category:
 *   post:
 *     summary: Filter blogpost by their category
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
 *         description:  Filter blogpost by their category
 */
postRouter.get("/category/:category", methods.category);


/**
 * @swagger
 * /api/posts/show/:id:
 *   post:
 *     summary: Get a blog post
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
 *                  description: The post id
 *     responses:
 *       200:
 *         description: get a blogpost with its comments
 */
postRouter.get("/show/:id",methods.show);

/**
 * @swagger
 * /api/posts/:id:
 *   get:
 *     summary: Delete a blogpost
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
 *         description: Delete a blogpost
 */

postRouter.delete("/:id",verifyToken,methods.delete);


/**
 * @swagger
 * /api/posts/kpi:
 *   get:
 *     summary: Get the blog module statistics
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
 *         description: Get the blog module statistics
 */
postRouter.get("/kpi",verifyToken,methods.blogdashboard);


/**
 * @swagger
 * /api/posts/mostreaded:
 *   get:
 *     summary: Get the list of the most reader blogposts
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
 *                  description:  Get the list of the most reader blogposts
 *     responses:
 *       200:
 *         description: Create a new faq
 */
postRouter.get("/mostreaded",verifyToken,methods.mostcommented);


/**
 * @swagger
 * /api/posts/:id:
 *   put:
 *     summary: Like a blogpost
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
 *         description: Create a new faq
 */
postRouter.put("/like/:id", methods.likebp);

/**
 * @swagger
 * /api/posts/:id/update:
 *   patch:
 *     summary: Update a blogposts
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
 *         description:  Update a blogposts
 */
postRouter.patch("/:id/update",methods.update);




export default postRouter;