document.addEventListener('DOMContentLoaded', function () {
    const moreInfoButtons = document.querySelectorAll('.btn.more-info-button');
  
    moreInfoButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSectionId = button.getAttribute('href');
        scrollToSection(targetSectionId);
      });
    });
  
    // Scroll to Features Section
    const featuresButton = document.querySelector('li a[href="#features"]');
    featuresButton.addEventListener('click', function (event) {
      event.preventDefault();
      const targetSectionId = featuresButton.getAttribute('href');
      scrollToSection(targetSectionId);
    });
  
    // Scroll to FAQ Section
    const faqButton = document.querySelector('li a[href="#faq"]');
    faqButton.addEventListener('click', function (event) {
      event.preventDefault();
      const targetSectionId = faqButton.getAttribute('href');
      scrollToSection(targetSectionId);
    });
  
    function scrollToSection(sectionId) {
      const targetSection = document.querySelector(sectionId);
  
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    const control = document.getElementsByClassName("control");
    const image = document.getElementById("image");
    const heading = document.getElementById("heading");
    const paragraph = document.getElementById("paragraph");
  
    control[0].onclick = function () {
      image.src = "images/illustration-features-tab-1.svg";
      heading.innerHTML = "Intuitive Interaction Design";
      remove();
      this.classList.add("active");
      paragraph.innerHTML = "Experience an intuitive and user-friendly interface designed to make the background check process seamless for individuals and businesses.";
    }
  
    control[1].onclick = function () {
      image.src = "images/illustration-features-tab-2.svg";
      heading.innerHTML = "Intelligent search";
      remove();
      this.classList.add("active");
      paragraph.innerHTML = "Leverage our cutting-edge AI technology powered by advanced algorithms for comprehensive and accurate background check"
    }
  
    control[2].onclick = function () {
      image.src = "images/illustration-features-tab-3.svg";
      heading.innerHTML = "Diverse Application Scenarios";
      remove();
      this.classList.add("active");
      paragraph.innerHTML = "Tailored solutions for individuals with diverse needs, including tenant screening, vendor and supplier due diligence, influencer and brand relationship checks, and adoption agency screening";
    }
  
    // Removes the active class list after clicking another controller
    function remove() {
      for (a of control) {
        a.classList.remove("active");
      }
    }
  
    const controls = document.getElementsByClassName("text");
    const dropMenu = document.getElementsByClassName("drop-down-text");
  
    for (let i = 0; i < controls.length; i++) {
      controls[i].onclick = function () {
        if (dropMenu[i].style.display == "none") {
          dropMenu[i].style.display = "block";
        } else {
          dropMenu[i].style.display = "none";
        }
      }
    }
  
    function validateForm() {
      let email = document.getElementById("email");
      let alert = document.getElementById("alert");
      let form = document.getElementById("formbox");
      let error = document.getElementById("img");
  
      let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;
  
      if (email.value.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        email.style.borderTop = "2px solid hsl(231, 69%, 60%)";
        email.style.borderLeft = "2px solid hsl(231, 69%, 60%)";
        email.style.borderRight = "2px solid hsl(231, 69%, 60%)";
        email.style.borderBottom = "25px solid hsl(231, 69%, 60%)";
        alert.innerHTML = " ";
        error.style.opacity = "0";
        document.getElementById("formbox").reset();
        return true
      } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        email.style.borderTop = "2px solid hsl(0, 94%, 66%)";
        email.style.borderLeft = "2px solid hsl(0, 94%, 66%)";
        email.style.borderRight = "2px solid hsl(0, 94%, 66%)";
        email.style.borderBottom = "25px solid hsl(0, 94%, 66%)";
        alert.innerHTML = "Whoops, make sure it's an email";
        error.style.opacity = "1";
        return false
      }
    }
  
    const menu = document.getElementById("mobileNav");
    const button = document.getElementById("mobileMenu");
    const logo = document.getElementById("logo");
  
    menu.style.display = "none";
  
    button.onclick = function () {
      if (menu.style.display == "none") {
        menu.style.display = "block";
        button.src = "images/icon-close.svg";
        logo.style.filter = "invert(1) brightness(100%)";
        button.style.filter = "invert(0)";
      } else {
        menu.style.display = "none"
        button.src = "images/icon-hamburger.svg";
        logo.style.filter = "invert(0)";
      }
    }
  });