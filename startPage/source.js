var hoverEffect = true; // set true for hover effect, set false for no hover effect

var searchEngine = 'google'; // default search engine - set google for google search, bing for bing search, yahoo for yahoo search

var numberOfScreens = 3; // set number of screens (1 or 2 or 3)
 
var blockName = new Array(); // set names of blocks
blockName[1] = 'My Faves';
blockName[2] = 'More Goodies';
blockName[3] = 'Geeky';

var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();

// set your bookmarks here: (If you do not fill 'thumb' for thumbnail will be used title)
// FIRST BLOCK
bookmark[0][0] = {
	'title':'YouTube',
	'url':'http://youtube.com',
	'thumb':'youtube.png'
};
bookmark[0][1] = {
	'title':'LinkedIn',
	'url':'http://www.linkedin.com',
	'thumb':'linkedin.png'
};
bookmark[0][2] = {
	'title':'Amazon',
	'url':'http://www.amazon.com',
	'thumb':'amazon.png'
};
bookmark[0][3] = {
	'title':'ebay.fm',
	'url':'http://www.ebay.com/',
	'thumb':'ebay.png'
};
bookmark[0][4] = {
	'title':'SilentGround',
	'url':'http://www.silentground.org/forums/',
	'thumb':'silentground.png'
};
bookmark[0][5] = {
	'title':'google',
	'url':'http://google.com',
	'thumb':'google.png'
};
bookmark[0][6] = {
	'title':'facebook',
	'url':'http://facebook.com',
	'thumb':'facebook.png'
};
bookmark[0][7] = {
	'title':'Github',
	'url':'https://github.com/jgdigitaljedi',
	'thumb':'github_icon.png'
};
bookmark[0][8] = {
	'title':'CraigsList',
	'url':'http://wichitafalls.craigslist.org/',
	'thumb':'craigslist.png'
};
bookmark[0][9] = {
	'title':'Google Play',
	'url':'https://play.google.com/store?hl=en&tab=w8',
	'thumb':'popo.png'
};
bookmark[0][10] = {
	'title':'reddit',
	'url':'http://www.reddit.com',
	'thumb':'reddit.png'
};
bookmark[0][11] = {
	'title':'The Weather Channel',
	'url':'http://www.weather.com/weather/today/Wichita+Falls+TX+76310:4:US',
	'thumb':'weather.png'
};
// end of FIRST BLOCK
// SECOND BLOCK
bookmark[1][0] = {
	'title':'xkcd',
	'url':'http://xkcd.com/',
	'thumb':'xkcd.png'
};
bookmark[1][1] = {
	'title':'ap',
	'url':'http://www.androidpolice.com/',
	'thumb':'ap.png'
};
bookmark[1][2] = {
	'title':'ultimate-guitar',
	'url':'http://www.ultimate-guitar.com/',
	'thumb':'ug.png'
};
bookmark[1][3] = {
	'title':'Kaywa',
	'url':'http://qrcode.kaywa.com/',
	'thumb':'qr.png'
};
bookmark[1][4] = {
	'title':'xda',
	'url':'http://forum.xda-developers.com/forumdisplay.php?f=564',
	'thumb':'xda.png'
};
bookmark[1][5] = {
	'title':'Netflix',
	'url':'http://movies.netflix.com/WiHome',
	'thumb':'netflix2.png'
};
bookmark[1][6] = {
	'title':'theChive',
	'url':'http://thechive.com/',
	'thumb':'kcco.png'
};
bookmark[1][7] = {
	'title':'Dropbox',
	'url':'https://www.dropbox.com/home',
	'thumb':'dropbox.png'
};
bookmark[1][8] = {
	'title':'Box',
	'url':'https://www.box.com/',
	'thumb':'box.png'
};
bookmark[1][9] = {
	'title':'lifehacker',
	'url':'http://lifehacker.com/',
	'thumb':'lifehacker.png'
};
bookmark[1][10] = {
	'title':'Geekologie',
	'url':'http://www.geekologie.com/',
	'thumb':'geekologie.png'
};
bookmark[1][11] = {
	'title':'ThinkGeek',
	'url':'https://www.thinkgeek.com/',
	'thumb':'tg.png'
};
//end of SECOND BLOCK
// THIRD BLOCK
bookmark[2][0] = {
	'title':'XDA GS4',
	'url':'http://forum.xda-developers.com/forumdisplay.php?f=2279',
	'thumb':'xdas4.png'
};
bookmark[2][1] = {
	'title':'XDA N7',
	'url':'http://forum.xda-developers.com/forumdisplay.php?f=1673',
	'thumb':'xdan7.png'
};
bookmark[2][2] = {
	'title':'cm',
	'url':'http://forum.cyanogenmod.com/',
	'thumb':'cm.png'
};
bookmark[2][3] = {
	'title':'IMDb',
	'url':'http://www.imdb.com/',
	'thumb':'imdb.png'
};
bookmark[2][4] = {
	'title':'Gizmodo',
	'url':'http://gizmodo.com/',
	'thumb':'giz.png'
};
bookmark[2][5] = {
	'title':'Lynda',
	'url':'http://www.lynda.com/member.aspx',
	'thumb':'lynda.png'
};
bookmark[2][6] = {
	'title':'engadged',
	'url':'http://www.engadget.com/',
	'thumb':'engadget.png'
};
bookmark[2][7] = {
	'title':'zune',
	'url':'http://www.zune.net/',
	'thumb':'zune.png'
};
bookmark[2][8] = {
	'title':'dropbox',
	'url':'http://www.dropbox.com/',
	'thumb':'dropbox.png'
};
bookmark[2][9] = {
	'title':'National Geographic',
	'url':'http://www.nationalgeographic.com/',
	'thumb':'natgeo.png'
};
bookmark[2][10] = {
	'title':'Techcrunch',
	'url':'www.techcrunch.com',
	'thumb':'tc.png'
};
bookmark[2][11] = {
	'title':'OMG! Ubuntu',
	'url':'http://www.omgubuntu.co.uk/',
	'thumb':'omg.png'
};