let search = document.getElementById('search').value;
let searchStyle = document.getElementById('search');
let iframe = document.getElementById('google');
var elem = document.getElementById("google");

document.addEventListener('keypress', (r) => {
  if (r.key === 'Enter') {
      alert("Request sent, Opening iframe! You may close this alert.");
      iframe.src = searchStyle.value+"/?url=basketbros.io";
      iframe.style.display = "block";
    document.addEventListener('keypress', (ev) => {
  if (ev.ctrlKey && ev.key === 'o') {
    iframe.style.display = 'none';
  }
    })
  }
});