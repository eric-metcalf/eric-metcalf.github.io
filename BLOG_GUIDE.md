# Blog Management Guide

Your blog is now powered by markdown files! This makes it super easy to write and publish blog posts.

## Important: How to View Your Site

### For Local Testing

When testing locally, you **must** use a web server. Simply double-clicking the HTML files won't work because browsers block JavaScript from loading markdown files for security reasons (CORS policy).

**To run a local web server:**

```bash
# Navigate to your project directory
cd /path/to/eric-metcalf.github.io

# Start a simple Python web server
python3 -m http.server 8000

# Then open your browser to:
# http://localhost:8000
```

The markdown content will load properly when viewed through the web server!

### For GitHub Pages

When you push your site to GitHub Pages, everything will work automatically! GitHub Pages serves files via HTTP, so the markdown will load without any issues.

### Fallback Content

I've added fallback HTML content to all pages, so even if you open the files directly (without a server), you'll still see content. However, for the full markdown experience and to test blog posts, use a local web server.

## How to Create a New Blog Post

### Step 1: Create a Markdown File

1. Go to the `content/blog/` directory
2. Create a new file with the format: `YYYY-MM-DD-post-title.md`
   - Example: `2024-03-15-my-new-post.md`
   - The date helps keep posts organized
   - Use lowercase and hyphens for the title

### Step 2: Add Frontmatter

At the top of your markdown file, add frontmatter (metadata) between `---` markers:

```markdown
---
title: Your Post Title Here
date: March 15, 2024
category: Your Category
excerpt: A brief summary of your post that will appear on the blog listing page.
---
```

### Step 3: Write Your Content

After the frontmatter, write your blog post using markdown syntax:

```markdown
# Main Heading

This is a paragraph with **bold text** and *italic text*.

## Subheading

- Bullet point 1
- Bullet point 2
- Bullet point 3

You can add [links](https://example.com) and `inline code`.

## Another Section

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3
```

### Step 4: Update posts.json

Add your new post to `content/blog/posts.json` at the **top** of the array (newest first):

```json
[
  {
    "filename": "2024-03-15-my-new-post.md",
    "title": "Your Post Title Here",
    "date": "March 15, 2024",
    "category": "Your Category",
    "excerpt": "A brief summary of your post that will appear on the blog listing page."
  },
  {
    "filename": "2024-03-10-example-post-3.md",
    ...
  }
]
```

### Step 5: Publish

That's it! Your new post will automatically appear on your blog page.

## Markdown Syntax Reference

The blog system now has an **enhanced markdown parser** with excellent support for lists, spacing, and formatting!

### Headers
```markdown
# H1 - Main Title
## H2 - Section
### H3 - Subsection
#### H4 - Sub-subsection
##### H5 - Smaller heading
```

### Text Formatting
```markdown
**bold text**
*italic text*
***bold and italic***
`inline code`
```

### Links
```markdown
[Link text](https://example.com)
```

### Lists

**Unordered lists** (use `-`, `*`, or `+`):
```markdown
- Item 1
- Item 2
- Item 3
```

**Ordered lists**:
```markdown
1. First item
2. Second item
3. Third item
```

**Nested lists** (indent with spaces):
```markdown
- Top level item
  - Nested item 1
  - Nested item 2
- Another top level
  - More nested content
```

### Code Blocks
````markdown
```
function example() {
  console.log("Hello!");
}
```
````

### Horizontal Rule
```markdown
---
```

### Spacing Tips

✅ **Proper spacing is now automatic!**

- **Blank lines** (double newline) create new paragraphs
- **Single newlines** within text are treated as spaces (standard markdown)
- Lists are automatically spaced from surrounding content
- Headers have appropriate margins
- Code blocks are properly separated

**Important:** To create a new paragraph, use a blank line. Single newlines join text with a space.

Example:
```markdown
This is a paragraph that spans
multiple lines in the source but
will appear as one paragraph.

This is a new paragraph with proper spacing.

- List item 1
- List item 2

And back to a paragraph after the list.
```

## Example Blog Post

Here's a complete example:

```markdown
---
title: My Amazing Adventure in Iceland
date: March 15, 2024
category: Travel
excerpt: I recently visited Iceland and had an incredible time exploring glaciers, waterfalls, and the Northern Lights. Here's what I learned!
---

# My Amazing Adventure in Iceland

Last month, I had the opportunity to visit Iceland, and it was absolutely breathtaking!

## The Highlights

Here are my top 3 experiences:

1. **Glacier Hiking** - Walking on a glacier was surreal
2. **Northern Lights** - Saw them on our second night!
3. **Hot Springs** - The Blue Lagoon was incredibly relaxing

## Tips for Future Travelers

If you're planning a trip to Iceland, here are some tips:

- Rent a car for flexibility
- Pack layers - the weather changes quickly
- Book accommodations early
- Don't miss the Golden Circle

## Conclusion

Iceland exceeded all my expectations. I can't wait to go back!

---

*Have you been to Iceland? Let me know your favorite spots!*
```

## Managing Your Blog

### To Edit a Post
1. Open the markdown file in `content/blog/`
2. Make your changes
3. Save the file
4. Refresh your browser - changes appear immediately!

### To Delete a Post
1. Delete the markdown file from `content/blog/`
2. Remove the entry from `posts.json`

### To Reorder Posts
Simply rearrange the order in `posts.json` - the first item appears first on your blog page.

## Categories

You can use any category you want. Some suggestions:
- Travel
- Academia
- Research
- Personal
- Technology
- Tutorial
- General

## Tips

1. **Keep excerpts short** - 1-2 sentences that entice readers
2. **Use descriptive titles** - Help readers know what to expect
3. **Break up long posts** - Use headers to organize content
4. **Add personality** - Write in your own voice!
5. **Proofread** - Check for typos before publishing

## Troubleshooting

**Post not showing up?**
- Check that you added it to `posts.json`
- Verify the filename matches exactly
- Make sure the frontmatter is formatted correctly

**Formatting looks wrong?**
- Check your markdown syntax
- Make sure code blocks use triple backticks
- Verify links are formatted as `[text](url)`

**Want to preview before publishing?**
- You can open the markdown file in any markdown preview tool
- Or just publish it and view it on your site - you can always edit!

## Need Help?

If you run into any issues or want to add features to your blog system, just ask!

