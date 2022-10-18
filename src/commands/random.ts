import {
  ApplicationCommandTypes,
  InteractionResponseTypes,
} from "../../deps.ts";
import { createCommands } from "./mod.ts";

createCommands([
  {
    name: "eu",
    description: "You command!",
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
  },
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
    name: "math",
    description: "Math command!",
    type: ApplicationCommandTypes.ChatInput,
    execute: async (Bot, interaction) => {
      const userId = interaction.user.id;
      await Bot.helpers.sendInteractionResponse(
        interaction.id,
        interaction.token,
        {
          type: InteractionResponseTypes.ChannelMessageWithSource,
          data: {
            content: `<@125249534220566528> lindo!!! Gostoso!!! :drooling_face: :drooling_face: :drooling_face: :drooling_face: `,
          },
        }
      );
    },
  },
]);
