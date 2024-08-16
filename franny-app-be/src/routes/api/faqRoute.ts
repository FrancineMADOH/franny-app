import express from "express";
import { faqHandler } from "../../handlers/faqHandler";
import verifyToken from "../../middlewares/auth";


const faqRouter = express.Router();
const methods = new faqHandler();



/**
 * @swagger
 * /api/faqs:
 *   post:
 *     summary: Create a new faq
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
faqRouter.post("",verifyToken,methods.create);


/**
 * @swagger
 * /api/faqs:
 *   get:
 *     summary: Get all the FAQs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                  type: number
 *                  description: 
 *     responses:
 *       200:
 *         description: Get the list of all Faqs
 */
faqRouter.get("",methods.index);


/**
 * @swagger
 * /api/faqs/:category:
 *   get:
 *     summary: Get Faqs by categories
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
 *                  description: The faqs id
 *     responses:
 *       200:
 *         description: Get Faqs by categories
 */
faqRouter.get("/:category",methods.category);


/**
 * @swagger
 * /api/faqs/:id:
 *   delete:
 *     summary: Delete an FAQ that is no more relevant
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
 *                  description: The faq id
 *     responses:
 *       200:
 *         description: Delete an FAQ that is no more relevant
 */
faqRouter.delete("/:id",verifyToken,methods.delete);

export default faqRouter;

