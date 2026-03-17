import { Link } from 'react-router-dom';

const footerLinks = {
  'Quick Links': [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
  'Collections': [
    { name: 'Living Room', path: '/collections/living-room' },
    { name: 'Dining Room', path: '/collections/dining-room' },
    { name: 'Bedroom', path: '/collections/bedroom' },
    { name: 'Office', path: '/collections/office' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-luxury py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-display tracking-[0.2em] uppercase text-background block mb-6">
              Edition
            </Link>
            <p className="text-sm leading-relaxed text-background/60 max-w-xs">
              Crafting timeless furniture for modern living. Each piece is a testament to the enduring beauty of thoughtful design.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="label-text text-background mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-background/60 hover:text-accent transition-colors duration-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="label-text text-background mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li>+1 (555) 234-5678</li>
              <li>info@edition-furniture.com</li>
              <li>
                42 Design District<br />
                New York, NY 10013
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Edition. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-background/40 hover:text-accent transition-colors duration-400 uppercase tracking-luxury"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
