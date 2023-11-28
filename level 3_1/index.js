function asyncOperation(num1) {
  return new Promise((resolve, reject) => {
    resolve(num1 * 2);
  });
}

// asyncOperation(2).then((result) => console.log(result));

function chainBuilder(num2) {
  //- 4
  return asyncOperation(num2) //- 8 (erstes mal aufrufen)
    .then((result) => {
      return asyncOperation(result); // -16 (zweites mal aufrufen)
    })
    .then((result) => {
      return asyncOperation(result); // -32 (drittes mal aufrufen)
    });
}

chainBuilder(4).then((result) => console.log(result)); //# 32
