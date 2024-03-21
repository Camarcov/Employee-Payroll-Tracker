// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray = [];
  let addEmployee = true

  while (addEmployee) {
    const employeeObj = { //employee as an object
      firstName: prompt("Employee's first name"),
      lastName: prompt("Employee's last Name"),
      salary: Number(prompt("Employee's salary")), //requests a number, if not is set to nan
    };

    if (isNaN(employeeObj.salary)) { //checks if employee salary is a number, if not sets it to 0
      employeeObj.salary = 0;
    } else {
      employeeObj.salary = employeeObj.salary
    };

    employeesArray.push(employeeObj); //adds employeeObj to employeesArray
    addEmployee = window.confirm("Add another employee?");

  }
  displayAverageSalary(employeesArray)
  return employeesArray
}

// Display the average salary
const displayAverageSalary = function (employees) {
  // TODO: Calculate and display the average salary
  let salArray = employees.map(a => a.salary);
  let sum = 0;
  for (let i = 0; i < salArray.length; i++) {
    sum += salArray[i];
  }
  console.log(sum / salArray.length + ` is the average Salary of our ${employees.length} employees`)
}

// Select a random employee
const getRandomEmployee = function (employees) {
  // TODO: Select and display a random employee
  const index = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[index];

  console.log(`${randomEmployee.firstName} ${randomEmployee.lastName} was selected randomly`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
