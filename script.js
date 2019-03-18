$(".Ironman").hide();
$(".Thor").hide();
$(".Blackwidow").hide();
$(".Spiderman").hide();
$("button").click(function() {
    var color = $(".Color").val();
    var age = $(".Age").val();
    if( color === "red" && age >=10){
    $(".name").text("Ironman!!");
    $(".answer").text("You're a genius and sarcastic");
    $(".Ironman").show();
    $(".Thor").hide();
    $(".Blackwidow").hide();
    $(".Spiderman").hide(); 
}
    else if(color === "blue" && age >=10){
        $(".name").text("Thor!!");
        $(".answer").text("You're kind and worthy");
        $(".Thor").show();
        $(".Ironman").hide();
        $(".Blackwidow").hide();
        $(".Spiderman").hide();
    }
    else if(color === "red" && age <=10){
        $(".name").text("Black Widow!!");
        $(".answer").text("You're strong and skilled");
        $(".Blackwidow").show();
        $(".Ironman").hide();
        $(".Thor").hide();
        $(".Spiderman").hide();
    }
    else if(color === "blue" && age <=10){
        $(".name").text("Spider-Man!!");
        $(".answer").text("You're caring and funny");
        $(".Spiderman").show();
        $(".Ironman").hide();
        $(".Thor").hide();
        $(".Blackwidow").hide();
    }
    else{
        $(".name").text("Oops! Something is wrong!");
        $(".Ironman").hide();
        $(".Thor").hide();
        $(".Blackwidow").hide();
        $(".Spiderman").hide();
    }
});
