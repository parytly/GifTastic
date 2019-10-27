
   var gifCount = 0;

//   SAVES THE INPUT UPON CLICKING THE SAVE BUTTON
$("#save-input").on("click", function(event){
    event.preventDefault();

    var search = $("#gif-input").val();
    var rating = $("#gif-ratings").val();

    var giphyApiKey = "XkIzMsg4ouxg5wPkAxLSXrbHZHZZVWD2";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + giphyApiKey + "&limit=15&rating=" + rating; 
    console.log(search);

    //  CREATING A BUTTON TO DOM
    var savedButton = $("<button>" + search + "</button>");
    $("#buttonUpload").append(savedButton);
    savedButton.addClass("renderButton");
    $("#gif-input").val("");
    
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
        // CLICKING THE CREATED BUTTON RENDERS THE GIF TO THE PAGE
        $(savedButton).on("click", function(){
            console.log(response)
        // ALLOWS THE GIFS TO BE REPLACE WHEN CLICKING ON NEW BUTTON
        $("#image-gif").empty(); 

        // LOOPS THE AVALIABLE GIFS 
        for (var i = 0; i < response.data.length; i++){
            // still image of gifs
            var still = response.data[i].images.fixed_height_still.url
            // running gif
            var running = response.data[i].images.fixed_height.url
            //Rating of the gif
            // var rating = response.data[i].rating;
            
            var gifImage = $("<img  width =300 height = 200>");
            // var ratingText = $("<span>");
            // $("#image-gif").append(ratingText);
            // ATTRIBUTE AND CLASS FOR EACH GIF IMAGE
            gifImage.attr("src", still);
            gifImage.attr("data-still", still);
            gifImage.attr("data-running", running);
            gifImage.attr("data-state", "still");
            gifImage.addClass('playImage');
           

            // APPENDS THE GIF ONTO THE WEBPAGE
            $("#image-gif").append(gifImage);
        };
        });
    });
});
// CLICKING ON THE GIFS TO PLAY/ STOP
$(document).on("click", ".playImage", function() {

    var play = $(this).attr('data-state');
    if(play === 'still'){
        $(this).attr('src', $(this).data("running"));
        $(this).attr('data-state', "running");
    }else{
        $(this).attr('src', $(this).data("still"));
        $(this).attr('data-state', "still");
    }
    console.log('play')
  });

            