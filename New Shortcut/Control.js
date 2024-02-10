document.querySelector(".sidebar").classList.remove("active");
document.querySelector(".sidebar .toggle-btn").addEventListener("click",function(){
        document.querySelector(".sidebar").classList.toggle("active");
});