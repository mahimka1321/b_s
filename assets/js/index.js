const toggleBtn = document.querySelector("#toggle-theme");
const darknessSlider = document.querySelector("#darknessSlider");

document.addEventListener("DOMContentLoaded", () => {
    init()
})

  function init() {
    if(localStorage.getItem('theme')) {
      document.documentElement.setAttribute("theme", "dark");
    }
        else {
            document.documentElement.removeAttribute("theme");
        }
}

toggleBtn.addEventListener("click", function() {
    if(document.documentElement.hasAttribute("theme")){
        document.documentElement.removeAttribute("theme");
        toggleBtn.value = "темная"
        localStorage.removeItem('theme');
    }
        else{
            document.documentElement.setAttribute("theme", "dark");
            toggleBtn.value = "светлая"
            localStorage.setItem('theme', 1);
        }
});  
