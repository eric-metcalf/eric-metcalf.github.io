// Blog Post Loader
// Loads blog posts from markdown files and displays them

// Enhanced Markdown Parser for blog posts
function parseMarkdown(markdown) {
  // Remove frontmatter (YAML between --- markers)
  let content = markdown.replace(/^---[\s\S]*?---\n/m, '');

  // Split into lines for processing
  const lines = content.split('\n');
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

// Load and display blog post list
async function loadBlogPosts() {
  try {
    const response = await fetch('content/blog/posts.json');
    if (!response.ok) {
      throw new Error('Failed to load blog posts');
    }
    
    const posts = await response.json();
    const blogContainer = document.getElementById('blog-posts');

    if (!blogContainer) {
      return;
    }

    // Clear fallback/loading content - markdown loaded successfully!
    blogContainer.innerHTML = '';

    // Create blog post previews
    posts.forEach(post => {
      const article = document.createElement('article');
      article.className = 'blog-post';
      
      const postId = post.filename.replace('.md', '');
      
      article.innerHTML = `
        <h3 class="post-title"><a href="blog-post.html?post=${postId}">${post.title}</a></h3>
        <p class="post-meta">${post.date} • ${post.category}</p>
        <p class="post-excerpt">${post.excerpt}</p>
        <a href="blog-post.html?post=${postId}" class="read-more">Read More →</a>
      `;
      
      blogContainer.appendChild(article);
    });
    
  } catch (error) {
    console.error('Error loading blog posts:', error);
    const blogContainer = document.getElementById('blog-posts');
    if (blogContainer) {
      blogContainer.innerHTML = '<p>Unable to load blog posts at this time.</p>';
    }
  }
}

// Load and display a single blog post
async function loadSinglePost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('post');
  
  if (!postId) {
    window.location.href = 'blog.html';
    return;
  }

  try {
    // Load the markdown file
    const response = await fetch(`content/blog/${postId}.md`);
    if (!response.ok) {
      throw new Error('Failed to load blog post');
    }
    
    const markdown = await response.text();
    
    // Extract frontmatter
    const frontmatterMatch = markdown.match(/^---\n([\s\S]*?)\n---/);
    let title = 'Blog Post';
    let date = '';
    let category = '';
    
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const titleMatch = frontmatter.match(/title:\s*(.+)/);
      const dateMatch = frontmatter.match(/date:\s*(.+)/);
      const categoryMatch = frontmatter.match(/category:\s*(.+)/);
      
      if (titleMatch) title = titleMatch[1];
      if (dateMatch) date = dateMatch[1];
      if (categoryMatch) category = categoryMatch[1];
    }
    
    // Parse markdown to HTML
    const html = parseMarkdown(markdown);
    
    // Update page title
    document.title = `${title} - Eric Metcalf`;
    
    // Display the post
    const postContainer = document.getElementById('post-content');
    const postMeta = document.getElementById('post-meta');
    
    if (postContainer) {
      postContainer.innerHTML = html;
    }
    
    if (postMeta && date && category) {
      postMeta.innerHTML = `${date} • ${category}`;
    }
    
  } catch (error) {
    console.error('Error loading blog post:', error);
    const postContainer = document.getElementById('post-content');
    if (postContainer) {
      postContainer.innerHTML = '<p>Unable to load this blog post. <a href="blog.html">Return to blog</a></p>';
    }
  }
}

// Initialize based on page
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('blog-posts')) {
      loadBlogPosts();
    } else if (document.getElementById('post-content')) {
      loadSinglePost();
    }
  });
} else {
  if (document.getElementById('blog-posts')) {
    loadBlogPosts();
  } else if (document.getElementById('post-content')) {
    loadSinglePost();
  }
}

