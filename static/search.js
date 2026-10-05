// Sample data to search through
const items = [
    { name: "Home", target: "home" },
    { name: "Wat is duurzame energie", target: "wat-is-duurzame-energie" },
    { name: "Energie soorten", target: "energie-soorten" },
    { name: "Zonne", target: "zonne" },
    { name: "Wind", target: "wind" },
    { name: "Water", target: "water" },
    { name: "Biomassa", target: "biomassa" },
    { name: "Geothermisch", target: "geothermisch" },
    { name: "Getijden", target: "getijden" }
];

// Get references to the input and results elements
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

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
    const results = search(query);
    displayResults(results);
});

clearBtn.addEventListener('click', function() {
  searchInput.value = "";
  resultsContainer.innerHTML = '';
});
