//Portfolio 
//Michael Winberry

$(document).ready( function () {

	var skillList = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Python','p5js', 'Java', 'i86 Assembly'];
	//project array [[title, date, image, imageLink, about, sourceCodeLink]]
	var projects = [
	['Functionality Check List', 'Winter 18', 'funChecker.jpeg', 'https://mwinb.github.io/funchecker', 
	'A page that I created in order to track accessories while testing devices for Geek Squad.'
	+ ' Allows for user to check off the items by clicking on them. Creates a hexadecimal code that relates to whether'
	+' or not the accessory button is selected. The user can write the code on a sheet, '
	+'allowing for the next user to input the code and see what items came with the device.', 
	'https://github.com/mwinb/funChecker'],

	['Zombulator', 'Fall 2017', 'zombulatorImage.png', '/cs160Zombulator',
	'Zombulator is a p5.js sketch that tests the mettle of humans against zombies. ' 
	+ 'Allows for user interaction to help administer the antidote to the zombies,'
	+ ' and turn the tides for the surviving humans',
	'https://github.com/mwinb/cs160Zombulator'],

	['TerminalDocs/Temdocs', 'Spring 2017 - Present', 'termdocsImage.jpeg', 'https://github.com/mwinb/termdocs', 
	'TerminalDocs is a console based text editor that I created using Python 2.7. ' 
	+ 'I created TerminalDocs in order to help me comment, read, and edit code documents' 
	+ ' line by line and without distraction. Supports many commands such as -oe which opens current file into' 
	+ ' users default text editor. ',
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
	'#imageLink', '#about', '#sourceLink']



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

		$('#slideShow').fadeOut(2000, function () {
			setSlide(count);
		});
		

	});

	$('#previous').click(function () {
		count -= 1;
		if (count < 0) {
			count = projects.length-1;
		}

		$('#slideShow').fadeOut(2000, function () {
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
			$('#slideShow').fadeIn(4000);
		}
	};

	setSlide(count);
	populateList(skillList);

});

