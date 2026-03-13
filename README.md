# VERA Official Website

## Project Structure

The VERA Official Website project is structured as follows:

```
verashading.com/
├── index.html           # Main landing page
├── about.html           # About page
├── services.html        # Services provided
├── contact.html         # Contact form
├── images/             # Directory containing all images used in the site
│   ├── logo.png        # Logo image
│   └── hero.jpg        # Hero image for the landing page
└── css/                # Directory for stylesheets
    └── style.css       # Main stylesheet
```

## Customizing Content

To customize the content of the website:
1. **Edit the HTML files:** Open any of the HTML files in your code editor and change the text and other elements as needed.
2. **Update the styles:** Modify `style.css` in the `css` directory to change the look and feel of the site.

## Modifying Contact Information

To update contact information in the contact form page:
1. Open `contact.html`.
2. Locate the contact information section, which might look something like this:
   ```html
   <p>Email: info@verashading.com</p>
   <p>Phone: (123) 456-7890</p>
   ```
3. Change the email and phone number as required.

## Replacing Images

To replace images used in the website:
1. Navigate to the `images` directory.
2. Replace the existing image files with new images, ensuring the new files have the same names as the originals or update the HTML paths accordingly.

## Configuring Forms with Formspree

To configure forms using Formspree:
1. Sign up at [Formspree](https://formspree.io/).
2. Follow their instructions to create a form and get your project token.
3. In the `contact.html`, replace the form action URL with your Formspree URL:
   ```html
   <form action="https://formspree.io/your-token-here" method="POST">
   ```
4. Update other form attributes as needed per Formspree's documentation.

## Deploying to Netlify

To deploy the VERA Official Website on Netlify:
1. Push your changes to GitHub.
2. Go to [Netlify](https://www.netlify.com/) and sign in or create an account.
3. Click on "New site from Git".
4. Choose your GitHub repository and follow the prompts to deploy.
5. Once deployed, customize your domain settings in Netlify.

## Maintaining the Website

Regularly check for updates and maintain the website by:
- Monitoring contact form submissions via Formspree.
- Keeping the content fresh and updated.
- Ensuring images are optimized for web.
- Regularly testing forms and functionalities.
- Updating dependencies and libraries where applicable.

---

### Note:
Feel free to contribute by forking the repository and submitting pull requests for enhancements!