export default {
    /**
     * Header
     */
    title: `Bootrennen`,
    difficulty: 'mittel',

    /**
     * Downloads
     */
    downloadMessage: 'Mithilfe dieses Tutorials wirst du dein eigenes Computerspiel erstellen. Es ist deine Aufgabe ' +
        'ein Boot mit der Maus durch ein Labyrinth aus Holzplanken zu steuern, um am Ende auf einer Insel ' +
        'anzulegen. In jedem der folgenden 4 Schritte wird dir genau erklärt, was du machen sollst. Hast du alle ' +
        'Anweisungen eines Schrittes umgesetzt, kannst du auf „Test“ klicken und deine Lösung wird überprüft. ' +
        'Nur wenn alle Tests korrekt sind, kannst du mit dem nächsten Schritt fortfahren. Bevor wir beginnen, lade dir bitte die folgenden Dateien herunter, und verwende kaputt und Festbeleuchtung als weitere Kostüme für das Boot:',
    download1: 'Bühnenbild',
    download2: 'Boot',
    download3: 'kaputt',
    download4: 'Festbeleuchtung',


    /**
     * Step 1
     */
    titleStep1: 'Schritt 1: Ausgangsposition',
    messageStep1: 'Wie du siehst, befindet sich das Boot gerade in der Mitte der Scratch-Bühne. ' +
        'Auch sein Aussehen lässt vermuten, dass es bereits an einer der Mauern zerschellt ist. ' +
        'Starten wir unser Spiel per Klick auf die grüne Flagge, so wollen wir aber, dass das Boot im normalen Kostüm ' +
        'im graublauen Hafen bei Position x = -190 und y = -150 losfahren kann.',
    message2Step1: '',
    solutionStep1: 'So oder so ähnlich sollte deine Lösung aussehen.',

    /**
     * Step 2
     */
    titleStep2: 'Schritt 2: Boot steuern',
    messageStep2: 'Als nächstes möchten wir unser Boot mit der Maus steuern. Dein Schiff soll immer ' +
        'dem Mauszeiger folgen.',
    message2Step2: 'Nutze unter anderem die oben abgebildeten Blöcke, um die Steuerung deines Schiffs umzusetzen. Teste dein ' +
        'Programm, indem du mit dem Schiff ein paar Runden drehst. Funktioniert alles, klicke auf „Test“, ' +
        'um dein Programm automatisch zu überprüfen und schließlich zur nächsten Teilaufgabe zu gelangen.',
    solutionStep2: 'So oder so ähnlich sollte deine Lösung aussehen.',

    /**
     * Step 3
     */
    titleStep3: 'Schritt 3: Zusammenstoß mit den Holzplanken',
    messageStep3: 'Jetzt kümmern wir uns um das Spielende.  Sobald das Schiff eine der braunen Holzplanken berührt, ' +
        'soll es sofort zerschellen.',
    message2Step3: 'Die Besatzung des Bootes macht ihrem Ärger Luft, was über ein "Oh Nein!" in einer Sprechblase ausgedrückt werden ' +
        'soll. Setze dies durch geeignete Blöcke um und ' +
        'steuere dein Boot ein paar Mal durch das Gewässer, um zu testen, ob es wirklich an den Holzplanken zerschellt. \n ' +
        '(Hinweis: Nutze die Farbe der Holzplanken, um zu überprüfen, ob das Boot an eine der Planken fährt. Über die ' +
        'Pipette kannst du in der Bühne die richtige Farbe auswählen.)',
    solutionStep3: 'So oder so ähnlich sollte deine Lösung aussehen.',

    /**
     * Step 4
     */
    titleStep4: 'Schritt 4: Gewinnen',
    messageStep4: 'Am Ende unserer Welt befindet sich eine Schatzinsel. Sobald das Boot dort ankommt, wird ' +
        'Festbeleuchtung angeschaltet. Du hast gewonnen und die Crew soll vor Freude "Juhuu!" jubeln. Das Spiel ist dann vorbei.',
    message2Step4: 'Wenn du den Sieg so ähnlich wie auf dem obigen Bild umgesetzt hast, ist das Spiel fertig. ' +
        'Spiele das Spiel, um zu überprüfen, ob alles funktioniert. Klicke abschließend wieder auf „Test“.',
    solutionStep4: 'So oder so ähnlich sollte deine Lösung aussehen.',

    /**
     * TestHints
     */
    stepBefore1: 'Ohoh. Anscheinend funktioniert etwas in Schritt ',
    stepBefore2: ' nicht mehr. Überprüfe dein Projekt nochmals. ',
    hintMessage: 'Hinweis: ',
    step1_1: {
        name: 'Bootposition',
        failureMessage: 'Dein Boot startet nicht im Hafen. Nutze einen Block, der das Boot zu Beginn des Spiels in den graublauen Bereich setzt.',
        description: 'Prüft die Initialisierung der Bootposition im grauen Hafen.'
    },
    step1_2: {
        name: 'Bootrichtung',
        failureMessage: 'Dein Boot schaut nicht in die richtige Richtung. Stelle sicher, dass die Richtung deines Boots zu Beginn 0 Grad beträgt.',
        description: 'Prüft die Initialisierung der Bootrichtung nach oben.'
    },
    step1_3: {
        name: 'Bootkostüm bei Start',
        failureMessage: 'Du hast nicht das richtige Bootkostüm ausgewählt. Beim Start soll dein Boot immer unversehrt sein und die Lichter ausgeschaltet haben. Wähle ein anders Kostüm deines Bootes.',
        description: 'Prüft die Initialisierung des Bootkostüm auf normales Kostüm.'
    },
    step2_1: {
        name: 'Bootsteuerung nach oben',
        failureMessage: 'Dein Boot lässt sich noch nicht richtig steuern. Du musst sowohl auf die Richtung zum Mauszaueger hin als auch auf die Bewegung deines Bootes achten. Verwende für die Steuerung die abgebildeten Blöcke.',
        description: 'Prüft, ob das Boot nach oben gesteuert werden kann.'
    },
    step2_2: {
        name: 'Bootsteuerung nach rechts',
        failureMessage: 'Dein Boot lässt sich noch nicht richtig steuern. Du musst sowohl auf die Richtung zum Mauszaueger hin als auch auf die Bewegung deines Bootes achten. Verwende für die Steuerung die abgebildeten Blöcke.',
        description: 'Prüft, ob das Boot nach rechts gesteuert werden kann.'
    },
    step2_3: {
        name: 'Bootsteuerung nach links',
        failureMessage: 'Dein Boot lässt sich noch nicht richtig steuern. Du musst sowohl auf die Richtung zum Mauszaueger hin als auch auf die Bewegung deines Bootes achten. Verwende für die Steuerung die abgebildeten Blöcke.',
        description: 'Prüft, ob das Boot nach links gesteuert werden kann.'
    },
    step2_4: {
        name: 'Bootsteuerung nach unten',
        failureMessage: 'Dein Boot lässt sich noch nicht richtig steuern. Du musst sowohl auf die Richtung zum Mauszaueger hin als auch auf die Bewegung deines Bootes achten. Verwende für die Steuerung die abgebildeten Blöcke.',
        description: 'Prüft, ob das Boot nach unten gesteuert werden kann.'
    },
    step3_1: {
        name: 'Boottext bei Crash',
        failureMessage: 'Deine Crew jammert noch nicht, wenn das Boot mit den Holzplanken zusammenstößt. Lass sie etwas passendes sagen.',
        description: 'Prüft, ob das Boot etwas sagt, wenn es mit den Planken zusammenstößt.'
    },
    step3_2: {
        name: 'Bootkostüm bei Crash',
        failureMessage: 'Dein Boot zerschellt nocht nicht, wenn es mit den Holzplanken zusammenstößt, sondern bleibt unversehrt. Verändere das Kostüm deines Bootes.',
        description: 'Prüft, ob das Bootkostüm passt, wenn es mit den Planken zusammenstößt.'
    },
    step4_1: {
        name: 'Boottext bei Sieg',
        failureMessage: 'Deine Crew jubelt noch nicht, wenn sie am Strand angekommen ist. Lass sie etwas passendes sagen.',
        description: 'Prüft, ob das Boot etwas sagt, wenn es am Strand ankommt.'
    },
    step4_2: {
        name: 'Bootkostüm bei Sieg',
        failureMessage: 'Dein Boot schaltet noch nicht die Festtagsbeleuchtung an, wenn es auf der Insel angekommen ist. Verändere das Kostüm deines Bootes.',
        description: 'Prüft, ob das Boot Bootkostüm passt, wenn es am Strand ankommt.'
    },


    /**
     * Success
     */
    successTitle: 'Juhuuuu!',
    successMsg: 'Super Arbeit, nun kannst du dein Boot durch den Parcours befördern und der Crew zum Sieg verhelfen. ' +
        ' Wenn du möchtest, kannst du den Parcours jederzeit noch modifizieren oder andere Hindernisse' +
        ' einbauen - vielleicht sind ja noch einige Haie unterwegs.'

};
