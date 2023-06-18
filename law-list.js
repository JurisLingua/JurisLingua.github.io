const SEARCH_BY_KEY = 'searchBy';
const SEARCH_KEY_ID = 'searchKey';

const workWeekSelection = document.getElementById(SEARCH_KEY_ID);
const searchValue = window.localStorage.getItem(SEARCH_BY_KEY);
workWeekSelection.textContent = searchValue;

const rotuerBtn = document.getElementById('normal-work-hours-rotuer-btn');
rotuerBtn && rotuerBtn.addEventListener('click', () => {
    window.location.href = 'detail.html';
});

const backBtn = document.getElementById('detail-back-btn');
backBtn?.addEventListener('click', () => {
    window.history.back();
});

const saveBtn = document.getElementById('detail-save-btn');
saveBtn?.addEventListener('click', () => {
    window.location.href = 'saved.html';
})
