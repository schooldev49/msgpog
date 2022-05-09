


let doctitlestorage = localStorage.getItem("doctitle");
let userTitle = JSON.parse(doctitlestorage);

top.document.title = userTitle;

var doctitl = document.getElementById("doctitl");
doctitl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        changeTitle();
    }
});


function changeTitle() {
    var doctitle = document.getElementById('doctitl')[0].value;
    top.document.title = doctitle;
    console.log("changed title");
    localStorage.setItem("doctitle", JSON.stringify(doctitle));
    console.log("saved title");
}




