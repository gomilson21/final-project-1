// Evento active dos link no navbar
$(".nav-item a").on("click", function() {
    $(".nav-item a.active").removeClass("active")
    $(this).addClass("active")
})

 //  toggleDarkMode()
function toggleDarkMode () {
    if($("#change-mode").is(":checked")) {
        $("*").toggleClass("text-dark text-light");
    
        $(document.body).toggleClass("bg-dark bg-light");

        $(".navbar").toggleClass("navbar-dark bg-dark shadow-light navbar-light bg-light shadow"); 
    
        $(".bi-moon").toggleClass("d-none");   
        $(".bi-sun").toggleClass("d-none");

        $(".dropdown-menu").toggleClass("bg-dark bg-light");

        $(".card").toggleClass("shadow-light shadow-dark");
    } else { 
        $("*").toggleClass("text-dark text-light");
    
        $(".navbar").toggleClass("navbar-light bg-light navbar-dark bg-dark");

        $(document.body).toggleClass("bg-light bg-dark");

        $(".bi-sun").toggleClass("d-none");
        $(".bi-moon").toggleClass("d-none");

        $(".dropdown-menu").toggleClass("bg-dark bg-light");

        $(".card").toggleClass("shadow-light shadow-dark");
    }  
}

$("#change-mode").click(function() {
    toggleDarkMode();

    // Save or remove dark mode
    localStorage.removeItem('dark'); 

    if($("body").is('.bg-dark'))
        localStorage.setItem('dark', 1);
})
    
// Load light or dark mode
function loadDarkMode() {
    if(localStorage.getItem('dark'))
        toggleDarkMode()
}

$(document).ready(function() {
    loadDarkMode();
})


$(document).scroll(function() {
    if(window.scrollY > 80)
        $(".navbar").addClass("fixed-top");
    else
        $(".navbar").removeClass("fixed-top");
})