const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wspolna-praca')
		.setDescription('Body doubling i accountability partnership na serwerze'),
	async execute(interaction) {
		await interaction.reply('Poczytaj sobie osobo wnusiowa, jak ten serwer może pomóc ci w pracy: https://discord.com/channels/1269650292215906418/1276313696309612596/1276315397523767338');
	},
};
