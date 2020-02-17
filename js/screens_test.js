 function Screens() {

	this.getTestSCR = function (scrData) {


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
// console.log(scrData);

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
		// console.log(scrData);
		scrData.title = 'Выберите карту, \n которую необходимо закрыть';

		scrData.cards1 = {};
		scrData.cards1.icon = 'img/icons/48 Icon-VISA.png';
		scrData.cards1.text = 'SMS-сервис';
		scrData.cards1.onclick = btn1;
		scrData.cards1.hwLink = 49;

		
		scrData.cards2 = {};
		scrData.cards2.icon = 'img/icons/48 Icon-VISA.png';
		scrData.cards2.text = 'SMS-сервис';
		scrData.cards2.onclick = btn1;
		scrData.cards2.hwLink = 49;

		
		scrData.cards3 = {};
		scrData.cards3.icon = 'img/icons/48 Icon-VISA.png';
		scrData.cards3.text = 'SMS-сервис';
		scrData.cards3.onclick = btn1;
		scrData.cards3.hwLink = 49;

		
		scrData.cards4 = {};
		scrData.cards4.icon = 'img/icons/48 Icon-VISA.png';
		scrData.cards4.text = 'SMS-сервис';
		scrData.cards4.onclick = btn1;
		scrData.cards4.hwLink = 49;

		
		scrData.cards5 = {};
		scrData.cards5.icon = 'img/icons/48 Icon-VISA.png';
		scrData.cards5.text = 'SMS-сервис';
		scrData.cards5.onclick = btn1;
		scrData.cards5.hwLink = 49;

		
		scrData.cards6 = {};
		scrData.cards6.icon = 'img/icons/48 Icon-VISA.png';
		scrData.cards6.text = 'SMS-сервис';
		scrData.cards6.onclick = btn1;
		scrData.cards6.hwLink = 49;


		// scrData.Btn2 = {};
		// scrData.Btn2.icon = 'img/icons/48 Icon-Internet.png';
		// scrData.Btn2.text = 'Бесплатные уведомления';
		// scrData.Btn2.onclick = btn2;
		// scrData.Btn2.hwLink = 50;



		// scrData.Btn3 = {};
		// scrData.Btn3.icon = 'img/icons/48 Icon-3ds.png';
		// scrData.Btn3.text = 'SMS о пополнении';
		// scrData.Btn3.onclick = btn3;
		// scrData.Btn3.hwLink = 51;

		// scrData.Btn4 = {};
		// scrData.Btn4.icon = 'img/icons/48 Icon-Internet.png';
		// scrData.Btn4.text = 'Отключение SMS';

		// scrData.Btn4.onclick = btn4;
		// scrData.Btn4.hwLink = 52;


		scrData.cancelBtn = {};
		// scrData.cancelBtn.text = 'выйти';
		scrData.cancelBtn.icon = 'img/icons/40 Icon-Cancel.png';
		scrData.cancelBtn.onclick = btnCancel;

		scrData.exitBtn = {};
		scrData.exitBtn.text = 'вернуть карту';
		scrData.exitBtn.icon = 'img/icons/48 Icon-card.png';
		scrData.exitBtn.onclick = btnExit;
		scrData.exitBtn.hwLink= 27;
		return scrData;
	};
}
