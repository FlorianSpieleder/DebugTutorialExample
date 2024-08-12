export default {
    /**
     * Header
     */
    title: `Früchte sammeln`,
    difficulty: 'schwer',

    /**
     * Downloads
     */
    downloadMessage: 'In diesem Tutorial erstellst du schrittweise dein eigenes Computerspiel. \nIn dem Spiel steuerst eine Schale mit den Pfeiltasten mit dem Ziel innerhalb von 30 Sekunden alle Äpfel und möglichst viele Bananen zu sammeln.\nIn jedem der folgenden 4 Schritte wird dir genau erklärt, was du machen sollst. Hast du alle Anweisungen eines Schrittes umgesetzt, kannst du auf „Überprüfen“ klicken und deine Lösung auf Richtigkeit überprüfen. Nur wenn alle Tests korrekt sind, kannst du mit dem nächsten Schritt fortfahren. Bevor wir beginnen, lade dir bitte die folgenden Dateien herunter:',

    // download of the apple
    download1: 'Apfel', // download of the banana
    download2: 'Banane', // download of the bowl
    download3: 'Schale', // download of the stage
    download4: 'Bühne',

    /**
     * Step 1, former step 3
     */
    titleStep1: 'Schale steuern',
    messageStep1: 'Als erstes möchten wir die Schale mit den Pfeiltasten steuern können.\nDeine Schale startet mittig am unteren Ende der Bühne (x = 0 / y = -145) und kann mit der rechten Pfeiltaste in 10-er Schritten nach rechts bewegt werden.\nBeim Drücken der linken Pfeiltaste soll sich die Schale um 10 Schritte nach links bewegen.',
    message2Step1: 'Teste dein Programm, indem du mit der Schale rumspielst.',
    solutionStep1: 'Hier ist eine Lösungsmöglichkeit abgebildet.',

    /**
     * Step 2
     */
    titleStep2: 'Zeit und Punkte',
    messageStep2: 'Baue eine Variable für die \'Zeit\' ein. Diese soll nach klicken der grünen Fahne 30 sein, und dann im Sekundentakt bis 0 runterzählen. Wenn die Zeit bei 0 angekommen ist, soll die Schale \'Ende\' sagen und dann alles gestoppt werden. Füge außerdem eine Variable \'Punkte\' hinzu, welche bei Spielstart auf 0 gesetzt wird.',
    message2Step2: 'Denke daran Variablen zu verwenden und diese bei jedem Start einen Wert zuzuweisen.',
    solutionStep2: 'So oder so ähnlich sollte deine Lösung aussehen.',

    /**
     * Step 3
     */
    titleStep3: 'Apfel',
    messageStep3: 'Jetzt kümmern wir uns um den Apfel. Der Apfel hat eine Größe von 50%.\nDer Apfel startet an einer zufäligen Position am oberen Rand der Bühne (y = 170). Solange der Countdown nicht abgelaufen ist, fällt der Apfel mit Fallgeschwindigkeit y=-5 gerade runter.\nWird der Apfel mit der Schale gesammelt, erscheint der Apfel wieder bei einer Zufallsposition am oberen Rand der Bühne (y=170) und die Punkte werden um 5 erhöht.\nFällt der Apfel auf den Boden (rote Linie) ist das Spiel zu Ende und der Apfel sagt für eine Sekunde \'Game Over!\'.',
    message2Step3: '(Hinweis: Nutze die Farbe der roten Linie, um zu überprüfen, ob der Apfel den Boden berührt. Über die Pipette kannst du in der Bühne die richtige Farbe auswählen.)',
    solutionStep3: 'So oder so ähnlich sollte deine Lösung aussehen. Auf dem zweiten Bild siehst du, wo du die Pipette findest, mit der du auf der Bühne eine bestimmte Farbe auswählen kannst.',

    /**
     * Step 4
     */
    titleStep4: 'Banane',
    messageStep4: 'Als letztes zur Banane. Die Banane hat, genauso wie der Apfel, eine Größe von 50% und eine zufällige Startposition am oberen Bühnenrand (y=170).\nSolange der Countdown nicht abgelaufen ist, fällt der sie mit Fallgeschwindigkeit y=-7 gerade runter.\nWird die rote Linie von der Banane berührt, sagt die Banane für eine Sekunde \'-8\' und es gibt 8 Punkte Abzug.\nWird die Banane mit der Schale eingesammelt wird der Punktestand um 8 erhöht und sie geht auf eine Zufallsposition mit y = 170 zurück.\nDie Banane soll nach Programmstart und auch nach der \'-8\' Meldung eine Sekunde unsichtbar warten, bevor sie vom Himmel fällt.',
    message2Step4: 'Wenn du die Banane so ähnlich wie auf dem obigen Bild umgesetzt hast, ist das Spiel fertig. Spiele das Spiel, um zu überprüfen, ob alles funktioniert.',
    solutionStep4: 'So oder so ähnlich sollte deine Lösung aussehen.',

    /**
     * test specific messages
     */
    stepBefore1: 'Ohoh. Anscheinend funktioniert etwas in Schritt ',
    stepBefore2: ' nicht mehr. Überprüfe dein Projekt nochmals. ',
    hintMessage: 'Hinweis: ',

    /* hints for step 1, former step 3:*/
    step1_2: {
        name: 'Schüsselinitialisierung',
        failureMessage: 'Die Schüssel soll sich zu Beginn an Position x=0 und y=-145 befinden.',
        description: 'Prüft die Initialisierung der Schüsselposition. Die Schüssel muss bei (0, -145) beginnen.'
    },
    step1_4: {
        name: 'Schüsselbewegung',
        failureMessage: 'Die Schale sollte sich in die entsprechende Richtung bewegen, wenn die linke oder rechte Pfeiltaste gedrückt wird, und darf sich nicht bewegen, wenn keine Pfeiltaste gedrückt wird.',
        description: 'Testet die Bewegung des Schüssel-Sprites. Die Schale muss sich in die entsprechende Richtung bewegen, wenn die linke oder rechte Pfeiltaste gedrückt wird, und darf sich nicht bewegen, wenn keine Pfeiltaste gedrückt wird.'
    },
    step1_5: {
        name: 'Schüsselbewegung Details',
        failureMessage: 'Die Schale sollte sich in 10er-Schritten bewegen und darf sich niemals nach oben oder unten bewegen.',
        description: 'Testet die Bewegungsdetails des Schüssel-Sprites. Die Schale muss sich in 10er-Schritten bewegen und darf sich niemals vertikal bewegen.'
    },

    /* hints for step 2:*/
    step2_1: {
        name: 'Variableninitialisierung',
        failureMessage: 'Prüfe ob du deine Variablen Zeit und Punkte richtig initialisierst. Der Startwert von Zeit sollte 30 und der von Punkte 0 sein.',
        description: 'Testet die Initialisierung der Variablenwerte für Zeit und Punktestand. Die Zeit muss bei 30 beginnen, die Punktzahl muss bei 0 beginnen.'
    },
    step2_26: {
        name: 'tickt die Zeit',
        failureMessage: 'Der Wert der Variable Zeit soll jede Sekunde um 1 reduziert werden.',
        description: 'Prüft, ob die Zeit wie erwartet heruntertickt. Die Zeit muss jede Sekunde um eins herunterticken'
    },
    step2_27: {
        name: 'nach der Zeit Game Over Nachricht',
        failureMessage: 'Zu Beginn soll die Zeit bei 30 sein und das Spiel soll enden, wenn die Zeit den Wert 0 erreicht hat.',
        description: 'Prüft, ob das Spiel nach Erreichen des Zeitlimits endet. Die Zeit muss bei 30 beginnen und das Spiel beenden, wenn er 0 erreicht.'
    },
    step2_28: {
        name: 'Game Over Nachricht nach abgelaufener Zeit',
        failureMessage: 'Wenn die Variable Zeit den Wert 0 erreicht hat, soll die Schüssel für eine Sekunde \'Ende!\' sagen.',
        description: 'Testet, ob das Spiel nach Erreichen des Zeitlimits eine Game Over Meldung anzeigt.'
    },

    /* hints for step 4:*/
    step3_3: {
        name: 'Apfelinitialisierung',
        failureMessage: 'Der Apfel sollte nach Initialisierung eine Größe von 50% haben.',
        description: 'Testet die Initialisierung der Größe vm Apfel. Der Apfel haben eine Größe von 50%.'
    },
    step3_6: {
        name: 'Apfel fällt herunter',
        failureMessage: 'Der Apfel sollte von oben beginnend nach unten fallen.',
        description: 'Prüft, ob der Apfel vom oberen Rand des Bildschirms herunterfällt.'
    },
    step3_7: {
        name: 'Apfel fällt herunter Details',
        failureMessage: 'Der Apfel sollte in Schritten von -5 fallen und darf sich weder nach oben noch nach links oder rechts bewegen.',
        description: 'Testet die Details des herunterfallenden Apfels. Der Apfel muss in Schritten von -5 fallen und darf sich weder nach oben noch in die Horizontale bewegen.'
    },
    step3_10: {
        name: 'Apfel wird angezeigt',
        failureMessage: 'Der Apfel sollte nach dem Herunterfallen wieder erscheinen.',
        description: 'Testet, ob der Apfel nach dem Herunterfallen wieder erscheint.'
    },
    step3_11: {
        name: 'Apfel erscheint an zufälliger x-Position',
        failureMessage: 'Der Apfel sollte beim Erscheinen einen zufälligen x-Wert haben.',
        description: 'Testet, ob Äpfel an den richtigen x-Positionen erscheinen. Der Apfel muss an einer zufälligen x-Position erscheinen.'
    },
    step3_12: {
        name: 'Apfel erscheint an bestimmter y-Position',
        failureMessage: 'Der Apfel sollte bei y=170 erscheint.',
        description: 'Prüft, ob der Apfel an der richtigen y-Position erscheint. Der Apfel muss bei y = 170 erscheinen.'
    },
    step3_16: {
        name: 'Nur ein Apfel wird angezeigt',
        failureMessage: 'Während dem Spiel sollte immer nur ein einziger Apfel gleichzeitig existieren.',
        description: 'Prüft, ob während des Spiels nur ein Apfel sichtbar ist. Es können auch zwei Äpfel sichtbar sein, wenn sie sich genau die gleiche Position teilen.'
    },
    step3_20: {
        name: 'Apfel Punkte',
        failureMessage: 'Die Punkte sollten um 5 erhöht werden, wenn der Apfel mit der Schüssel gesammelt wird.',
        description: 'Testet, ob Äpfel 5 Punkte geben, wenn sie die Schale berühren.'
    },
    step3_21: {
        name: 'Game Over wegen Apfel',
        failureMessage: 'Wenn der Apfel den Boden (rote Linie) berührt, sollte das Spiel vorbei sein.',
        description: 'Teste, ob ein zu Boden fallender Apfel das Spiel beendet.'
    },
    step3_22: {
        name: 'Game Over wegen Apfel Nachricht',
        failureMessage: 'Wenn der Apfel den Boden berührt sollte der Apfel für eine Sekunde \'Game over!\' sagen.',
        description: 'Prüft, ob ein zu Boden fallender Apfel eine Game Over-Meldung anzeigt.'
    },


    /* hints for step 5:*/
    step4_3: {
        name: 'Bananeinitialisierung',
        failureMessage: 'Die Banane sollte bei Initialiserung eine Größe von 50% haben.',
        description: 'Testet die Initialisierung der Größe von Bananen. Bananen müssen eine Größe von 50% haben.'
    },
    step4_8: {
        name: 'Banane fällt herunter',
        failureMessage: 'Die Banane sollte von oben nach unten fallen.',
        description: 'Prüft, ob die Banane vom oberen Rand des Bildschirms herunterfällt.'
    },
    step4_9: {
        name: 'Banane fällt herunter Details',
        failureMessage: 'Die Banane sollte in Schritten von -7 fallen und darf sich weder nach oben noch nach links oder rechts bewegen.',
        description: 'Testet die Details der herunterfallenden Banane. Die Banane muss in Schritten von -7 fallen und darf sich weder nach oben noch in die Horizontale bewegen.'
    },
    step4_13: {
        name: 'Banane wird angezeigt',
        failureMessage: 'Die Banane sollte wieder spawnen wenn sie auf den Boden gefallen ist oder eingesammelt wurde.',
        description: 'Testet, ob Bananen nach dem Herunterfallen spawnen.'
    },
    step4_14: {
        name: 'Banane erscheint an zufälliger x-Position',
        failureMessage: 'Die Banane sollte an einer zufälligen x-Position spawnen.',
        description: 'Testet, ob Bananen an den richtigen x-Positionen spawnen. Bananen müssen an zufälligen x-Positionen spawnen.'
    },
    step4_15: {
        name: 'Banane erscheint an bestimmter y-Position',
        failureMessage: 'Die Banane sollte bei y=170 spawnen.',
        description: 'Prüft, ob Bananen an der richtigen y-Position spawnen. Bananen müssen bei y = 170 spawnen.'
    },
    step4_17: {
        name: 'Nur eine Banane',
        failureMessage: 'Während dem Spiel sollte nur eine Banane sichtbar sein. Es können auch zwei Bananen sichtbar sein, wenn sie sich genau die gleiche Position teilen.',
        description: 'Prüft, ob während des Spiels nur eine Banane sichtbar ist. Es können auch zwei Bananen sichtbar sein, wenn sie sich genau die gleiche Position teilen.'
    },
    step4_18: {
        name: 'Banane fällt verzögert herunter',
        failureMessage: 'Die Banane sollte am Anfang eine Sekunde warten, bevor sie herunterfällt.',
        description: 'Testet, ob die Banane am Anfang eine Sekunde wartet, bevor sie herunterfällt.'
    },
    step4_19: {
        name: 'Banane-berührt-Boden Verzögerung',
        failureMessage: 'Die Banane sollte eine Sekunde warten, nachdem sie den Boden berührt hat, bevor sie wieder herunterfällt.',
        description: 'Testet, ob die Banane eine Sekunde wartet, nachdem sie den Boden berührt hat, bevor sie herunterfällt.'
    },
    step4_23: {
        name: 'Banane-berührt-Schüssel Punkte',
        failureMessage: 'Die Punkte sollten um 8 erhöht werden, wenn die Banane mit der Schüssel eingesammelt wird.',
        description: 'Testet, ob Bananen 8 Punkte ergeben, wenn sie die Schale berühren.'
    },
    step4_24: {
        name: 'Banane-berührt-Boden Punkte',
        failureMessage: 'Die Punkte sollten um 8 reduziert werden, wenn die Banane den Boden berührt.',
        description: 'Prüft, ob Bananen 8 Punkte abziehen, wenn sie den Boden berühren.'
    },
    step4_25: {
        name: 'Banane-berührt-Boden Nachricht',
        failureMessage: 'Die Banane sollte für eine Sekunde \'-8\' sagen, wenn sie auf den Boden fällt.',
        description: 'Prüft, ob Bananen eine Nachricht anzeigen, wenn sie den Boden berühren.'
    },

    /**
     * Success
     */
    successTitle: 'Juhuuuu!',
    successMsg: 'Super Arbeit, nun kannst du dein Geschick beim Früchtesammeln testen. Wenn du möchtest, kannst du das Spiel jederzeit noch modifizieren und zum Beispiel weitere Früchte einbauen - vielleicht gibt es ja auch noch Melonen. Du kannst auch noch deine Codequalität prüfen und verbessern.'
};
