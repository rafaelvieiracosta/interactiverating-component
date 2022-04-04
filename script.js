function stylesButtonsNumbers() {
  const numbers = document.querySelectorAll(".numbers > button");

  function addStyles() {
    numbers.forEach((number) => {
      number.classList.remove("active");
    });
    this.classList.add("active");
  }

  numbers.forEach((number) => {
    number.addEventListener("click", addStyles);
  });
}
stylesButtonsNumbers();


function submittedStyles() {
  const buttonSubmit = document.querySelector(".before > button");
  buttonSubmit.addEventListener("click", validationNumbers);

  function validationNumbers() {
    const evaluation = document.querySelector(".active");
    if (evaluation) {
      const finalNumber = evaluation.innerHTML;
      const evaluationDiv = document.querySelector(".before");
      const submittedDiv = document.querySelector(".after");
      const spanSubmitted = document.querySelector(".text-submmitted");
      const errorDiv = document.querySelector('.error')
      
      errorDiv.classList.remove('show')
      evaluationDiv.style.display = "none";
      submittedDiv.classList.add("active");
      spanSubmitted.innerHTML = `Você selecionou ${finalNumber} de 5`;
    } else {
      const errorDiv = document.querySelector('.error')
      errorDiv.classList.add('show')
    }
  }
}
submittedStyles();
