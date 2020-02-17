document.onselectstart = function() {
	return false;
};
document.oncontextmenu = function() {
	return false;
};

var pTimeout653 = {};
window.onerror = function(err, file, line)
{
	alert('ERROR in ' + file + ' ' + err + ' line ' + line);
};
function animateButton(elem,type,func)
{
	var imagePath;
	var bgColor = getComputedStyleIE(elem,"").getPropertyValue("actBgColor");

	if(bgColor == null) {

		imagePath = getComputedStyleIE(elem,"").getPropertyValue("background-image");
		if (imagePath.length < 7)
			return;

		if (type === 1) {
			if (imagePath.indexOf("_act.png") === -1)
				elem.style.backgroundImage = imagePath.substring(0, imagePath.length - 6) + '_act.png")';
			var spans = elem.getElementsByTagName('span');
			if (spans != null) {
				for (var i = 0; i < spans.length; i++) {
					if (spans[i].getAttribute('actColor') != null) {
						spans[i].style.color = spans[i].getAttribute('actColor');
					}
				}
			}

		}
		else {
			if (imagePath.indexOf("_act.png") !== -1)
				elem.style.backgroundImage = imagePath.substring(0, imagePath.length - 10) + '.png")';
			if (!!func) {
				func();
			}
		}
	}else
	{
		if(type === 1) {
			elem.style.backgroundColor = bgColor;
			var spans = elem.getElementsByTagName('span');
			if (spans != null) {
				for (var i = 0; i < spans.length; i++) {
					if (spans[i].getAttribute('actColor') != null) {
						spans[i].style.color = spans[i].getAttribute('actColor');
					}
				}
			}
		}else
		{
			elem.style.backgroundColor = getComputedStyleIE(elem,"").getPropertyValue("idleBgColor");
			if (!!func) {
				func();
			}
		}

	}
}
function getComputedStyleIE(el, pseudo)
{
	this.el = el;
	this.getPropertyValue = function(prop) {
		var re = /(\-([a-z]){1})/g;
		if (prop == 'float') prop = 'styleFloat';
		if (re.test(prop)) {
			prop = prop.replace(re, function () {
				return arguments[2].toUpperCase();
			});
		}
		return el.currentStyle[prop] ? el.currentStyle[prop] : null;
	};
	return this;
}
function getParam(sParamName,str)
{

	var Params;
	if(typeof str === 'undefined')
		Params = location.search.substring(1).split("&");
	else
		Params = str.split("&");
	var variable = "";
	for (var i = 0; i < Params.length; i++)
	{
		if (Params[i].split("=")[0] == sParamName)
		{
			if (Params[i].split("=").length > 1) variable = Params[i].split("=")[1];
			return variable;
		}
	}
	return "";
}
function callBodyOnLoad(scrData) {
	if(document.addEventListener)
	{
		document.body.onload(scrData);
	}else
	{
		window.page.loaded(scrData);
	}
}

function onTimoutMain() {
	if(!!pTimeout653.onTimeout)
	{
		pTimeout653.onTimeout();
	}
}
function loadContent() {
	window.document.body.onclick = function()
	{
		if(!!pTimeout653.timer)
		{
			clearTimeout(pTimeout653.timer);
			pTimeout653.timer = setTimeout(pTimeout653.onTimeout,pTimeout653.timeout*1000);
		}
	};	
	var scrData = {};


	scrData.isObject = true;
	scrData.hBtnCancel = {};
	scrData.hBtnClear = {};
	scrData.hBtnEnter = {};
	scrData.hBtn0 = {};
	scrData.hBtn1 = {};
	scrData.hBtn2 = {};
	scrData.hBtn3 = {};
	scrData.hBtn4 = {};
	scrData.hBtn5 = {};
	scrData.hBtn6 = {};
	scrData.hBtn7 = {};
	scrData.hBtn8 = {};
	scrData.hBtn9 = {};
	var sc = new Screens();
	window.document.body.onclick = function()
	{
		if(!!pTimeout653.timer)
		{
			clearTimeout(pTimeout653.timer);
			pTimeout653.timer = setTimeout(pTimeout653.onTimeout,pTimeout653.timeout*1000);
		}

	};

	var funcName = '';
	funcName = getParam('scrName');
	funcName = 'getTestSCR';

	// if(String(location).toLowerCase().indexOf('cards_menu_test.html') !== -1)

	if(String(location).toLowerCase().indexOf('menu_long_test.html') !== -1)
	{

		if(funcName === '')
			throw 'scrName not found';
		if(typeof sc[funcName] === 'undefined')
			throw 'sc.'+funcName+' not found';
		scrData = sc[funcName](scrData);
		setSCRTimeout(scrData);
		if(!!scrData) {
			loadCommon(scrData);
			menuLongLoader(scrData);
			callBodyOnLoad(scrData);
		}
		return;
	}
	
	funcName = 'getCardsMenu';
		if(String(location).toLowerCase().indexOf('cards_menu_test.html') !== -1)

		{
	
			if(funcName === '')
				throw 'scrName not found';
			if(typeof sc[funcName] === 'undefined')
				throw 'sc.'+funcName+' not found';
			scrData = sc[funcName](scrData);
			setSCRTimeout(scrData);
			if(!!scrData) {
				virtualCardsLoader(scrData);
				applicationsLoader(scrData);
				loadCommon(scrData);
				// menuLongLoader(scrData);
				callBodyOnLoad(scrData);
			}
			return;
		}
	throw 'page not found';
}
if(document.addEventListener)
{
	document.addEventListener('DOMContentLoaded', loadContent, false);
	/*document.addEventListener('click', function () {
		window.resetIdleTimeout();
	});*/
}else
{
	window.attachEvent('onload',loadContent);
}
function setSCRTimeout(scrData)
{
	pTimeout653 = {};
	if(!!scrData.timeout)
	{
		pTimeout653.timeout =scrData.timeout;
	}else
	{
		pTimeout653.timeout = 90;
	}
	if(!!scrData.onTimeout)
	{
		pTimeout653.onTimeout = scrData.onTimeout;

		pTimeout653.timer = setTimeout(onTimoutMain,pTimeout653.timeout*1000);
	}
}
function proccesBtn(elem) {
	if(!!elem.onclickF)
		elem.onclickF();
}

function proccesCard(elem) {
	if(!!elem.onclickF)
		elem.onclickF();
}