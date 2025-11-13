// Connect Page Loader
// Loads connect page content from markdown file

// Load and render markdown content
async function loadConnectContent() {
  try {
    console.log('Loading connect content...');
    console.log('marked available?', typeof marked !== 'undefined');

    const response = await fetch('content/connect.md');
    const markdown = await response.text();

    console.log('Markdown loaded:', markdown.substring(0, 100));

    // Parse markdown to HTML using marked library
    const html = marked.parse(markdown, {
      breaks: false,
      gfm: true,
      headerIds: true,
      mangle: false
    });

    console.log('HTML generated:', html.substring(0, 100));

    // Insert into the page
    const contentDiv = document.getElementById('connect-content');
    console.log('Content div found?', contentDiv !== null);
    if (contentDiv) {
      contentDiv.innerHTML = html;
      console.log('Content inserted successfully');
    }
  } catch (error) {
    console.error('Error loading connect content:', error);
    // Fallback content is already in the HTML
  }
}

// Load content when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadConnectContent);
} else {
  loadConnectContent();
}

