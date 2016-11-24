var name 		= prompt("Please define your hero's name:");
document.write(name + "<br/>");

// Skill: prompt()
var level 		= 1;
var xp 			= 0;
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
console.log(caracter);
level = level + 3;
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

console.log(level);
console.log(caracter_hero);
document.write("Your strengh: " + strengh + "<br/>");
document.write("Your agility: " + agility + "<br/>");
document.write("Your intel: " + intel + "<br/>");