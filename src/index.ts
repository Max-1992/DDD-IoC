// Initialization of environments
import dotenv from "dotenv"
dotenv.config({
    path: `${process.env.NODE_ENV}.env`
})

// Inversify container
import { container } from './inversify.config'

// Inversify Express
import { InversifyExpressServer } from "inversify-express-utils";

// Setting Seerver
import { setUp } from './server'
// Controller
import "./entrypoints/controllers"

// Create an instance of a new server
const server = new InversifyExpressServer(container);

// Set configurations
server.setConfig(setUp);

// Build the server
const app = server.build();

// Database connected
import * as database from "./infraestructure/connect"
database.connect(process.env.DATABASE)

// Start the server application
app.listen(process.env.PORT, () => console.info(`Server is running in`,`PORT ${process.env.PORT}`))