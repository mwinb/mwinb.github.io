//<![CDATA[
$(window).on('load', function() {
//JQUERY BLACK JACK 
//MICHAEL WINBERRY
$(document).ready(function() {
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

  /*
   * multidimensional array with data relevent to 52 card deck
   * true indicates they have not been used.
   */
  var staticCards = [
    ['http://i350.photobucket.com/albums/q429/mwinberry/2_Clubs_zpsvvlk2g5q.png', true, 2, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/2_Diamonds_zpsyrlqhv83.png', true, 2, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/2_Hearts_zpspwg5mktu.png', true, 2, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/2_Spades_zpsto4n3exo.png', true, 2, 's'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/3_clubs_zpskbecdooh.png', true, 3, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/3_Diamonds_zpseidfahnj.png', true, 3, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/3_Hearts_zpswxv52rdk.png', true, 3, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/3_Spades_zpscjwzllpz.png', true, 3, 's'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/4_Clubs_zpsd0yuvolh.png', true, 4, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/4_Diamonds_zpsljicpuvs.png', true, 4, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/4_Hearts_zpsizx6cnfd.png', true, 4, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/4_Spades_zps3tsi7mgg.png', true, 4, 's'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/5_Clubs_zpsgmubvuzj.png', true, 5, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/5_Diamonds_zps63l4b6gp.png', true, 5, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/5_Hearts_zps385wcj9x.png', true, 5, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/5_Spades_zpso83x0gj4.png', true, 5, 's'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/6_Clubs_zpsxgatr6m8.png', true, 6, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/6_Diamonds_zpsyan92i4n.png', true, 6, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/6_Hearts_zpsz7w0ppns.png', true, 6, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/6_spades_zpsm0wd1zvj.png', true, 6, 's'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/7_Clubs_zpsqi86uanu.png', true, 7, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/7_Diamonds_zpshb3vxen5.png', true, 7, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/7_Hearts_zpswpm5nk2w.png', true, 7, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/7_Spades_zpstvkjpzew.png', true, 7, 's'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/8_Clubs_zpsdqtonh4o.png', true, 8, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/8_Diamonds_zpsgc6yynsn.png', true, 8, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/8_Hearts_zpsgkacftof.png', true, 8, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/8_Spades_zps7eztilkc.png', true, 8, 's'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/9_Clubs_zps0651cmm5.png', true, 9, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/9_Diamonds_zpsngwbn60b.png', true, 9, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/9_Hearts_zpsqebkrr2g.png', true, 9, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/9_Spades_zpsfvdyy9n6.png', true, 9, 's'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/10_Clubs_zpshh6scfc5.png', true, 10, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/10_Diamonds_zpsk3nrzrax.png', true, 10, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/10_Hearts_zpsde2zsbjj.png', true, 10, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/10_Spades_zpsmcibewhn.png', true, 10, 's'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/J_Clubs_zpsn9zinenl.png', true, 10, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/J_Diamonds_zpsaxzs41vn.png', true, 10, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/J_Hearts_zpsmufscafp.png', true, 10, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/J_Spades_zpssgub5w8r.png', true, 10, 's'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/Q_Clubs_zpskklpvr8m.png', true, 10, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/Q_Diamonds_zpsvqychjnq.png', true, 10, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/Q_Hearts_zps6xhmikig.png', true, 10, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/Q_Spades_zpsnduqptr5.png', true, 10, 's'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/K_Clubs_zpsbj9jot9x.png', true, 10, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/K_Spades_zpsxhvf861z.png', true, 10, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/Q_Hearts_zps6xhmikig.png', true, 10, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/K_Hearts_zpsk2pbzs46.png', true, 10, 's'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/A_Clubs_zpsqosagrt9.png', true, 11, 'c'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/A_Diamonds_zpsrrk44tz2.png', true, 11, 'd'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/A_Hearts_zpsgk8qbd6g.png', true, 11, 'h'],
    ['http://i350.photobucket.com/albums/q429/mwinberry/A_Spades_zpsw1b52znh.png', true, 11, 's']
  ];
  
  var cards = $.extend(true, [], staticCards);

  var topCard = 'http://i350.photobucket.com/albums/q429/mwinberry/Top_Card_zpskelxprbm.png';

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

  $('#easy').click(function() {
    reset();
    resetCards();
    difficulty = 13;
    playerCash = (200);
    dealerCash = (200);
    $('#cash').val(playerCash);
    $('#dealerCash').val(dealerCash);
  });

  $('#medium').click(function() {
    reset();
    resetCards();
    difficulty = 15;
    playerCash = (150);
    dealerCash = (200);
    $('#dealerCash').val(dealerCash);
    $('#cash').val(playerCash);
  });

  $('#hard').click(function() {
    reset();
    resetCards();
    difficulty = 17;
    playerCash = (100);
    dealerCash = (200);
    $('#dealerCash').val(dealerCash);
    $('#cash').val(playerCash);
  });

  $('#bet').click(function() {
    placeBet();
  });

  var placeBet = function() {
    if (isNaN($('#betInput').val()) || $('#betInput').val() === '' || $('#betInput').val() < 1)
      $('#alert').val('Bet Must Be Valid Number')

    else if ($('#betInput').val() > playerCash)
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

  $('#deal').click(function() {
    deal();
  });
  //handler for main game function
  var deal = function() {
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
      dealerDraw(dealerPosition);
      alert(dealerCards);
    } else if (!hasBet)
      $('#alert').val('Must Bet To Play')
    else
      $('#alert').val('Already Dealt This Hand')
  };

  //resets all cards.
  var shuffle = function() {
    for (var x = 0; x < 10; x++) {
      $(playerImages[x + 2]).hide();
      $(dealerImages[x + 2]).hide();
      $(dealerImages[x]).attr('src', topCard);
    }
    dealerPoints = 0;
    playerPoints = 0;
  };

  /*
   *Recursive Deal. 
   *Recursion used to prevent repeat of cards. 
   */
  var dealPlayer = function() {
    var pos = 0;
    while (pos < 10) {
      var randomNumber = Math.floor(Math.random() * 51);

      if (cards[randomNumber][1] == true) {
        playerCards.push(cards[randomNumber]);
        cards[randomNumber][1] = false;
        $(playerImages[pos]).attr('src', playerCards[pos][0]);
        pos += 1;
      }
    }

    playerPoints = (playerCards[0][2] + playerCards[1][2]);

    if (playerPoints == 22) {
      playerCards[0][2] = 1;
      playerPoints = 12;
    }
    $('#Points').val('Player Points: ' + playerPoints);
  };

  //Same As dealPlayer w/ exception of hiding 2nd card.
  var dealDealer = function() {
    var pos = 0;
    while (pos < 10) {
      var randomNumber = Math.floor(Math.random() * 51);

      if (cards[randomNumber][1] == true) {
        dealerCards.push(cards[randomNumber]);
        cards[randomNumber][1] = false;
        pos += 1;
      }
    }
    $(dealerImages[0]).attr('src', dealerCards[0][0]);
    dealerPoints = dealerCards[0][2] + dealerCards[1][2];

    if (dealerPoints == 22) {
      dealerCards[0][2] = 1;
      dealerPoints = 12;
    }
  };

  $('#draw').click(function() {
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
  var dealerDraw = function(position) {
    var killSwitch = false;

    if ((dealerCards[0][2] + dealerCards[1][2] == 21)) {
      showCards();
    } else {

      while (!killSwitch) {
        if ((dealerPoints < difficulty) && playerPoints < 22) {
          if (dealerCards[position][2] == 11 && dealerCards[position][2] + dealerPoints > 21) {
            dealerCards[position][2] == 1;
            dealerPoints = dealerPoints + 1;
            $(dealerImages[position]).fadeIn();
            $(dealerImages[position]).attr('src', dealerCards[position][0])
            dealerPosition++;
            dealerHand++;
          } else if (dealerCards[0][2] == 11 && (dealerPoints + dealerCards[position][2] > 21)) {
            dealerCards[0][2] == 1;
            dealerPoints = dealerPoints - 10;
            dealerPoints += dealerCards[position][2];
            $(dealerImages[position]).fadeIn();
            $(dealerImages[position]).attr('src', dealerCards[position][0])
            dealerPosition++;
            dealerHand++;
          } else if (dealerCards[1][2] == 11 && (dealerPoints + dealerCards[position][2] > 21)) {
            dealerCards[1][2] == 1;
            dealerPoints = dealerPoints - 10;
            dealerPoints += dealerCards[position][2];
            $(dealerImages[position]).fadeIn();
            $(dealerImages[position]).attr('src', dealerCards[position][0])
            dealerPosition++;
            dealerHand++;
          } else {
            dealerPoints += dealerCards[position][2];
            $(dealerImages[position]).fadeIn();
            $(dealerImages[position]).attr('src', dealerCards[position][0])
            dealerPosition++;
            dealerHand++;
          }
        } else
          killSwitch = true;
      }
    }
    if (dealerPoints > 21)
      showCards();
  };

  var playerDraw = function(position) {

    if (playerCards[position][2] == 11 && playerPoints > 10) {
      playerPoints = playerPoints + 1;
      $(playerImages[position]).fadeIn();
      playerPosition++;
      playerHand++;
    } else if (playerCards[0][2] == 11 && (playerPoints + playerCards[position][2] > 21)) {
      playerCards[0][2] = 1;
      playerPoints = playerPoints - 10;
      playerPoints += playerCards[position][2];
      $(playerImages[position]).fadeIn();
      playerPosition++;
      playerHand++;
    } else if (playerCards[1][2] == 11 && (playerPoints + playerCards[position][2] > 21)) {
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

  $('#end').click(function() {
    if (hasDealt && !shownCards) {
      showCards();
    } else if (shownCards)
      $('#alert').val('Already Played This hand');

    else
      $('#alert').val('Must Deal First');

  });

  var showCards = function() {
    if ((playerPoints == 21) && (playerHand == 2) && ((dealerHand > 2) || dealerHand < 21)) {
      playerCash += bet * 3 / 2;
      playerCash += bet * 1;
      $('#alert').val('You Won The Round');
    } else if ((playerPoints <= 21 && playerPoints > dealerPoints) || dealerPoints > 21) {
      playerCash += bet * 2;
      $('#alert').val('You Won The Round');
    } else if ((playerPoints == dealerPoints) && (dealerPoints <= 21) && (playerPoints <= 21)) {
      playerCash += bet * 1;
      dealerCash += bet * 1;
      $('#alert').val('Draw');
    } else {
      $('#alert').val('You Lost The Round');
      if (dealerCards[0][2] + dealerCards[1][2] == 21)
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
      hard();
    }
  };

  var resetCards = function() {
    for (var i = 0; i < 10; i++) {
      $(playerImages[i]).attr('src', topCard);
      $(dealerImages[i]).attr('src', topCard);
      $(playerImages[i + 2]).hide();
      $(dealerImages[i + 2]).hide();
    }
  }

  var reset = function() {
    hasBet = false;
    hasDealt = false;
    shownCards = true;
    $('#currentBet').val('');
  }

});

});//]]> 
