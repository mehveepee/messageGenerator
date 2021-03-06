var myArray = [
    "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
   "Charity. I always try to help those in need, no matter what the personal cost.",
    "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
    "Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)",
    "Faith. I trust that my deity will guide my actions, I have faith that if I work hard, things will go well. (Lawful)",
    "Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings. (Any)"
];

var randomIdeal = myArray[Math.floor(Math.random()*myArray.length)];

console.log(randomIdeal);

var bondArray = [
    "I would die to recover an ancient relic of my faith that was lost long ago.",
 "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
 "I owe my life to the priest who took me in when my parents died.",
 "Everything I do is for the common people. 5 I will do anything to protect the temple where I served.",
 "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy"
];

var randomBond = bondArray[Math.floor(Math.random()*bondArray.length )];

console.log(randomBond);

var flawArray = [
    "I judge others harshly, and myself even more severely.",
 "I put too much trust in those who wield power within my temple’s hierarchy.",
 "My piety sometimes leads me to blindly trust those that profess faith in my god.",
 "I am inflexible in my thinking.",
 "I am suspicious of strangers and expect the worst of them.",
 "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
];

var randomFlaw = flawArray[Math.floor(Math.random()*flawArray.length)];

console.log(randomFlaw);

var response = `My name is Bruce and my main ideal is ` + randomIdeal + `. I have a bond that would be best described as: ` + randomBond + ` My main flaw is ` + randomFlaw;

console.log(response);