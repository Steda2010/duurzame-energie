// Sample data to search through
const items = [
    { name: "Apple", target: "apple" },
    { name: "Banana", target: "banana" },
    { name: "Orange", target: "orange" },
    { name: "Mango", target: "mango" },
    { name: "Pineapple", target: "pineapple" },
    { name: "Strawberry", target: "strawberry" },
    { name: "Blueberry", target: "blueberry" },
    { name: "Grape", target: "grape" },
    { name: "Watermelon", target: "watermelon" },
    { name: "Peach", target: "peach" }
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
