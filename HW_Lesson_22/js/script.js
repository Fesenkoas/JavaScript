const firm = new Company();

//Event Keyboard
addEventListener("keydown", (e) => {
  if (e.key === "Enter") addPersons();
});
//Event Mouse
addEventListener("click", (e) => {
  if (e.target === document.getElementById("addPerson")) addPersons();
  if (e.target === document.getElementById("calcStats")) printStats();
});
//Add Persons
function addPersons() {
  const [id, fName, lName, Age, Salary] = [personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value.trim(), salary.value.trim()];

  if (id && fName && lName && Age && Salary) {
    const person= (new Employee(id, fName, lName, Age, Salary));
    if (!(firm.addEmployee(person))){
    alert(`Person with id = ${id} exists`);
    }
    else {
      const buttonDel = document.createElement('button');
          buttonDel.append(document.createTextNode('X'));
          buttonDel.classList.add('del');

          const li = createInfoElement(person.toString(),'li');
          li.append(buttonDel);
          personsList.append(li);
          buttonDel.onclick = e => {
            const index = firm.employees.findIndex(item => item.id === person.id);
            firm.removeEmployee(firm.employees[index].id);
            e.target.parentElement.remove();
            delStats();
        } 
    }
  } 
  else alert("Enter all date");
  delStats();
  personId.value = firstName.value = lastName.value = age.value = salary.value = '';
}
//Print Statistic
function printStats() {
  delStats();
    //MAX
    stats.appendChild(createInfoElement(`MAX:${firm.maxAge()}`,'h3'));
    //MIN
    stats.appendChild(createInfoElement(`MIN:${firm.minAge()}`,'h3'));
    //Average Age
    stats.appendChild(createInfoElement(`Average Age:${firm.averageAge()}`,'h3'));
    //Average Salary
    stats.appendChild(createInfoElement(`Average Salary:${firm.averageSalary()}`,'h3'));
    //Total Salary
    stats.appendChild(createInfoElement(`Total Salary:${firm.totalSalary()}`,'h3'));
}

// Create Elemets HTML
function createInfoElement(content, tag) {
  const element = document.createElement(tag);
  const text = document.createTextNode(content);
  element.appendChild(text);
  return element;
}

// Delete Stats
function delStats(){
  let s = document.getElementById("stats");
  while(s.hasChildNodes()){
      s.removeChild(s.firstChild);
  }
  let h2 = document.createElement("h2");
  h2.append(document.createTextNode("Stats"));
  document.getElementById("stats").appendChild(h2);
}
