addScript('./js/person.js');
addScript('./js/employee.js');
addScript('./js/company.js');
addScript('./js/script.js');


function addScript(src){
    let before = document.querySelector('script');
    let script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
    
  }