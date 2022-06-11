const firm = new Company();
const submit = document.querySelector(".submit-button");
const icon = document.querySelector(".close-icon");
printStats();
//Event Keyboard
addEventListener("keydown", (e) => {
  if (e.key === "Enter") addPersons();
  //потом сделаю и для модалки
});

//Event Mouse
addEventListener("click", (e) => {
  if (e.target === addPerson) addPersons();

  if(e.target===submit){
    personId.value=editId.value.trim();
    firstName.value=editFirst.value.trim();
    lastName.value=editLast.value.trim();
    age.value=editAge.value.trim();
    salary.value=editSalary.value.trim();
    document.querySelector(".modal-wrapper").style.display = "none";
    editId.value=editFirst.value=editLast.value=editAge.value=editSalary.value='';
     addPersons();
  }
  if(e.target===icon) document.querySelector(".modal-wrapper").style.display = "none";
});


//Add Persons
function addPersons() {
  const [id, fName, lName, Age, Salary] = [personId.value.trim(),firstName.value.trim(),lastName.value.trim(),age.value.trim(),salary.value.trim()];
  if (id && fName && lName && Age && Salary) {
    const person = new Employee(id, fName, lName, Age, Salary);
    if (firm.addEmployee(person)) {
      const buttonDel = document.createElement('button');
            buttonDel.classList.add('fa');
            buttonDel.classList.add('fa-trash');

      const buttonEdit = document.createElement('button');
            buttonEdit.classList.add('fa');
            buttonEdit.classList.add('fa-pencil');

          const tr = document.createElement('tr');// main block table

          tr.appendChild(createInfoElement(`${person.id}`,'td'));
          tr.appendChild(createInfoElement(`${person.firstName}`,'td'));
          tr.appendChild(createInfoElement(`${person.lastName}`,'td'));
          tr.appendChild(createInfoElement(`${person.age}`,'td'));
          tr.appendChild(createInfoElement(`${person.salary}`,'td'));
          tr.appendChild(buttonDel);
          tr.appendChild(buttonEdit);
          personsList.append(tr);

      addEventListener("click", (e) => {
        // button delete
        if (e.target === buttonDel) {
          const index = firm.employees.findIndex((item) => item.id === person.id);
          firm.removeEmployee(firm.employees[index].id);
          e.target.parentElement.remove();
          printStats();
        }
        // button edit
        if (e.target === buttonEdit) {
          const index = firm.employees.findIndex((item) => item.id === person.id);
           
            document.querySelector(".modal-wrapper").style.display = "flex";

            editId.value = id;
            editFirst.value = fName;
            editLast.value = lName;
            editAge.value = Age;
            editSalary.value = Salary;
            e.target.parentElement.remove();
            firm.removeEmployee(firm.employees[index].id);

            printStats();
        }
      });
    } else {
      alert(`Person with id = ${id} exists`);
    }
  } else alert("Enter all date");
  printStats();
  personId.value =firstName.value =lastName.value =age.value =salary.value ="";
}

//Print Statistic
function printStats() {
  delStats();

  const tr = document.createElement("tr"); // main block
  //MAX
  tr.appendChild(createInfoElement(`${firm.maxAge()}`, "td"));
  //MIN
  tr.appendChild(createInfoElement(`${firm.minAge()}`, "td"));
  //Average Age
  tr.appendChild(createInfoElement(`${firm.averageAge()}`, "td"));
  //Average Salary
  tr.appendChild(createInfoElement(`${firm.averageSalary()}`, "td"));
  //Total Salary
  tr.appendChild(createInfoElement(`${firm.totalSalary()}`, "td"));
  stats.append(tr);
}

//Create Elemets HTML
function createInfoElement(content, tag) {
  const element = document.createElement(tag);
  const text = document.createTextNode(content);
  element.appendChild(text);
  return element;
}

//Delete Stets
function delStats() {
  if (stats.firstElementChild) {
    stats.removeChild(stats.firstElementChild);
  }
}
