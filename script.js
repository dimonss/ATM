function insert(amount){
	if(amount == 0)
		if(document.getElementById('mainWindow').value =="")
			return;
	if(testLength())
		document.getElementById('mainWindow').value = document.getElementById('mainWindow').value + amount;
}
function back(){
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
	document.getElementById("textBox").value = "";
	typeOfBanknote=[5000, 2000, 1000, 500, 200, 100, 50, 20];
	for (var i = 0; i < 7; i++) {
		while(1){
			if(document.getElementById("mainWindow").value - typeOfBanknote[i] >= 0){
				document.getElementById("textBox").value = document.getElementById("textBox").value + typeOfBanknote[i]; 
				document.getElementById("mainWindow").value = document.getElementById("mainWindow").value - typeOfBanknote[i];
				alert(true);
			}
			else{
				alert(false);
				break;}
		}
	}
}
