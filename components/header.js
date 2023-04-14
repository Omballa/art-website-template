class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <style>
        nav {
          background-color:  #0a0a23;
          padding
        }

        .desktopNav {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          padding: 20px 50px;
        }

        #mobileNav {
          background-color:  #0a0a23;
          padding: 10px 0px;
          display:none;
        }
        
        ul li {
            list-style-type: none;
            display: inline;
        } 
        a {
          font-weight: 600;
          font-size: 14px;
          margin: 0 15px;
          color: #fff;
          text-decoration: none;
        }

        .nav-link-desktop {
          display: none;
        }

        .nav-link-mobile {
          display:block;
          margin: 5px 30px;
          padding: 10px 0px;
          border-bottom: 1px solid #fff;
        }

        @media only screen and (min-width: 768px) {
            .nav-link-desktop{
                display: inline;
            }

            a:hover {
              font-weight: 700;
              font-size: 16px;
              padding-bottom: 5px;
              box-shadow: inset 0 -1px 0 0 #fff;
            }
        }
      </style>

      <header>
        <nav>
          <div class="desktopNav">
            <ul>
              <li style="border: 1px solid #fff; padding: 10px 0;"><a href="/">A</a></li>
              <li class="nav-link-desktop"><a href="/">HOME</a></li>
              <li class="nav-link-desktop"><a href="work.html">EVENTS</a></li>
              <li class="nav-link-desktop"><a href="contact.html">SHOP</a></li>
              <li class="nav-link-desktop"><a href="contact.html">BLOG</a></li>
            </ul>
            <div class="right-side">
              <button type="button" style="background-color: transparent; border: 1px solid #fff; padding: 10px 15px; color: #fff; font-size: 15px;" class="nav-link-desktop">SHOP NOW</button>
              <button type="button" onclick="handleMobileNav()" style="background-color: transparent; border: 0px"><span style="color: #fff; font-size: 25px;" class="fa-solid fa-bars"></span></button>
            </div>
          </div>
          <div id="mobileNav">
            <ul>
              <li class="nav-link-mobile"><a href="/">HOME</a></li>
              <li class="nav-link-mobile"><a href="work.html">EVENTS</a></li>
              <li class="nav-link-mobile"><a href="contact.html">SHOP</a></li>
              <li class="nav-link-mobile"><a href="contact.html">BLOG</a></li>
            <ul>
          <div>
        </nav>
        
      </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);