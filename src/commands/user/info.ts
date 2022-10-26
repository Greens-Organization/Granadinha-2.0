import {
  ApplicationCommandTypes,
  ApplicationCommandOptionTypes,
  InteractionResponseTypes,
  getAvatarURL,
  getRoles,
  getMember
} from "../../../deps.ts";
import { createCommands } from "../mod.ts";
import log from "../../utils/logger.ts";

createCommands([
  {
    name: "getinfo",
    description: "Get information a user!",
    type: ApplicationCommandTypes.ChatInput,
    options: [
      {
        type: ApplicationCommandOptionTypes.User,
        name: "user",
        description: "Choose user to get your information",
      },
    ],
    devOnly: true,
    execute: async (Bot, interaction) => {
      const userId = interaction.user.id;
      const guildId = interaction.guildId;
      // const applicationId = interaction.applicationId;
      // const id = interaction.id;

        const data =
          interaction.data?.options === undefined
            ? []
            : interaction.data?.options;


      const userSearch =
        data[0] === undefined || data[0] === null
          ? userId
          : data[0].value as string;
      const userMember = await getMember(Bot, guildId!, userSearch);

      const roles = await getRoles(Bot, guildId!);
      const roleGrn = roles.find((element) => element.name == "🎮 GRN");

      try {
        if (!userMember) {
          throw "User invalid!";
        }

        const user = userMember.user;

        const imgURL = getAvatarURL(Bot, user?.id!, user?.discriminator!, {
          avatar: user?.avatar,
          format: "png",
          size: 4096,
        });

        console.log(userMember);

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
                      name: userMember.nick ?? user?.username!,

                      value: "\u200B",
                      inline: true,
                    },
                    {
                      name: `ID: \`${userMember.id.toString()}\``,
                      value: "\u200B",
                      inline: true,
                    },
                    {
                      name: `Username: \`${userMember.user?.username}#${userMember.user?.discriminator}\``,
                      value: "\u200B",
                      inline: false,
                    },
                    {
                      name: `Member since <t:${userMember.joinedAt}>`,
                      value: "\u200B",
                      inline: false,
                    },
                    {
                      name: `Account created at ${userMember.joinedAt}`,
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
  {
    name: "copyid",
    description: "Copy ID!",
    type: ApplicationCommandTypes.Message,
    execute: async (Bot, interaction) => {
      console.log(interaction.message?.embeds);
      await Bot.helpers.sendInteractionResponse(
        interaction.id,
        interaction.token,
        {
          type: InteractionResponseTypes.ChannelMessageWithSource,
          data: {
            content: `\`${interaction.member?.id}\``,
          },
        }
      );
    },
  },
]);

function moment(joinedAt: number) {
throw new Error("Function not implemented.");
}
