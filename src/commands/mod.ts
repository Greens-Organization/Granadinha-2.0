import { Bot } from "../../bot.ts";
import { Command, Commands } from "../@types/commands.ts";

export function createCommand(command: Command) {
  Bot.commands.set(command.name, command);
}

export function createCommands(commands: Commands) {
  commands.forEach(command => {
    Bot.commands.set(command.name, command);
  });
}