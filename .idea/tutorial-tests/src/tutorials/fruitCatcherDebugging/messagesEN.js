export default {
    /**
     * Header
     */
    title: `Fruit Catcher`,
    difficulty: 'easy',

    /**
     * Overview
     */
    description: 'EN: Die UNSC-Infinity ist das Kronjuwel der menschlichen Weltraumflotte. Doch zuletzt machten sich immer wieder ' +
        'Aussetzer und schwere Fehler in den Schiffssystemen breit. Der lezte führte zu einem zufälligen Hyperraumsprung ' +
        'in bisher unbekanntes Gebiet. Wenn wir lebend wieder zur Erde zurückfinden wollen, müssen wir diese Fehler in den ' +
        'Schiffssystemen unbedingt finden und beseitigen. Kannst du uns dabei helfen?',
    requirements: "Klonen, Listen, Variablen",


    /**
     * Overview Steps
     */
    overviewStep1: {
        description: "Vorsicht, ein Asteroidenhagel voraus! Bemannt unsere Geschütztürme und zerstört sie. " +
            "Die Kanonen laden. 3... 2... 1... und FEUE-. Wieso bewegen sich die Asteroiden nicht? Irgendetwas " +
            "stimmt hier ganz und gar nicht. Kommst du dem Problem auf die Spur?",
        errorAmount: 1,
        errorDescription: "Die Asteroiden sollten sich eigentlich langsam drehend zum unteren Bildschirmrand bewegen.",
    },


    overviewStep2: {
        description: "Puh, unsere Geschütze funktionieren wieder. Doch bei den letzten Reparaturen der Geschütztürme sind " +
            "uns versteckte Waffensysteme aufgefallen. Unsere Wissenschaftler vermuten, dass diese ganze gegnerische Flotten " +
            "zerstören können. Doch dazu müssen wir zunächst genügend gegnerische Energie sammeln.",
        errorAmount: 2,
        errorDescription: "Das zerstören von Gegnerischen Schiffen sollte eigentlich die Energieleiste der Superwaffe zerstören.",
    },


    /**
     * Steps
     */
    step1_1: {
        text: "Durch welche Blockkategorie wird der Fehler sichtbar?",
        questionType: "SINGLE_CHOICE",
        option1: {next: "step1_2", img: "bewegung", width: "100px"},
        option2: {next: "step1_2_1", img: "aussehen", width: "100px"},
        option3: {next: "wrongAnswer", img: "klang", width: "100px"},
        option4: {next: "wrongAnswer", img: "variablen", width: "100px"},
        option5: {next: "wrongAnswer", img: "klone", width: "100px"},
        correctionText: "Bist du dir wirklich sicher?",
        help: "Das Problem ist, dass das Raumschiff nicht nach links und rechts fliegt. Somit ist die BEWEGUNG falsch.",
        diagrammStep: "1",
    },

    step1_2: {
        text: "Überlege nun, welche Figuren du genauer betrachten solltest:",
        questionType: "MULTIPLE_CHOICE",
        option1: {img: "spaceship", width: "100px"},
        option2: {img: "planet", width: "100px"},
        option3: {img: "asteroid", width: "100px"},
        solution: [true, false, true, false, false, false],
        next: "step1_3",
        correctionText: "Bist du dir wirklich sicher?",
        help: "Miau und Blub",
        diagrammStep: "2",
    },

    step1_2_1: {
        text: "Hier würde der Lösungsbaum weiter gehen.",
        questionType: "MESSAGE",

        message: ":)",
        img: null,
        width: "300px",
        help: null,
        diagrammStep: "3",
        next: "step1_2_1",
    },

    step1_3: {
        text: "Wähle nun mögliche Blöcke aus, durch die der Fehler sichtbar wird",
        questionType: "MESSAGE",

        message: "Klicke die Blöcke mit einem Linksklick an und wähle MARKIEREN aus. [TODO :(]",
        img: "instruction",
        width: "300px",
        help: "Wie wir bereits festgestellt haben, handelt es sich um BEWEGEN -Blöcke in den Sprites " +
            "KATZE und FISCH.",
        diagrammStep: "3",
        next: "step1_4",
    },

    step1_4: {
        text: "Welchen Fehlertypen haben wir?",
        questionType: "DROPDOWN",
        questionText1_0: "Der Block wurde",
        questionText1_1: "ausgeführt",
        option1: {label: "zu selten", next: "step1_5_3"},
        option2: {label: "zu oft", next: "step1_5_1"},
        option3: {label: "mit falschem Wert", next: "step1_5_2"},
        correctionText: "Bist du dir wirklich sicher?",
        help: null,
        diagrammStep: "3",
    },

    step1_5_1: {
        text: "Überprüfe mit dem Debugger, ob GEHE(10 Schritte) wirklich zu oft ausgeführt wird",
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
        endQuestionTrueNext: "wrongAnswer",
        endQuestionFalse: "deswegen gehe ich einen Schritt zurück und überprüfe die anderen Fehlertypen.",
        endQuestionFalseNext: "step1_4",
        correctionText: "Bist du dir wirklich sicher? 1 ist immerhin kleiner als unendlich.",

        help: null,
        diagrammStep: "3",
    },

    step1_5_2: {
        text: "Du hast FALSCHER WERT ausgewählt.",
        questionType: "MESSAGE",

        message: "Dies ist leider falsch",
        img: null,
        width: "100px",
        help: null,
        diagrammStep: "3",
        next: "step4",
    },

    step1_5_3: {
        text: "Überprüfe mit dem Debugger, ob GEHE(10 Schritte) wirklich zu selten ausgeführt wird",
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
        endQuestionTrueNext: "step1_6_1",
        endQuestionFalse: "deswegen gehe ich einen Schritt zurück und überprüfe die anderen Fehlertypen.",
        endQuestionFalseNext: "step1_4",

        help: null,
        diagrammStep: "3",
    },


    step1_6_1: {
        text: "Welchen Fehlertypen haben wir?",
        questionType: "DROPDOWN",
        questionText1_0: "Der Block wurde 0x ausgeführt, da das Skript",
        questionText1_1: "wurde",
        option1: {label: "nicht gestartet", next: "step1_7"},
        option2: {label: "gestoppt", next: "wrongAnswer"},
        correctionText: "Bist du dir wirklich sicher?",
        help: null,
        diagrammStep: "3",
    },

    step1_7: {
        text: " ",
        questionType: "MESSAGE",

        message: "Glückwunsch, du hast den Fehler entdeckt. Versuche nun ihn zu beheben.",
        img: "figurKatze",
        width: "100px",
        help: "Du musst die Bedingung der Schleife anpassen",
        diagrammStep: "3",
        next: "step4",
    },






    /**
     * Steps
     */
    step2_1: {
        text: "Zwei!!!",
        questionType: "SINGLE_CHOICE",
        option1: {next: "wrongAnswer", img: "bewegung", width: "100px"},
        option2: {next: "step2_5_3", img: "aussehen", width: "100px"},
        option3: {next: "wrongAnswer", img: "klang", width: "100px"},
        option4: {next: "wrongAnswer", img: "variablen", width: "100px"},
        option5: {next: "wrongAnswer", img: "klone", width: "100px"},
        correctionText: "Bist du dir wirklich sicher?",
        help: "Das Problem ist, dass das Raumschiff nicht nach links und rechts fliegt. Somit ist die BEWEGUNG falsch.",
        diagrammStep: "1",
    },

    step2_2: {
        text: " ",
        questionType: "MESSAGE",

        message: "Level 2 step 2: 2_2",
        img: "figurKatze",
        width: "100px",
        help: "Du musst die Bedingung der Schleife anpassen",
        diagrammStep: "3",
        next: "step2_3",
    },

    step2_3: {
        text: " ",
        questionType: "MESSAGE",

        message: "Level 2 step 3: 2_3",
        img: "figurKatze",
        width: "100px",
        help: "Du musst die Bedingung der Schleife anpassen",
        diagrammStep: "3",
        next: "step4",
    },

    step2_5_3: {
        text: "Überprüfe mit dem Debugger, ZWEI wirklich zu selten ausgeführt wird",
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
        endQuestionTrueNext: "step2_6_1",
        endQuestionFalse: "deswegen gehe ich einen Schritt zurück und überprüfe die anderen Fehlertypen.",
        endQuestionFalseNext: "step2_6_2",

        help: null,
        diagrammStep: "3",
    },

    step2_6_1: {
        text: " ",
        questionType: "MESSAGE",

        message: "Glückwunsch 1, du hast den Fehler entdeckt. Versuche nun ihn zu beheben.",
        img: "figurKatze",
        width: "100px",
        help: "Du musst die Bedingung der Schleife anpassen",
        diagrammStep: "3",
        next: "step4",
    },

    step2_6_2: {
        text: " ",
        questionType: "MESSAGE",

        message: "LOOOSER 2",
        img: "figurKatze",
        width: "100px",
        help: "Du musst die Bedingung der Schleife anpassen",
        diagrammStep: "3",
        next: "step4",
    },



    //TODO Move to index
    testId: "testTutorial"
};
