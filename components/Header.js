import Image from "next/image";

const Header = () => {
  return (
    <>
    <header class="header sticky-bar">
      <div class="container">
        <div class="main-header">
          <div class="header-left">
            <div class="header-logo">
              <a class="d-flex" href="index.html">
                <Image
                  alt="Ecom"
                  src="assets/imgs/template/logo.svg"
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div class="header-nav">
              <nav class="nav-main-menu d-none d-xl-block">
                <ul class="main-menu">
                  <li>
                    <a class="active" href="index.html">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">SEO</a>
                  </li>
                  <li>
                    <a href="#">Tools</a>{" "}
                  </li>
                  <li>
                    <a href="#">Get Free ASO Analysis</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
            
                  </li>
                  <li>
                    <a href="#">Careers</a>
                    
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="contact.html">Terms</a>
                  </li>
                  <li>
                    <a href="contact.html">Privacy</a>
                  </li>
                </ul>
              </nav>
              <div class="burger-icon burger-icon-white">
                <span class="burger-icon-top"></span>
                <span class="burger-icon-mid"></span>
                <span class="burger-icon-bottom"></span>
              </div>
            </div>
            <div class="header-right">                
              <div class="d-none d-sm-inline-block">
                <a class="btn btn-brand-1 hover-up" href="register.html">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* mobile menu */}
    
  </>
  );
};

export default Header;
