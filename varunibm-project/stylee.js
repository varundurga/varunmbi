let bmiForm = document.querySelector(".bmi-form");
bmiForm.addEventListener("submit", function (e) {
    //to prevent the default form submission
    e.preventDefault();
    //e.target refers to the form that triggered the element
    const form = e.target;

    //access individual form elements using e.target.elements
    const name = form.querySelector("#name").value;

    const height = Number(form.querySelector("#height").value);
    const weight = Number(form.querySelector("#weight").value);

    console.log(name, weight, height);

    //write a logic here
    let heightInMeters = height / 100;
    let bmi=(weight/ heightInMeters ** 2).toFixed(2);
    console.log("bmi",Number(bmi))
    console.log("bmi",bmi);

    let result;

    if (bmi < 18.5) {
       console.log("Underweight");
        result = "Underweight";
    }else if (bmi >= 25 ) {
        console.log("Overweight");
        result = "Overweight";
    } else {
        console.log("normal weight");
        result = "normal weight";
    }
    //logic ends
    // below code after logic
    form.querySelector("#result").textContent = `${name.toUpperCase()}, your are ${result}`;

});
//reset button functionality
//reset button is used to clear the form fields and result
document.querySelector("#reset").addEventListener("click", function (e) {
    bmiForm.querySelector("#name").value = "";
    bmiForm.querySelector("#weight").value = "";
    bmiForm.querySelector("#height").value = "";
    bmiForm.querySelector("#result").textContent = "";
})
