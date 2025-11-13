// Blog Post Loader
// Loads blog posts from markdown files and displays them
// Uses marked.js library for reliable markdown parsing

// Parse markdown using marked library
function parseMarkdown(markdown) {
  // Remove frontmatter (YAML between --- markers)
  const content = markdown.replace(/^---[\s\S]*?---\n/m, '');

  // Parse markdown to HTML using marked library with options
  // breaks: false means single newlines don't create <br> tags
  return marked.parse(content, {
    breaks: false,
    gfm: true,
    headerIds: true,
    mangle: false
  });
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

