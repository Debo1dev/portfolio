class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      <div class="nav-bar">
        <div class="logo">
          <a href="index.html">
            <img src="../Img/logo.png" alt="" />
          </a>
        </div>

        <div>
          <ul class="action-btn">
            <li class="home-btn">
              <a class="home nav-link" href="../home page/home.html">
                <img src="../icons/home.svg" alt="" />
              </a>
            </li>

            <li class="about-btn">
              <a class="about nav-link" href="../about page/about.html">
                <img src="../icons/about.svg" alt="" />
              </a>
            </li>

            <li class="project-btn">
              <a class="project nav-link" href="../projects page/projects.html">
                <img src="../icons/project.svg" alt="" />
              </a>
            </li>

            <li class="resume-btn">
              <a
                class="resume nav-link"
                href="https://drive.google.com/file/d/1YkUxM6veAf6wR1wfTCIdq2KVPjm-6uHz/view?usp=drive_link"
                target="newWindow"
              >
                <img src="../icons/resume.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <li class="contact">
            <a class="contact-btn" href="#">
              Contact me
            </a>
          </li>
        </div>
      </div>
    );
  }
}

customElements.define("nav - bar", Navbar);
