// var name 		= prompt("Please define your hero's name:");
// document.write(name + "<br/>");

// // Lv 1
// // Skill: prompt()
// var level 		= 7;
// var xp 			= 700;
// var skill_point = 5;
// var male 		= true;
// var caracter_hero 	= "Dark Knight";

// // level 	= level + 1;
// xp 			= xp + 150 * (level -1) + 200;
// skill_point = skill_point + level*5;

// var strengh = 15;
// var agility = 15;
// var intel 	= 15;

// // Lv 2
// strengh = strengh + 0.6 * skill_point + 5*level;
// agility = agility + 0.2 * skill_point + 5*level;
// intel 	= intel + 0.2 * skill_point + 5*level;
// var health 	= 100;
// // // Skill: controle.log()

// // Lv 3 + 4
// var caracter = prompt("Please choose your caracter: a|DK, b|Wizard, c|Archer");

// if (caracter === 'a') {
// 	caracter_hero = 'Dark Knight';
// 	strengh = strengh*2.4;
// 	agility = agility*1.2;
// 	intel 	= intel*1.0;
// } else if (caracter === 'b') {
// 	caracter_hero = 'Wizard';
// 	strengh = strengh*1.4;
// 	intel 	= intel*2.6;
// 	agility = agility*1.0;
// } else if (caracter === 'c') {
// 	caracter_hero = 'Archer';
// 	strengh = strengh*1.6;
// 	intel = intel*1.5;
// 	agility = agility*2.5;
// } else {
// 	console.log("Error in the game. Pls contact your game master");
// }

// health = health + strengh*3;
// // Skill Math.random()
// // Skill alert()

// var dragonHealth = 600;
// var dragonStr = 100;
// var dragonAgi = 15;
// var dragonInt = 80;

// console.log(level);
// console.log(caracter_hero);
// document.write("Your health: " + health + "<br/>");
// document.write("Your strengh: " + strengh + "<br/>");
// document.write("Your agility: " + agility + "<br/>");
// document.write("Your intel: " + intel + "<br/>");

// // Lv 5
// var end_game = false;

// // Lv 6
// /**
//  * function to calcul the hp after attack
//  * @param  {[type]} hp        [description]
//  * @param  {[type]} hit_point [description]
//  * @return {[type]}           [description]
//  */
// function damage(hp, dam){
// 	hp = hp - dam;
// 	return hp;
// }

// *
//  * Function to calcul the chance of miss for each attack
//  * @param  {[type]} hit_point [description]
//  * @param  {[type]} agile     [description]
//  * @return {[type]}           [description]
 
// function missChance(hit_point, agile){
// 	if (hit_point > agile) {
// 		return true;
// 	}
// }

// while(!end_game){
// 	// Hero's turn
// 	var hero_hit_point = Math.random()*100;
// 	console.log(hero_hit_point);
// 	if (missChance(hero_hit_point, dragonAgi)) {
// 		dragonHealth = damage(dragonHealth, strengh);
// 		alert("Your hit is " + strengh + " damage");
// 		console.log("Dragon health: " + dragonHealth);
// 		var hero_critical = Math.random() * 100;
// 		console.log(hero_critical);
// 		if (hero_critical < intel) {
// 			dragonHealth = damage(dragonHealth, strengh*2);
// 			alert("Crit! Dragon got " + strengh*2 + " damage");
// 			console.log("Dragon health: " + dragonHealth);
// 		}
// 	} else {
// 		alert("Misssssss");
// 		console.log("Dragon health: " + dragonHealth);
// 	}

// 	// Dragon's turn
// 	var dragon_hit_point = Math.random()*100;
// 	console.log(dragon_hit_point);
// 	if (dragonHealth <= 0) {
// 		end_game = true;
// 		alert("Mission completed");
// 		console.log(health);
// 	} else {
// 		if (missChance(dragon_hit_point, agility)) {
// 			health = damage(health, dragonStr);
// 			alert("Dragon fire! You've got " + dragonStr + " damage");
// 			console.log("Your health: " + health);
// 			var dragon_critical = Math.random()*100;
// 			console.log(dragon_critical);
// 			if (dragon_critical < dragonInt) {
// 				health = damage(health, dragonStr*2);
// 				alert("Damm it! You've got a critical with " + dragonStr*2 + " dammage");
// 				console.log("Your health: " + health);
// 			}
// 		} else {
// 			alert("Misss! Damm it, you are so lucky");
// 			console.log("Your health: " + health);
// 		}
// 	}

// 	if (health <= 0) {
// 		end_game = true;
// 		alert("Mission failed. Pls try it later");
// 		console.log(dragonHealth);
// 	}
// }


var hero = {
	name: "Helios",
	caracter: "Archer",
	level : 7,
	age : 18,
	health: 700,
	strengh: 55,
	agility: 75,
	intel: 42,

	walk: function(){
		console.log("walk");
	},
	run: function(){
		console.log("run");
	},
	jump: function(){
		console.log("jump");
	}
};

// hero.walk();
// console.log(hero.name);

var _ar = [];

var name = prompt("Your name");
_ar.push(name);
var age = prompt("Your age");
_ar.push(age);
var phone_number = prompt("Your phone");
_ar.push(phone_number);


console.log(_ar);

for (var i = 0; i < _ar.length ; i++) {
	console.log(_ar[i]);
}


