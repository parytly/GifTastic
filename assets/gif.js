
$("#save-input").on("click", function(event){
    event.preventDefault();

    var search = $("#animal-input").val();
    // RATINGS: G, PG, PG-13, R

    var giphyApiKey = "XkIzMsg4ouxg5wPkAxLSXrbHZHZZVWD2";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + giphyApiKey + "&limit=10&rating=G"; 

    // https://api.giphy.com/v1/gifs/search?api_key=XkIzMsg4ouxg5wPkAxLSXrbHZHZZVWD2&q=&limit=25&offset=0&rating=G&lang=en

    console.log(queryURL);
    console.log(search);
    
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
        console.log(response);
        

        var gifImage = $("<img src='" + response.data[0].title + " '> ");
        $("#animal-gif").append(gifImage);
       

    });
})

