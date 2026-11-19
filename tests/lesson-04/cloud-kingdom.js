let powerUp = "mushroom";
let effect = '';

if (powerUp === "mushroom"){
    effect = 'Mario becomes Super'
} else if (powerUp === "flower"){
    effect = 'Mario can shoot fireballs'
} else if (powerUp === 'start'){
    effect = 'Mario is invincible'
} else if (powerUp === 'none'){
    effect = 'Mario is normal'
} else {
    effect = 'Unkown power-up'
}

console.log(effect);
const playerName = "Mario";
let currentLives = 3;
const level1 = 25;
const level2= 30;
const level3= 45;

totalCoins = (level1 + level2 + level3)%3;
console.log(totalCoins);

