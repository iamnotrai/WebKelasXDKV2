const animates = document.querySelectorAll('.animate');

function handleScroll() {
  const trigger = window.innerHeight * 0.85;

  animates.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', handleScroll);

// trigger awal
window.addEventListener('load', () => {
  handleScroll();
});

window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// reset animasi pas klik navbar + smooth scroll
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });

      const animEls = targetEl.querySelectorAll('.animate');
      animEls.forEach(el => {
        el.classList.remove('show');
        setTimeout(() => {
          el.classList.add('show');
        }, 150);
      });
    }
    navMenu.classList.remove("active");
  });
});

// modal (ditambah close kalau klik luar)
function showModal(jabatan, nama, fotos) {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";

  document.getElementById("modal-title").innerText = jabatan;
  document.getElementById("modal-text").innerText = nama;

  const imgContainer = document.getElementById("modal-img");
  
  // reset dulu
  imgContainer.innerHTML = "";

  fotos.forEach(foto => {
    const img = document.createElement("img");
    img.src = foto;
    imgContainer.appendChild(img);
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".ul-navbar");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}