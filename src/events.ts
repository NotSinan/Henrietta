import * as fs from "fs";
import * as path from "path";
import { Client } from "discord.js";

export function registerEvents(client: Client): void {
  const eventsPath = path.join(__dirname, "events");
  const eventFiles = fs
    .readdirSync(eventsPath)
    .filter((file) => file.endsWith(".js"));

  for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const eventModule = require(filePath);

    const event = eventModule.default as {
      once: boolean;
      name: string;
      execute: (...args: any[]) => void;
    };

    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
}
