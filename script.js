const site_1 = prompt("Enter 1st site");
const site_2 = prompt("Enter 2st site");

document.getElementById("button-1").addEventListener("click", () => {
  if(site_1.indexOf("https://") != -1 || site_1.indexOf("http://") != -1){
    window.open(site_1)
  }
  const newSite_1 = "https://" + site_1
  window.open(newSite_1)
})

document.getElementById("button-2").addEventListener("click", () => {
  if(site_2.indexOf("https://") != -1 || site_1.indexOf("http://") != -1){
    window.open(site_2)
  }
  const newSite_2 = "https://" + site_2
  window.open(newSite_2)
})
