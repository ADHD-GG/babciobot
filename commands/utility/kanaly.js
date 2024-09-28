const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kanaly')
		.setDescription('Mapa serwera, czyli spis najważniejszych kanałów i wątków'),
	async execute(interaction) {
		await interaction.reply('To jest duży serwer, osobo wnusiowa! Chodź, oprowadzę cię! https://discord.com/channels/1269650292215906418/1274775024078946365/1274777154739245126');
	},
};
