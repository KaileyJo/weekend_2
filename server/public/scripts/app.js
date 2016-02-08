var spin = window.setInterval(carouselSpin, 10000);

$(document).ready(function(){
    getData();

    $('#next').on('click', function(){
        nextSlide();
    });

    //$('li').on('click', function() {
    //    $('li').removeClass('active');
    //    $(this).addClass('active');
    //});

    $('#previous').on('click', function(){
        clearSetInterval();
        var firstPerson = $('.person').first();
        if (firstPerson.hasClass('show')) {
            $('.person').last().addClass('show');
            $('.person').first().removeClass('show');
        } else {
            $('.show').prev().addClass('show');
            $('.show').last().removeClass('show');
        }
        //switchLI();
    });

    //$('.show').

    $('li').on('click', function(){
        var dataIndex = this.dataset.index;
        console.log(dataIndex);
        //$(this).addClass('active');
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
                $('ul').append('<li data-index="' + i + '"></li>');
            });
            $('.person').first().addClass('show');
        },
        error: function() {
            console.log('ERROR: Unable to contact the server.');
        }

    });
}

function carouselSpin() {
    nextSlide();
}

function nextSlide() {
    clearSetInterval();
    var lastPerson = $('.person').last();
    if (lastPerson.hasClass('show')) {
        $('.person').first().addClass('show');
        $('.person').last().removeClass('show');
    } else {
        $('.show').next().addClass('show');
        $('.show').first().removeClass('show');
    }
    //switchLI();

    //var $visiblePerson = $('.show').data('index');
    //var $activeLi = $('li').data('index');
    //if ($visiblePerson == $activeLi) {
    //    $activeLi.addClass('active');
    //} else {
    //    $('li').removeClass('active');
    //}

}

function clearSetInterval() {
    clearInterval(spin);
    spin = window.setInterval(carouselSpin, 10000);
}

//function switchLI() {
//    $el = $('.show').data(index);
//    $li = $('li').data(index, $el).addClass('active');
//    clearSetInterval();
//}
