(function () {
  const footerContainer = document.getElementById("site-footer");
  if (!footerContainer) return;

  const year = new Date().getFullYear();

  footerContainer.innerHTML = `
    <footer class="ftco-footer ftco-section">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About Me</h2>
              <p>
                Software Engineer who loves building scalable products and
                exploring the world one journey at a time.
              </p>
              <ul class="ftco-footer-social list-unstyled justify-content-center d-flex mt-4 mb-3">
                <li class="ftco-animate"><a href="https://www.linkedin.com/in/madhumita-moi/" target="_blank" rel="noopener noreferrer"><span class="icon-linkedin"></span></a></li>
                <li class="ftco-animate"><a href="https://github.com/Madhumitamoi" target="_blank" rel="noopener noreferrer"><span class="icon-github"></span></a></li>
                <li class="ftco-animate"><a href="https://twitter.com/Madhumita_Moi" target="_blank" rel="noopener noreferrer"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="https://www.instagram.com/beach.to.bluff/" target="_blank" rel="noopener noreferrer"><span class="icon-instagram"></span></a></li>
              </ul>
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
