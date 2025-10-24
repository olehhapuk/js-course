const refs = {
  search: document.querySelector('#searchInput'),
  list: document.querySelector('#list'),
  exportBtn: document.querySelector('#exportBtn'),
  itemInput: document.querySelector('#itemInput'),
  addBtn: document.querySelector('#addBtn'),
};

const items = [
  {
    id: 1,
    text: 'Купити Лимони',
    isCompleted: false,
  },
  {
    id: 2,
    text: 'Почистити Апельсин',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Повністю вивчити JavaScript',
    isCompleted: false,
  },
];

let lastId = items[items.length - 1].id;

function addItem(text) {
  lastId++;

  const newItem = {
    id: lastId,
    text,
    isCompleted: false,
  };

  items.push(newItem);

  return newItem;
}

let search = '';

function createItemElem(item) {
  const listItemElem = document.createElement('li');
  listItemElem.className = 'box columns';

  const checkboxElem = document.createElement('input');
  checkboxElem.type = 'checkbox';
  checkboxElem.checked = item.isCompleted;
  checkboxElem.addEventListener('input', (e) => {
    for (let i = 0; i < items.length; i++) {
      const existingItem = items[i];
      if (existingItem.id === item.id) {
        items[i].isCompleted = e.currentTarget.checked;
        break;
      }
    }
  });

  const textElem = document.createElement('span');
  textElem.textContent = item.text;
  textElem.className = 'column';

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.type = 'button';
  deleteBtnElem.textContent = 'Delete';
  deleteBtnElem.className = 'button is-danger';
  deleteBtnElem.dataset.itemid = item.id;

  deleteBtnElem.addEventListener('click', (e) => {
    deleteItem(Number(e.currentTarget.dataset.itemid));
  });

  listItemElem.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElem;
}

function renderItems(filteredItems) {
  refs.list.innerHTML = '';

  for (const item of filteredItems) {
    const itemElem = createItemElem(item);
    refs.list.append(itemElem);
  }
}

function deleteItem(itemId) {
  const itemIndex = items.findIndex((item) => item.id === itemId);
  items.splice(itemIndex, 1);
  renderItems(getFilteredItems());
}

function getFilteredItems() {
  const filteredItems = [];

  for (const item of items) {
    const match = item.text.toLowerCase().includes(search.toLowerCase());
    if (match) {
      filteredItems.push(item);
    }
  }

  return filteredItems;
}

renderItems(getFilteredItems());

refs.search.addEventListener('input', (e) => {
  const inputText = e.currentTarget.value;
  search = inputText;

  renderItems(getFilteredItems());
});

refs.exportBtn.addEventListener('click', () => {
  console.log(items);
});

refs.addBtn.addEventListener('click', () => {
  const newItemText = refs.itemInput.value.trim();

  addItem(newItemText);

  refs.itemInput.value = '';

  renderItems(getFilteredItems());
});
