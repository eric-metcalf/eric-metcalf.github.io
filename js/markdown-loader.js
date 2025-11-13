// Enhanced Markdown Parser
// Converts markdown to HTML for the home section

function parseMarkdown(markdown) {
  const lines = markdown.split('\n');
  const output = [];
  let inCodeBlock = false;
  let inList = false;
  let listType = null; // 'ul' or 'ol'
  let inParagraph = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Code blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        output.push('</code></pre>');
        inCodeBlock = false;
      } else {
        if (inParagraph) {
          output.push('</p>');
          inParagraph = false;
        }
        if (inList) {
          output.push(`</${listType}>`);
          inList = false;
          listType = null;
        }
        output.push('<pre><code>');
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      output.push(line);
      continue;
    }

    // Headers
    if (line.match(/^#{1,6} /)) {
      if (inParagraph) {
        output.push('</p>');
        inParagraph = false;
      }
      if (inList) {
        output.push(`</${listType}>`);
        inList = false;
        listType = null;
      }

      const level = line.match(/^#+/)[0].length;
      const text = line.replace(/^#+\s+/, '');
      output.push(`<h${level}>${processInlineMarkdown(text)}</h${level}>`);
      continue;
    }

    // Horizontal rules
    if (line.trim() === '---' || line.trim() === '***' || line.trim() === '___') {
      if (inParagraph) {
        output.push('</p>');
        inParagraph = false;
      }
      if (inList) {
        output.push(`</${listType}>`);
        inList = false;
        listType = null;
      }
      output.push('<hr>');
      continue;
    }

    // Unordered lists
    if (line.match(/^[\-\*\+] /)) {
      if (inParagraph) {
        output.push('</p>');
        inParagraph = false;
      }
      if (!inList || listType !== 'ul') {
        if (inList) {
          output.push(`</${listType}>`);
        }
        output.push('<ul>');
        inList = true;
        listType = 'ul';
      }
      const text = line.replace(/^[\-\*\+]\s+/, '');
      output.push(`<li>${processInlineMarkdown(text)}</li>`);
      continue;
    }

    // Ordered lists
    if (line.match(/^\d+\.\s/)) {
      if (inParagraph) {
        output.push('</p>');
        inParagraph = false;
      }
      if (!inList || listType !== 'ol') {
        if (inList) {
          output.push(`</${listType}>`);
        }
        output.push('<ol>');
        inList = true;
        listType = 'ol';
      }
      const text = line.replace(/^\d+\.\s+/, '');
      output.push(`<li>${processInlineMarkdown(text)}</li>`);
      continue;
    }

    // Empty lines
    if (line.trim() === '') {
      if (inParagraph) {
        output.push('</p>');
        inParagraph = false;
      }
      if (inList) {
        output.push(`</${listType}>`);
        inList = false;
        listType = null;
      }
      continue;
    }

    // Regular paragraphs
    if (inList) {
      output.push(`</${listType}>`);
      inList = false;
      listType = null;
    }

    if (!inParagraph) {
      output.push('<p>');
      inParagraph = true;
    } else {
      output.push('<br>');
    }

    output.push(processInlineMarkdown(line));
  }

  // Close any open tags
  if (inParagraph) {
    output.push('</p>');
  }
  if (inList) {
    output.push(`</${listType}>`);
  }
  if (inCodeBlock) {
    output.push('</code></pre>');
  }

  return output.join('\n');
}

// Process inline markdown (bold, italic, links, code)
function processInlineMarkdown(text) {
  let result = text;

  // Inline code (must be before bold/italic)
  result = result.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Bold (** or __)
  result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  result = result.replace(/__(.+?)__/g, '<strong>$1</strong>');

  // Italic (* or _) - but not if already in bold
  result = result.replace(/\*([^\*]+)\*/g, '<em>$1</em>');
  result = result.replace(/_([^_]+)_/g, '<em>$1</em>');

  // Links [text](url)
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  return result;
}

// Load markdown file and populate the home section
async function loadHomeContent() {
  try {
    const response = await fetch('content/home.md');
    if (!response.ok) {
      throw new Error('Failed to load home content');
    }
    
    const markdown = await response.text();
    const html = parseMarkdown(markdown);
    
    const homeContent = document.getElementById('home-content');
    if (homeContent) {
      homeContent.innerHTML = html;
    }
  } catch (error) {
    console.error('Error loading home content:', error);
    // Fallback content if markdown fails to load
    const homeContent = document.getElementById('home-content');
    if (homeContent) {
      homeContent.innerHTML = '<p>Welcome to my website!</p>';
    }
  }
}

// Load content when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadHomeContent);
} else {
  loadHomeContent();
}

