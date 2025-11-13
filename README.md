# Eric Metcalf's Personal Website

A modern, multi-page personal website with markdown-based content management.

## 🌟 Features

- **Multi-page Structure**: Separate pages for Home, Adventures, Blog, and Social links
- **Markdown-Powered Content**: Write content in markdown for easy editing
- **JSON Configuration**: Manage blog posts and social links via JSON files
- **Responsive Design**: Works great on desktop and mobile
- **Photo Gallery**: Showcase adventures with Google Photos integration
- **Blog System**: Full-featured blog with markdown support
- **Dynamic Loading**: Content loads from markdown/JSON files

## 📁 Project Structure

```
eric-metcalf.github.io/
├── index.html              # Home page
├── adventures.html         # Photo gallery/adventures page
├── blog.html              # Blog listing page
├── blog-post.html         # Individual blog post page
├── social.html            # Social media links page
├── css/
│   └── main.css           # All styles
├── js/
│   ├── markdown-loader.js # Loads home content from markdown
│   ├── blog-loader.js     # Loads blog posts from markdown
│   └── social-loader.js   # Loads social links from JSON
├── content/
│   ├── home.md            # Home page content (markdown)
│   ├── social-links.json  # Social media links configuration
│   └── blog/
│       ├── posts.json     # Blog posts index
│       └── *.md           # Individual blog post markdown files
├── cv/
│   └── cv.pdf             # Your CV
└── guides/
    ├── BLOG_GUIDE.md      # How to manage blog posts
    └── SOCIAL_LINKS_GUIDE.md  # How to manage social links
```

## 🚀 Getting Started

### Local Development

To view and test your site locally, you need to run a web server (browsers block file loading for security):

```bash
# Navigate to your project directory
cd /path/to/eric-metcalf.github.io

# Start a simple Python web server
python3 -m http.server 8000

# Open your browser to:
# http://localhost:8000
```

### GitHub Pages Deployment

Simply push your changes to GitHub:

```bash
git add .
git commit -m "Update website"
git push origin main
```

Your site will be live at: `https://eric-metcalf.github.io`

## ✏️ Editing Content

### Home Page

Edit `content/home.md` using markdown syntax:

```markdown
# Welcome!

This is my homepage with **bold** and *italic* text.

Check out my [CV](http://eric-metcalf.github.io/cv/cv.pdf).
```

### Blog Posts

1. Create a new markdown file in `content/blog/`:
   - Format: `YYYY-MM-DD-post-title.md`
   - Example: `2024-03-15-my-new-post.md`

2. Add frontmatter and content:
   ```markdown
   ---
   title: My Post Title
   date: March 15, 2024
   category: Travel
   excerpt: A brief summary of the post.
   ---

   # My Post Title

   Your content here...
   ```

3. Add the post to `content/blog/posts.json`:
   ```json
   [
     {
       "filename": "2024-03-15-my-new-post.md",
       "title": "My Post Title",
       "date": "March 15, 2024",
       "category": "Travel",
       "excerpt": "A brief summary of the post."
     }
   ]
   ```

See `BLOG_GUIDE.md` for detailed instructions.

### Social Links

Edit `content/social-links.json`:

```json
[
  {
    "name": "GitHub",
    "username": "@eric-metcalf",
    "url": "https://github.com/eric-metcalf",
    "icon": "github",
    "description": "Check out my code"
  }
]
```

Available icons: `github`, `email`, `linkedin`, `twitter`, `default`

See `SOCIAL_LINKS_GUIDE.md` for detailed instructions.

### Adventures/Photo Gallery

Edit `adventures.html` directly to:
- Add new trip cards
- Update Google Photos album links
- Change photo thumbnails

See `GOOGLE_PHOTOS_GUIDE.md` for Google Photos integration.

## 🎨 Customization

### Colors and Styling

Edit `css/main.css` to customize:
- Colors
- Fonts
- Layout
- Spacing
- Hover effects

### Adding New Pages

1. Create a new HTML file (e.g., `projects.html`)
2. Copy the header/footer from an existing page
3. Add navigation link to all pages
4. Create content

## 📝 Markdown Support

The following markdown features are supported:

- **Headers**: `# H1`, `## H2`, `### H3`
- **Bold**: `**text**` or `__text__`
- **Italic**: `*text*` or `_text_`
- **Links**: `[text](url)`
- **Lists**: `- item` or `1. item`
- **Code**: `` `inline` `` or ` ```code block``` `
- **Horizontal rules**: `---`

## 🔧 Troubleshooting

### Content Not Loading?

**Problem**: Markdown or JSON content doesn't load when opening files directly.

**Solution**: Use a local web server (see "Getting Started" above).

### Changes Not Appearing?

1. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Clear browser cache
3. Make sure files are saved
4. Check browser console for errors

### Blog Post Not Showing?

1. Verify the markdown file exists in `content/blog/`
2. Check that it's listed in `content/blog/posts.json`
3. Ensure frontmatter is formatted correctly
4. Check for JSON syntax errors (missing commas, quotes)

## 📚 Documentation

- **BLOG_GUIDE.md**: Complete guide to managing blog posts
- **SOCIAL_LINKS_GUIDE.md**: How to manage social media links
- **GOOGLE_PHOTOS_GUIDE.md**: Integrating Google Photos albums

## 🛠️ Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript (ES6+)
- Markdown
- JSON for configuration
- Python (for local development server)

## 📄 License

This is a personal website. Feel free to use the structure as inspiration for your own site!

## 🤝 Contributing

This is a personal website, but if you notice any bugs or have suggestions, feel free to open an issue!

---

**Built with ❤️ by Eric Metcalf**

