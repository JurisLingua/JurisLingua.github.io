const SEARCH_BY_KEY = 'searchBy'
const lastSearchMap = {
    'work-week-selection': 'Работна седмица',
    'min-wage-selection': 'Минимална работна заплата',
    'paid-leave-selection': 'Платена отпуска',
}

const frequentlySearchedMap = {
  'FAQ0': 'Трудови договори',
  'FAQ1': 'Работно време и почивки',
  'FAQ2': 'Трудово възнаграждение',
  'FAQ3': 'Отпуски',
  'FAQ4': 'Прекратяване на трудово правоотношение',
  'FAQ5': 'Професионална квалификация',
  'FAQ6': 'Трудов стаж',
  'FAQ7': 'Извършване на работа от разстояние',
}

for(const id in lastSearchMap) {
    addLastSearch(id, lastSearchMap[id]);
}

for(const id in frequentlySearchedMap) {
  addLastSearch(id, frequentlySearchedMap[id]);
}

const searchButton = document.getElementById('search-button');
const input = document.getElementById('search-input');
searchButton && input && searchButton.addEventListener('click', () => {
    const content = input.value;
    if (content) {
        setSearchCriteria(content)
    }
    console.log(content)
});

function addLastSearch(id, content) {
    const clickable = document.getElementById(id);
    clickable && clickable.addEventListener('click', () => {
        setSearchCriteria(content);
    });
}

function setSearchCriteria(searchCriteria) {
    window.localStorage.setItem('searchBy', searchCriteria);
    window.location.href = 'law-list.html';
}