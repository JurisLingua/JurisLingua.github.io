const SEARCH_BY_KEY = 'searchBy';
const SEARCH_KEY_ID = 'searchKey';

const workWeekSelection = document.getElementById(SEARCH_KEY_ID);
const searchValue = window.localStorage.getItem(SEARCH_BY_KEY);
workWeekSelection.textContent = searchValue;