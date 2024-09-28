const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('przedstaw-sie')
		.setDescription('Podpowiedź do przedstawiajki'),
	async execute(interaction) {
		await interaction.reply('Powiedz nam kilka słów o sobie, nowa osobo wnusiowa! Tu masz małą podpowiedź, co możesz o sobie napisać: imię albo ksywka, zaimki, wiek, kilka faktów o sobie – np. o zainteresowaniach, zwierzątkach, poglądach, ulubionym typie makaronu i twoim bezpiecznym jedzonku, gdy wjedzie wybiórczość, oraz skąd wiesz o serwerze. https://discord.com/channels/1269650292215906418/1269972198068850799/1270088161623801926');
	},
};
