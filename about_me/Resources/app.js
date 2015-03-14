//This sets the background color of the master UIView 
Titanium.UI.setBackgroundColor('#000');

//Tab group
var tabGroup = Titanium.UI.createTabGroup();


//Create base UI tab and root window
var win1 = Titanium.UI.createWindow({  
    title:'About Me',
    backgroundColor:'#ffffff'
});

//Creating About Me tab
var aboutTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'About Me',
    viewShadowColor :'#D6F0FF',
    window:win1
   
});

///Creatign view and then adding picture in rescources folder
var profilePic = Ti.UI.createImageView({
	width: 150,
	height: 150,
	image: 'selfpic.jpg',
	top: 30, 
});

//Label that Contains my info text
var aboutMe = Titanium.UI.createLabel({
	color:'#000',
	text:'My name is Roshan Mykoo and I am from Queens, New York. I graduated St.Francis Prep in 2013 and then atteneded Queensborough Community College for one year. I have now transfered to Full Sail University currently pursuing my degreee in Mobile Development. ',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'auto'
});
win1.add(aboutMe);
win1.add(profilePic);


//Create controls tab and root window
var win2 = Titanium.UI.createWindow({  
    title:'My Interest',
    backgroundColor:'#fff'
});
//Create my second tab 
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'My Interest',
    window:win2
});

//Creating list in second window
var listView = Ti.UI.createListView();
//array to hold data set
var sections = [];

//Section to add Properties
var interestSection = Ti.UI.createListSection({});
var interestDataSet = [
    {properties: { title: 'Technology'}},
    {properties: { title: 'Video Games'}},
    {properties: { title: 'Music'}},
    {properties: { title: 'Sneakers'}},
];
interestSection.setItems(interestDataSet);
sections.push(interestSection);

listView.sections = sections;

//Add to window
win2.add(listView);


//Add tabs
tabGroup.addTab(aboutTab);  
tabGroup.addTab(tab2);  


//Open tab group
tabGroup.open();
