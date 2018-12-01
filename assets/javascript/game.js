$(document).ready(function () {

    var playerCharChosen = false;
    var playerChar;

    var playerName;

    var enemyCharChosen = false;
    var enemyChar;

    var playerHP = 8;
    var enemyHP;

    var playerHealth = 0;
    var enemyHealth = 0;

    var charOther;

    var currentBattle = false;

    var playerID;
    var enemyID;

    var enemiesFought = 0;

    var wins = 0;


    $('#restart').on('click', function () {
        location.reload();
    });





    $('body').on('click', '.charBox', function () {

        if (playerCharChosen === false) {
            playerCharChosen = true;
            playerChar = $(this);
            $('#yourChar').append(playerChar);

            playerName = playerChar.find(".charTitle").text();

            playerID = playerChar.attr('id');

            if (playerID === "char_lsw") {
                playerHealth = 100;
            } else if (playerID === "char_owk") {
                playerHealth = 120;
            } else if (playerID === "char_grv") {
                playerHealth = 150;
            } else if (playerID === "char_dml") {
                playerHealth = 180;
            }



            $('#charInstruct').text("Choose an enemy to battle...");

            $('#yourChar').addClass("white");

        } else if (enemyCharChosen === false && $(this).find(".charTitle").text() !== playerName) {

            enemyCharChosen = true;
            enemyChar = $(this);
            $('#enemyChar').append(enemyChar);

            enemiesFought++;
            if (enemiesFought === 3) {
                $('#enemyAvailBox').remove();
            }
            console.log("enemies fought: " + enemiesFought);
            console.log("wins: " + wins);

            enemyID = enemyChar.attr('id');

            if (enemyID === "char_lsw") {
                enemyHealth = 100;
                enemyHP = 21;
            } else if (enemyID === "char_owk") {
                enemyHealth = 120;
                enemyHP = 19;
            } else if (enemyID === "char_grv") {
                enemyHealth = 150;
                enemyHP = 18;
            } else if (enemyID === "char_dml") {
                enemyHealth = 165;
                enemyHP = 17;
            }

            $('#charInstruct').text('May the force be with you, always... FIGHT!');

            currentBattle = true;

            charOther = $('#char_all > .charBox');
            $('#enemyAvail').append(charOther);


            $('#enemyChar').addClass("black");
            $('#enemyAvailBox').addClass("red");


        }

    });


    $('#attack').on('click', function () {


        if (currentBattle === true) {


            enemyHealth -= playerHP;
            if (enemyHealth <= 0) {
                enemyChar.remove();
                currentBattle = false;
                enemyCharChosen = false;
                enemyChar = null;
                wins++;
                $('#charInstruct').text("You defeated an enemy.  Choose a new enemy to battle...");

                if (wins === 3) {
                    $('#enemyChar').remove();
                    $('#charInstruct').text("YOU WIN!!!");
                    $('#yourChar > h3').text("");
                    alert("You win!");
                }

                
            }


            if (enemyHealth > 0) {
                playerHealth -= enemyHP;
                playerChar.find('.charScore').text(playerHealth);
                enemyChar.find('.charScore').text(enemyHealth);
                if (playerHealth <= 0) {
                    $('#yourChar').remove();
                    alert("You lose");
                    location.reload();
                }

                $('#charInstruct').text("You attacked " + enemyChar.find(".charTitle").text() + " for " + playerHP + " damage.  " + enemyChar.find(".charTitle").text() + " attacked you for " + enemyHP + " damage.");
            }

            playerHP += 8;






        }

    });


});