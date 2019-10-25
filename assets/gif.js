
//    GIPHY HTTPS LINK:
   // https://api.giphy.com/v1/gifs/search?api_key=XkIzMsg4ouxg5wPkAxLSXrbHZHZZVWD2&q=&limit=25&offset=0&rating=G&lang=en


   var gifCount = 0;

//   SAVES THE INPUT UPON CLICKING THE SAVE BUTTON
$("#save-input").on("click", function(event){
    event.preventDefault();

    var search = $("#animal-input").val();

    var giphyApiKey = "XkIzMsg4ouxg5wPkAxLSXrbHZHZZVWD2";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + giphyApiKey + "&limit=10&rating=G"; 
    console.log(queryURL);
    console.log(search);

    //  CREATING A BUTTON TO DOM
    var savedButton = $("<button>" + search + "</button>");
    $("#buttonUpload").append(savedButton);
    $("#animal-input").val("");
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
        console.log(response);

        // CLICKING THE CREATED BUTTON RENDERS THE GIF TO THE PAGE
        $(savedButton).on("click", function(){
            // CREATING <DIV> TO STORE THE GIF IMGS IN A CONTAINER
        var divforGif = $("<div>");
        divforGif.attr("id", "gif-container-" + gifCount++);
        $("#animal-gif").append(divforGif);
        $("#gif-container-" + gifCount).remove();    
            // LOOPS THE AVALIABLE GIFS 
        for (var i = 0; i < response.data.length; i++){
            var gifImage = $("<img src='" + response.data[i].images.fixed_height.url+ "'> ");
            $(divforGif).append(gifImage);
        };
    
        })
        
    });
})

