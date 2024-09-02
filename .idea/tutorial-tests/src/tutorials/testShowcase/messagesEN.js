export default {
    /**
     * Header
     */
    title: `Showcase`,
    difficulty: 'easy',

    /**
     * Overview
     */
    description: 'Hier wird das Tutorial beschrieben',
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

    levelFinishedText: "Du hast das Level erfolgreich abgeschlossen",
    levelFinishedSuggestions: "Mögliche Erweiterungsvorschläge...",


    /**
     * Steps
     */
    step1_1: {
        text: "Single Choice für Bilder",
        questionType: "SINGLE_CHOICE",
        option1: {next: "step1_2", img: "bewegung", width: "100px"},
        option2: {next: "wrongAnswer", img: "aussehen", width: "100px"},
        option3: {next: "wrongAnswer", img: "klang", width: "100px"},
        option4: {next: "wrongAnswer", img: "variablen", width: "100px"},
        option5: {next: "wrongAnswer", img: "klone", width: "100px"},
        correctionText: "CORRECTION: Hier ist nur option 1 richtig",
        help: "HILFE: Hier ist nur option 1 richtig",
        diagrammStep: "1",
    },

    step1_2: {
        text: "Single Choice für Text",
        questionType: "DROPDOWN",
        questionText1_0: "Der Block wurde",
        questionText1_1: "ausgeführt",
        option1: {label: "zu selten", next: "step1_3"},
        option2: {label: "zu oft", next: "wrongAnswer"},
        option3: {label: "mit falschem Wert", next: "wrongAnswer"},
        correctionText: "Bist du dir wirklich sicher?",
        help: null,
        diagrammStep: "3",
    },

    step1_3: {
        text: "Multiple Choice",
        questionType: "MULTIPLE_CHOICE",
        option1: {img: "figurKatze", width: "100px"},
        option2: {img: "figurFledermaus", width: "100px"},
        option3: {img: "figurFisch", width: "100px"},
        solution: [true, false, true, false, false, false],
        next: "step1_4",
        correctionText: "Bist du dir wirklich sicher?",
        help: "Miau und Blub",
        diagrammStep: "2",
    },

    step1_4: {
        text: "Message",
        questionType: "MESSAGE",

        message: "Ermöglicht das simple Anzeigen von Texten und Bildern",
        img: "instruction",
        width: "300px",
        help: null,
        diagrammStep: "3",
        next: "step1_5",
    },

    step1_5: {
        text: "Gap Text",
        questionType: "GAP_TEXT",

        question1: {
            questionStart: "Der Block wurde",
            questionEnd: "mal ausgeführt",
            questionSolution: "1"
        },

        question2: {
            questionStart: "Der Block sollte",
            questionEnd: "mal ausgeführt werden",
            questionSolution: "unendlich"
        },

        endQuestion: "War deine Vermutung richtig, dass der Block zu selten aufgerufen wurde?",
        endQuestionTrue: "deswegen schaue ich nun, woran dies liegt.",
        endQuestionTrueNext: "step1_6",
        endQuestionFalse: "deswegen gehe ich einen Schritt zurück und überprüfe die anderen Fehlertypen.",
        endQuestionFalseNext: "wrongAnswer",
        correctionText: "Das war die falsche Antwort...",
        help: null,
        diagrammStep: "3",
    },

    step1_6: {
        text: "THE END :)",
        questionType: "MESSAGE",

        message: "Ermöglicht das simple Anzeigen von Texten und Bildern",
        img: "instruction",
        width: "300px",
        help: null,
        diagrammStep: "3",
        next: "step1_6",
    },



    step2_1: {
        text: "Start für Level 2",
        questionType: "MESSAGE",

        message: ":)",
        img: null,
        width: "300px",
        help: null,
        diagrammStep: "1",
        next: "step2_1",
    },


    //TODO Move to index
    testId: "testShowcase"
};
