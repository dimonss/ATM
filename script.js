function startFunc(){
	document.getElementById("mainWindow").value = "insert the card";
}

function soundPlay(track){
	var audio = new Audio();
	audio.preload = 'auto';
	audio.src = track;
	audio.play();
}

function insert(amount){
	if(statusCard == true){
		soundPlay('p.mp3');
		if(amount == 0)
			if(document.getElementById('mainWindow').value =="")
				return;
		if(testLength())
			document.getElementById('mainWindow').value = document.getElementById('mainWindow').value + amount;
	}
}
function back(){
	if(statusCard == true){
		soundPlay('p.mp3');
		var buf = document.getElementById("mainWindow").value;
		document.getElementById("mainWindow").value = buf.substring(0, buf.length-1);
	}
}

function testLength(){
	var buf = document.getElementById("mainWindow").value;
	if(buf.length<15)
		return 1;
	else
		return 0;
}
var pinValueTrue = false;
function result(){
	if(statusCard == true){
		if(pinValueTrue == false){
			if(document.getElementById("mainWindow").value == "1234"){
				pinValueTrue = true;
				document.getElementById("mainWindow").value = "successful"
				setTimeout(function() { document.getElementById("mainWindow").value = "";}, 1000);
			}
			else{
				document.getElementById("mainWindow").value = "password fail"
				setTimeout(function() { document.getElementById("mainWindow").value = "";}, 1000);
			}
		}
		else{
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
	}
}

var statusCard = false;
function includeCard(){
	if(statusCard == false){
		setTimeout(function() {soundPlay('inputPin.mp3');}, 2000);
		soundPlay("giveTheCard.mp3")
		document.getElementById("imgCard").style="opacity:0"; 
		document.getElementById("mainWindow").value = "";
	}
	else{
		document.getElementById("imgCard").style="opacity:1";
		pinValueTrue = false;
		startFunc();
		document.getElementById("textBox").value = "";
		soundPlay("giveTheCard.mp3");
	}
	statusCard = !statusCard;
}