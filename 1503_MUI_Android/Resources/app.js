//Roshan Mykoo
//3-10-2015
//Client Information
var data = require('Data');
var win1 = Ti.UI.createWindow({
	backgroundColor : "#ffffff",
	title : 'Best Games by Console',
});
var win2 = Ti.UI.createWindow({
	backgroundColor : "#ffffff",
});
var detail = function(info) {

	var gameDetail = Ti.UI.createWindow({
		backgroundColor : 'white',
		title : info.name,
		layout : 'vertical'
	});
	var imageDetail = Ti.UI.createView({
		backgroundImage : info.image,
		top : 0,
		width : 270,
		height : 310,
	});
	var gameinfo = Ti.UI.createLabel({
		text : info.desc,
		top : 15,
		left : 7,
	});

	var scroll = Ti.UI.createScrollView({
		layout : 'vertical',
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		top : 0,
	});

	scroll.add(imageDetail);
	scroll.add(gameinfo);
	gameDetail.add(scroll);

	gameDetail.open();
};

var gamesSection = Ti.UI.createListSection({
	headerTitle : 'Best games of 2014'
});

//table
var windowTable = Ti.UI.createTableView({
	separatorColor : "black",
});

//sections
var sections = [];
for (n in data.games) {

	var section = Ti.UI.createTableViewSection({
		headerTitle : data.games[n].title,
	});
	section.addEventListener('click', function(e) {
		detail(e.source.data);
	});
	for ( i = 0; i < data.games[n].items.length; i++) {
		var info = data.games[n].items[i];

		var row = Ti.UI.createTableViewRow({
			title : data.games[n].items[i].name,
			data : info
		});
		section.add(row);
	}
	sections.push(section);
}
windowTable.setData(sections);

// //Listview
// var windowList = Ti.UI.createListView();
// //sections
// var sectionsName =[];
//
//
// gamesSection.setItems(games);
// sectionsName.push(gamesSection);
// windowList.sections=sectionsName;

win1.add(windowTable);
win1.open();
