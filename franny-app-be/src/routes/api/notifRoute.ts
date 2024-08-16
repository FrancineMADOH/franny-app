import express from "express";
import { NotificationHandler } from "../../handlers/notifHandler";
import verifyToken from "../../middlewares/auth";

const methods = new NotificationHandler();
const notifRouter = express.Router();


/**
 * @swagger
 * /api/notifications:
 *   post:
 *     summary: Create a new notification
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
 *         description: Create a new notification
 */
notifRouter.post("",verifyToken, methods.create);

/**
 * @swagger
 * /api/notifications:
 *   get:
 *     summary: Get all the notifications
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
 *                  description: Get all the notifications
 *     responses:
 *       200:
 *         description: Get all the notifications
 */
notifRouter.get("",verifyToken, methods.index);

/**
 * @swagger
 * /api/notifications/new:
 *   get:
 *     summary: Get the list of unresolved/new notifications
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
 *         description: Get the list of unresolved notifications
 */
notifRouter.get("/new",verifyToken, methods.new);

/**
 * @swagger
 * /api/notifications/resolve:
 *   put:
 *     summary: Update the notiification status
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
 *                  description: The notification id
 *     responses:
 *       200:
 *         description: Update the notiification status
 */
notifRouter.put("/resolve/",verifyToken, methods.resolve);

export default notifRouter;

