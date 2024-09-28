const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('Wybór i edycja ról na serwerze'),
	async execute(interaction) {
		await interaction.reply('Wybierz sobie role, osobo wnusiowa! https://discord.com/channels/1269650292215906418/1269991398174883910/1269994240356651133');
	},
};
