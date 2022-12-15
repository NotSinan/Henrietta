import { Events } from "discord.js";

export default {
  name: Events.ClientReady as string,
  once: true,
  execute() {
    console.log(`Ready!`);
  },
};
