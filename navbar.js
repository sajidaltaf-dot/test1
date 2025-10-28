class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .logo {
          color: #4F46E5;
          font-weight: bold;
          font-size: 1.5rem;
          letter-spacing: -0.5px;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #1F2937;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
        }
        a:hover {
          color: #4F46E5;
        }
        .cta-btn {
          background: #4F46E5;
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 0.375rem;
          transition: background 0.2s;
        }
        .cta-btn:hover {
          background: #4338CA;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #1F2937;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <div class="logo">OLHET</div>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul>
          <li><a href="#">Product</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#" class="cta-btn">Get Started</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);