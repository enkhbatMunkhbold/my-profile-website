// const facebookBtn = document.getElementById("facebook")
// let facebookText = document.getElementById("facebook-info")
// facebookBtn.addEventListener('click', function() {
//   facebookText.style.color = "#711db0"
// })

function changeColor(id) {
  if(id === 'facebook-info') {
    document.getElementById(id).style.color = "#711db0";
  } else if(id === 'linkedin-info') {
    document.getElementById(id).style.color = "#005b41";
  } else {
    document.getElementById(id).style.color = "#b31312";
  }
  
}