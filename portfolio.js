//Portfolio 
//Michael Winberry

$(document).ready( function () {
	var count = 0;
	//project array [[title, date, image, imageLink, about, sourceCodeLink]]
	var projects = [
	['Knil' + "'" + 's' + ' jQuery Arena', 'Spring 2015', 'knilImage.jpeg', '/knil', 
	'Knil' + "'" + 's' 
	+ 'jQuery arena is a homage to Zelda built using jQuery JavaScript library.' 
	+ ' It was my first attempt at programming and allows the '
	+ 'user to take control of Knil and fight their way through two' 
	+ 'levels in order to find the obtain the treasured "Knil Force".', 
	'https://github.com/mwinb/knil'],
	['Apache Company Site', 'Spring 2015', 'apacheco.jpg','/apacheco', 
	'A website that I created in order to help learn html, css, and js. ' 
	+ 'Based on the Marine Unit that I deployed to Afghanistan in 2011 with. ', 
	'https://github.com/mwinb/apacheco'],
	['Black Jack', 'Spring 2016', 'blackJackImage.jpeg','/blackjack', 
	'A web based game of Black Jack using the jQuery JavaScript library. ' 
	+ 'Pits the user against a compure dealer and has 3 modes of difficulty.',
	'https://github.com/mwinb/blackjack'],
	['TerminalDocs/Temdocs', 'Spring 17', 'termdocsImage.jpeg', 'https://github.com/mwinb/termdocs', 
	'TerminalDocs is a console based text editor that I created using Python 2.7. ' 
	+ 'I created TerminalDocs in order to help me comment, read, and edit code documents' 
	+ 'line by line. Supports many commands such as -oe wich opens current file into' 
	+ ' users default text editor. ',
	'https://github.com/mwinb/TerminalDocs'],
	['Zombulator', 'Fall 17', 'zombulatorImage.png', '/cs160Zombulator',
	'Zombulator is a p5.js sketch that tests the mettle of humans against zombies. ' 
	+ 'Allows for user interaction to help administer the antidote to the zombies,'
	+ ' and turn the tides for the surviving humans',
	'https://github.com/mwinb/cs160Zombulator'] 
	];


	var total = projects.length - 1;

	var setSlide = function (position) {
		var current = position + 1;
		$('#currentProject').text(current + '/' + total);
		$('#title').text(projects[position][0]);
		$('#date').text(projects[position][1]);
		$('#projectImage').attr('src', projects[position][2]);
		$('#imageLink').attr('href', projects[position][3]);
		$('#about').text(projects[position][4]);
		$('#sourceLink').attr('href', projects[position][5]);
	};

	$('#next').click(function () {
		count += 1;
		if(count >= projects.length) {
			count = 0;
		}
		setSlide(count);
	});

	$('#previous').click(function () {
		count -= 1;
		if (count < 0) {
			count = projects.length-1;
		}

		setSlide(count);
	});

	setSlide(count);

});

