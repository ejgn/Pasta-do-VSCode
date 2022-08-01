quantidade = 8;
for (contador = 0; contador <= quantidade; contador++) {
  conta = contador % 2;
  if ( conta == 1) {
    console.log ("O numero e impar" + contador );
  } else {
    if ( quantidade == 0) {
      console.log ("O numero e zero");
    } else {
      console.log ("O numero e par " + contador );
    }
  }
}

