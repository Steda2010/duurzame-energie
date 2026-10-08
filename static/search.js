// Sample data to search through
const items = [
    { name: "Home", target: "home" },
    { name: "Wat is duurzame energie", target: "wat-is-duurzame-energie" },
    { name: "Energie soorten", target: "energie-soorten" },
    { name: "Zonne energie", target: "zonne" },
    { name: "Wind energie", target: "wind" },
    { name: "Water energie", target: "water" },
    { name: "Biomassa energie", target: "biomassa" },
    { name: "Geothermische energie", target: "geothermisch" },
    { name: "Getijden energie", target: "getijden" }
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

let currentFocus = -1;

searchInput.addEventListener('keydown', function(e) {
  const visibleItems = Array.from(items).filter(
    item => item.style.display !== "none"
  );

  if (e.key === "ArrowDown") {
    currentFocus = (currentFocus + 1) % visibleItems.length;
    setActive(visibleItems);
    e.preventDefault();
  } else if (e.key === "ArrowUp") {
    currentFocus = (currentFocus - 1 + visibleItems.length) % visibleItems.length;
    setActive(visibleItems);
    e.preventDefault();
  } else if (e.key === "Enter") {
    if (currentFocus > -1 && visibleItems[currentFocus]) {
      alert("You selected: " + visibleItems[currentFocus].textContent);
      searchInput.value = visibleItems[currentFocus].textContent;
      searchInput.dispatchEvent(new Event('keyup'));
      currentFocus = -1;
    }
    e.preventDefault();
  }
});

function setActive(list) {
  list.forEach(item => item.classList.remove("active"));
  if (currentFocus >= 0 && list[currentFocus]) {
    list[currentFocus].classList.add("active");
  }
}

clearBtn.addEventListener('click', function() {
  searchInput.value = "";
  resultsContainer.innerHTML = '';
    resultsContainer.hidden = true;
});
