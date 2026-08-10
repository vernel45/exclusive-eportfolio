let isModalOpen = false;
let contrastToggle = false;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX;
  const y = event.clientY;

  for (let i = 0; i < shapes.length; ++i) {
    shapes[i].computedStyleMap.transform = `translate(10%, 10%)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  document.body.classList.toggle("dark-theme");
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm("service_wdekawv", "template_t0i67u1", event.target)
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at samvernel268@gmail.com",
      );
    });
}

function toggleModal() {
  isModalOpen = !isModalOpen;
  document.body.classList.toggle("modal--open");
}
