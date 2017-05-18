$(document).ready(function(){

var arrayOfButtons =["Dennis Reynolds", "Charlie Kelly", "Dee Reynolds", "Its Always Sunny"];



function renderingButtons(){
    $(".buttons").empty();


    for (var i=0; i< arrayOfButtons.length; i++){
    $(".buttons").append("<button class='btn btn-danger sunny' data-name='"+arrayOfButtons[i]+"'>"+arrayOfButtons[i]+"</button>")



}
}

function ajaxCall(){

        var character = $(this).attr("data-name");

       
        var url = "http://api.giphy.com/v1/gifs/search?";
        var query = "q="+character;
        var apiKeyandLimit = "&api_key=dc6zaTOxFJmzC&limit=10";
      

$.ajax({

    url: url+query+apiKeyandLimit,
    method: "GET"
}).done(function(object){

    var gif = object.data

    for (var i=0; i< gif.length; i++) {
            
            var rating = gif[i].rating;
			// console.log(rating)
			var still = gif[i].images.fixed_height_still.url;
			// console.log(still)
			var animate = gif[i].images.fixed_height.url;
			// console.log(animate)
            $("#gifsArea").prepend("<div class='col-md-2 text-center giftastic'>  <img class='giff' data-still='"+still+"' data-animate='"+animate+"' data-state='still' src='"+ still+"'> <p class='rating'>Rating:  "+ rating +" </p> </div>")
            
    }
    

   
})
}






function animateSwitch(){
                var state = $(this).attr("data-state");

                if( state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }

            }

$(".add").click(function(event){

     event.preventDefault();
    var input = $("#search").val().trim();
    arrayOfButtons.push(input)
        

    renderingButtons()
})



$(document).on("click", ".sunny", ajaxCall) 
$(document).on("click", ".giff", animateSwitch)

  renderingButtons()
// console.log(arrayOfButtons)
})