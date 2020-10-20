function checkChatMessage(player, text) {
	console.log(player)
	mp.gui.chat.push(player)
	if (player == "money") {
		player.money += 300;
	}
};


mp.events.add("playerChat", checkChatMessage);

 mp.events.add('playerJoin', (player) => {
    console.log(`[SERVER]: ${player.name} has joined the server!`);
});
