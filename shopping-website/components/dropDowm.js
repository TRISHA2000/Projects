var SHOW_LIST_CLASS = 'inline-block';

$(document).ready(function (params) {
    $(".dropdown-btn-wrapper").on('click', function (event) {
        $(this).parent().find('.dropdown-list-wrapper').toggleClass(SHOW_LIST_CLASS);
    });

    $('.dropdown-list-wrapper li').on('click', function (event) {
        $('.dropdown-list-wrapper').removeClass(SHOW_LIST_CLASS);
        $('.dropdown-list-wrapper li').removeClass("item-color");
        $(this).addClass("item-color");

        var temporaryName = $(this).html();
        $(".dropdown-btn-label").html(temporaryName);
    })


});