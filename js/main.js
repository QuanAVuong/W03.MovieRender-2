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


    // Step 2: Checkbox genre filters
    $("input:checkbox").change(function() {
        // if( $("input#animation").prop('checked')){
        // 	$("div.animation").show();
        // } else if( $("input#action").prop('checked')){
        // 	$("div.action").show();
        // } else if( $("input#drama").prop('checked')){
        // 	$("div.drama").show();
        // } else {
        // 	$("div.animation").hide();
        // 	$("div.action").hide();
        // 	$("div.drama").hide();
        // } => THIS JUST HIDES EVERYTHING ONCE ANY CHECKBOX CHANGE IS TRIGGERED

        var checkboxValues = [];
        $("input[type='checkbox']:checked").each(function(index, element) {
            checkboxValues.push($(element).attr("name"));
        });
        // $("#frame").before("<div> checkboxValues: " + checkboxValues + "</div>");

        // switch (true) {
        //     case checkboxValues.indexOf("animation") != -1:
        //         console.log(checkboxValues.indexOf('animation'))
        //         $("div.animation").show;
        //         break;
        //     case checkboxValues.indexOf("action") != -1:
        //         console.log(checkboxValues.indexOf('action'))
        //         $("div.action").show;
        //         break;
        //     case checkboxValues.indexOf("drama") != -1:
        //         console.log(checkboxValues.indexOf('drama'))
        //         $("div.drama").show;
        //         break;
        //     default:
        //         $("#frame").hide();

        // } => THIS DOESN'T WORK

        // TRIPLE SIMPLE IF-ELSE WORKS
        // if(checkboxValues.indexOf('animation') === -1){
        // 	$("div.animation").hide();
        // } else {
        // 	$("div.animation").show();
        // }

        // if(checkboxValues.indexOf('action') === -1){
        // 	$("div.action").hide();
        // } else {
        // 	$("div.action").show();
        // }

        // if(checkboxValues.indexOf('drama') === -1){
        // 	$("div.drama").hide();
        // } else {
        // 	$("div.drama").show();
        // }

        // TERNARY A LITTLE:
        checkboxValues.indexOf('animation') === -1 ?
            $("div.animation").hide() : $("div.animation").show();
        checkboxValues.indexOf('action') === -1 ?
            $("div.action").hide() : $("div.action").show();
        checkboxValues.indexOf('drama') === -1 ?
            $("div.drama").hide() : $("div.drama").show();


    })