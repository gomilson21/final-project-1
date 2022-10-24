// Evento active dos link no navbar
$(".nav-item a").on("click", function() {
    $(".nav-item a.active").removeClass("active")
    $(this).addClass("active")
})

// Load light or dark mode
function loadDarkMode() {
    if(localStorage.getItem('dark'))
        toggleDarkMode()
}


  //  toggleDarkMode()
    
    // Save or remove dark mode
    localStorage.removeItem('dark')

    if(document.body.classList.contains('dark'))
        localStorage.setItem('dark', 1)

loadDarkMode();

$("#change-mode").on("click", function() {
    if($("#change-mode").is(":checked")) {
        $("*").toggleClass("text-dark text-light");
       
        $(document.body).toggleClass("bg-dark bg-light");

        $(".navbar").toggleClass("navbar-dark bg-dark shadow-light navbar-light bg-light shadow"); 
    
        $(".bi-moon").toggleClass("d-none");   
        $(".bi-sun").toggleClass("d-none");

        $(".dropdown-menu").toggleClass("bg-dark bg-light");
    } else { 
        $("*").toggleClass("text-dark text-light");
    
        $(".navbar").toggleClass("navbar-light bg-light navbar-dark bg-dark");

        $(document.body).toggleClass("bg-light bg-dark");

        $(".bi-sun").toggleClass("d-none");
        $(".bi-moon").toggleClass("d-none");

        $(".dropdown-menu").toggleClass("bg-dark bg-light");
    }
})

$(document).on("scroll", function() {
    $(document.body).css.margin 
})