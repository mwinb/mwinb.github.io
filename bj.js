/**
 * 
 */
//JQUERY BLACK JACK 
//MICHAEL WINBERRY
$(document).ready(function () {
    $('#dealer3').hide();
    $('#dealer4').hide();
    $('#dealer5').hide();
    $('#dealer6').hide();
    $('#dealer7').hide();
    $('#dealer8').hide();
    $('#dealer9').hide();
    $('#dealer10').hide();
    $('#player3').hide();
    $('#player4').hide();
    $('#player5').hide();
    $('#player6').hide();
    $('#player7').hide();
    $('#player8').hide();
    $('#player9').hide();
    $('#player10').hide();
    $('#dixieWin').hide();

    /*
     * multidimensional array with data relevent to 52 card deck
     * true indicates they have not been used.
     */
    var staticCards = [
        ['/pictures/Cards/2_Clubs.png', true, 2, 'c'],
        ['/pictures/Cards/2_Diamonds.png', true, 2, 'd'],
        ['/pictures/Cards/2_Hearts.png', true, 2, 'h'],
        ['/pictures/Cards/2_Spades.png', true, 2, 's'],
        ['/pictures/Cards/3_clubs.png', true, 3, 'c'],
        ['/pictures/Cards/3_Diamonds.png', true, 3, 'd'],
        ['/pictures/Cards/3_Hearts.png', true, 3, 'h'],
        ['/pictures/Cards/3_Spades.png', true, 3, 's'],
        ['/pictures/Cards/4_Clubs.png', true, 4, 'c'],
        ['/pictures/Cards/4_Diamonds.png', true, 4, 'd'],
        ['/pictures/Cards/4_Hearts.png', true, 4, 'h'],
        ['/pictures/Cards/4_Spades.png', true, 4, 's'],
        ['/pictures/Cards/5_Clubs.png', true, 5, 'c'],
        ['/pictures/Cards/5_Diamonds.png', true, 5, 'd'],
        ['/pictures/Cards/5_Hearts.png', true, 5, 'h'],
        ['/pictures/Cards/5_Spades.png', true, 5, 's'],
        ['/pictures/Cards/6_Clubs.png', true, 6, 'c'],
        ['/pictures/Cards/6_Diamonds.png', true, 6, 'd'],
        ['/pictures/Cards/6_Hearts.png', true, 6, 'h'],
        ['/pictures/Cards/6_spades.png', true, 6, 's'],
        ['/pictures/Cards/7_Clubs.png', true, 7, 'c'],
        ['/pictures/Cards/7_Diamonds.png', true, 7, 'd'],
        ['/pictures/Cards/7_Hearts.png', true, 7, 'h'],
        ['/pictures/Cards/7_Spades.png', true, 7, 's'],
        ['/pictures/Cards/8_Clubs.png', true, 8, 'c'],
        ['/pictures/Cards/8_Diamonds.png', true, 8, 'd'],
        ['/pictures/Cards/8_Hearts.png', true, 8, 'h'],
        ['/pictures/Cards/8_Spades.png', true, 8, 's'],
        ['/pictures/Cards/9_Clubs.png', true, 9, 'c'],
        ['/pictures/Cards/9_Diamonds.png', true, 9, 'd'],
        ['/pictures/Cards/9_Hearts.png', true, 9, 'h'],
        ['/pictures/Cards/9_Spades.png', true, 9, 's'],
        ['/pictures/Cards/10_Clubs.png', true, 10, 'c'],
        ['/pictures/Cards/10_Diamonds.png', true, 10, 'd'],
        ['/pictures/Cards/10_Hearts.png', true, 10, 'h'],
        ['/pictures/Cards/10_Spades.png', true, 10, 's'],
        ['/pictures/Cards/J_Clubs.png', true, 10, 'c'],
        ['/pictures/Cards/J_Diamonds.png', true, 10, 'd'],
        ['/pictures/Cards/J_Hearts.png', true, 10, 'h'],
        ['/pictures/Cards/J_Spades.png', true, 10, 's'],
        ['/pictures/Cards/Q_Clubs.png', true, 10, 'c'],
        ['/pictures/Cards/Q_Diamonds.png', true, 10, 'd'],
        ['/pictures/Cards/Q_Hearts', true, 10, 'h'],
        ['/pictures/Cards/Q_Spades.png', true, 10, 's'],
        ['/pictures/Cards/K_Clubs.png', true, 10, 'c'],
        ['/pictures/Cards/K_Diamonds.png', true, 10, 'd'],
        ['/pictures/Cards/K_Hearts.png', true, 10, 'h'],
        ['/pictures/Cards/K_Spades.png', true, 10, 's'],
        ['/pictures/Cards/A_Clubs.png', true, 11, 'c'],
        ['/pictures/Cards/A_Diamonds.png', true, 11, 'd'],
        ['/pictures/Cards/A_Hearts.png', true, 11, 'h'],
        ['/pictures/Cards/A_Spades.png', true, 11, 's']
    ];

    var cards = $.extend(true, [], staticCards);

    var topCard = '/pictures/Cards/Top_Card.png';

    var bet = 0;

    var dealerCash = 200;
    var dealerHand = 2;
    var dealerPoints = 0;
    var dealerPosition = 2;

    var difficulty = 17;

    var playerCash = 100;
    var playerHand = 2;
    var playerPoints = 0;
    var playerPosition = 2;

    var playerCards = [];
    var dealerCards = [];

    var hasDealt = false;
    var shownCards = false;
    var hasBet = false;


    var playerImages = ['#player1', '#player2', '#player3', '#player4', '#player5', '#player6', '#player7', '#player8', '#player9', '#player10'];

    var dealerImages = ['#dealer1', '#dealer2', '#dealer3', '#dealer4', '#dealer5', '#dealer6', '#dealer7', '#dealer8', '#dealer9', '#dealer10'];

    $('#cash').val(playerCash);
    $('#dealerCash').val(dealerCash);

    $('#betInput').click(function () {
        this.value = '';
    });

    $('#easy').click(function () {
        reset();
        resetCards();
        difficulty = 13;
        playerCash = (200);
        dealerCash = (200);
        $('#cash').val(playerCash);
        $('#dealerCash').val(dealerCash);
        $('#dixieWin').hide();
    });

    $('#medium').click(function () {
        reset();
        resetCards();
        difficulty = 15;
        playerCash = (150);
        dealerCash = (200);
        $('#dealerCash').val(dealerCash);
        $('#cash').val(playerCash);
        $('#dixieWin').hide();
    });

    $('#hard').click(function () {
        hard();

    });

    var hard = function () {
        reset();
        resetCards();
        difficulty = 17;
        playerCash = (100);
        dealerCash = (200);
        $('#dealerCash').val(dealerCash);
        $('#cash').val(playerCash);
        $('#dixieWin').hide();
    };
    ;

    $('#bet').click(function () {
        placeBet();
    });

    var placeBet = function () {
        if (isNaN($('#betInput').val()) || $('#betInput').val() === '' || $('#betInput').val() < 1)
            $('#alert').val('Bet Must Be Valid Number');

        else if ($('#betInput').val() > playerCash || $('#betInput').val() > dealerCash)
            $('#alert').val('Not Enough Money');

        else if (hasBet || hasDealt)
            $('#alert').val('Can Only Bet Once Per Hand');

        else {
            playerCash = playerCash - $('#betInput').val();
            dealerCash = dealerCash - $('#betInput').val();
            bet = $('#betInput').val();
            $('#dealerCash').val(dealerCash);
            $('#cash').val(playerCash);
            $('#currentPot').val(bet * 2);
            hasBet = true;
            resetCards();
        }
    };

    $('#deal').click(function () {
        deal();
    });
    //handler for main game function
    var deal = function () {
        if (!hasDealt && hasBet) {
            shuffle();
            while (playerCards.length > 0) {
                playerCards.pop();
                dealerCards.pop();
            }
            dealPlayer();
            dealDealer();
            shownCards = false;
            hasDealt = true;
            $('#alert').val('Jquery Black Jack');
        } else if (!hasBet)
            $('#alert').val('Must Bet To Play');
        else
            $('#alert').val('Already Dealt This Hand');
    };

    //resets all cards.
    var shuffle = function () {
        for (var x = 0; x < 10; x++) {
            $(playerImages[x + 2]).hide();
            $(dealerImages[x + 2]).hide();
            $(dealerImages[x]).attr('src', topCard);
        }
        dealerPoints = 0;
        playerPoints = 0;
    };

    /*
     * used to prevent repeat of cards. 
     */
    var dealPlayer = function () {
        var pos = 0;
        while (pos < 10) {
            var randomNumber = Math.floor(Math.random() * 51);

            if (cards[randomNumber][1] === true) {
                playerCards.push(cards[randomNumber]);
                cards[randomNumber][1] = false;
                $(playerImages[pos]).attr('src', playerCards[pos][0]);
                pos += 1;
            }
        }

        playerPoints = (playerCards[0][2] + playerCards[1][2]);

        if (playerPoints > 21) {
            playerCards[0][2] = 1;
            playerPoints = 12;
        }
        $('#Points').val('Player Points: ' + playerPoints);
    };

    //Same As dealPlayer w/ exception of hiding 2nd card.
    var dealDealer = function () {
        var pos = 0;
        while (pos < 10) {
            var randomNumber = Math.floor(Math.random() * 51);

            if (cards[randomNumber][1] === true) {
                dealerCards.push(cards[randomNumber]);
                cards[randomNumber][1] = false;
                pos += 1;
            }
        }
        $(dealerImages[0]).attr('src', dealerCards[0][0]);
        dealerPoints = (dealerCards[0][2] + dealerCards[1][2]);

        if (dealerPoints > 21) {
            dealerCards[0][2] = 1;
            dealerPoints = 12;
        }
    };

    $('#draw').click(function () {
        if (!hasDealt)
            $('#alert').val('Must Deal First');

        else if (shownCards)
            $('#alert').val('Already Played This Hand');

        else
            playerDraw(playerPosition);

    });

    /*
     *Dealer 'auto-draw' based on 17 point Casino rule. 
     */
    var dealerDraw = function (position) {
        if ((dealerCards[0][2] + dealerCards[1][2] === 21)) {
            showCards();
        } else {
            while (dealerPoints < difficulty) {
                if (dealerCards[position][2] === 11 && dealerCards[position][2] + dealerPoints > 21) {
                    dealerCards[position][2] = 1;
                    dealerPoints = dealerPoints + 1;
                    $(dealerImages[position]).fadeIn();
                    $(dealerImages[position]).attr('src', dealerCards[position][0]);
                    position++;
                    dealerHand++;
                } else if (dealerCards[0][2] === 11 && (dealerPoints + dealerCards[position][2] > 21)) {
                    dealerCards[0][2] = 1;
                    dealerPoints = dealerPoints - 10;
                    dealerPoints += dealerCards[position][2];
                    $(dealerImages[position]).fadeIn();
                    $(dealerImages[position]).attr('src', dealerCards[position][0]);
                    position++;
                    dealerHand++;
                } else if (dealerCards[1][2] === 11 && (dealerPoints + dealerCards[position][2] > 21)) {
                    dealerCards[1][2] = 1;
                    dealerPoints = dealerPoints - 10;
                    dealerPoints += dealerCards[position][2];
                    $(dealerImages[position]).fadeIn();
                    $(dealerImages[position]).attr('src', dealerCards[position][0]);
                    position++;
                    dealerHand++;
                } else {
                    dealerPoints += dealerCards[position][2];
                    $(dealerImages[position]).fadeIn();
                    $(dealerImages[position]).attr('src', dealerCards[position][0]);
                    position++;
                    dealerHand++;
                }
            }
        }
        if (dealerPoints > 21)
            showCards();
    };

    var playerDraw = function (position) {
        if (playerCards[position][2] === 11 && playerPoints > 10) {
            playerPoints = playerPoints + 1;
            $(playerImages[position]).fadeIn();
            playerPosition++;
            playerHand++;
        } else if (playerCards[0][2] === 11 && (playerPoints + playerCards[position][2] > 21)) {
            playerCards[0][2] = 1;
            playerPoints = playerPoints - 10;
            playerPoints += playerCards[position][2];
            $(playerImages[position]).fadeIn();
            playerPosition++;
            playerHand++;
        } else if (playerCards[1][2] === 11 && (playerPoints + playerCards[position][2] > 21)) {
            playerCards[1][2] = 1;
            playerPoints = playerPoints - 10;
            playerPoints = playerPoints + playerCards[position][2];
            $(playerImages[position]).fadeIn();
            playerPosition++;
            playerHand++;

        } else {
            playerPoints = playerPoints + playerCards[position][2];
            $(playerImages[position]).fadeIn();
            playerPosition++;
            playerHand++;
        }
        $('#Points').val('Player Points: ' + playerPoints);

        if (playerPoints > 21) {
            showCards();
        }
    };

    $('#end').click(function () {
        if (hasDealt && !shownCards) {
            dealerDraw(dealerPosition);
            showCards();
        } else if (shownCards)
            $('#alert').val('Already Played This hand');

        else
            $('#alert').val('Must Deal First');

    });

    var showCards = function () {

        if ((playerPoints === 21) && (playerHand === 2) && ((dealerHand > 2) || dealerHand < 21)) {
            playerCash += bet * 3 / 2;
            playerCash += bet * 1;
            $('#alert').val('You Won The Round');
        } else if ((playerPoints <= 21 && playerPoints > dealerPoints) || dealerPoints > 21) {
            playerCash += bet * 2;
            $('#alert').val('You Won The Round');
        } else if ((playerPoints === dealerPoints) && (dealerPoints <= 21) && (playerPoints <= 21)) {
            playerCash += bet * 1;
            dealerCash += bet * 1;
            $('#alert').val('Draw');
        } else {
            $('#alert').val('You Lost The Round');
            if (dealerCards[0][2] + dealerCards[1][2] === 21)
                dealerCash += bet * 3 / 2;
            else
                dealerCash += bet * 2;
        }

        $(dealerImages[1]).attr('src', dealerCards[1][0]);

        bet = 0;
        playerPosition = 2;
        dealerPosition = 2;
        dealerHand = 2;
        playerHand = 2;

        $('#dealerCash').val(dealerCash);
        $('#cash').val(playerCash);
        $('#currentPot').val(' ');

        hasDealt = false;
        hasBet = false;
        shownCards = true;
        cards = $.extend(true, [], staticCards);


        $('#Points').val('Player Points: ' + playerPoints + '   DealerPoints: ' + dealerPoints);

        if (playerCash < 1) {
            $('#alert').val('Out of Money');
            location.reload();
        }
        if (dealerCash < 1) {
            $('#alert').val('You Won!...');
            $('#dixieWin').fadeIn();
        }

    };

    var resetCards = function () {
        for (var i = 0; i < 10; i++) {
            $(playerImages[i]).attr('src', topCard);
            $(dealerImages[i]).attr('src', topCard);
            $(playerImages[i + 2]).hide();
            $(dealerImages[i + 2]).hide();
        }
    };

    var reset = function () {
        hasBet = false;
        hasDealt = false;
        shownCards = true;
        $('#currentBet').val('');
    };


});
