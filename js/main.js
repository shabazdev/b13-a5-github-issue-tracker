const issueCardContainer = getEliment('issueCardContainer');
const tabButtons = document.querySelectorAll('.tabButton');
const totalIssues = getEliment('totalIssueCount');
let currentSelectedTab = 'all';

const fetchAllData = async () => {
    loadingSpinner(true);
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    loadingSpinner(false);

    return data.data;
};

const searchData = async (text) => {
    loadingSpinner(true);
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`);
    const data = await res.json();
    loadingSpinner(false);
    return data.data;
};

const renderCards = async () => {
    issueCardContainer.innerHTML = '';

    const data = await fetchAllData();

    const filterData =
        currentSelectedTab === 'all' ? data : data.filter((d) => d.status === currentSelectedTab);
    totalIssues.innerText = `${filterData.length} issues`;

    if (filterData) {
        filterData.forEach((item) => {
            issueCardContainer.appendChild(issueCard(item));
        });
        issueNotFound(false);
    }

    tabButtons.forEach((btn) => {
        btn.classList.remove('btn-primary', 'border-none');
        if (btn.getAttribute('data-value') === currentSelectedTab) {
            btn.classList.add('btn-primary', 'border-none');
        }
    });
};

// tab menu buttons
tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentSelectedTab = btn.getAttribute('data-value');
        renderCards();
    });
});

// search options
const searchBtn = getEliment('searchBtn');
const searchInput = getEliment('searchInput');

searchBtn.addEventListener('click', async () => {
    if (!removeSpace(searchInput.value).length) return;
    issueCardContainer.innerHTML = '';

    const data = await searchData(searchInput.value);
    totalIssues.innerText = `${data.length} issues`;

    if (data.length) {
        data.forEach((item) => {
            issueCardContainer.appendChild(issueCard(item));
        });
        issueNotFound(false);
    } else {
        issueNotFound(true);
    }
});

renderCards();
