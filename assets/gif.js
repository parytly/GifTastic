
//    GIPHY HTTPS LINK:
   // https://api.giphy.com/v1/gifs/search?api_key=XkIzMsg4ouxg5wPkAxLSXrbHZHZZVWD2&q=&limit=25&offset=0&rating=G&lang=en


   var gifCount = 0;

//   SAVES THE INPUT UPON CLICKING THE SAVE BUTTON
$("#save-input").on("click", function(event){
    event.preventDefault();

    var search = $("#gif-input").val();

    var giphyApiKey = "XkIzMsg4ouxg5wPkAxLSXrbHZHZZVWD2";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + giphyApiKey + "&limit=15&rating=PG-13&PG-13"; 
    console.log(queryURL);
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
            console.log(response);

        // CLICKING THE CREATED BUTTON RENDERS THE GIF TO THE PAGE
        $(savedButton).on("click", function(){

            // CREATING <DIV> TO STORE THE GIF IMGS IN A CONTAINER
        var divforGif = $("<div>");
        divforGif.attr("id", "gif-container");

        // ALLOWS THE GIFS TO BE REPLACE WHEN CLICKING ON NEW BUTTON
        $("#image-gif").empty();
        $("#image-gif").append(divforGif);  

        // LOOPS THE AVALIABLE GIFS 
        var gifCounter = 0;
        for (var i = 0; i < response.data.length; i++){
            var gifImage = $("<button id = gifClick-" + gifCounter++ +  "> <img width =200 height = 200 src=" + response.data[i].images.fixed_height_still.url+ "> </button>");
            $(divforGif).append(gifImage)
            console.log("heyy")

            var gifRunning = $("<button id = gifClick-" + gifCounter + "> <img width =200 height = 200 src=" + response.data[i].images.fixed_height.url+ "> </button>");
            
            // CLICKING ON GIF RUNS IT
            $(gifImage).on("click", function(){
                // var gifIdNumber = $(this).attr(gifCounter)
                $("#gifClick-" + gifCounter ).replaceWith(gifRunning);
                console.log("yoyoyo");
            });
        };
        });

    });
});


