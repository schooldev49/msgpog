//getting local storage value if checked or not
let jsonString = localStorage.getItem("userChecked");

let gotChecked = JSON.parse(jsonString);
console.log(gotChecked);
// Seeing if it works
if(gotChecked == 1){
    console.log("it equal 1");

    window.top.onblur = () => {
      if (!document.hasFocus()) {
          window.top.location.href = "https://classroom.google.com/h";
      }
  }
  document.getElementById("togAbort").checked = true;
}

if(gotChecked == 0){
    console.log("it equal 0");
    document.title = 'Google';
}
// getting settings
function getSettings(){
    getObject();
    console.log("gotSettings");
  }
  function getObject(){
    getObject = function(){}; // kill it as soon as it was called
    document.getElementById("settings").innerHTML='<object type="text/html" style="height: 250px; width: 250px;" data="../data/settings.html" ></object>';
    console.log("gotObject");
  };