import { Client, GatewayIntentBits } from "discord.js";
import { token } from "./config.json";
import { registerEvents } from "./events";

const client: Client = new Client({ intents: [GatewayIntentBits.Guilds] });

registerEvents(client);

client.login(token);
