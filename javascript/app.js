$(document).ready(function(){

var arrayOfButtons =["Michael", "Dwight", "Jim", "Pam"];



function renderingButtons(){
    $(".buttons").empty();


    for (var i=0; i< arrayOfButtons.length; i++){
    $(".buttons").append("<button class='btn btn-danger office' data-name='"+arrayOfButtons[i]+"'>"+arrayOfButtons[i]+"</button>")



}
}








$(".submit").click(function(event){

     event.preventDefault();
    var input = $("#search").val().trim();
    arrayOfButtons.push(input)
        

    renderingButtons()
})



$(document).on("click", ".office", function(){
    console.log("test")
})
  renderingButtons()
console.log(arrayOfButtons)
})