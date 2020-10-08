function soundPlay(track){
	var audio = new Audio();
	audio.preload = 'auto';
	audio.src = track;
	audio.play();
}

function insert(amount){
	soundPlay('p.mp3');
	if(amount == 0)
		if(document.getElementById('mainWindow').value =="")
			return;
	if(testLength())
		document.getElementById('mainWindow').value = document.getElementById('mainWindow').value + amount;
}
function back(){
	soundPlay('p.mp3');
	var buf = document.getElementById("mainWindow").value;
	document.getElementById("mainWindow").value = buf.substring(0, buf.length-1);
}

function testLength(){
	var buf = document.getElementById("mainWindow").value;
	if(buf.length<15)
		return 1;
	else
		return 0;
}

function result(){
	soundPlay('ejectCash.mp3');
	document.getElementById("textBox").value = "";
	typeOfBanknote=[5000, 2000, 1000, 500, 200, 100, 50, 20];
	for (var i = 0; i < 8; i++) {
		while(1){
			if(document.getElementById("mainWindow").value - typeOfBanknote[i] >= 0){
				document.getElementById("textBox").value = document.getElementById("textBox").value +" " + typeOfBanknote[i]; 
				document.getElementById("mainWindow").value = document.getElementById("mainWindow").value - typeOfBanknote[i];
			}
			else{
				break;}
		}
	}
}

var statusCard = true;
function includeCard(){
	if(statusCard == true){
		soundPlay('inputPin.mp3');
		document.getElementById("imgCard").style="opacity:0"; 
	}
	else{
		document.getElementById("imgCard").style="opacity:1";
	}
	statusCard = !statusCard;
}