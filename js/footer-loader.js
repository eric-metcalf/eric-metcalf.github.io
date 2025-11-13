// Footer Loader - Dynamically loads footer from JSON config

// GitHub icon SVG
const githubIcon = `<svg viewBox="0 0 16 16"><path fill="#828282" d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"/></svg>`;

// LinkedIn icon SVG
const linkedinIcon = `<svg viewBox="0 0 16 16"><path fill="#828282" d="M13.632,13.635h-2.37V9.922c0-0.886-0.018-2.025-1.234-2.025c-1.235,0-1.424,0.964-1.424,1.96v3.778h-2.37V6H8.51v1.04h0.03c0.318-0.6,1.092-1.233,2.247-1.233c2.4,0,2.845,1.58,2.845,3.637v4.188zM3.558,4.955c-0.762,0-1.376-0.617-1.376-1.377c0-0.758,0.614-1.375,1.376-1.375c0.76,0,1.376,0.617,1.376,1.375C4.934,4.338,4.318,4.955,3.558,4.955zM4.743,13.635H2.37V6h2.373V13.635zM14.816,0H1.18C0.528,0,0,0.516,0,1.153v13.694C0,15.484,0.528,16,1.18,16h13.635c0.652,0,1.185-0.516,1.185-1.153V1.153C16,0.516,15.467,0,14.815,0H14.816z"/></svg>`;

// Twitter/X icon SVG
const twitterIcon = `<svg viewBox="0 0 16 16"><path fill="#828282" d="M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"/></svg>`;

// Email icon SVG
const emailIcon = `<svg viewBox="0 0 16 16"><path fill="#828282" d="M0,3v10c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3c0-0.55-0.45-1-1-1H1C0.45,2,0,2.45,0,3z M14.5,3L8,6.78L1.5,3H14.5z M1,12V4.42l6.65,4.01c0.2,0.12,0.5,0.12,0.7,0L15,4.42V12H1z"/></svg>`;

// Strava icon SVG
const stravaIcon = `<svg viewBox="0 0 16 16"><path fill="#828282" d="M6.731 0L2 9.125h2.788L6.73 5.497l1.93 3.628h2.766L6.731 0zm4.694 9.125l-1.372 2.756L8.66 9.125H6.547L10.053 16l3.484-6.875h-2.112z"/></svg>`;

// Resume/Download icon SVG
const resumeIcon = `<svg viewBox="0 0 16 16"><path fill="#828282" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path fill="#828282" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>`;

// Get icon for platform
function getIconForPlatform(platform) {
  const icons = {
    'github': githubIcon,
    'linkedin': linkedinIcon,
    'twitter': twitterIcon,
    'x': twitterIcon,
    'email': emailIcon,
    'strava': stravaIcon,
    'resume': resumeIcon,
    'download': resumeIcon
  };
  return icons[platform.toLowerCase()] || '';
}

// Load and render footer
async function loadFooter() {
  try {
    // Load footer config (includes social links)
    const response = await fetch('content/footer-config.json');
    const config = await response.json();

    console.log('Footer config loaded:', config);
    console.log('Social links:', config.socialLinks);

    // Build social media links HTML (horizontal layout - icons only)
    let socialLinksHTML = '';
    if (config.socialLinks && config.socialLinks.length > 0) {
      config.socialLinks.forEach(link => {
        const icon = getIconForPlatform(link.icon);
        // Resume/download links don't need target="_blank"
        const isResume = link.icon === 'resume' || link.icon === 'download';
        const targetAttr = isResume ? '' : 'target="_blank" rel="noopener noreferrer"';

        socialLinksHTML += `
          <a href="${link.url}" ${targetAttr} class="social-link" title="${link.name}">
            <span class="icon">${icon}</span>
          </a>
        `;
      });
    } else {
      console.error('No social links found in config');
    }

    // Get current year for copyright
    const currentYear = new Date().getFullYear();

    // Build complete footer HTML
    const footerHTML = `
      <div class="wrapper">
        <div class="footer-content">
          <div class="footer-left">
            <p class="footer-name">${config.name}</p>
            <p class="footer-copyright">&copy; ${currentYear} All rights reserved.</p>
          </div>

          <div class="footer-right">
            <div class="social-links-horizontal">
              ${socialLinksHTML}
            </div>
          </div>
        </div>
      </div>
    `;

    // Insert footer HTML
    const footerElement = document.querySelector('.site-footer');
    if (footerElement) {
      footerElement.innerHTML = footerHTML;
    }
    
  } catch (error) {
    console.error('Error loading footer:', error);
    // Footer fallback content is already in HTML
  }
}

// Load footer when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFooter);
} else {
  loadFooter();
}

