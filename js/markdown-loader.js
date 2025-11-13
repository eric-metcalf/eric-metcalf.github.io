// Markdown Loader using marked.js library
// Uses the marked library for reliable markdown parsing

// Load and render markdown content
async function loadMarkdownContent() {
  try {
    const response = await fetch('content/home.md');
    const markdown = await response.text();

    // Parse markdown to HTML using marked library with options
    // breaks: false means single newlines don't create <br> tags
    const html = marked.parse(markdown, {
      breaks: false,
      gfm: true,
      headerIds: true,
      mangle: false
    });

    // Insert into the page
    const contentDiv = document.getElementById('home-content');
    if (contentDiv) {
      contentDiv.innerHTML = html;
    }
  } catch (error) {
    console.error('Error loading markdown:', error);
    // Fallback content is already in the HTML
  }
}

// Load content when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadMarkdownContent);
} else {
  loadMarkdownContent();
}

