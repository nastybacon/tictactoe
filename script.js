let fields = []; // Array definieren

let currentShape = 'cross'; // erste Variable als Kreuz definieren

function fillShape(id) { // Funktion für abwechselnde Cross oder Circle 
    if (!fields[id]) { // wird nur aufgerufen, wenn noch keine Form drin ist (! -> negiert - immer das Gegenteil))
        if (currentShape == 'cross') { // wenn aktuelle Kreuz ist, dann
            currentShape = 'circle'; // wechseln wir zum Kreis
            document.getElementById('player-2').classList.remove('player-inactive'); // Klasse mit Transparenz entfernen
            document.getElementById('player-1').classList.add('player-inactive'); // Klasse mit Transparenz hinzufügen
        } else { // wenn nicht, dann
            currentShape = 'cross'; // wechseln wir zum Kreuz
            document.getElementById('player-2').classList.add('player-inactive'); // Klasse mit Transparenz hinzufügen
            document.getElementById('player-1').classList.remove('player-inactive'); // Klasse mit Transparenz entfernen
        }

        fields[id] = currentShape; // an dieser Stelle entweder Circle oder Cross 
        console.log(fields); // zur Kontrolle - funktioniert es wirklich?
        draw(); // Spielfeld neu malen
        checkForWin(); // kontrollieren, ob jemand gewonnen hat
    }
}

function draw() { // Spielfeld neu malen | wird nach jedem td Element neu aufrufen
    for (let i = 0; i < fields.length; i++) { // für alle 9 Felder wiederholen 
        if (fields[i] == 'circle') { // wenn Element ein Kreis ist, dann
            document.getElementById('circle-' + i).classList.remove('d-none');
            // entferne die d-none Klasse beim Kreis = zeige Kreis an
        }
        if (fields[i] == 'cross') { // wenn Element ein Kreuz ist, dann
            document.getElementById('cross-' + i).classList.remove('d-none');
            // entferne die d-none Klasse beim Kreuz = zeige Kreuz an
        }

    }
}

function checkForWin() { // hat jemand gewonnen?
    let winner;
    // horizontal
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) { // wenn Feld 0 = Feld 1 = Feld 2 & auswerten, dann 
        winner = fields[0]; // Gewinner anzeigen 
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[4]) { //
        winner = fields[3];
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) { //
        winner = fields[6];
    }
    // vertikal
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) { //
        winner = fields[0];
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) { //
        winner = fields[1];
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) { //
        winner = fields[2];
    }
    // diagonal
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) { //
        winner = fields[0];
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) { //
        winner = fields[2];
    }
    if (winner) { // wenn gewonnen, dann
        console.log('GEWONNEN:', winner); // Test | GEWONNEN anzeigen
    }
}