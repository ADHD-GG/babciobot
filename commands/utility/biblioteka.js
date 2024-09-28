const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('biblioteka')
		.setDescription('Materiały o neuroróżnorodności i zdrowiu psychicznym'),
	async execute(interaction) {
		await interaction.reply('Tu znajdziesz różne ciekawe informacje, osobo wnusiowa: https://discord.com/channels/1269650292215906418/1285662957250019461/1285663605148221473');
	},
};
