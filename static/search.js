// Sample data to search through
const items = [
    { name: "Home", target: "home" },
    { name: "Wat is duurzame energie", target: "wat-is-duurzame-energie" },
    { name: "Energie soorten", target: "energie-soorten" },
    { name: "Zonne energie", target: "zonne" },
    { name: "Wind energie", target: "windenergie" },
    { name: "Water energie", target: "waterenergie" },
    { name: "Biomassa energie", target: "biomassa" },
    { name: "Geothermische energie", target: "geothermische-energie" },
    { name: "Getijden energie", target: "getijdenenergie" }
];

// Get references to the input and results elements
const searchInput = document.getElementById('zoekveld');
const resultsContainer = document.getElementById('results');
resultsContainer.hidden = true;

// Function to filter items based on the search query
function search(query) {
    return items.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );
}

// Function to display the results
function displayResults(results) {
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML =
            '<div class="item">No results found</div>';
        return;
    }

    results.forEach(item => {
        const itemElement = document.createElement('a');

        itemElement.classList.add('item');
        itemElement.textContent = item.name;
        itemElement.href = `#${item.target}`;

        resultsContainer.appendChild(itemElement);
    });
}

// Event listener for the search input
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();

    if (!query) {
        resultsContainer.innerHTML = '';
                resultsContainer.hidden = true;
        return;
    }

    const results = search(query);
        resultsContainer.hidden = false;
    displayResults(results);
});

clearBtn.addEventListener('click', function() {
  searchInput.value = "";
  resultsContainer.innerHTML = '';
    resultsContainer.hidden = true;
});
