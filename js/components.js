/* ============================================================
   VERANDA HOTELS — JS COMPONENTS (Header, Footer, Tabs)
   ============================================================ */

/* ─── Mandala / Leaf Icon SVG ────────────────────────────────── */
const mandalaSVG = `
<svg class="logo-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer rings -->
  <circle cx="40" cy="40" r="36" stroke="#C9A84C" stroke-width="1" fill="none"/>
  <circle cx="40" cy="40" r="32" stroke="#8B4513" stroke-width="0.5" fill="none" opacity="0.5"/>
  <!-- Elegant Serif V -->
  <text x="40" y="52" font-family="'Cormorant Garamond', serif" font-size="40" font-style="italic" fill="#5C3320" text-anchor="middle" letter-spacing="-0.05em">V</text>
  <!-- Decorative side dots -->
  <circle cx="20" cy="40" r="1.5" fill="#C9A84C"/>
  <circle cx="60" cy="40" r="1.5" fill="#C9A84C"/>
  <!-- Top and bottom accents -->
  <path d="M 40 18 L 42 22 L 38 22 Z" fill="#C9A84C" opacity="0.8"/>
  <path d="M 40 62 L 42 58 L 38 58 Z" fill="#C9A84C" opacity="0.8"/>
</svg>
`;

/* ─── Header HTML ─────────────────────────────────────────────── */
function getHeaderHTML(activePage = '') {
  const navItems = [
    { label: 'Resorts',    href: 'index.html#locations' },
    { label: 'Offers',     href: 'offers.html' },
    { label: 'Events',     href: 'events.html' },
    { label: 'Weddings',   href: 'weddings.html' },
    { label: 'Dining',     href: 'dining.html' },
    { label: 'Wellness',   href: 'wellness.html' },
    { label: 'Meetings',   href: 'meetings.html' },
  ];

  const navLinks = navItems.map(item =>
    `<li><a href="${item.href}" class="header-nav__link">${item.label}</a></li>`
  ).join('');

  return `
    <!-- Trust Bar -->
    <div class="trust-bar" id="trust-bar">
      Please be cautious of fraudulent websites. This is <strong>VERANDA'S</strong> official website, and the Central Reservation contact number is <strong>+91 80 4747 4747</strong>.
    </div>

    <!-- Sticky Header -->
    <header class="site-header" id="site-header">
      <!-- Logo Panel -->
      <a href="index.html" class="header-logo">
        ${mandalaSVG}
        <span class="logo-wordmark">Veranda</span>
        <span class="logo-tagline">Hotels &amp; Resorts</span>
      </a>

      <!-- Primary Nav -->
      <nav class="header-nav" aria-label="Primary navigation">
        <ul class="header-nav__list" id="nav-list">
          ${navLinks}
        </ul>
        <!-- Hamburger -->
        <button class="header-nav__hamburger" id="hamburger-btn" aria-label="Open menu" style="margin-left: auto;">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <!-- Right: Phone + CTA -->
      <div class="header-right">
        <span class="header-right__phone">Central Reservation: +91 80 4747 4747</span>
        <a href="booking.html" class="btn-book" id="book-stay-btn">
          Book Your Stay
        </a>
      </div>
    </header>

    <!-- Mobile Nav Drawer -->
    <div class="nav-drawer-overlay" id="nav-overlay"></div>
    <nav class="nav-drawer" id="nav-drawer" aria-label="Mobile navigation">
      <button class="nav-drawer__close" id="nav-close-btn" aria-label="Close menu">&times;</button>

      <!-- Book CTA inside drawer (visible when header button is hidden at ≤900px) -->
      <a href="booking.html" style="
        display:flex;align-items:center;justify-content:center;gap:8px;
        background:var(--clr-button);color:white;
        font-family:var(--font-heading);font-size:0.7rem;font-weight:700;
        letter-spacing:0.15em;text-transform:uppercase;
        padding:12px 20px;border-radius:4px;margin-bottom:1rem;
        position:relative;
      ">
        BOOK YOUR STAY &rsaquo;
        <span style="position:absolute;bottom:-3px;left:0;right:0;height:3px;background:var(--clr-accent);border-radius:0 0 2px 2px;"></span>
      </a>

      ${navItems.map(item => `<a href="${item.href}" class="nav-drawer__link">${item.label.toUpperCase()}</a>`).join('')}
      <a href="#" class="nav-drawer__link">AWARDS</a>
      <a href="#" class="nav-drawer__link">GROWTH STORY</a>
      <a href="#" class="nav-drawer__link">PRESS</a>
      <a href="#" class="nav-drawer__link">BLOGS</a>
      <a href="#" class="nav-drawer__link">PARTNER PROGRAM</a>
      <a href="#" class="nav-drawer__link">ABOUT US</a>
      <a href="#" class="nav-drawer__link">CAREERS</a>
      <a href="#" class="nav-drawer__link">CONTACT US</a>
    </nav>
  `;
}

/* ─── Footer HTML ─────────────────────────────────────────────── */
function getFooterHTML() {
  const destinations = [
    'Bhubaneswar','Coorg','Goa','Jaipur','Jungpana','Kolkata',
    'Mumbai','Raipur','Shimla','Udaipur','Varanasi','Vizag'
  ];

  const links = [
    { label: 'Home', href: 'index.html' },
    { label: 'Resorts', href: 'index.html#locations' },
    { label: 'Offers', href: 'offers.html' },
    { label: 'Events', href: 'events.html' },
    { label: 'Weddings', href: 'weddings.html' },
    { label: 'Dining', href: 'dining.html' },
    { label: 'Wellness', href: 'wellness.html' },
    { label: 'Meetings', href: 'meetings.html' },
    { label: 'Contact Us', href: '#' },
    { label: 'About Us', href: 'index.html#about' },
    { label: 'Careers', href: '#' }
  ];

  return `
    <footer class="site-footer" id="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Destinations -->
          <div class="footer-col">
            <h4 class="footer-col__heading">Destinations</h4>
            <ul class="footer-col__list">
              ${destinations.map(d => `<li><a href="#" class="footer-col__link">${d}</a></li>`).join('')}
            </ul>
          </div>

          <!-- Links -->
          <div class="footer-col">
            <h4 class="footer-col__heading">Links</h4>
            <ul class="footer-col__list">
              ${links.map(l => `<li><a href="${l.href}" class="footer-col__link">${l.label}</a></li>`).join('')}
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h4 class="footer-col__heading">Contact Details</h4>
                <span class="footer-contact__text">+91 80 4747 4747</span>
              </div>
              <div class="footer-contact__item">
                <svg class="footer-contact__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span class="footer-contact__text">
                  reservations@verandahotels.com<br>
                  www.verandahotels.com
                </span>
              </div>
            </div>
          </div>

          <!-- Brand + Socials -->
          <div class="footer-col">
            <div class="footer-brand">
              <div>
                <div class="footer-logo-mark">VERANDA</div>
                <div class="footer-logo-tag">Hotels &amp; Resorts</div>
              </div>
              <p style="font-size:0.82rem;line-height:1.7;color:rgba(255,255,255,0.5);max-width:220px;">
                Crafting unforgettable journeys across India's most breathtaking landscapes since 1989.
              </p>
              <div class="footer-socials">
                <!-- Instagram -->
                <a href="#" class="footer-social" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <!-- Facebook -->
                <a href="#" class="footer-social" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <!-- YouTube -->
                <a href="#" class="footer-social" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                    <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <!-- X/Twitter -->
                <a href="#" class="footer-social" aria-label="X (Twitter)">
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.849l4.255 5.625zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="footer-bottom">
          <p class="footer-bottom__text">
            &copy; ${new Date().getFullYear()} Veranda Hotels &amp; Resorts Pvt. Ltd. All rights reserved.
          </p>
          <p class="footer-bottom__text">
            <a href="#" style="color:inherit;margin-right:16px;">Privacy Policy</a>
            <a href="#" style="color:inherit;margin-right:16px;">Terms of Use</a>
            <a href="#" style="color:inherit;">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  `;
}

/* ─── Fixed UI Elements ───────────────────────────────────────── */
function getContactTabHTML() {
  return `<a href="meetings.html" class="contact-tab" id="contact-tab">Contact Us</a>`;
}

function getScrollTopHTML() {
  return `
    <button class="scroll-top" id="scroll-top-btn" aria-label="Scroll to top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  `;
}

/* ─── Render ─────────────────────────────────────────────────── */
function renderComponents(activePage = '') {
  // Force scroll to top on page load/refresh
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  // Header + Trust Bar
  const headerWrapper = document.getElementById('header-wrapper');
  if (headerWrapper) headerWrapper.innerHTML = getHeaderHTML(activePage);

  // Footer
  const footerWrapper = document.getElementById('footer-wrapper');
  if (footerWrapper) footerWrapper.innerHTML = getFooterHTML();

  // Contact Tab
  const tabWrapper = document.getElementById('contact-tab-wrapper');
  if (tabWrapper) tabWrapper.innerHTML = getContactTabHTML();

  // Scroll to top
  const scrollWrapper = document.getElementById('scroll-top-wrapper');
  if (scrollWrapper) scrollWrapper.innerHTML = getScrollTopHTML();

  initNavDrawer();
  initScrollTop();
  initScrollReveal();
}

/* ─── Nav Drawer Behavior ────────────────────────────────────── */
function initNavDrawer() {
  const hamburger = document.getElementById('hamburger-btn');
  const drawer    = document.getElementById('nav-drawer');
  const overlay   = document.getElementById('nav-overlay');
  const closeBtn  = document.getElementById('nav-close-btn');

  function openDrawer() {
    drawer?.classList.add('is-open');
    overlay?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('is-open');
    overlay?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);
}

/* ─── Scroll to Top ──────────────────────────────────────────── */
function initScrollTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── Intersection Observer Reveal ───────────────────────────── */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}
