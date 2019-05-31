function postData(){
	let form = document.getElementsByTagName("form")
	let names = document.getElementsByClassName("myName");
	let data = new FormData();
	for(let i = 0; i < names.length; i++){
		data.append(names[i].name,names[i].value);
	}
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4){
			if((xmlHttp.status >= 200 && xmlHttp.status < 300) || xmlHttp.status == 304){
				alert(xmlHttp.responseText);
			}else{
				console.log(xmlHttp);
				alert("Request was unsuccessful:" + xmlHttp.status);
			}
		}
	}
	xmlHttp.open("post","https://www.easy-mock.com/mock/5cefd2d6525314372dffa298/example/",true);
	xmlHttp.send(new FormData(form));
}
function getData(){
	let request = new XMLHttpRequest();
	request.onreadystatechange = function(){ 
		if(request.readyState == 4 && request.status == 200){
			if((request.status >= 200 && request.status < 300) || request.status == 304){
				alert(request.responseText);
				let content = JSON.parse(request.responseText);
				information.innerHTML = content.name + '<br>' + content.gender + '<br>' + content.age;
			}else{
				alert("Request was unsuccessful:" + request.status);
			}
		}
	}
	request.open("GET","https://www.easy-mock.com/mock/5cefd2d6525314372dffa298/example/mock2",true);
	request.send();
}