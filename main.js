function loadJson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		 if(xhr.readyState===4 && xhr.status=="200"){
		 	callback(xhr.responseText);

		 }
	};
	xhr.send();

}
loadJson("data.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	career(data.career);
	education(data.education);
	skills(data.skills);
})
var childTwo=document.querySelector(".child2");

function career(careerInfo){
	 var heading=document.createElement("h2");
	 heading.textContent="career Objective";
	 childTwo.appendChild(heading);
	 var hr=document.createElement("hr");
	 heading.appendChild(hr);

var careerP=document.createElement("p");
careerP.textContent=careerInfo.info;
childTwo.appendChild(careerP);

}
function education(edu){

var table=document.createElement("table");
	childTwo.appendChild(table);
	table.border="1";
	var tr1="<tr><td>degree</td><td>institute</td><td>data</td></tr>"
	table.innerHTML=tr1;
	var tr2=""
	for(var i=0; i< edu.length;i++){
    tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td></tr>"
}
 table.innerHTML=tr1+tr2;
}
 function skills(skil){
 var heading=document.createElement("h2");
 heading.textContent="skill.set";
 childTwo.appendChild(heading);
 var hr=document.createElement("hr"); 
 heading.appendChild(hr);
 for (var i=0; i<skil.length; i++){
 var titleH=document.createElement("h3");
 titleH.textContent=skil[i].tittle;
 	childTwo.appendChild(titleH);
 	var ul=document.createElement("ul");
 	childTwo.appendChild(ul);
    for(var j=0; j<skil[i].info.length;j++){
    	var li=document.createElement("li");
    	li.textContent=skil[i].info[j];
    	ul.appendChild(li);
    }
 }
}