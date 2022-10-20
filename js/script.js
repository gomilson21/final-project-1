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
        $(".navbar").removeClass("navbar-light bg-light");
        $(".navbar").addClass("navbar-dark bg-dark");

        $(".bi-sun").removeClass("d-none");
        $(".bi-moon").addClass("d-none");
    } else {
        $(".navbar").removeClass("navbar-dark bg-dark");
        $(".navbar").addClass("navbar-light bg-light");
    
        $(".bi-moon").removeClass("d-none");
        $("bi-sun").addClass("d-none");    
    }

    //if ($(".navbar").is(".navbar-light"))
})
