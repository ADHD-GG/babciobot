const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('biblioteka')
		.setDescription('Materiały o neuroróżnorodności i zdrowiu psychicznym'),
	async execute(interaction) {
		await interaction.reply('Tu znajdziesz różne ciekawe informacje, osobo wnusiowa: https://discord.com/channels/1269650292215906418/1382485764948103228/1382491539967836310');
	},
};
