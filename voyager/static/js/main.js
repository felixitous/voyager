var navbar = new NavbarView();
navbar.render();

renderTarget = $("meta[name=title]").attr("content");
if (renderTarget == "#navbar-careers") {
    var table_2015 = new TableView({
        el: "#table-container"
    });
    table_2015.render(data);
    // var table_2014 = new TableView({
    //     el: "#table-container-2014"
    // });
    // table_2014.render(data_2014);
}

// $( document ).ready(function() {
//     console.log( "ready!" );
// });


if (renderTarget == "#navbar-home") {

    var carousel = new CarouselView({
        el: ".valve-carousel",
        target: ".valve-carousel"
    });
    carousel.render("#valve-template");

    var carousel = new CarouselView({
        el: ".amazon-carousel",
        target: ".amazon-carousel"
    });
    carousel.render("#amazon-template");

    var carousel = new CarouselView({
        el: ".pinterest-carousel",
        target: ".pinterest-carousel"
    });
    carousel.render("#pinterest-template");

    var carousel = new CarouselView({
        el: ".instagram-carousel",
        target: ".instagram-carousel"
    });
    carousel.render("#instagram-template");
}

if (renderTarget == "#navbar-contact") {
    $("#id_subject").attr('placeholder', "Name");
    $("#id_sender").attr('placeholder', "Email");
    $("#id_message").attr('placeholder', "Message");
}

if (renderTarget = "#navbar-apply") {
    $("#id_name").attr('placeholder', "Name");
    $("#id_email").attr('placeholder', "Email");
    $("#id_year").attr('placeholder', "Year such as Freshman, Sophomore, etc");
    $("#id_major").attr('placeholder', "Your Intended or Current Major");

}

$(document).ready(function() {

    $('#calendar').fullCalendar({
        aspectRatio: 2,
        googleCalendarApiKey: 'AIzaSyAQC1R4CN8I5hAjfz8fkmLRx3Xu5iSEUps',
        events: {
            googleCalendarId: 'frkmrhm1e8utsu47fetpimit5c@group.calendar.google.com'
        },
        eventColor: '#48154A'
    })

});



