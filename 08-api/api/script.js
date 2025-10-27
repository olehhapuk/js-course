const promise = fetch('https://jsonplaceholder.typicode.com/posts');
promise
  .then((res) => res.json())
  .then((body) => {
    console.log(body);
  });
