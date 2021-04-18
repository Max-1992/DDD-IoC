// Import Middlewares
import express, { Application } from "express"
import logger from "morgan"
import helmet from "helmet"
import cors from "cors"

// Set Config Cors
const corsOptions = {
    exposedHeaders: 'Authorization'
}

const setUp = (application: Application) => {
    application.use(express.urlencoded({extended: false}));
    application.use(express.json());
    application.use(logger('dev'));
    application.use(helmet());
    application.use(cors(corsOptions));
}

export { setUp }