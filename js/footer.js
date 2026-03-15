(function () {
  const footerContainer = document.getElementById("site-footer");
  if (!footerContainer) return;

  const year = new Date().getFullYear();

  footerContainer.innerHTML = `
    <footer class="ftco-footer ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About Me</h2>
              <p>Coder & Explorer</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="https://twitter.com/Madhumita_Moi"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="https://www.instagram.com/madhumitamoi/"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Information</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">Portfolio</a></li>
                <li><a href="#" class="py-2 d-block">Privacy</a></li>
                <li><a href="#" class="py-2 d-block">Terms Condition</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Links</h2>
              <ul class="list-unstyled">
                <li><a href="/" class="py-2 d-block">Home</a></li>
                <li><a href="/about.html" class="py-2 d-block">About</a></li>
                <li><a href="/contact.html" class="py-2 d-block">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Have a Questions?</h2>
              <div class="block-23 mb-3">
                <ul>
                  <li>
                    <span class="icon icon-map-marker"></span>
                    <span class="text">Durgapur, West Bengal, India</span>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon icon-phone"></span>
                      <span class="text">+91 9064806467</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon icon-envelope"></span>
                      <span class="text">madhumitamoi.nita@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p>Copyright &copy; ${year} Madhumita Moi</p>
          </div>
        </div>
      </div>
    </footer>
  `;
})();
