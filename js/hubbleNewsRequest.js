$(document).ready(function() {
  const articleListURL = "http://hubblesite.org/api/v3/news?page=all";


  $.ajax({
    url: articleListURL,
    type: 'GET',
    datatype: 'jsonp',
    success: function(result) {
      console.log(result);
      count = 0;
      while(count < 50)
      {
        getArticleByID(result[count].news_id, count);
        count++;
      }
    }
  });

  getArticleByID = (articleID, count) => {
    $.ajax({
      url: `http://hubblesite.org/api/v3/news_release/${articleID}`,
      success: function(result) {
        const alignRight =
          "articleImage uk-flex-last@s uk-card-media-right uk-cover-container";
        const alignLeft = "articleImage uk-card-media-left uk-cover-container";
          $("#hubbleNewsFeedContainer").append(
            `<div class="spaceFlightCardContainer uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="${alignRight}">
                    <img src="http:${result.thumbnail_retina}" alt="" uk-cover>
                    <canvas width="200" height="200"></canvas>
                </div>
                <div id='articleContent'>
                  <div class="uk-card-body">
                    <h3 class="articleTitle uk-card-title">${result.name}</h3>
                    <p>${result.abstract}</p>
                    <a class="uk-link-muted" href="${
                      result.url
                    }">View Article</a>
                  </div>
                </div>
            </div>`
          );
      }
    });
  };
  
});
