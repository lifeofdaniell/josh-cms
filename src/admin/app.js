import AuthLogo from './extensions/webclip.png';
import MenuLogo from './extensions/webclip.png';
import favicon from './extensions/favicon.png';

export default {
  config: {
      // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        primary100: '#efefef',
        primary200: '#d3d3d3',
        primary500: '#a0a0a0',
        primary600: '#6b6b6b',
        primary700: '#202020',
        danger700: '#d84141'
      },
    },
     // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: false },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "Josh's Portfolio",
        "app.components.HomePage.welcome": "Welcome to your Portfolio Content Editor 👋",
        "app.components.HomePage.welcome.again": "Welcome to your Portfolio Content Editor 👋"
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
