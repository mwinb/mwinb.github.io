//Portfolio 
//Michael Winberry

$(document).ready( function () {
    var skillList = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Python','p5js', 'Java', 'i86 Assembly'];
    //project array [[title, date, image, imageLink, about, sourceCodeLink]]
    var projects = [
    ['Labor Tracker', 'Fall 18', 'Utilization.PNG', 'https://labor.ngrok.io', 'A Web application I created in order' +
    ' to help increase utilization and accountability by allowing user to input thier hours worked and compare it with the amount of hours generated. ' +
    'In order to better predict future labor usage.', 'https://github.com/mwinb/labortracker'],

    ['Functionality Check List', 'Winter 18', 'funChecker.jpeg', 'https://mwinb.github.io/funchecker', 
    'A page that I created in order to track accessories while testing devices for Geek Squad.'
    + ' Allows for user to check off the items by clicking on them. Creates a hexadecimal code that relates to whether'
    +' or not the accessory button is selected.', 
    'https://github.com/mwinb/funChecker'],

    ['TerminalDocs/Temdocs', 'Spring 2017 - Present', 'termdocsImage.jpeg', 'https://github.com/mwinb/termdocs', 
    'TerminalDocs is a console based text editor that I created using Python 2.7. ' 
    + 'I created TerminalDocs in order to help me comment, read, and edit code documents' 
    + ' line by line and without distraction.',
    'https://github.com/mwinb/TerminalDocs'],

    ['Black Jack', 'Spring 2016', 'blackJackImage.jpeg','/blackjack', 
    'A web based game of Black Jack using the jQuery JavaScript library. ' 
    + 'Pits the user against a dealer and has 3 modes of difficulty.',
    'https://github.com/mwinb/blackjack'],

    ['Knils Arena', 'Spring 2015', 'knilImage.jpeg', '/knil', 
    'Knils Arena is an adventure game built using jQuery JavaScript library.' 
    + ' Knils Arena allows the user to take control of  the Hero Knil and fight their way through two' 
    + ' levels in order to find the obtain the treasured "Knil Force".', 
    'https://github.com/mwinb/knil'],

    ['Apache Company Site', 'Spring 2015', 'apacheco.jpg','/apacheco', 
    'A website based on the Marine unit that I deployed to Afghanistan with, in 2011. ', 
    'https://github.com/mwinb/apacheco']
    ];

    var slideVars = ['#currentProject', '#title', '#date', 'projectImage',
    '#imageLink', '#about', '#sourceLink'];
/*
    var populateList = function(list) {
        for (var i = 0; i < skillList.length; ++i)
        {
            $('.skills').append("<div class='skillList'>" + skillList[i] + "</div>");
        }
    }

    var count = 0;

    var total = projects.length;

    $('#next').click(function () {
        count += 1;
        if(count >= projects.length) {
            count = 0;
        }

        $('#slideShow').fadeOut(500, function () {
            setSlide(count);
        });


    });

    $('#previous').click(function () {
        count -= 1;
        if (count < 0) {
            count = projects.length-1;
        }

        $('#slideShow').fadeOut(500, function () {
            setSlide(count);
        });

    });

    var setSlide = function (position) 
    {
        var current = position + 1;
        $('#currentProject').text(current + '/' + total);
        $('#title').text(projects[position][0]);
        $('#date').text(projects[position][1]);
        $('#projectImage').attr('src', projects[position][2]);
        $('#imageLink').attr('href', projects[position][3]);
        $('#about').text(projects[position][4]);
        $('#sourceLink').attr('href', projects[position][5]);

        for (var i = 0; i < slideVars.length; ++i)
        {
            $('#slideShow').fadeIn(1000);
        }
    };
*/
    var setSlide = function()
    {
        for(var i = 0; i < projects.length; i++)
        {
            $('#slideList').append(
            "<li>" + 
            "<a class=\"uk-link-muted\" href=\"" + projects[i][3] + "\">" +
            "<img id=\"projectImage\" src=\"" + projects[i][2] +  "\" alt=\"\" uk-cover>" + 
            "</a>"+
            "<div class=\"uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom\">" + 
                "<h3 class=\"uk-margin-remove\">" + projects[i][0] + "</h3>" + 
                "<p class=\"uk-margin-remove\">" + projects[i][4] + "</p>" + 
            "</div>" + 
            "</li>"
            );
        };
    }
    setSlide();
    //populateList(skillList);

});

