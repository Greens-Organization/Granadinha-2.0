import { Bot } from "../../bot.ts";
import { InteractionTypes } from "../../deps.ts";
import log from "../utils/logger.ts";

Bot.events.interactionCreate = (_, interaction) => {
  if (!interaction.data) return;

  // console.log(interaction);

  switch (interaction.type) {
    case InteractionTypes.ApplicationCommand:
      log.info(
        `[Application Command] ${interaction.data.name} command executed.`
      );
      Bot.commands.get(interaction.data.name!)?.execute(Bot, interaction);
      break;
    case InteractionTypes.MessageComponent:
      log.info(
        `[Message Component] ${interaction.data.name} component executed.`
      );
      Bot.commands.get(interaction.data.customId!)?.execute(Bot, interaction);
      break;
    case InteractionTypes.ModalSubmit:
      log.info(
        `[Modal Submit] ${interaction.data.name} modal executed.`
      );
      Bot.commands.get(interaction.data.customId!)?.execute(Bot, interaction);
      break;
  }
};
