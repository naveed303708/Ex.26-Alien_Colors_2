import { toASCII } from "punycode";

// Alien colors #2: choose for an alien as you did in exercise 25
let alienColors: string = "green";

//write an if-else chain.
//if the alien's color is green.
//print a statement that the player just earned5 points for shooting the alien.
if (alienColors === "green"){
    console.log("player just earned 5 point for shooting the alien.");
}else{
console.log("player just earned 10 p0int.")
}

//.if the alien's colors isn;t green,print a statement that the player just earned 10 earned 10 points.
alienColors = "yellow"

if(alienColors === "green"){
console.log("player just a 5 points for shooting athe alien.");
}else{
    console.log("player just earned 10 points.");
}