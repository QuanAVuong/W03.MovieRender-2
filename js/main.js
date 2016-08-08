$(document).ready(function() {

    // Step 1: Dynamic resize
    //  .resize(handler): Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
    $(window).resize(function() {
        // $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
        if (window.innerWidth > 500) {
            $("#frame").removeClass("small").addClass("big");
        } else {
            $("#frame").removeClass("big").addClass("small");
        }
    });

});
