"use strict";

// var contents = $('#morbo').html();
//
//
// $('.codeup').css('border', '1px solid red');
//
// $('li').css('font-size', '20px');
// $('h1, p, li').css('background-color', 'lightpink');
// alert($('h1').html());

$().ready(
	function () {
		$('h1').click(function () {
			$(this).css('background-color', 'lightyellow');
		});
		$('p').dblclick(function () {
			$(this).css('font-size', '18px');
		});
		$('li').hover(
			function () {
				$(this).css('color', 'firebrick');
		},
			function () {
				$(this).css('color', 'black')
			}
		);
	}
)