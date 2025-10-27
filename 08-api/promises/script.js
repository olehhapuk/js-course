function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success');
      // reject('test error');
    }, ms);
  });
}

wait(1000)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
