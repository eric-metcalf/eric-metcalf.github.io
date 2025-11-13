# Google Photos Integration Guide

This guide will help you integrate your Google Photos albums into the Adventures section of your website.

## Method 1: Using Shared Album Links (Recommended)

### Step 1: Create a Shared Album
1. Go to [Google Photos](https://photos.google.com)
2. Create an album for each trip/adventure
3. Add photos to the album
4. Click the "Share" button
5. Toggle "Create link" to ON
6. Copy the shared link (e.g., `https://photos.app.goo.gl/xxxxx`)

### Step 2: Get Individual Photo URLs
To display thumbnail images on your website:

1. Open your shared Google Photos album
2. Click on a photo to open it
3. Right-click on the photo and select "Open image in new tab"
4. Copy the URL from the address bar
5. The URL will look something like:
   ```
   https://lh3.googleusercontent.com/pw/[long-string-of-characters]
   ```

### Step 3: Update Your Website
In `index.html`, find the trip card you want to update and:

1. Replace the placeholder image URLs with your Google Photos URLs:
   ```html
   <div class="photo-thumbnails">
     <img src="YOUR_GOOGLE_PHOTO_URL_1" alt="Photo 1" class="thumbnail">
     <img src="YOUR_GOOGLE_PHOTO_URL_2" alt="Photo 2" class="thumbnail">
     <img src="YOUR_GOOGLE_PHOTO_URL_3" alt="Photo 3" class="thumbnail">
     <img src="YOUR_GOOGLE_PHOTO_URL_4" alt="Photo 4" class="thumbnail">
   </div>
   ```

2. Replace the album link:
   ```html
   <a href="YOUR_SHARED_ALBUM_LINK" target="_blank" rel="noopener noreferrer" class="trip-link">View Full Album →</a>
   ```

## Method 2: Using Google Photos Embed (Alternative)

You can also embed entire albums using an iframe:

```html
<div class="trip-card">
  <h3>Trip Name</h3>
  <p class="trip-date">Month Year</p>
  <p class="trip-description">Description here.</p>
  
  <!-- Embedded Google Photos Album -->
  <iframe src="YOUR_GOOGLE_PHOTOS_EMBED_URL" 
          width="100%" 
          height="400" 
          frameborder="0" 
          allowfullscreen>
  </iframe>
  
  <a href="YOUR_ALBUM_LINK" target="_blank" class="trip-link">View Full Album →</a>
</div>
```

## Example Trip Card

Here's a complete example with real structure:

```html
<div class="trip-card">
  <h3>Iceland Adventure</h3>
  <p class="trip-date">September 2024</p>
  <p class="trip-description">Exploring glaciers, waterfalls, and the Northern Lights in Iceland.</p>
  
  <div class="photo-thumbnails">
    <img src="https://lh3.googleusercontent.com/pw/YOUR_PHOTO_1" alt="Glacier" class="thumbnail">
    <img src="https://lh3.googleusercontent.com/pw/YOUR_PHOTO_2" alt="Waterfall" class="thumbnail">
    <img src="https://lh3.googleusercontent.com/pw/YOUR_PHOTO_3" alt="Northern Lights" class="thumbnail">
    <img src="https://lh3.googleusercontent.com/pw/YOUR_PHOTO_4" alt="Landscape" class="thumbnail">
  </div>
  
  <a href="https://photos.app.goo.gl/YOUR_ALBUM_ID" target="_blank" rel="noopener noreferrer" class="trip-link">View Full Album →</a>
</div>
```

## Tips

1. **Number of Photos**: The current design shows 4 thumbnail photos per trip card (2x2 grid). You can add more or fewer by adding/removing `<img>` tags.

2. **Image Quality**: Google Photos URLs can include size parameters. For thumbnails, you might want to append `=w300` to the URL for better performance:
   ```
   https://lh3.googleusercontent.com/pw/[string]=w300
   ```

3. **Privacy**: Make sure your albums are set to "Anyone with the link" if you want them publicly accessible.

4. **Alternative Services**: If you prefer, you can also use:
   - Flickr albums
   - Imgur albums
   - Self-hosted images in an `images/` folder

## Troubleshooting

**Images not loading?**
- Check that the album is shared publicly
- Verify the image URLs are correct
- Try opening the image URL directly in a browser

**Images too large/slow?**
- Add size parameters to Google Photos URLs (e.g., `=w300`, `=w500`)
- Consider using fewer photos per card

**Want more photos per card?**
- Add more `<img>` tags in the `photo-thumbnails` div
- The grid will automatically adjust (currently 2 columns)

## Need Help?

If you need assistance getting your Google Photos integrated, feel free to ask!

