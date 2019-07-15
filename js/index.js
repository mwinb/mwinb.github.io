$(document).ready(function() {
  const navButtonIDs = ["#showSlidesButton", "#showSpaceFlightButton", "#showHubbleNewsButton"];
  const containerIDs = ["#apoidContainer", "#spaceFlightFeedContainer", "#hubbleNewsFeedContainer"];
  
  $(navButtonIDs[0]).click(() => {
    removeHighLight();
    showApoidContainer();
    setSelectedButtonColor(navButtonIDs[0]);
    scrollToBottom();

  });

  $(navButtonIDs[1]).click(() => {
    removeHighLight();
    showSpaceFlightNews();
    setSelectedButtonColor(navButtonIDs[1]);
  });

  $(navButtonIDs[2]).click(() => {
    removeHighLight();
    showHubbleNews();
    setSelectedButtonColor(navButtonIDs[2]);
  });

  showHubbleNews = () => {
    hideAllViews();
    $(containerIDs[2]).show();
  }

  showSpaceFlightNews = () => {
    hideAllViews();
    $(containerIDs[1]).show();
  };

  showApoidContainer = () => {
      hideAllViews();
      $(containerIDs[0]).show();
  }

  hideAllViews = () => {
    containerIDs.forEach(element => {
      $(element).hide();
    });
  };

  removeHighLight = () => {
      navButtonIDs.forEach(element => {
        $(element).css('background-color', 'inherit');
        $(element).css('color', 'white');
      });
  }


  setSelectedButtonColor = (buttonID) => {
    $(buttonID).css('background-color', '#020124');
    $(buttonID).css('color', 'grey');
  };

  scrollToBottom = () => { 
    $('html, body').scrollTop( $(document).height() - $(window).height() );
  };

  hideAllViews();
  removeHighLight();
  setSelectedButtonColor(navButtonIDs[0]);
  $(containerIDs[0]).show();
  scrollToBottom();

});
