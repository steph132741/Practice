const quotes = [
    "Do what you can, with what you have, where you are.",
    "Start where you are. Use what you have. Do what you can.",
    "Believe you can and you’re halfway there.",
    "Small steps every day lead to big results.",
    "Dont watch the clock; do what it does. Keep going.",
    "Push yourself, because no one else is going to do it for you.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "The secret of getting ahead is getting started.",
    "It always seems impossible until it’s done.",
    "Your future is created by what you do today, not tomorrow.",
];


const usedIndexes = new Set();
const  quoteTag = document.getElementById("quote");

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear();
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if (usedIndexes.has(randomIdx)) continue;

        const quote = quotes[randomIdx];
        quoteTag.innerHTML = quote;
        usedIndexes.add(randomIdx);
        break;
    }
}