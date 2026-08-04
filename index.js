// template_t0i67u1
//
// XtYd7cGfTqAl0utMG

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_wdekawv",
      "template_t0i67u1",
      event.target,
      "user_XtYd7cGfTqAl0utMG",    
    ).then(() => {
       loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible")
   alert(
    "The email service is temporarily unavailable. Please contact me directly at samvernel268@gmail.com"
   )
})
}