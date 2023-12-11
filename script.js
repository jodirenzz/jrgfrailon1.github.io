var video = document.getElementById("myVideo");
video.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
video.controls = false;
document
  .getElementById("openModalButton")
  .addEventListener("click", function () {
    var modal = document.getElementById("transparentModal");
    modal.style.display = "block";
  });
function openModal() {
  document.getElementById("transparentModal").style.display = "block";
}
function closeModal() {
  var modal = document.getElementById("transparentModal");
  modal.style.display = "none";
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("meter").value = "";
  document.getElementById("feet").value = "";
}

document.getElementById("openModalButton").addEventListener("click", openModal);
document
  .getElementById("openModalButton2")
  .addEventListener("click", openModal2);

function openModal2() {
  document.getElementById("transparentModal2").style.display = "block";
}
function closeModal2() {
  var modal = document.getElementById("transparentModal2");
  modal.style.display = "none";
  document.getElementById("employeeName").value = "";
  document.getElementById("daysWorked").value = "";
  document.getElementById("dailyRate").value = "";
  document.getElementById("deductionAmount").value = "";
  document.getElementById("lineNumber").value = "";
}

document
  .getElementById("openModalButton3")
  .addEventListener("click", openModal3);

function openModal3() {
  document.getElementById("transparentModal3").style.display = "block";
}

function closeModal3() {
  var modal = document.getElementById("transparentModal3");
  modal.style.display = "none";
  document.getElementById("factorial").value = "";
  document.getElementById("input1").value = "";
  document.getElementById("average").value = "";
  document.getElementById("resultF").innerText = "";
  document.getElementById("sum").innerText = "";
  document.getElementById("result").innerText = "";
}

document
  .getElementById("openModalButton4")
  .addEventListener("click", openModal4);

function openModal4() {
  document.getElementById("transparentModal4").style.display = "block";
}

function closeModal4() {
  var modal = document.getElementById("transparentModal4");
  modal.style.display = "none";
  document.getElementById("income").value = "";
  document.getElementById("incomelevel").value = "";
  document.getElementById("beforetax").innerText = "";
  document.getElementById("tax").innerText = "";
  document.getElementById("aftertax").innerText = "";
  document.getElementById("result-income").style.display = "none  ";
}

const celsius = document.querySelector("#celsius"),
  fahrenheit = document.querySelector("#fahrenheit");

window.addEventListener("load", () => celsius.focus());
celsius.addEventListener("input", () => {
  fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
  if (!celsius.value) fahrenheit.value = "";
});

fahrenheit.addEventListener("input", () => {
  celsius.value = ((fahrenheit.value - 32) * 5 + 9).toFixed(2);
  if (!fahrenheit.value) celsius.value = "";
});

const meter = document.querySelector("#meter"),
  feet = document.querySelector("#feet");

window.addEventListener("load", () => meter.focus());
meter.addEventListener("input", () => {
  feet.value = (meter.value * 3.28084).toFixed(2);
  if (!meter.value) feet.value = "";
});

feet.addEventListener("input", () => {
  meter.value = (feet.value / 3.28084).toFixed(2);
  if (!feet.value) meter.value = "";
});

function factorial() {
  var total = 1;
  var i = 1;
  var n = document.getElementById("factorial").value;
  if (n < 0)
    document.getElementById("resultF").innerHTML =
      "Cannot perform factorial on negative numbers.";
  else {
    while (i <= n) {
      total = total * i;
      i++;
    }
    document.getElementById("resultF").innerHTML =
      "Factorial of " +
      document.getElementById("factorial").value +
      " is " +
      total +
      ".";
  }
}

function sum() {
  var n = document.getElementById("input1").value;
  var i = n;
  var total = 0;
  if (n < 0) {
    alert("Please enter a positive integer");
  } else {
    do {
      total = parseInt(total + i);
      i--;
    } while (i >= 1);
  }
  document.getElementById("sum").innerHTML =
    "The sum of " +
    document.getElementById("input1").value +
    " is " +
    total +
    ".";
}

function average() {
  var x = document.getElementById("average").value;
  var i = 1,
    total = 0;
  for (i = 1; i <= x; i++) {
    total = total + i;
  }
  var average = total / (i - 1);
  document.getElementById("result").innerHTML =
    "The average of " +
    document.getElementById("average").value +
    " is " +
    average +
    ".";
}
function calculateTax(income, rate, deduction) {
  var tax = (income - deduction) * rate;
  var profit = income - tax;
  document.getElementById("tax").innerHTML = tax.toFixed(2);
  document.getElementById("aftertax").innerHTML = profit.toFixed(2);
}
document
  .getElementById("incomelevel")
  .addEventListener("click", function incomelevel() {
    var income = parseFloat(document.getElementById("income").value);
    document.getElementById("beforetax").innerHTML = income.toFixed(2);

    if (!isNaN(income) && income >= 0) {
      if (income <= 250000) {
        document.getElementById("tax").innerHTML = "0";
        document.getElementById("aftertax").innerHTML = income.toFixed(2);
      } else if (income <= 400000) {
        calculateTax(income, 0.2, 250000);
      } else if (income <= 800000) {
        calculateTax(income, 0.25, 400000);
      } else if (income <= 2000000) {
        calculateTax(income, 0.3, 800000);
      } else if (income <= 8000000) {
        calculateTax(income, 0.32, 2000000);
      } else {
        calculateTax(income, 0.35, 8000000);
      }
    } else {
      alert("Please enter a valid annual income");
    }
    displayresultincome();
  });
function displayresultincome() {
  document.getElementById("result-income").style.display = "block";
}

function closeModaldel() {
  document.getElementById("openModaldel").style.display = "none";
  document.getElementById("confirmationModal").style.display = "none";
}

document
  .getElementById("deleteEmployee")
  .addEventListener("click", function () {
    openModal5();
  });

document.getElementById("confirmDelete").addEventListener("click", function () {
  const lineNumber = parseInt(document.getElementById("lineNumber").value);

  if (lineNumber >= 1 && lineNumber <= payrollList.length) {
    payrollList.splice(lineNumber - 1, 1);
    document.getElementById("lineNumber").value = "";
    displayPayrollTable();
    closeModaldel();
  } else {
    document.getElementById("lineNumber").value = "";
    alert("Invalid line number.");
    closeModaldel();
  }
});

document.getElementById("cancelDelete").addEventListener("click", function () {
  document.getElementById("lineNumber").value = "";
  closeModaldel();
});

function openModal5() {
  document.getElementById("openModaldel").style.display = "block";
  document.getElementById("confirmationModal").style.display = "block";
}

let payrollList = [];

function calculatePay(daysWorked, dailyRate, deductionAmount) {
  const grossPay = daysWorked * dailyRate;
  const netPay = grossPay - deductionAmount;
  return { grossPay, netPay };
}

function displayPayrollTable() {
  const tableDiv = document.getElementById("payrollTable");
  tableDiv.innerHTML = "<h3>Payroll List</h3>";
  const table = document.createElement("table");

  const headerRow = table.insertRow(0);
  headerRow.innerHTML =
    "<th>No.</th><th>Employee Name</th><th>Days Worked</th><th>Daily Rate</th><th>Gross Pay</th><th>Deduction Amount</th><th>Net Pay</th>";

  payrollList.forEach((employee, index) => {
    const { daysWorked, dailyRate, deductionAmount } = employee;
    const { grossPay, netPay } = calculatePay(
      daysWorked,
      dailyRate,
      deductionAmount
    );

    const row = table.insertRow(index + 1);
    row.innerHTML = `<td>${index + 1}</td><td>${employee.name}</td>
      <td>${daysWorked}</td><td>${dailyRate}</td><td>${grossPay}</td>
      <td>${deductionAmount}</td><td>${netPay}</td>`;
  });

  tableDiv.appendChild(table);
}

document
  .getElementById("addEmployee")
  .addEventListener("click", function addEmployee() {
    const name = document.getElementById("employeeName").value;
    document.getElementById("employeeName").value = "";
    document.getElementById("daysWorked").value = "";
    document.getElementById("dailyRate").value = "";
    document.getElementById("deductionAmount").value = "";
    document.getElementById("lineNumber").value = "";
    const daysWorked = parseInt(document.getElementById("daysWorked").value);
    const dailyRate = parseInt(document.getElementById("dailyRate").value);
    const deductionAmount = parseInt(
      document.getElementById("deductionAmount").value
    );
    payrollList.push({ name, daysWorked, dailyRate, deductionAmount });
    displayPayrollTable();
  });
