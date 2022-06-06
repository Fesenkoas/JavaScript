const firm = new Company();
printStats();
//Event Keyboard
addEventListener("keydown", (e) => {
  if (e.key === "Enter") addPersons();
});
//Event Mouse
addEventListener("click", (e) => {
  if (e.target === addPerson) {addPersons();}
  // if (e.target === calcStats) printStats();
});
//Add Persons
function addPersons() {
  const [id, fName, lName, Age, Salary] = [personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value.trim(), salary.value.trim()];
  if (id && fName && lName && Age && Salary) {
    const person= (new Employee(id, fName, lName, Age, Salary));
    if (firm.addEmployee(person)){
    
    const buttonDel = document.createElement('button');
          buttonDel.append(document.createTextNode('X'));
          buttonDel.classList.add('del');

        const tr = document.createElement('tr');// main block
        
        tr.appendChild(createInfoElement(`${person.id}`,'td'));
        tr.appendChild(createInfoElement(`${person.firstName}`,'td'));
        tr.appendChild(createInfoElement(`${person.lastName}`,'td'));
        tr.appendChild(createInfoElement(`${person.age}`,'td'));
        tr.appendChild(createInfoElement(`${person.salary}`,'td'));
        tr.appendChild(buttonDel);
        personsList.append(tr);
        
          buttonDel.onclick = e => {
            const index = firm.employees.findIndex(item => item.id === person.id);
            firm.removeEmployee(firm.employees[index].id);
            e.target.parentElement.remove();
            delStats();
            printStats();
        } 
        
    }
    else {
      alert(`Person with id = ${id} exists`);
    }
  } 
  else alert("Enter all date");
  printStats();
  personId.value = firstName.value = lastName.value = age.value = salary.value = '';
}

//Print Statistic
function printStats() {
  delStats();
    
  const tr = document.createElement('tr');// main block
    //MAX
    tr.appendChild(createInfoElement(`${firm.maxAge()}`,'td'));
    //MIN
    tr.appendChild(createInfoElement(`${firm.minAge()}`,'td'));
    //Average Age
    tr.appendChild(createInfoElement(`${firm.averageAge()}`,'td'));
    //Average Salary
    tr.appendChild(createInfoElement(`${firm.averageSalary()}`,'td'));
    //Total Salary
    tr.appendChild(createInfoElement(`${firm.totalSalary()}`,'td'));
    stats.append(tr);
}

// Create Elemets HTML
function createInfoElement(content, tag) {
  const element = document.createElement(tag);
  const text = document.createTextNode(content);
  element.appendChild(text);
  return element;
}


function delStats() {
  if (stats.firstElementChild) {
      stats.removeChild(stats.firstElementChild);
  }
}
