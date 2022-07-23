
// When submit is clicked, change to thank you screen, only if a radio button is selected
$("input[type=submit]").click(function() {

    if ($("input[type=radio]:checked").length > 0) {

        // Get value of checked radio button to change message
        let rating = $("input[type=radio][name=rating]:checked").val();
        console.log(rating);
        
        // Hide rating card, show thank you card
        $(".rating").addClass("hide");
        $(".thank-you").removeClass("hide");

        // Change message
        $(".rating-msg").html("You selected " + rating + " out of 5");

    }
})