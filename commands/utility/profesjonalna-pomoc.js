const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profesjonalna-pomoc')
		.setDescription('Telefony i adresy wsparcia w sytuacji kryzysowej'),
	async execute(interaction) {
		await interaction.reply('Osobo wnusiowa, martwię się o ciebie! Masz tu numery i adresy specjalistów: https://discord.com/channels/1269650292215906418/1382485764948103228/1382491486406311956');
	},
};
