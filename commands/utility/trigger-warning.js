const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('trigger-warning')
		.setDescription('Instrukcje dotyczące trigger warningów oraz lista tematów'),
	async execute(interaction) {
		await interaction.reply('Bądź miłą osobą wnusiową i nie stresuj wrażliwych osób: https://discord.com/channels/1269650292215906418/1382485764948103228/1382492591559278704');
	},
};
