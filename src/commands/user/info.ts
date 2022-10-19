import {
  ApplicationCommandTypes,
  ApplicationCommandOptionTypes,
  InteractionResponseTypes,
  getUser,
  getAvatarURL,
  getRoles,
  getMember
} from "../../../deps.ts";
import { createCommand } from "../mod.ts";
import log from "../../utils/logger.ts";

createCommand(
  {
    name: "getinfo",
    description: "Get information a user!",
    type: ApplicationCommandTypes.Message,
    options: [
      {
        type: ApplicationCommandOptionTypes.User,
        name: "User",
        description: "Choose user to get your information",
      },
    ],
    devOnly: true,
    execute: async (Bot, interaction) => {
      const userId = interaction.user.id;
      const guildId = interaction.guildId;
      // const applicationId = interaction.applicationId;
      // const id = interaction.id;
      const user = await getUser(Bot, userId);
      const userMember = await getMember(Bot, guildId!, userId);
      const roles = await getRoles(Bot, guildId!);
      const roleGrn = roles.find((element) => element.name == "🎮 GRN");


      try {
        if (!userMember) {
          throw 'User invalid!';
        }

        const imgURL = getAvatarURL(
          Bot,
          userId,
          userMember.user?.discriminator!,
          {
            avatar: user.avatar,
            format: "png",
            size: 4096,
          }
        );
        // const resOriginal = await getOriginalInteractionResponse(Bot, interaction.token);
        // console.log(resOriginal)

        await Bot.helpers.sendInteractionResponse(
          interaction.id,
          interaction.token,
          {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
              embeds: [
                {
                  type: "rich",
                  title: `Informations`,
                  description: "",
                  color: roleGrn?.color,
                  fields: [
                    {
                      name: userMember.nick!,
                      value: "\u200B",
                      inline: true,
                    },
                    {
                      name: `\`${userMember.id.toString()}\``,
                      value: "\u200B",
                      inline: true,
                    },
                    {
                      name: `\`${userMember.user?.username}#${userMember.user?.discriminator}\``,
                      value: "\u200B",
                      inline: false,
                    },
                  ],
                  thumbnail: {
                    url: imgURL,
                    height: 200,
                    width: 200,
                  },
                },
              ],
            },
          }
        );
      } catch (error) {
        log.error(error.message);
        log.error(error);
      }
    },
  },
);
