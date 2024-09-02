export default {
    /**
     * Header
     */
    title: `testTutorial`,
    difficulty: 'leicht',

    /**
     * Overview
     */
    description: 'Ich bin die Beschreibung vom TestTutoorial',
    requirements: "nichts besonderes :)",


    /**
     * Overview Steps
     */
    overviewStep1: {
        description: "Dieses Tutorial gibt einen kurzen Überblick über sämtliche bisherigen Elemente. Dazu " +
            "gehören bisher: ResetLevel, Testen, SingleChoice für Bilder, SingleChoice für Texte, MultipleChoice " +
            "Texte, GapTexte. Viel Spaß",
        errorAmount: 0,
        errorDescription: "Dies ist die Fehlerbeschreibung",
    },


    overviewStep2: {
        description: "Fertig! In diesem Tutorial gibt es nichts mehr zu sehen :)",
        errorAmount: 0,
        errorDescription: "Nix",
    },

    levelFinishedText: "Du hast die UNSC-Infinity erfolgreich gerettet. Si kann den Aliens jetzt richtig DAmpf machen",
    levelFinishedSuggestions: "Wie wäre es mit einer zweiten Superwaffe?",
    levelFinishedImg: "figurFledermaus",


    /**
     * Steps
     */
    step1_1: {
        text: "1_1",
        questionType: "SINGLE_CHOICE",
        option1: {next: "step1_2", img: "bewegung", width: "100px"},
        option2: {next: "wrongAnswer", img: "aussehen", width: "100px"},
        option3: {next: "wrongAnswer", img: "klang", width: "100px"},
        option4: {next: "wrongAnswer", img: "variablen", width: "100px"},
        option5: {next: "wrongAnswer", img: "klone", width: "100px"},
        correctionText: "Hier ist nur step1_2 richtig",
        help: "Hier ist nur step1_2 richtig",
        diagrammStep: "1",
    },

    step1_2: {
        text: "1_2",
        questionType: "MULTIPLE_CHOICE",
        option1: {img: "figurKatze", width: "100px"},
        option2: {img: "figurFledermaus", width: "100px"},
        option3: {img: "figurFisch", width: "100px"},
        solution: [true, false, true, false, false, false],
        next: "step1_3",
        correctionText: "Bist du dir wirklich sicher?",
        help: "Miau und Blub",
        diagrammStep: "2",
    },

    step1_3: {
        text: "1_3",
        questionType: "MESSAGE",

        message: "Klicke die Blöcke mit einem Linksklick an und wähle MARKIEREN aus.",
        img: "instruction",
        width: "300px",
        help: "Wie wir bereits festgestellt haben, handelt es sich um BEWEGEN -Blöcke in den Sprites " +
            "KATZE und FISCH.",
        diagrammStep: "3",
        next: "step1_4",
    },
    step2_1: {
        text: "2_1",
        questionType: "SINGLE_CHOICE",
        option1: {next: "step1_2", img: "bewegung", width: "100px"},
        option2: {next: "wrongAnswer", img: "aussehen", width: "100px"},
        option3: {next: "wrongAnswer", img: "klang", width: "100px"},
        option4: {next: "wrongAnswer", img: "variablen", width: "100px"},
        option5: {next: "wrongAnswer", img: "klone", width: "100px"},
        correctionText: "Hier ist nur step1_2 richtig",
        help: "Hier ist nur step1_2 richtig",
        diagrammStep: "1",
    },

    step2_2: {
        text: "2_2",
        questionType: "MULTIPLE_CHOICE",
        option1: {img: "figurKatze", width: "100px"},
        option2: {img: "figurFledermaus", width: "100px"},
        option3: {img: "figurFisch", width: "100px"},
        solution: [true, false, true, false, false, false],
        next: "step1_3",
        correctionText: "Bist du dir wirklich sicher?",
        help: "Miau und Blub",
        diagrammStep: "2",
    },


    //TODO Move to index
    testId: "test"
};
