class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1F2937;
          color: white;
          padding: 4rem 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1rem;
          display: block;
        }
        .footer-links h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #9CA3AF;
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        .footer-links a {
          color: #E5E7EB;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: white;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: #9CA3AF;
          transition: color 0.2s;
        }
        .social-links a:hover {
          color: white;
        }
        .copyright {
          text-align: center;
          padding-top: 3rem;
          margin-top: 3rem;
          border-top: 1px solid #374151;
          color: #9CA3AF;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div>
            <a href="#" class="footer-logo">OLHET</a>
            <p class="text-gray-400">The modern Guest Journey Platform for hotels.</p>
            <div class="social-links">
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
            </div>
          </div>
          
          <div class="footer-links">
            <h3>Product</h3>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Updates</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">API Docs</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <div class="copyright">
          &copy; ${new Date().getFullYear()} OLHET. All rights reserved.
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);