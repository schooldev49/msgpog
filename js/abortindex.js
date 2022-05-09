let userChecked = 0;

function getValue() {
  var isChecked = document.getElementById("togAbort").checked;
    if(isChecked){
      userChecked = 1;
      localStorage.setItem("userChecked", JSON.stringify(userChecked));
      console.log(userChecked);
      console.log("Is checked");

      window.top.onblur = () => {
        if (!document.hasFocus()) {
            window.top.location.href = "https://classroom.google.com/h";
            document.title = 'Classes';
        }
    }
    } else {
      userChecked = 0;
      localStorage.setItem("userChecked", JSON.stringify(userChecked));
      console.log(userChecked);
        window.top.onblur = function () { 
             document.title = 'Classes';
         }
    }
    var x = document.getElementById("abort1");
   
    if (x.style.display === "block") {
      x.style.display = "none";
   
    } else {
      x.style.display = "block";
    }
    
 }

 function getSettings() {
   console.log("display test");
    var x = document.getElementById("settings");
   
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

 }
function getSettings(){
  getObject();
  console.log("gotSettings");
}
function getObject(){
  getObject = function(){}; // kill it as soon as it was called
  document.getElementById("settings").innerHTML='<object type="text/html" style="height: 250px; width: 250px;" data="data/settings.html" ></object>';
  console.log("gotObject");
};