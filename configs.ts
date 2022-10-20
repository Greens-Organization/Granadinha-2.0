import { config } from "./deps.ts";

// Get the .env file that the user should have created, and get the token
const env = await config({ export: true, path: "./.env" });
const token = env.DENO_DISCORD_TOKEN || "";

export interface Config {
  token: string;
  botId: bigint;
}

export const configs = {
  /** Get token from ENV variable */
  token,
  /** Get the BotId from the token */
  botId: BigInt(atob(token.split(".")[0])),
  /** The server id where you develop your bot and want dev commands created. */
  devGuildId: BigInt(env.DENO_DISCORD_GUILD_ID!),
};
