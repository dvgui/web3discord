import express from "express";
import { createServer } from "http";
import morgan from "morgan";
import { Client, Intents } from "discord.js";
import config from "./config";

const PORT = process.env.PORT || 3000;

const app: express.Application = express();
const server = createServer(app);

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

// Login to Discord with your client's token
client.login(config.token);
