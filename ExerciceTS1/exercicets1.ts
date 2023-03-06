//Exercice 1: Calculer la moyenne d'un tableau de nombres
//• Créer une fonction "average" qui prend en paramètre un tableau de nombres et retourne la
//moyenne de ces nombres.
//• Utiliser un type personnalisé pour représenter le tableau de nombres.

  arr = [7,6,5,2,1];
  function average(arr) {
    let sum = 0;
    arr.forEach(function (item, idx) {
      sum += item;
    });
    return sum / arr.length;
  }
  console.log(average(arr));

  ///Changer outDir dans tsconfig json

