import swaggerjsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import dotenv from "dotenv";

dotenv.config();


// Swagger Definition
const swaggerDefinition = {

    openapi: "3.0.0",
    info: {
        title: "Franny Beauty API",
        version:"1.0.0",
        description: "This API gather the main routes for Franny beauty. An upcoming mobile application."
    },

    servers: [
        {
            url: process.env.URL,
            description: "Developement Server"
        },
        
    ]
}

// option for swagger-jsdoc
const options = {
    swaggerDefinition,
    apis: [
        'src/routes/api/*.ts'
    ]
}

// initialize swagger

const swaggerSpec = swaggerjsDoc(options);

//setup swagger
const setupSwagger = (app:Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default setupSwagger; 