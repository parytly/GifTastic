
//    GIPHY HTTPS LINK:
   // https://api.giphy.com/v1/gifs/search?api_key=XkIzMsg4ouxg5wPkAxLSXrbHZHZZVWD2&q=&limit=25&offset=0&rating=G&lang=en

//   SAVES THE INPUT UPON CLICKING THE SAVE BUTTON
$("#save-input").on("click", function(event){
    event.preventDefault();

    var search = $("#animal-input").val();

    var giphyApiKey = "XkIzMsg4ouxg5wPkAxLSXrbHZHZZVWD2";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + giphyApiKey + "&limit=10&rating=G"; 
    console.log(queryURL);
    console.log(search);
    
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
        console.log(response);
        
        var savedButton = $("<button>" + search + "</button>");
        $("#buttonUpload").append(savedButton);

            // LOOPS THE AVALIABLE GIFS 
        for (var i = 0; i < response.data.length; i++){
            var gifImage = $("<img src='" + response.data[i].images.fixed_height.url+ "'> ");
            $("#animal-gif").append(gifImage);
        }
    });
})

