// Sample Data (Replace with your own or fetch from JSON later)
const tributes = [
  {
    id: 1,
    name: "Albert Einstein",
    category: "Science",
    image: "Albert.webp",
    summary: "Theoretical physicist known for relativity...",
    page: "Richie_1.html"
  },
  {
    id: 2,
    name: "Nikola Tesla",
    category: "Engineering",
    image: "Tesla.webp",
    summary: "Pioneer of alternating current systems...",
    page: "Richie_2.html"
  },
  {
    id: 3,
    name: "Elon Musk",
    category: "Technology",
    image: "ElonMusk.webp",
    summary: "CEO of SpaceX and Tesla...",
    page: "musk.html"
  },
  {
    id: 4,
    name: "Bill Gates",
    category: "Technology",
    image: "Billgate.webp",
    summary: "Co-founder of Microsoft...",
    page: "Richie_3.html"
  }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const tributeGrid = document.getElementById('tributeGrid');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  displayTributes(tributes); // Show all by default

  // Search Functionality
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = tributes.filter(tribute => 
      tribute.name.toLowerCase().includes(searchTerm) || 
      tribute.category.toLowerCase().includes(searchTerm)
    );
    displayTributes(filtered);
  });

  // Filter Buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const category = button.dataset.category;
      const filtered = category === 'all' 
        ? tributes 
        : tributes.filter(t => t.category === category);
      displayTributes(filtered);
    });
  });
});

// Display Tributes
function displayTributes(tributesToShow) {
  tributeGrid.innerHTML = tributesToShow.map(tribute => `
    <div class="tribute-card">
      <a href="${tribute.page}">
        <img src="${tribute.image}" alt="${tribute.name}">
        <h3>${tribute.name}</h3>
        <p><strong>${tribute.category}</strong></p>
        <p class="summary">${tribute.summary.slice(0, 80)}...</p>
      </a>
    </div>
  `).join('');
}