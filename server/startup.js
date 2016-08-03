Meteor.startup(function(){
	Weather.insert({type:"sunnycloud",imgsrc:'/images/weather/sunny-cloud.gif',rnd:1})
	Weather.insert({type:"cloudy",imgsrc:'/images/weather/cloudy.gif',rnd:2})
	Weather.insert({type:"rainy",imgsrc:'/images/weather/rainy.gif',rnd:3})
	Weather.insert({type:"snow",imgsrc:'/images/weather/snow.gif',rnd:4})
	Weather.insert({type:"sunny",imgsrc:'/images/weather/sunny-cloud.gif',rnd:5})
	Weather.insert({type:"thunder",imgsrc:'/images/weather/thunder.gif',rnd:6})
	Weather.insert({type:"windy",imgsrc:'/images/weather/windy.gif',rnd:7})
})


