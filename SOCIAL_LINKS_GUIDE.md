# Social Links Management Guide

Your social links are now managed through a simple JSON configuration file! This makes it easy to add, remove, or update your social media profiles.

## Configuration File

All your social links are stored in: **`content/social-links.json`**

## How to Update Your Social Links

### Edit the JSON File

Open `content/social-links.json` and you'll see an array of social link objects:

```json
[
  {
    "name": "GitHub",
    "username": "@eric-metcalf",
    "url": "https://github.com/eric-metcalf",
    "icon": "github",
    "description": "Check out my code and projects"
  },
  {
    "name": "Email",
    "username": "emetcalf@cs.brown.edu",
    "url": "mailto:emetcalf@cs.brown.edu",
    "icon": "email",
    "description": "Get in touch"
  }
]
```

### Field Descriptions

- **`name`**: The display name of the platform (e.g., "GitHub", "LinkedIn")
- **`username`**: Your username or handle on that platform (displayed under the name)
- **`url`**: The full URL to your profile or contact method
- **`icon`**: The icon to display (see available icons below)
- **`description`**: Optional description (currently not displayed, but available for future use)

## Available Icons

The following icons are built-in:

- **`github`** - GitHub logo
- **`email`** - Email envelope icon
- **`linkedin`** - LinkedIn logo
- **`twitter`** - Twitter/X logo
- **`default`** - Generic link emoji (🔗)

If you specify an icon that doesn't exist, it will use the default link emoji.

## Examples

### Add LinkedIn Profile

```json
{
  "name": "LinkedIn",
  "username": "eric-metcalf",
  "url": "https://www.linkedin.com/in/eric-metcalf",
  "icon": "linkedin",
  "description": "Connect professionally"
}
```

### Add Twitter/X Profile

```json
{
  "name": "Twitter",
  "username": "@ericmetcalf",
  "url": "https://twitter.com/ericmetcalf",
  "icon": "twitter",
  "description": "Follow me on X"
}
```

### Add Custom Link (uses default icon)

```json
{
  "name": "Personal Blog",
  "username": "blog.example.com",
  "url": "https://blog.example.com",
  "icon": "default",
  "description": "Read my thoughts"
}
```

### Add Instagram

```json
{
  "name": "Instagram",
  "username": "@ericmetcalf",
  "url": "https://instagram.com/ericmetcalf",
  "icon": "default",
  "description": "Follow my adventures"
}
```

## How to Add a New Social Link

1. Open `content/social-links.json`
2. Add a new object to the array with the required fields
3. Make sure to add a comma after the previous entry
4. Save the file
5. Refresh your browser to see the changes

Example:
```json
[
  {
    "name": "GitHub",
    "username": "@eric-metcalf",
    "url": "https://github.com/eric-metcalf",
    "icon": "github",
    "description": "Check out my code and projects"
  },
  {
    "name": "NEW PLATFORM",
    "username": "your-username",
    "url": "https://example.com/your-profile",
    "icon": "default",
    "description": "Your description"
  }
]
```

## How to Remove a Social Link

1. Open `content/social-links.json`
2. Delete the entire object for that social link
3. Make sure the JSON is still valid (proper commas, brackets)
4. Save the file
5. Refresh your browser

## How to Reorder Social Links

Simply rearrange the objects in the array. The first item will appear first on your page.

## Adding Custom Icons

If you want to add a custom icon for a new platform:

1. Open `js/social-loader.js`
2. Find the `icons` object at the top of the file
3. Add a new entry with your platform name and SVG code:

```javascript
const icons = {
  github: `...`,
  email: `...`,
  yourplatform: `
    <svg viewBox="0 0 24 24" width="32" height="32">
      <!-- Your SVG path here -->
    </svg>
  `
};
```

4. Use `"icon": "yourplatform"` in your JSON config

## Tips

1. **Keep it simple**: Don't add too many social links - focus on your most important profiles
2. **Test your URLs**: Make sure all URLs are correct before saving
3. **Use HTTPS**: Always use secure URLs (https://) when possible
4. **Valid JSON**: Make sure your JSON is properly formatted (use a JSON validator if needed)
5. **Order matters**: Put your most important links first

## Troubleshooting

**Links not showing up?**
- Check that `content/social-links.json` exists
- Verify the JSON is valid (no missing commas, brackets, or quotes)
- Make sure you're viewing the site through a web server (http://localhost:8000)

**Icon not displaying?**
- Check that the icon name matches one of the available icons
- If using a custom icon, verify the SVG code is correct
- Use "default" as a fallback

**Changes not appearing?**
- Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Clear your browser cache
- Make sure the file is saved

## Fallback Content

If the JSON file fails to load (e.g., when opening files directly without a server), the page will display fallback HTML content with your basic social links. This ensures your contact information is always visible!

