//Portfolio
//Michael Winberry

$(document).ready(function () {
  var projects = [
    [
      "DocTs",
      "Ongoing",
      "DocTs.png",
      "https://www.npmjs.com/package/@mwinberry/doc-ts",
      "DocTs is a minimal framework built to support a simple and only slightly opinionated object oriented approach to implementing and unit testing Expressjs applications.",
      "https://www.npmjs.com/package/@mwinberry/doc-ts",
    ],
    [
      "Battle Buddies",
      "Winter 19",
      "battleBuddies.png",
      "/BattleBuddies",
      "A Flutter application created to explore background isolates and processes. Sends push notifications on an interval for the user to send an updated gps location to a selected contact",
      "https://github.com/mwinb/BattleBuddies",
    ],
    [
      "Silk Case Study",
      "Winter 19",
      "SILK.png",
      "/SilkCaseStudy",
      "A walk through of a silk case study I performed while taking a network security class",
      "https://github.com/mwinb/SilkCaseStudy",
    ],
    [
      "Scotty Flutter",
      "Summer 19",
      "ScottyFlutter.png",
      "/scottyFlutter",
      "A Space News Aggregator created using flutter.",
      "https://github.com/mwinb/scottyFlutter",
    ],
    [
      "SCOTTY",
      "Summer 19",
      "scotty.png",
      "/scotty",
      `An app prototype I created with UIkit and jQuery to grab various space based api's`,
      "https://github.com/mwinb/scotty",
    ],
    [
      "TerminalDocs/Temdocs",
      "Spring 2017 - Present",
      "termdocsImage.jpeg",
      "https://github.com/mwinb/termdocs",
      "TerminalDocs is a console based text editor that I created using Python 2.7. " +
        "I created TerminalDocs in order to help me comment, read, and edit code documents" +
        " line by line and without distraction.",
      "https://github.com/mwinb/TerminalDocs",
    ],
  ];

  projects.forEach((element) => {
    $("#slideList").append(
      "<li>" +
        '<a class="uk-link-muted" href="' +
        element[3] +
        '">' +
        '<img id="projectImage" src="' +
        element[2] +
        '" alt="" uk-cover>' +
        "</a>" +
        '<div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">' +
        '<h3 class="uk-margin-remove">' +
        element[0] +
        "</h3>" +
        '<p class="uk-margin-remove">' +
        element[4] +
        "</p>" +
        "</div>" +
        "</li>"
    );
  });
});
