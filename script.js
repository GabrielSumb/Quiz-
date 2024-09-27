/* Importação da Fonte */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* Variáveis de Cores */
:root {
    --color-background-dark: #121212;
    --color-background-light: #FFFFFF;
    --color-primary-dark: #1F1F1F;
    --color-primary-light: #F0F0F0;
    --color-text-dark: #E0E0E0;
    --color-text-light: #333333;
    --color-accent-dark: #6200EE;
    --color-accent-light: #BB86FC;
    --color-hover-dark: #3700B3;
    --color-hover-light: #9A67EA;
    --color-feedback: #FF5722;
}

/* Estilos Globais */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    background-color: var(--color-background-dark);
    color: var(--color-text-dark);
    text-align: center;
    transition: background-color 0.5s, color 0.5s;
}

header {
    padding: 20px;
    background-color: var(--color-primary-dark);
    border-bottom: 5px solid #333333;
}

h1 {
    margin: 0;
    font-size: 2.5em;
    color: var(--color-text-dark);
}

p {
    margin: 10px 0 20px 0;
    font-size: 1.1em;
    color: var(--color-text-dark);
}

#theme-toggle {
    background: none;
    border: none;
    color: var(--color-text-dark);
    font-size: 1.2em;
    cursor: pointer;
    transition: color 0.3s;
}

#theme-toggle:hover {
    color: var(--color-accent-dark);
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
}

.flashcard {
    width: 350px;
    height: 200px;
    perspective: 1000px;
    position: relative;
    margin-bottom: 30px;
}

.front, .back {
    width: 100%;
    height: 100%;
    background-color: var(--color-primary-dark);
    color: var(--color-text-dark);
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    transition: transform 0.6s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.front {
    transform: rotateY(0deg);
}

.back {
    transform: rotateY(180deg);
    background-color: var(--color-primary-dark);
}

.flashcard.flipped .front {
    transform: rotateY(180deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
}

.flashcard.flipped .back {
    transform: rotateY(0deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
}

.symbol {
    font-size: 2em;
    margin-bottom: 10px;
}

.question, .answer {
    font-size: 1.2em;
    padding: 0 10px;
}

.navigation {
    display: flex;
    gap: 15px;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    background-color: var(--color-accent-dark);
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    transition: background-color 0.3s, transform 0.2s;
}

button:hover {
    background-color: var(--color-hover-dark);
    transform: scale(1.05);
}

#feedback {
    margin-top: 10px;
    font-weight: bold;
    color: var(--color-feedback);
}

.counter {
    margin-top: 20px;
    font-size: 1em;
    color: var(--color-text-dark);
}

/* Rodapé */
footer {
    margin-top: 50px;
    padding: 15px 20px;
    background-color: var(--color-primary-dark);
    color: var(--color-text-dark);
    position: relative;
    bottom: 0;
    width: 100%;
    font-size: 0.9em;
    transition: background-color 0.5s, color 0.5s;
}

/* Tema Secundário Claro */
body.light-mode {
    background-color: var(--color-background-light);
    color: var(--color-text-light);
}

body.light-mode header {
    background-color: var(--color-primary-light);
    border-bottom: 5px solid #CCCCCC;
}

body.light-mode h1, body.light-mode p {
    color: var(--color-text-light);
}

body.light-mode #theme-toggle {
    color: var(--color-text-light);
}

body.light-mode #theme-toggle:hover {
    color: var(--color-accent-light);
}

body.light-mode .front, body.light-mode .back {
    background-color: var(--color-primary-light);
    color: var(--color-text-light);
}

body.light-mode .back {
    background-color: var(--color-primary-light);
}

body.light-mode .flashcard.flipped .front, 
body.light-mode .flashcard.flipped .back {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

body.light-mode .symbol {
    color: var(--color-text-light);
}

body.light-mode button {
    background-color: var(--color-accent-light);
    color: #000000;
}

body.light-mode button:hover {
    background-color: var(--color-hover-light);
}

body.light-mode footer {
    background-color: var(--color-primary-light);
    color: var(--color-text-light);
}

@media (max-width: 500px) {
    .flashcard {
        width: 90%;
        height: 180px;
    }

    .question, .answer {
        font-size: 1em;
    }

    button {
        padding: 8px 16px;
        font-size: 0.9em;
    }

    h1 {
        font-size: 2em;
    }
}
