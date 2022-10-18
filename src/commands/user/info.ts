import {
  ApplicationCommandTypes,
  InteractionResponseTypes,
  getUser,
  getAvatarURL,
  ImageFormat
} from "../../../deps.ts";
import { createCommands } from "../mod.ts";
import log from "../../utils/logger.ts";


createCommands([
  {
    name: "get",
    description: "You command!",
    type: ApplicationCommandTypes.ChatInput,
    devOnly: true,
    execute: async (Bot, interaction) => {
      const userId = interaction.user.id;
      const applicationId = interaction.applicationId;
      const id = interaction.id;
      const user = await getUser(Bot, userId);

      const imgURL = getAvatarURL(Bot, userId, user.discriminator, {
        avatar: user.avatar,
        format: "png",
        size: 4096,
      });

      try {
        // const resOriginal = await getOriginalInteractionResponse(Bot, interaction.token);
        // console.log(resOriginal)
  
        await Bot.helpers.sendInteractionResponse(
          interaction.id,
          interaction.token,
          {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
              content: `${imgURL}`,
            },
          }
        );
      } catch (error) {
        log.error(error.message);
        log.error(error);
      }
    },
  },
]);
/**
 embeds: [
    {
      image: {
        url: `attachment://https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
      },
    },
  ]
 */