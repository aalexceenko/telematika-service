 function Screens() {

	this.getTestSCR = function (scrData) {

console.log(scrData);
		function btn1()
		{
			alert(1);
		}
		function btn2(){
			alert(2);
		}
		function btn3(){
			alert(3);
		}
		function btn4(){
			alert(4);
		}
		function btnCancel(){
			alert('Cancel');
		}
		function btnExit(){
			alert('Exit');
		}
		scrData.title = 'Выберите операцию';
		scrData.Btn1 = {};
		scrData.Btn1.icon = 'img/icons/48 Icon-Urozhai.png';
		scrData.Btn1.text = 'SMS-сервис';
		scrData.Btn1.onclick = btn1;
		scrData.Btn1.hwLink = 49;


		scrData.Btn2 = {};
		scrData.Btn2.icon = 'img/icons/48 Icon-Internet.png';
		scrData.Btn2.text = 'Бесплатные уведомления';
		scrData.Btn2.onclick = btn2;
		scrData.Btn2.hwLink = 50;



		scrData.Btn3 = {};
		scrData.Btn3.icon = 'img/icons/48 Icon-3ds.png';
		scrData.Btn3.text = 'SMS о пополнении';
		scrData.Btn3.onclick = btn3;
		scrData.Btn3.hwLink = 51;

		scrData.Btn4 = {};
		scrData.Btn4.icon = 'img/icons/48 Icon-Internet.png';
		scrData.Btn4.text = 'Отключение SMS';

		scrData.Btn4.onclick = btn4;
		scrData.Btn4.hwLink = 52;


		scrData.cancelBtn = {};
		scrData.cancelBtn.text = 'выйти';
		scrData.cancelBtn.icon = 'img/icons/40 Icon-Cancel.png';
		scrData.cancelBtn.onclick = btnCancel;

		scrData.exitBtn = {};
		scrData.exitBtn.text = 'вернуть карту';
		scrData.exitBtn.icon = 'img/icons/48 Icon-card.png';
		scrData.exitBtn.onclick = btnExit;
		scrData.exitBtn.hwLink= 27;
		return scrData;
	};




	this.getCardsMenu = function (scrData) {
console.log(scrData);

		function cardItem1()
		{
			alert(1);
		}
		function cardItem2(){
			alert(2);
		}
		function cardItem3(){
			alert(3);
		}
		function cardItem4(){
			alert(4);
		}
		function cardItem5(){
			alert(5);
		}

		function btnCancel(){
			alert('Cancel');
		}
		function btnExit(){
			alert('Exit');
		}
		// console.log(scrData);
		// scrData.title = {};
		scrData.title = 'Выберите карту, \n которую необходимо закрыть';

		scrData.cancelBtn = {};
		scrData.cancelBtn.text = 'выйти';
		scrData.cancelBtn.icon = 'img/icons/40 Icon-Cancel.png';
		scrData.cancelBtn.onclick = btnCancel;

		scrData.exitBtn = {};
		scrData.exitBtn.text = 'вернуть карту';
		scrData.exitBtn.icon = 'img/icons/48 Icon-card.png';
		scrData.exitBtn.onclick = btnExit;
		scrData.exitBtn.hwLink= 27;

		scrData.cards = [
			{
				logo: 'img/icons/48 Icon-MC.png',
				name:  'mastercard',
				pan: '*5674',
				onclick: cardItem1,
				hwLink: 78,
			},


			{
				logo: 'img/icons/48 Icon-VISA.png',
				name:  'visa',
				pan: '*5674',
				onclick: cardItem2,
				hwLink: 78,
			},


			{
				logo: 'img/icons/48 Icon-MIR.png',
				name:  'мир',
				pan: '*6722',
				onclick: cardItem3,
				hwLink: 78,
			},

			{
				logo: 'img/icons/48 Icon-VISA.png',
				name:  'visa',
				pan: '*3312',
				onclick: cardItem4,
				hwLink: 78,
			},

			{
				logo: 'img/icons/48 Icon-MC.png',
				name:  'mastercard',
				pan: '*8922',
				onclick: cardItem5,
				hwLink: 78,
			},
		];




		return scrData;
	};
}

