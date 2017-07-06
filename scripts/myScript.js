/**
 * Created by Dawid on 2017-06-29.
 */

//toggle hamburger menu
$(document).ready(function() {

    $("#burger").click(function (e) {
        e.preventDefault();
        var x = $("#burger").hasClass("toggled");
        if(x) {
            $("#aside").css({width: '0px'});
            $("#burger").removeClass("toggled").addClass("untoggled");
            $("#toggleIcon").attr('src', 'svg/menu_alt.svg');
        } else {
            $("#aside").css({width: '250px'});
            $("#burger").removeClass("untoggled").addClass("toggled");
            $("#toggleIcon").attr('src', 'svg/cross_24.svg');
        }
    });

    $('#page').pagify({
        pages: ['home', 'about', 'skills', 'projects', 'contact'],
        default: 'home',
        animation: 'fadeIn',
        animationSpeed: 'slow',
        basePagePath: "/kacperczyk-dev.github.io/"
    });
});

