const hamburger=document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const mobile_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

window.onscroll= function(){myFunction()};
function myFunction(){
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        document.getElementById("header").className="test";
    }
    else{
        document.getElementById("header").className="";
    }
    
}
mobile_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


/**Weather API */
link ="https://api.openweathermap.org/data/2.5/weather?q=Potchefstroom&appid=4b9af87c07c7e6f08ee7945352335906";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload=function(){
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('weather').innerHTML=obj.weather[0].description;
    document.getElementById('location').innerHTML=obj.name;
    document.getElementById('temp').innerHTML=Math.round(obj.main.temp-273)+"°C";
    document.getElementById('icon').src="http://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
}
if(request.status==200){
    console.log("ERROR");
}
request.send();

/**Map API**/
function initMap(){
    var options={
        zoom:17,
        center:{lat:-26.682234599999997,lng:27.1012773}
    }

    var map = new google.maps.Map(document.getElementById('map'),options);

    var marker = new google.maps.Map({position:{lat:-26.682234599999997,lng:27.1012773},
    map:map})
}
 

/**Numbers API */
const form = document.querySelector('.trivia');
const factDiv = document.querySelector('.trivia p');

form.addEventListener('click', (e)=>{
    e.preventDefault();
    const num = Math.floor(Math.random() * 301);
    const loadText='Wait a little bit⌛';
    factDiv.innerHTML=loadText;
    const baseURL= 'https://cors-anywhere.herokuapp.com/http://numbersapi.com/';
    fetch(baseURL+num,{
        method: "GET",
        headers:{
            'x-request-with':'text.plain'
        }
    })
    .then(response =>response.text())
    .then(text=>factDiv.innerHTML=text);
});


