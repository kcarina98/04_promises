function verdoppel(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
}

verdoppel(2).then((result) => console.log(result));
verdoppel(100).then((result) => console.log(result));
