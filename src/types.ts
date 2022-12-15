// src/types.ts

import { SlashCommandBuilder } from "discord.js";

export interface Command {
  data: SlashCommandBuilder;
  execute(interaction: any): Promise<void>;
}
