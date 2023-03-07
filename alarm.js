

function setalarm(){

	var ms=document.getElementById("altime").valueAsNumber
	

	var alarm=new Date(ms)
	var now=new Date()

	var ay= alarm.getUTCFullYear()
	var am=alarm.getUTCMonth()
	var amin=alarm.getUTCMinutes()
	var ahur=alarm.getUTCHours()

	var ny= now.getFullYear()
	var nm=now.getMonth()
	var nmin=now.getMinutes()
	var nhur=now.getHours()
	var ns=now.getUTCSeconds()



	//document.getElementById("demo").innerHTML=ny+" ="+nm+" ="+nhur+"=("+nmin+")="+ns+"(=="+amin+")"+amin+"=="+nmin
	//alert(alarm);

	if(amin==nmin && ahur==nhur && am==nm && ay===ny){
		document.getElementById('music').play();
		document.getElementById('h1').style.display="block"

	}else{

	requestAnimationFrame(setalarm)

}
}
