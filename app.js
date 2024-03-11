const icons = document.querySelector('#icons');
const lienNavs = document.querySelector('.lienNav');

if (icons && lienNavs) {
    icons.addEventListener("click", () => {
        lienNavs.classList.toggle("active");
    });
}else {
    console.error("Un ou plusieurs éléments n'ont pas été trouvés.");
  }
  
 
