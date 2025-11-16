// Photography Portfolio Loader
// Loads photography portfolio from JSON config and renders it dynamically

// Load and render photography portfolio
async function loadPhotographyPortfolio() {
  try {
    // Load portfolio config
    const response = await fetch('content/photos/portfolio.json');
    const portfolio = await response.json();

    // Update page title and description
    const titleElement = document.querySelector('#photography h2');
    const descriptionElement = document.querySelector('#photography .section-intro');
    
    if (titleElement) {
      titleElement.textContent = portfolio.title;
    }
    
    if (descriptionElement) {
      descriptionElement.textContent = portfolio.description;
    }

    // Build album cards HTML
    let albumCardsHTML = '';

    portfolio.albums.forEach(album => {
      // Build album link button if albumLink exists
      const albumLinkHTML = album.albumLink
        ? `<a href="${album.albumLink}" target="_blank" rel="noopener noreferrer" class="album-link">View Full Album →</a>`
        : '';

      albumCardsHTML += `
            <!-- Album Card - ${album.title} -->
            <div class="photo-card" data-album-id="${album.id}">
              <div class="photo-card-image">
                <img src="${album.image}" alt="${album.alt}">
              </div>
              <div class="photo-card-content">
                <h3>${album.title}</h3>
                <p class="photo-location">${album.location}</p>
                <p class="photo-description">${album.description}</p>
                ${albumLinkHTML}
              </div>
            </div>
`;
    });

    // Insert album cards HTML
    const containerElement = document.querySelector('.portfolio-container');
    if (containerElement) {
      containerElement.innerHTML = albumCardsHTML;
    }
    
  } catch (error) {
    console.error('Error loading photography portfolio:', error);
    // Fallback content is already in HTML
  }
}

// Load portfolio when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadPhotographyPortfolio);
} else {
  loadPhotographyPortfolio();
}

