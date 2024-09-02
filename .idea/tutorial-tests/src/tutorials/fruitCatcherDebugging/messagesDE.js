export default {
    /**
     * Header
     */
    title: `Früchte Sammeln`,
    difficulty: 'einfach',

    /**
     * Overview
     */
    description: 'Ein Klassiker, aus gutem Grund. Helfe Farmer Joe bei seiner Ernte, indem du mit deinem Korb ' +
        'die von den Bäumen fallenden Früchte aufsammelst. Aber Vorsicht! Sein Rivale Sam hat manche Apfelbäume ' +
        'mit den neu gezüchteten Bombenbäumen vertauscht! Passe also auf, dass du auch nur die süßen Leckerbissen ' +
        'aufsammelst, ansonsten wird deine ganze Ernte explodieren! Bist du hierfür gewappnet?',
    requirements: "Klonen, Variablen",


    /**
     * Overview Steps
     */
    overviewStep1: {
        description: "Ach ja, die Apfelernte... Jedes Jahr fallen uns die leckeren Früchte nur so in den Korb. Man muss " +
            "ihn lediglich etwas nach links und nach rechts bewegen, schon hat man einen Berg voller Äpfel gesammelt! " +
            "Aber warte mal, irgendwas ist dieses Jahr anders?! Etwas scheint falsch zu sein. Kannst du dem Problem auf" +
            " den Grund gehen?",
        errorAmount: 1,
        errorDescription: "Eigentlich sollten dauerhaft Äpfel von den Bäumen fallen, nicht nur einer.",
    },

    overviewStep2: {
        description: "Nanu, was ist denn hier plötzlich vom Baum gefallen? Sind das... faule EIER!? Ich wollte eben eines " +
            "mit meiner Schüssel auffange, als plötzlich etwas unvorhergesehenes geschah. Ich glaube, das ist ein perfekter " +
            "Fall für dich!",
        errorAmount: 1,
        errorDescription: "Die Eier sollten nicht durch die Schüssel durchgleiten.",
    },

    levelFinishedText: "Du hast das Level erfolgreich abgeschlossen. Farmer Joes Farm ist gerettet und du kannst den Abend " +
        "mit einem leckeren Glas frisch gepresstem Apfelsaft genießen!",
    levelFinishedSuggestions: "Insert kreative Vorschläge hier",


    /**
     * Steps
     */
    step1_1: {
        text: "Durch welche Blockkategorie wird der Fehler sichtbar?",
        questionType: "SINGLE_CHOICE",
        option1: {next: "wrongAnswer", img: "bewegung", width: "100px"},
        option2: {next: "step1_2", img: "aussehen", width: "100px"},
        option3: {next: "wrongAnswer", img: "klang", width: "100px"},
        option4: {next: "wrongAnswer", img: "variablen", width: "100px"},
        option5: {next: "step1_2", img: "klone", width: "100px"},
        correctionText: "Mit diesem Blocktypen scheint alles zu passen!",
        help: "Das Problem ist ja, dass keine weiteren Äpfel erzeugt werden.",
        diagrammStep: "1_1",
    },

    step1_2: {
        text: "Überlege nun, welche Figuren du genauer betrachten solltest:",
        questionType: "MULTIPLE_CHOICE",
        option1: {img: "apple", width: "60px"},
        option2: {img: "bowl", width: "60px"},
        solution: [true, false, false, false, false, false],
        next: "step1_3",
        correctionText: "Bist du dir wirklich sicher?",
        help: null,
        diagrammStep: "1_2",
    },

    step1_3: {
        text: "Wähle nun alle Fehlerblöcke aus, die du anschließend untersuchen möchtest",
        questionType: "MARK",
        option1: {img: "codeImg1", sprite: "apple", height: "300px", selectorData: [{height:"64px",width:"5px"},{height:"17px",width:"10px"},{height:"90px",width:"5px"},{height:"18px",width:"5px"}]},
        option2: {img: "codeImg2", sprite: "apple", height: "350px", selectorData: [{height:"60px",width:"5px"},{height:"50px",width:"10px"},{height:"54px",width:"5px"},{height:"65px",width:"5px"}]},
        possibleAnswers: ["option2_2","option2_3"], //can be selected. option1_0 is the first checkbox in option1
        necessaryAnswers: ["option1_3"], //at least on of them needs to be selected. INDEX 0-Indiziert!
        correctionText: "Das ist leider nicht ganz richtig",
        help: "Denke an den Blocktypen!",
        diagrammStep: "2",
        next: "step1_4",
    },

    step1_4: {
        text: "Wähle nun einen Block aus, den du genauer untersuchen willst",
        questionType: "MARK_CHOICE",
        option1_3: {next: "step1_5", img: "erschaffeKlon", width: "200px"}, //Need to be the ones from MARK
        option2_2: {next: "wrongAnswer", img: "randKlonen", width: "200px"},
        option2_3: {next: "wrongAnswer", img: "schaleKlonen", width: "200px"},
        correctionText: "Dieser sieht richtig aus!",
        help: null,
        diagrammStep: "2",
    },

    step1_5: {
        text: "Welchen Fehlertypen haben wir beim erschaffen des Klons?",
        questionType: "DROPDOWN",
        questionText1_0: "Der Block wurde",
        questionText1_1: "ausgeführt",
        option1: {label: "zu selten", next: "step1_5_2"},
        option2: {label: "zu oft", next: "step1_5_1"},
        option3: {label: "mit falschem Wert", next: "step1_5_3"},
        correctionText: "Bist du dir wirklich sicher?",
        help: "Welche der Auswahloptionen passt am ehesten, wenn nur ein einzelner anstatt vieler Äpfel erscheinen?",
        diagrammStep: "3_1",
    },

    step1_5_1: {
        text: "Überprüfe mit dem Debugger, ob der Block wirklich zu oft ausgeführt wird",
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

        endQuestion: "War deine Vermutung richtig, dass der Block zu oft aufgerufen wurde?",
        endQuestionTrue: "deswegen schaue ich nun, woran dies liegt.",
        endQuestionTrueNext: "wrongAnswer",
        endQuestionFalse: "deswegen gehe ich einen Schritt zurück und überprüfe die anderen Fehlertypen.",
        endQuestionFalseNext: "step1_5",
        correctionText: "Bist du dir wirklich sicher? 1 ist immerhin kleiner als unendlich.",

        help: null,
        diagrammStep: "3_2",
    },

    step1_5_2: {
        text: "Überprüfe mit dem Debugger, ob der Block wirklich zu selten ausgeführt wird",
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
        endQuestionTrueNext: "step1_10",
        endQuestionFalse: "deswegen gehe ich einen Schritt zurück und überprüfe die anderen Fehlertypen.",
        endQuestionFalseNext: "wrongAnswer",
        correctionText: "Bist du dir wirklich sicher? 1 ist immerhin kleiner als unendlich.",

        help: null,
        diagrammStep: "3_2",
    },

    step1_5_3: {
        text: "Überprüfe, ob Klonen mit dem falschen Wert ausgeführt wurde",
        questionType: "DROPDOWN",
        questionText1_0: "Der Block sollte mit dem Wert",
        questionText1_1: "ausgeführt werden",
        option1: {label: "mir selbst (Apfel)", next: "step1_5_3_1"},
        option2: {label: "Schale", next: "wrongAnswer"},
        correctionText: "Das Problem ist nicht, dass wir zu wenige Schalen haben.",
        help: null,
        diagrammStep: "3_2",
    },

    step1_5_3_1: {
        text: "Schade, dann haben wir den Fehloer wohl noch nicht gefunden.",
        questionType: "MESSAGE",

        message: "Klicke auf weiter, um erneut zur Auswahl der Fehlertypen zu gelangen.",
        img: null,
        width: "300px",
        help: "Tausche die Wiederholung durch eine fortlaufende Wiederholung aus",
        diagrammStep: "3_2",
        next: "step1_5",
    },

    step1_10: {
        text: "Welcher Block könnte dafür verantwortlich sein, dass der Klonen-Block nur einmal aufgerufen wird?",
        questionType: "SINGLE_CHOICE",
        option1: {next: "step1_11", img: "blockWiederholung", width: "150px"},
        option2: {next: "wrongAnswer", img: "blockStart", width: "150px"},
        option3: {next: "wrongAnswer", img: "blockWarten", width: "150px"},
        correctionText: "Mit diesem Block scheint alles zu passen!",
        help: null,
        diagrammStep: "3_1",
    },

    step1_11: {
        text: "Welchen Fehlertypen haben wir in der Wiederholung?",
        questionType: "DROPDOWN",
        questionText1_0: "Die Schleife wurde mit",
        questionText1_1: "ausgeführt",
        option1: {label: "falschem Wert", next: "step1_12"},
        option2: {label: "überhaupt nicht", next: "wrongAnswer"},
        correctionText: "Bist du dir wirklich sicher?",
        help: null,
        diagrammStep: "3_1",
    },

    step1_12: {
        text: "Sehr gut, du hast den Fehler gefunden!",
        questionType: "MESSAGE",

        message: "Versuche ihn nun zu lösen. Denk daran, dass wir fortlaufend Äpfel erzeugen wollen, nicht nur eine " +
            "feste Anzahl lange.",
        img: null,
        width: "300px",
        help: "Tausche die Wiederholung durch eine fortlaufende Wiederholung aus",
        diagrammStep: "4",
        next: "step1_12",
    },





    /**
     * Steps
     */
    step2_1: {
        text: "Hilfestellung Level 2",
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
    testId: "fruitCatcherDebugging"
};
