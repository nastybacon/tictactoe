let fields = []; // Array definieren

let currentShape = 'cross'; // erste Variable als Kreuz definieren

function fillShape(id) { // Funktion für abwechselnde Cross oder Circle 
    if (currentShape == 'cross') { // wenn aktuelle Kreuz ist, dann
        currentShape = 'circle'; // wechseln wir zum Kreis
    } else { // wenn nicht, dann
        currentShape = 'cross'; // wechseln wir zum Kreuz
    }

    fields[id] = currentShape; // an dieser Stelle entweder Circle oder Cross 
    console.log(fields); // zur Kontrolle - funktioniert es wirklich?
}