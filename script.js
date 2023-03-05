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
    draw(); // Spielfeld neu malen
}

function draw(){ // Spielfeld neu malen | wird nach jedem td Element neu aufrufen
    for (let i = 0; i < fields.length; i++) { // für alle 9 Felder wiederholen 
        if(fields[i] == 'circle') { // wenn Element ein Kreis ist, dann
            document.getElementById('circle-' + i).classList.remove('d-none'); 
            // entferne die d-none Klasse beim Kreis = zeige Kreis an
         }
        if(fields[i] == 'cross') { // wenn Element ein Kreuz ist, dann
            document.getElementById('cross-' + i).classList.remove('d-none'); 
            // entferne die d-none Klasse beim Kreuz = zeige Kreuz an
        }
        
    }
}