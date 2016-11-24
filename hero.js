var name 		= prompt("Please define your hero's name:");
document.write(name + "<br/>");

// Skill: prompt()
var level 		= 4;
var xp 			= 300;
var health 		= level * 100;
var skill_point = 5;
var male 		= true;
var caracter_hero 	= "Dark Knight";

// level 	= level + 1;
xp 		= 150 * (level -1) + 200;
skill_point = skill_point + xp /10;

var strengh = 0.6 * skill_point + 0.1 * xp;
var agility = 0.2 * skill_point + 0.2 * xp;
var intel 	= 0.2 * skill_point + 10 * level;

// // Skill: controle.log()

var caracter = prompt("Please choose your caracter: a|DK, b|Wizard, c|Archer");

if (caracter === 'a') {
	caracter_hero = 'Dark Knight';
	strengh = strengh + 10;
	agility = agility - 10;
} else if (caracter === 'b') {
	caracter_hero = 'Wizard';
	strengh = strengh - 10;
	intel 	= intel + 10;
} else if (caracter === 'c') {
	caracter_hero = 'Archer';
	strengh = strengh - 10;
	intel = intel - 5;
	agility = agility + 15;
} else {
	console.log("Error in the game. Pls contact your game master");
}

// Skill Math.random()
// Skill alert()

var dragonHealth = 600;
var dragonStr = 100;
var dragonAgi = 15;
var dragonInt = 80;

console.log(level);
console.log(caracter_hero);
document.write("Your health: " + health + "<br/>");
document.write("Your strengh: " + strengh + "<br/>");
document.write("Your agility: " + agility + "<br/>");
document.write("Your intel: " + intel + "<br/>");

var end_game = false;


while(!end_game){
	// Hero's turn
	var hero_hit_point = Math.random()*100;
	if (hero_hit_point > dragonAgi) {
		dragonHealth = dragonHealth - strengh;
		alert("Your hit is " + strengh + " damage");
		console.log("Dragon health: " + dragonHealth);
		var hero_critical = Math.random() * 100;
		if (hero_critical < intel) {
			dragonHealth = dragonHealth - strengh * 2;
			alert("Crit! Dragon got " + strengh*2 + " damage");
			console.log("Dragon health: " + dragonHealth);
		}
	} else {
		alert("Misssssss");
		console.log("Dragon health: " + dragonHealth);
	}

	// Dragon's turn
	var dragon_hit_point = Math.random()*100;
	if (dragonHealth <= 0) {
		end_game = true;
		alert("Mission completed");
		console.log(health);
	} else {
		if (dragon_hit_point > agility) {
			health = health - dragonStr;
			alert("Dragon fire! You've got " + dragonStr + " damage");
			console.log("Your health: " + health);
			var dragon_critical = Math.random()*100;
			if (dragon_critical < dragonInt) {
				health = health - dragonStr*2;
				alert("Damm it! You've got a critical with " + dragonStr*2 + " dammage");
				console.log("Your health: " + health);
			}
		} else {
			alert("Misss! Damm it, you are so lucky");
			console.log("Your health: " + health);
		}
	}

	if (health <= 0) {
		end_game = true;
		alert("Mission failed. Pls try it later");
		console.log(dragonHealth);
	}
}


