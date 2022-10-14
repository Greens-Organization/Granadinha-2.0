import {
  ApplicationCommandTypes,
  connectToVoiceChannel,
  leaveVoiceChannel,
  InteractionResponseTypes,
} from "../../deps.ts";
import { createCommands } from "./mod.ts";

createCommands(
  [{
    name: "connect",
    description: "Join channel voice!",
    type: ApplicationCommandTypes.ChatInput,
    execute: async (Bot, interaction) => {
      const userId = interaction.user.id;

      const guild = Bot.guilds.get(interaction.guildId!);
      const { channelId, guildId } = guild?.voiceStates.get(userId)!;
      await connectToVoiceChannel(Bot, guildId, channelId!);
      
      await Bot.helpers.sendInteractionResponse(
        interaction.id,
        interaction.token,
        {
          type: InteractionResponseTypes.ChannelMessageWithSource,
          data: {
            content: `Entrando...`,
          },
        }
      );
    },
  },
  {
    name: "leave",
    description: "Leave channel voice!",
    type: ApplicationCommandTypes.ChatInput,
    execute: async (Bot, interaction) => {
      const userId = interaction.user.id;

      const guild = Bot.guilds.get(interaction.guildId!);
      const { guildId } = guild?.voiceStates.get(userId)!;
      await leaveVoiceChannel(Bot, guildId);

      await Bot.helpers.sendInteractionResponse(
        interaction.id,
        interaction.token,
        {
          type: InteractionResponseTypes.ChannelMessageWithSource,
          data: {
            content: `To saindo...`,
          },
        }
      );
    },
  }]
);
