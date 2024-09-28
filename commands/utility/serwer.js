const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serwer')
		.setDescription('Informacje o serwerze'),
	async execute(interaction) {
		await interaction.reply('Nie opowiadałam ci tej historii! A jak opowiadałam, to powiem jeszcze raz! https://discord.com/channels/1269650292215906418/1274782836221804554/1287689416118370338');
	},
};
