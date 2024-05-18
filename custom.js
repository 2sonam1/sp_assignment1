$(document).ready(function () {
    var open = 0;
    var openSearchBar = 0;
    var openDropdown = 0;
    $(".dropdown").hide();
    $(".cross").hide();
    $(".search-bar").hide();

    $(".search button").click(function () {

        if (openSearchBar == 0) {
            $(".search-bar").css({"display":"flex"})
            $(".search-bar").show();
            $(".search button").css({ "border-top-left-radius": "0", "border-bottom-left-radius": "0", "border-left-style": "none" })
        }
        else {
            $(".search-bar").hide();
            $(".search button").css({ "border-top-left-radius": "20px", "border-bottom-left-radius": "20px", "border-left-style": "solid" })
        }
        openSearchBar = !openSearchBar
    });

    $(".bar button").click(function () {
        $(".bar").hide();
        $(".cross").show();
        $(".dropdown").show();
        openDropdown = 1;
    });

    $(".cross button").click(function () {
        $(".bar").show();
        $(".cross").hide();
        $(".dropdown").hide();
        openDropdown = 0;
    });
    $(".Motoring").click(function () {
        if (open == 0) {
            $(".Motoring-links").css({"opacity":"1","visibility":"visible"})
            $(".Motoring").css({ "text-decoration": "underline", "color": "rgba(17, 134, 87, 1)" });
        }
        else {
            $(".Motoring-links").css({ "opacity": "0", "visibility": "hidden" })
            $(".Motoring").css({ "text-decoration": "none", "color": "rgba(60, 60, 60, 1)" });
        }
        open = !open
    });
});