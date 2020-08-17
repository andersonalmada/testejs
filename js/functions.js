function set() {
  var obj = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
  };

  var strObj = JSON.stringify(obj);

  localStorage.setItem("person", strObj);
}

function get() {
  var strObj = localStorage.getItem("person");
  var obj = JSON.parse(strObj);
  console.log(obj);
}
