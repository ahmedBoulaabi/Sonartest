function calculerMoyenne(arr) {

    let somme = 0; 

    for (let i = 0; i < arr.length; i++) {
        somme += arr[i];
    }

    
    if (somme == 0) {  
        console.log("La somme est zéro.");
    }

    // Problème  : Utilisation de 'var' au lieu de 'let' ou 'const'
    var moyenne = somme / arr.length;  

    return moyenne;
}

const nombres = [1, 2, 3, 4, 5];
const moy = calculerMoyenne(nombres);
console.log("Moyenne :", moy);
