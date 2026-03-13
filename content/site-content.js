const SITE_CONFIG = {
  brand: {
    name: "Verashading",
    logo: "path/to/logo.png",
    tagline: "The Best Shades for Your Space"
  },
  contact: {
    email: "contact@verashading.com",
    phone: "123-456-7890",
    address: "123 Shade St, Shade City, SC 12345"
  },
  formEndpoints: {
    contactForm: "/api/contact",
    quoteRequest: "/api/quote"
  },
  products: [
    {
      id: 1,
      name: "Premium Shades",
      price: 199.99,
      description: "High-quality shades for every home.",
      image: "path/to/product1.png"
    },
    {
      id: 2,
      name: "Eco-Friendly Shades",
      price: 149.99,
      description: "Sustainably sourced shades that look great.",
      image: "path/to/product2.png"
    }
  ],
  dealerRequirements: {
    minOrderQuantity: 10,
    applicationLink: "https://verashading.com/dealer-application"
  },
  socialMedia: {
    facebook: "https://facebook.com/verashading",
    instagram: "https://instagram.com/verashading",
    twitter: "https://twitter.com/verashading"
  },
  seo: {
    title: "Verashading - The Best Shades for Your Space",
    description: "Discover premium and eco-friendly shading solutions for your home.",
    keywords: ["shades", "blinds", "window coverings", "interior design"]
  }
};

export default SITE_CONFIG;