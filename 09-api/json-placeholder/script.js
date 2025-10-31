// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Finally');
//   });

// console.log(1);

// async function main() {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await res.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log('Finally');
//   }
// }

// main();
// console.log(1);

const refs = {
  list: document.querySelector('#list'),
  loader: document.querySelector('#loader'),
  error: document.querySelector('#error'),
};

function createTodoItem(completed, title, id) {
  return `
  <li data-id="${id}">
    <input type="checkbox" ${completed ? 'checked' : ''} />
    <span>${title}</span>
  </li>`;
}

function renderTodos(data) {
  const todoItemsHtml = data
    .map((item) => createTodoItem(item.completed, item.title, item.id))
    .join('');

  refs.list.innerHTML = todoItemsHtml;
}

async function main() {
  refs.loader.style.display = 'block';
  refs.error.style.display = 'none';

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();

    // throw new Error('test error');

    renderTodos(data);
  } catch (error) {
    refs.error.textContent = error.message;
    refs.error.style.display = 'block';
  } finally {
    refs.loader.style.display = 'none';
  }

  fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'PUT',
    body: JSON.stringify({
      title: 'Test todo updated',
      completed: true,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const itemElem = document.querySelector(`li[data-id="${data.id}"]`);
      itemElem.querySelector('input').checked = data.completed;
      itemElem.querySelector('span').textContent = data.title;
    });
}

main();
