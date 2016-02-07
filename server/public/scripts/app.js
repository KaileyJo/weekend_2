$(document).ready(function(){
    getData();

    var spin = window.setInterval(carouselSpin, 5000);
    $('#next').on('click', function(){
        var lastPerson = $('.person').last();
        if (lastPerson.hasClass('show')) {
            $('.person').first().addClass('show');
            $('.person').last().removeClass('show');
        } else {
            $('.show').next().addClass('show');
            $('.show').first().removeClass('show');
        }
    });
    $('#previous').on('click', function(){
        var firstPerson = $('.person').first();
        if (firstPerson.hasClass('show')) {
            $('.person').last().addClass('show');
            $('.person').first().removeClass('show');
        } else {
            $('.show').prev().addClass('show');
            $('.show').last().removeClass('show');
        }

    });

});

function getData(){
    $.ajax({
        type: 'GET',
        url:'/data',
        success: function(data) {
            //console.log(data);
            $.each(data.people, function(i, person) {
                $('#peopleContainer').append('<div class="person" data-index="' + i + '"></div>');
                var $el = $('#peopleContainer').children().last();
                $el.append('<img src="' + person.imageURL + '" />');
                $el.append('<h2>' + person.name + '</h2>');
                $el.append('<p>' + person.favoriteMovie1 + '</p>');
                $el.append('<p>' + person.favoriteMovie2 + '</p>');
                $el.append('<p>' + person.favoriteSong + '</p>');
                $('ul').append('<li data-slide-to="' + i + '"></li>');
            });
            $('.person').first().addClass('show');
        },
        error: function() {
            console.log('ERROR: Unable to contact the server.');
        }

    });
}

function carouselSpin() {


};