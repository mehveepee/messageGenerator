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