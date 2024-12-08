/* 
  FUNZIONI E PROCEDURE
*/

// Funzione che genera un numero casuale
function generateRandomInteger(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Bottone
let btn = document.querySelector("#play");
// Evento al click del bottone
btn.addEventListener("click", handleClick);

// Semaforo
let first = document.querySelectorAll(".first"); // Prime luci che si accendono
let second = document.querySelectorAll(".second");
let third = document.querySelectorAll(".third");
let fourth = document.querySelectorAll(".fourth");
let fifth = document.querySelectorAll(".fifth");
let go = document.querySelectorAll(".go"); // Luci verdi

// Variabili per il calcolo del tempo di reazione
let greenLightTime = null; // Tempo in cui le luci diventano verdi
let timeToPress = false; // asso di tempo in cui va premuto il bottone

// Funzione che gestisce l'evento click del bottone
function handleClick(event) {
    //premere il bottone dopo le luci verdi
    if (timeToPress) {
        let reactionTime = Date.now() - greenLightTime; // Calcola il tempo di reazione
        document.querySelector("#tempo").innerHTML = `Il tuo tempo di reazione è: ${reactionTime} ms`;
        //dopo 5sec si aggiorna la pagina per rigiocare
        setTimeout(() => {
            location.reload();
        }, 5000);
        //disabilitazione del bottone
        btn.disabled = true;
        document.querySelector("#play").value = "Reloading";
    } else {
        // Inizia il semaforo
        let tStart = generateRandomInteger(1000, 3000);
        //avvio primo timer luci rosse
        setTimeout(start, tStart);
        btn.disabled = true;
    }
}

//funzione che gestisce i timer dell'accenzione dei semafori
function start() {
    //accenzione prime luci rosse
    document.querySelector("#play").value = "...";
    first.forEach(element => {
        element.classList.remove("light-gray");
        element.classList.add("light-red");
    });
    //avvio secondo timer luci rosse
    setTimeout(() => {
        second.forEach(element => {
            element.classList.remove("light-gray");
            element.classList.add("light-red");
        });
        //avvio terzo timer luci rosse
        setTimeout(() => {
            third.forEach(element => {
                element.classList.remove("light-gray");
                element.classList.add("light-red");
            });
            //avvio quarto timer luci rosse
            setTimeout(() => {
                fourth.forEach(element => {
                    element.classList.remove("light-gray");
                    element.classList.add("light-red");
                });
                //avvio quinto timer luci rosse
                setTimeout(() => {
                    fifth.forEach(element => {
                        element.classList.remove("light-gray");
                        element.classList.add("light-red");
                    });
                }, 2000);
                let tEnd = generateRandomInteger(2000, 4000);
                //avvio quinto timer luci verdi
                setTimeout(() => {
                    first.forEach(element => {
                        element.classList.remove("light-red");
                        element.classList.add("light-gray");
                    });
                    second.forEach(element => {
                        element.classList.remove("light-red");
                        element.classList.add("light-gray");
                    });
                    third.forEach(element => {
                        element.classList.remove("light-red");
                        element.classList.add("light-gray");
                    });
                    fourth.forEach(element => {
                        element.classList.remove("light-red");
                        element.classList.add("light-gray");
                    });
                    fifth.forEach(element => {
                        element.classList.remove("light-red");
                        element.classList.add("light-gray");
                    });
                    go.forEach(element => {
                        element.classList.remove("light-gray");
                        element.classList.add("light-green");
                    });
                    greenLightTime = Date.now(); // Registra il tempo in cui il semaforo diventa verde
                    timeToPress = true;
                    btn.disabled = false;
                    document.querySelector("#play").value = "Press!";
                }, tEnd);
            }, 2000);
        }, 2000);
    }, 2000);
}