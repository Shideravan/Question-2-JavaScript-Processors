'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'minimumTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ability
 *  2. LONG_INTEGER processes
 */

function minimumTime(ability, processes) {

    // Por uma questão de segurança, estou inicializando todas as variáveis

    let maior = 0, contador = 0, lugar = 0, i = 0, metadeArredondada = 0; 
    let teste = 0;
    teste = processes;

    do {
        for (i=0; i<ability.length-1; i++) {
            if (ability[i]>maior){
                maior = ability[i];
                lugar = i;
            }
        }
        
        teste -= maior;

        metadeArredondada = Math.floor(maior/2);
        
        ability[lugar] = metadeArredondada;
        
        contador++;
        
        maior = metadeArredondada;
    }
    while (teste > 0)
    
    return contador;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const abilityCount = parseInt(readLine().trim(), 10);

    let ability = [];

    for (let i = 0; i < abilityCount; i++) {
        const abilityItem = parseInt(readLine().trim(), 10);
        ability.push(abilityItem);
    }

    const processes = parseInt(readLine().trim(), 10);

    const result = minimumTime(ability, processes);

    ws.write(result + '\n');

    ws.end();
}
