$("#add-form").on("submit", function(event) {

    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burger_name").val().trim(),
        devoured:false
    };
  
    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    })
    .done(
        function() {
            // Reload the page to get the updated list
            location.reload();
        }
    ).fail(err => console.log(err));
});

$(".devour").on("click", function() {

    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log(this.id)

    var newBurger = {
        burger_name: $("#burger_name").val().trim(),
    };
  
    // Send the POST request.
    $.ajax("/api/burgers/"+ this.id, {
        type: "PUT",
        data: {devoured:true}
    })
    .done(
        function() {
            // Reload the page to get the updated list
            location.reload();
        }
    ).fail(err => console.log(err));
});