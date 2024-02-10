document.querySelector(".sidebar").classList.remove("active"); //Sees if someone clicks the X if so it closes the button 
document.querySelector(".sidebar .toggle-btn").addEventListener("click",function(){ //Looks for a user to click the sidebar menu and if so opens it
        document.querySelector(".sidebar").classList.toggle("active");
});