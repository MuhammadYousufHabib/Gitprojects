let container = document.querySelector(".container");
let email = document.querySelector(".Email");
let password = document.querySelector(".Password");
let success = document.querySelector(".success");
let failure = document.querySelector(".failure");
let terms = document.querySelector(".terms");
container.addEventListener("click", (event) => {
  if (event.target.classList.contains("Password")) {
    terms.style.display = "block";
    setTimeout(() => {
      terms.style.display = "none ";
    }, 2000);
  }
  if (event.target.classList.contains("btn")) {
    let email1 = email.value;
    let password1 = password.value;

    if (
      /^([a-zA-Z0-9_]{3,50})@([a-zA-Z]{3,10})\.([a-z]{3,5})(\.[a-z]{2,5})?$/.test(
        email1
      ) &&
      /^(?=\S*[\d])(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[^A-Za-z0-9])\S{8,}$/.test(
        password1
      )
    ) {
      success.style.display = "block";
      setTimeout(() => {
        success.style.display = "none";
      }, 1000);
    } else {
      failure.style.display = "block";
      setTimeout(() => {
        failure.style.display = "none";
      }, 1000);
    }
  }
});
