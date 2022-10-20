export * from "https://deno.land/x/discordeno@17.0.0/mod.ts";
export * from "https://deno.land/x/discordeno@17.0.0/plugins/mod.ts";

// Terminal Colors!
export * from "https://deno.land/std@0.117.0/fmt/colors.ts";

// Get data from .env files
export { config } from "https://deno.land/std@0.160.0/dotenv/mod.ts";

// Database, thx Tri!
export {
  decode as KwikDecode,
  encode as KwikEncode,
  Kwik,
} from "https://deno.land/x/kwik@v1.3.1/mod.ts";
