function renderBtnIcon(scrData,btnId) {
	var elem;
	var icon;

	if(!!scrData[btnId])
	{
		elem = document.getElementById(btnId);

		if(elem != null)
		{
			if(!!scrData[btnId].text)
			{
				document.getElementById(btnId+'Text').innerText = scrData[btnId].text;
				elem.style.visibility = 'visible';
			}
			icon =document.getElementById(btnId+'Icon');

			if(!!scrData[btnId].icon && icon != null) {
				if(scrData.isBlind !== true)
					icon.src = scrData[btnId].icon;
				else
					icon.src = scrData[btnId].icon.replace('.png','_blind.png');
			}else
			{
				if(icon != null)
					icon.style.display = 'none';
			}
			if(!!scrData[btnId].onclick)
			{
				elem.onclickF = scrData[btnId].onclick;
			}
			if(!!scrData[btnId].hwLink)
			{
				if(!!scrData.hwLinks)
				{
					scrData.hwLinks[scrData[btnId].hwLink] = btnId;
				}else
				{
					scrData.hwLinks = [];
					scrData.hwLinks[scrData[btnId].hwLink] = btnId;
				}
			}
		}
	}else
	{
		elem = document.getElementById(btnId);
		if(elem != null)
		{
			elem.style.display = 'none';
		}
	}
}
function renderText(scrData,elemId) {
	var elem;

	if(!!scrData[elemId])
	{
		elem = document.getElementById(elemId);
		if(elem != null)
		{
			elem.innerText =scrData[elemId];
		}
	}else
	{
		elem = document.getElementById(elemId);
		if(elem != null)
		{
			elem.innerText ='';
		}
	}
}
function checkDataLoader(scrData) {
	renderBtnIcon(scrData,'acceptBtn');
	renderText(scrData,'filedText1');
	renderText(scrData,'filedText2');
	renderText(scrData,'filedNote1');
	renderText(scrData,'filedNote2');
}
function loadIdle(scrData) {
	var elem = null;
	renderBtnIcon(scrData,'cardlessBtn');
	renderBtnIcon(scrData,'blindBtn');
}
function menuLoader(scrData) {
	renderBtnIcon(scrData,'Btn1');
	renderBtnIcon(scrData,'Btn2');
	renderBtnIcon(scrData,'Btn3');
	renderBtnIcon(scrData,'Btn4');
}
function menuLongLoader(scrData) {
	renderBtnIcon(scrData,'Btn1');
	renderBtnIcon(scrData,'Btn2');
	renderBtnIcon(scrData,'Btn3');
	renderBtnIcon(scrData,'Btn4');
}
function applicationsLoader(scrData) {

	var elem = null;
	var blindMode = true;//RSHBActX.GetBlindMode();
	renderBtnIcon(scrData,'continueBtn');

	if(!!scrData.cards)
	{
		for(var i =0; i < 2;i++) {
			if (!!scrData.cards[i]) {
				if (!!scrData.cards[i].logo) {
					if (scrData.isBlind !== true)
						document.getElementById('cardLogo' + (i + 1)).style.backgroundImage = "url('" + scrData.cards[i].logo + "')";
					else {
						document.getElementById('cardLogo' + (i + 1)).style.backgroundImage = "url('" + scrData.cards[i].logo.replace('.png', '_blind.png') + "')";
					}
				}
				if (!!scrData.cards[i].name) {
					document.getElementById('cardName' + (i + 1)).innerText = scrData.cards[i].name;
				}
				if (!!scrData.cards[i].pan) {
					document.getElementById('cardPan' + (i + 1)).innerText = scrData.cards[i].pan;
				}
				if(!!scrData.cards[i].onclick)
				{
					document.getElementById('cardItem' + (i + 1)).onclickF = scrData.cards[i].onclick;
				}

				if(!!scrData.cards[i].hwLink)
				{
					if(!!scrData.hwLinks)
					{
						scrData.hwLinks[scrData.cards[i].hwLink] = 'cardItem' + i;
					}else
					{
						scrData.hwLinks = [];
						scrData.hwLinks[scrData.cards[i].hwLink] = 'cardItem' + i;
					}
				}
			}
		}
	}
}
function pinLoader(scrData) {
	var elem = null;
	if(!!scrData.bgColor)
	{
		switch (scrData.bgColor) {
			case 'green':
			{
				document.getElementById('bgField').style.backgroundColor = '#A6CE39';
				break;
			}
			case 'white':
			{
				document.getElementById('bgField').style.backgroundColor = '#FFFFFF';
				break;
			}
			case 'yellow':
			{
				document.getElementById('bgField').style.backgroundColor = '#FFCB05';
				break;
			}

			default:
				break;
		}
	}
	renderText(scrData,'title');
	renderBtnIcon(scrData,'langBtn');
}
function homeLoader(scrData) {
	for(var i = 1; i < 9; i++)
	{
		renderBtnIcon(scrData,'btn'+i);
	}
	renderBtnIcon(scrData,'withdrawalBtn');
	renderBtnIcon(scrData,'depositBtn');
	renderBtnIcon(scrData,'balanceBtn');
	renderBtnIcon(scrData,'fastPayBtn1');
	renderBtnIcon(scrData,'fastPayBtn2');
	renderBtnIcon(scrData,'fastPayBtn3');
	renderBtnIcon(scrData,'fastPayBtn4');
}
function cashinLoader(scrData) {

	var elem = null;
	renderText(scrData,'acceptedTitle');
	renderText(scrData,'commission');
	renderText(scrData,'acceptTotalAmount');
	renderText(scrData,'acceptTotalInfo');
	renderText(scrData,'helpInfo');
	renderText(scrData,'instractions');
	renderText(scrData,'addInfo');
	renderBtnIcon(scrData,'addNotesBtn');
	renderBtnIcon(scrData,'acceptBtn');
	if(!!scrData.inputText)
	{
		elem = document.getElementById('inputText');
		if(elem != null)
		{
			elem.innerText = scrData.inputText;
		}
	}



}
function loadCommon(scrData) {

	renderText(scrData,'title');
	renderBtnIcon(scrData,'cancelBtn');
	renderBtnIcon(scrData,'exitBtn');
	renderText(scrData,'bottomInfo1');
	renderText(scrData,'bottomInfo2');

	var elem;
	if(!!scrData.alertInfo)
	{
		elem = document.getElementById('alertDIV');
		if(elem != null) {
			elem.style.display = 'block';

			if (!!scrData.alertInfo.count) {
				elem = document.getElementById('alertCount');
				if (elem != null) {
					elem.innerText = scrData.alertInfo.count;
				}
			}

			if (!!scrData.alertInfo.text) {
				elem = document.getElementById('alertText');
				if (elem != null) {
					elem.innerText = scrData.alertInfo.text;
				}
			}
		}
	}else
	{
		elem = document.getElementById('alertDIV');
		if(elem != null)
		{
			elem.style.display = 'none';
		}
	}
}
function cashin_wait_Loader(scrData) {

	if(!!scrData.waitTitle)
	{
		var bottomInfo2 = document.getElementById('wait_title');
		if(bottomInfo2 != null)
		{
			bottomInfo2.innerText = scrData.waitTitle;
		}
	}
}
function cashout_fin(scrData) {
	var elem = null;
	if(!!scrData.note)
	{
		elem = document.getElementById('note');
		if(elem != null)
		{
			elem.innerText = scrData.note;
		}
	}

	if(!!scrData.inputText)
	{
		elem = document.getElementById('inputText');
		if(elem != null)
		{
			elem.innerText = scrData.inputText;
		}
	}
	if(!!scrData.helpInfo)
	{
		elem = document.getElementById('helpInfo');
		if(elem != null)
		{
			elem.innerText = scrData.helpInfo;
		}
	}
	renderBtnIcon(scrData,'btnWithdrawal');
	renderBtnIcon(scrData,'btn1');
	renderBtnIcon(scrData,'btn2');
	renderBtnIcon(scrData,'btn3');

}
function cashout_num_loader(scrData) {
	renderBtnIcon(scrData,'fastBtn1');
	renderBtnIcon(scrData,'fastBtn2');
	renderBtnIcon(scrData,'fastBtn3');
	renderText(scrData,'helpInfo');
	renderText(scrData,'commentInfo');
	renderText(scrData,'accessibleNotesText');

	renderBtnIcon(scrData,'dKeyboardAccept');
	if(!!scrData.noteItem1)
		document.getElementById('noteItem1').src = scrData.noteItem1;
	else
		document.getElementById('noteItem1').style.display = 'none';
	if(!!scrData.noteItem2)
		document.getElementById('noteItem2').src = scrData.noteItem2;
	else
		document.getElementById('noteItem2').style.display = 'none';
	if(!!scrData.noteItem3)
		document.getElementById('noteItem3').src = scrData.noteItem3;
	else
		document.getElementById('noteItem3').style.display = 'none';
	if(!!scrData.noteItem4)
		document.getElementById('noteItem4').src = scrData.noteItem4;
	else
		document.getElementById('noteItem4').style.display = 'none';

}
function fatal_error_loader(scrData) {
	renderBtnIcon(scrData,'centerBtn');
	var elem = null;
	if(!!scrData.msg)
	{
		elem = document.getElementById('msg');
		if(elem != null)
		{
			elem.innerText = scrData.msg;
		}
	}

}
function select_option_loader(scrData) {
	renderBtnIcon(scrData,'Btn1');
	renderBtnIcon(scrData,'Btn2');
}
function money_transfer_loader(scrData) {

	renderBtnIcon(scrData,'dKeyboardAccept');
	renderText(scrData,'note');
	renderText(scrData,'commentInfo');
	renderText(scrData,'inputText');

}
function infoScreenLoader(scrData)
{
	renderText(scrData,'msg');
	if(!!scrData.icon)
	{
		document.getElementById('icon').style.backgroundImage = 'url("'+scrData.icon+'")';
	}
	if(!!scrData.bgColor)
	{
		switch (scrData.bgColor) {
			case 'green':
			{
				document.getElementById('bgField').style.backgroundColor = '#A6CE39';
				break;
			}
			case 'white':
			{
				document.getElementById('bgField').style.backgroundColor = '#FFFFFF';
				break;
			}
			case 'yellow':
			{
				document.getElementById('bgField').style.backgroundColor = '#FFCB05';
				break;
			}
			case 'lightGreen':
			{
				document.getElementById('bgField').style.backgroundColor = '#E9F2E3';
				break;
			}

			default:
				break;
		}
	}
	renderBtnIcon(scrData,'leftBtn');
	renderBtnIcon(scrData,'centerBtn');
	renderBtnIcon(scrData,'rightBtn');
}
function phoneNumLoader(scrData) {
	renderBtnIcon(scrData,'dKeyboardAccept');
	renderText(scrData,'note');

	renderText(scrData,'commentInfo');
}
function settingsLoader(scrData) {
	renderBtnIcon(scrData,'Btn1');
	renderBtnIcon(scrData,'Btn2');
	if(!!scrData.options)
	{
		for(var i =0; i < 4 && i < scrData.options.length; i++)
		{

			if(!!scrData.options[i].text)
			{

				if(typeof scrData.options[i].value == 'boolean')
				{
					document.getElementById('option'+i).style.display = 'block';
					document.getElementById('option'+i+'Text').innerText =scrData.options[i].text;
					if(scrData.options[i].value === true)
					{
						document.getElementById('option'+i+'Icon').src = 'img/switch_act_blind.png';
					}else
					{
						document.getElementById('option'+i+'Icon').src = 'img/switch_blind.png';
						document.getElementById('option'+i+'Text').style.color = '#969696';
					}
				}
			}
		}
	}
}
function richTextLoader(scrData) {
	renderBtnIcon(scrData,'acceptBtn');
	renderText(scrData,'line1');
	renderText(scrData,'line2');
	renderText(scrData,'line3');
	renderText(scrData,'line4');
	renderText(scrData,'line5');
	renderText(scrData,'line6');
	renderText(scrData,'line7');


	renderText(scrData,'fieldNote');

}
console.log(13);

function virtualCardsLoader(scrData) {
	console.log(123);
	var elem = null;
	var blindMode = true;//RSHBActX.GetBlindMode();
	renderBtnIcon(scrData,'continueBtn');
	if(!!scrData.cards)
	{

		for(var i = 0; i < 6;i++) {

			if (!!scrData.cards[i]) {
				if (!!scrData.cards[i].logo) {

					if (scrData.isBlind !== true)
						document.getElementById('cardLogo' + (i + 1)).style.backgroundImage = "url('" + scrData.cards[i].logo + "')";
					else {
						document.getElementById('cardLogo' + (i + 1)).style.backgroundImage = "url('" + scrData.cards[i].logo.replace('.png', '_blind.png') + "')";
					}
				}
				if (!!scrData.cards[i].name) {

					document.getElementById('cardName' + (i + 1)).innerText = scrData.cards[i].name;
				}
				if (!!scrData.cards[i].pan) {
					document.getElementById('cardPan' + (i + 1)).innerText = scrData.cards[i].pan;
				}
				if(!!scrData.cards[i].onclick)
				{
					document.getElementById('cardItem' + (i + 1)).onclickF = scrData.cards[i].onclick;
				}

				document.getElementById('cardItem' + (i + 1)).style.visibility = 'visible';
				if(!!scrData.cards[i].hwLink)
				{
					if(!!scrData.hwLinks)
					{
						scrData.hwLinks[scrData.cards[i].hwLink] = 'cardItem' + i;
					}else
					{
						scrData.hwLinks = [];
						scrData.hwLinks[scrData.cards[i].hwLink] = 'cardItem' + i;
					}
				}
			}
		}
	}
}

function menuListLoader(scrData) {
	for(var i = 1; i < 13; i++)
	{
		renderBtnIcon(scrData,'btn'+i);
	}
	renderBtnIcon(scrData,'backBtn');
	renderBtnIcon(scrData,'acceptBtn');


}