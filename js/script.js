let firstName = document.getElementById("name");
let lastName = document.getElementById("lastname");
let result = document.getElementById("result");
let calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", function () {
  let firstName = document.getElementById("name").value;
  let lastName = document.getElementById("lastname").value;
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value / 100);
  let BMICalculate = weight / (height * height);
  console.log(`BMI : ${BMICalculate}`);
  if (BMICalculate <= 18.5) {
    result.innerHTML = `${firstName} ${lastName} عزیز، شما کاهش وزن دارید `;
    result.classList.remove()
    result.classList.add("low");
  } else if (18.5 < BMICalculate && BMICalculate <= 24.9) {
    result.innerHTML = `${firstName} ${lastName} عزیز، شما وزن معمولی دارید `;
    result.classList.remove()
    result.classList.add("medium");
  } else if (24.9 < BMICalculate && BMICalculate <= 29.9) {
    result.innerHTML = `${firstName} ${lastName} عزیز، شما وزن بالایی دارید `;
    result.classList.remove()
    result.classList.add("high");
  } else if (30.0 <= BMICalculate && BMICalculate <= 34.9) {
    result.innerHTML = `${firstName} ${lastName} عزیز، شما اضافه وزن دارید `;
    result.classList.remove()
    result.classList.add("soHigh");
  } else if (BMICalculate >= 35) {
    result.innerHTML = `${firstName} ${lastName} عزیز، شما چاق هستید `;
    result.classList.remove()
    result.classList.add("overweight");
  }
  if (firstName === "" || lastName === "" || weight === "" || height === "") {
    alert("لطفا همه ی مقدار ها را وارد کنید");
    result.innerHTML = `رفرش کنید f5 + ctrl لطفا صفحه را با`;
  }
  if (typeof weight === "string" || typeof height === "string") {
    alert("لطفا وزن و قد را به درستی وارد کنید");
    result.innerHTML = `رفرش کنید f5 + ctrl لطفا صفحه را با`;
  }
});
