import express from "express";
import { rdvHandler } from "../../handlers/rdvHandler";
import verifyToken from "../../middlewares/auth";

const methods = new rdvHandler();
const rdvRouter = express.Router();

//public routes


/**
 * @swagger
 * /api/rendezvous:
 *   post:
 *     summary: Create a new appointment
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
 *         description: Create a new appointment
 */

rdvRouter.post("", methods.create);

/**
 * @swagger
 * /api/rendezvous/payment/:id:
 *   put:
 *     summary: Make paiement
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
 *         description: Make paiement
 */
rdvRouter.put("/payment/:id", methods.makepaiement);

/**
 * @swagger
 * /api/rendezvous/view/:id:
 *   get:
 *     summary: Display appointement data
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
 *         description: Display appointement data
 */
rdvRouter.get("/view/:id",methods.show);



/**
 * @swagger
 * /api/appointments:
 *   get:
 *     summary: Display appointments list
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
 *         description: Display appointments list
 */
rdvRouter.get("/",verifyToken, methods.index);


/**
 * @swagger
 * /api/rendezvous/update/:id:
 *   put:
 *     summary: Update appointement
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
 *                  description: The rdv id
 *     responses:
 *       200:
 *         description: Update appointement
 */
rdvRouter.put("/update/:id",verifyToken ,methods.update);


/**
 * @swagger
 * /api/rendezvous/assign/:id:
 *   post:
 *     summary: Assign a document to a beautif
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
 *                  description: The rdv id
 *     responses:
 *       200:
 *         description: Assign a document to a beautif
 */
rdvRouter.put("/assign/:id",verifyToken ,methods.assign );


/**
 * @swagger
 * /api/rendezvous/cancel/:id:
 *   put:
 *     summary: Cancel Appointment
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
 *                  description: The rdv id
 *     responses:
 *       200:
 *         description: Cancel Appointment
 */
rdvRouter.put("/cancel/:id",verifyToken ,methods.cancel);


/**
 * @swagger
 * /api/rendezvous/:state/count:
 *   get:
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
rdvRouter.get("/:state/count",verifyToken, methods.stateCount);


/**
 * @swagger
 * /api/rendezvous/delete/:id:
 *   post:
 *     summary: Delete appointment
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
 *         description: Delete appointment
 */
rdvRouter.put("/delete/:id",verifyToken, methods.delete);


/**
 * @swagger
 * /api/rendezvous/metrics:
 *   get:
 *     summary: Appointment performance metrics
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
 *                  description: The  id
 *     responses:
 *       200:
 *         description: Appointment performance metrics
 */
rdvRouter.get("/metrics", verifyToken ,methods.performanceMetrics);


/**
 * @swagger
 * /api/rendezvous:
 *   post:
 *     summary: Top beautifyers earners
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
 *         description: Top beautifyers earners
 */
rdvRouter.get("/topEarners", verifyToken ,methods.rankingMetrics);


/**
 * @swagger
 * /api/rendezvous:
 *   post:
 *     summary: Top Earning Prestation
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
 *         description: Top Earning Prestation
 */
rdvRouter.get("/topPrestation", verifyToken ,methods.topPrestation);



export default rdvRouter;