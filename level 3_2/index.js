function newFunction(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const i = Math.random() * 1000 + 1;
      resolve(i.toFixed(0));
    }, num);
  });
}

// newFunction(1000).then((result) => console.log(result.toFixed(0)));

// - Promise.all wartet nun 2s bis es zwei Werte hat und gibt diese aus, obwohl der erste Wert eigentlich schon seit 1s da ist
Promise.all([newFunction(1000), newFunction(2000)]).then((values) => {
  console.log(values);
});

//* Promise.all gibt das Ergebnis im Array aus
