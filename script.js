function toggleIt() {
  let toggleBtn = document.getElementsByClassName("btn")
  if(toggleBtn.display === 'none') {
    toggleBtn.display = 'block'
  } else {
    toggleBtn.display = 'none'
  }
}