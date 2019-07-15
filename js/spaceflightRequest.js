$(document).ready(function() {
    const url =
      "https://spaceflightnewsapi.net/api/v1/articles?limit=100";


    $.ajax({
      url: url,
      success: function(result) {
        const alignRight = "articleImage uk-flex-last@s uk-card-media-right uk-cover-container";
        const alignLeft = "articleImage uk-card-media-left uk-cover-container"
        result.docs.forEach((element, count) => {
          $('#spaceFlightFeedContainer').append(
            `<div class="spaceFlightCardContainer uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="${count % 2 === 0 ? alignLeft : alignRight}">
                    <img src="${element.featured_image}" alt="" uk-cover>
                    <canvas width="200" height="200"></canvas>
                </div>
                <div id='articleContent'>
                  <div class="uk-card-body">
                    <h3 class="articleTitle uk-card-title">${element.title}</h3>
                    <a class="uk-link-muted" href="${element.url}">View Article</a>
                  </div>
                </div>
            </div>`
            );
        });

      }
    });
  });