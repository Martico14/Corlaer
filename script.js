// script.js

// Vocabulary data: 200 basic Spanish-Dutch words
const vocabulary = {
    "hola": "hallo",
    "adiós": "tot ziens",
    "por favor": "alsjeblieft",
    "gracias": "dank je",
    "sí": "ja",
    "no": "nee",
    "buenos días": "goedemorgen",
    "buenas tardes": "goedemiddag",
    "buenas noches": "goedenavond",
    "¿cómo estás?": "hoe gaat het?",
    // Add more pairs until reaching 200...
};

// Function to search for translations
function translate(word) {
    return vocabulary[word.toLowerCase()] || "Translation not found.";
}

// Quiz logic
function startQuiz() {
    let score = 0;
    const words = Object.keys(vocabulary);
    const totalWords = words.length;

    for (let i = 0; i < totalWords; i++) {
        const randomWord = words[Math.floor(Math.random() * totalWords)];
        const answer = prompt(`Translate '${randomWord}' to Dutch:`);

        if (answer.toLowerCase() === vocabulary[randomWord]) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer is '${vocabulary[randomWord]}'.`);
        }
    }

    alert(`Quiz finished! Your score: ${score} out of ${totalWords}`);
}

// Interactive learning feature
function interactiveLearning() {
    const userInput = prompt("Enter a Spanish word to translate:");
    const translation = translate(userInput);
    alert(`The translation is: ${translation}`);
}

// Initialize features
startQuiz();
interactiveLearning();