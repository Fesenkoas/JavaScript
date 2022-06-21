// const code = codeApi.value.trim();
const code = "1492f2b94bf5637e8e28f14d901df2e7";

// Create List For Selector
fetch(`http://data.fixer.io/api/symbols?access_key=${code}`)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  })
  .then((data) => {
    const { symbols } = data;
    const abjArr = Object.entries(symbols);
    myFunction(setOne, abjArr);
    myFunction(setTwo, abjArr);
  })
  .catch((e) => {
    console.log(e);
    const h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(`O-o-oops 404`));
    document.body.appendChild(h1);
  });

// Create List For Calculation
fetch(`http://data.fixer.io/api/latest?access_key=${code}`)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  })
  .then((data) => {
    const { rates } = data;
    const abjArr = Object.entries(rates);
    textPut(abjArr);
  })
  .catch((e) => {
    console.log(e);
    const h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(`O-o-oops 404`));
    document.body.appendChild(h1);
  });

//Calculation Money
function resMoney(resIn, resTo) {
  const res = resIn / resTo;
  return res * changeOne.value.trim();
}
//Work whit all input
function textPut(abjArr) {
  let resIn, resTo;
  setOne.addEventListener("click", (e) => {
    abjArr.forEach(([key, value]) => {
      if (key == setOne.value) resIn = value;
      if (key == setTwo.value) resTo = value;
    });
    delStats();
    changeTwo.value = resMoney(resIn, resTo);
    textIn.appendChild(createInfoElement(`${changeOne.value.trim()} ${setOne.value.trim()}`, "p"));
    textTo.appendChild(createInfoElement(`${changeTwo.value.trim()} ${setTwo.value.trim()}`, "p"));
  });

  setTwo.addEventListener("click", (e) => {
    abjArr.forEach(([key, value]) => {
      if (key == setOne.value) resIn = value;
      if (key == setTwo.value) resTo = value;
    });
    delStats();
    changeTwo.value = resMoney(resIn, resTo);
    textIn.appendChild(createInfoElement(`${changeOne.value.trim()} ${setOne.value.trim()}`, "p"));
    textTo.appendChild(createInfoElement(`${changeTwo.value.trim()} ${setTwo.value.trim()}`, "p"));
  });
}

//Create To Selector Element HTML
function myFunction(id, abjArr) {
  abjArr.forEach(([key, value]) => {
    const option = document.createElement("OPTION");
    option.setAttribute("value", key);
    const text = document.createTextNode(value);
    option.appendChild(text);
    id.appendChild(option);
  });
}

//Create Elements HTML
function createInfoElement(content, tag) {
  const element = document.createElement(tag);
  const text = document.createTextNode(content);
  element.appendChild(text);
  return element;
}

function delStats() {
  if (textIn.firstElementChild) {
    textIn.removeChild(textIn.firstElementChild);
  }
  if (textTo.firstElementChild) {
    textTo.removeChild(textTo.firstElementChild);
  }
}
