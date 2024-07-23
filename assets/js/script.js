const brainDump = document.querySelector('name');
const listType = document.querySelector('name');
const lowPrio = document.querySelector('#low');
const mediumPrio = document.querySelector('#medium');
const topPrio = document.querySelector('#top');

const saveListItem = document.querySelector('name');


saveListItem.addEventListener('click', () => {
    const listItem = document.querySelector('.name').value;
    listType.textContent = listItem;
    localStorage.setItem('list', listItem);
});

function displayUserInput() {
    const listFromLocalStorage = localStorage.getItem('list');

    if (listFromLocalStorage) {
        brainDump.textContent = 'name'
    } else {
        brainDump.textContent = 'No Items on List Yet!'
    }
}

displayUserInput();

