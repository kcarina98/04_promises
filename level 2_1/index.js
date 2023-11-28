function getNumber() {
  return new Promise((resolve, reject) => {
    const num = Math.random() * 10 + 1;
    if (num > 5) resolve(num);
    else reject(num);
  });
}

getNumber()
  .then((result) => console.log("Juhu größer als 5: ", result.toFixed(0)))
  .catch((result) => console.log("oh no, kleiner als 6: ", result.toFixed(0)));
