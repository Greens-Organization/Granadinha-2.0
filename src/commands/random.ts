import {
  ApplicationCommandTypes,
  InteractionResponseTypes,
} from "../../deps.ts";
import { snowflakeToTimestamp } from "../utils/helpers.ts";
import { createCommand } from "./mod.ts";

createCommand(
  {
    name: "luiz",
    description: "Luiz command!",
    type: ApplicationCommandTypes.ChatInput,
    execute: async (Bot, interaction) => {
      const userId = interaction.user.id;
      await Bot.helpers.sendInteractionResponse(
        interaction.id,
        interaction.token,
        {
          type: InteractionResponseTypes.ChannelMessageWithSource,
          data: {
            content: `<@144132152177459200> um cada humilde! :face_with_monocle:`,
          },
        }
      );
    },
  },
  {
    name: "eu",
    description: "Luiz command!",
    type: ApplicationCommandTypes.ChatInput,
    execute: async (Bot, interaction) => {
      const userId = interaction.user.id;
      await Bot.helpers.sendInteractionResponse(
        interaction.id,
        interaction.token,
        {
          type: InteractionResponseTypes.ChannelMessageWithSource,
          data: {
            content: `<@${userId}> você é um cara legal! :face_holding_back_tears:`,
          },
        }
      );
    },
  }
);
