const print = require('./print').print

mp.events.addCommand('hp', (player) => {
    player.health = 100;
});

mp.events.addCommand('me', (player, _, e) => {
	
	for (let p in player) {
		print.info(p)
	}
	print.info(player.getPosition())
	const pos = player.getPosition();
	player.setWeaponAmmo(3220176749, 1000);
	mp.vehicles.new(mp.joaat(e), new mp.Vector3(pos.x, pos.y, pos.z),
    {
        numberPlate: "ADMIN",
        color: [[0, 255, 0],[0, 255, 0]]
    });
	player.money += 10000;
});

mp.events.addCommand('spawn', (player) => {
    player.spawn(new mp.Vector3(-933.9918823242188, -3570.4599609375, 14.037487030029297));
});

mp.events.addCommand('armor', (player) => {
	print.info(player.money)
    	player.money = 1000;
	player.armour = 100;
});

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});
