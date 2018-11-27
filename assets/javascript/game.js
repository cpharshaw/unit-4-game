$(document).ready(function () {

    var selectedChar;
    var otherChars;
    var enemyChar;
    var charChosen = 0;

    var charOther;

    $(".charBox").on("click", function () {

        if (charChosen < 1) {
            charChosen++;
            selectedChar = $(this);
            $("#charInstruct").text("Choose an enemy to battle...");
            $(this).remove();
            $("#yourChar").append(selectedChar);
        } else if (charChosen < 2) {
            charChosen++;
            enemyChar = $(this);
            // $(".charPick").remove();
            $("#enemyChar").append(enemyChar);

            charOther = $("#char_all > .charBox");
            $("#char_all > .charBox").remove();
            $("#enemyAvail").append(charOther);

            $("#yourChar").css({
                "background-color": "white",
                "color": "black"
            });

            $("#enemyChar").css({
                "background-color": "black",
                "color": "white"
            });

            $("#enemyAvail").css("background-color", "red");
        }


    })



});