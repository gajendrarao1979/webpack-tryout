var _ = require('lodash');
var $ = require('jquery');
var toggle = true;

var people = [{"id":1,"first_name":"Katya","last_name":"Farrer","email":"kfarrer0@google.es","gender":"Female","ip_address":"136.159.167.15"},
{"id":2,"first_name":"Rivalee","last_name":"Dumberell","email":"rdumberell1@example.com","gender":"Female","ip_address":"39.69.115.85"},
{"id":3,"first_name":"Bret","last_name":"Garnsworth","email":"bgarnsworth2@who.int","gender":"Male","ip_address":"117.161.240.236"},
{"id":4,"first_name":"Junie","last_name":"Chippindale","email":"jchippindale3@google.pl","gender":"Female","ip_address":"235.155.62.147"},
{"id":5,"first_name":"Waiter","last_name":"Pigney","email":"wpigney4@exblog.jp","gender":"Male","ip_address":"27.132.82.108"},
{"id":6,"first_name":"Brenn","last_name":"Giorgio","email":"bgiorgio5@friendfeed.com","gender":"Female","ip_address":"72.131.117.37"},
{"id":7,"first_name":"Germain","last_name":"Sherred","email":"gsherred6@miitbeian.gov.cn","gender":"Male","ip_address":"130.7.230.135"},
{"id":8,"first_name":"Anya","last_name":"Takis","email":"atakis7@dailymail.co.uk","gender":"Female","ip_address":"11.226.37.192"},
{"id":9,"first_name":"Ian","last_name":"Dingley","email":"idingley8@china.com.cn","gender":"Male","ip_address":"217.20.107.138"},
{"id":10,"first_name":"Aymer","last_name":"Mancell","email":"amancell9@constantcontact.com","gender":"Male","ip_address":"105.157.211.142"},
{"id":11,"first_name":"Jane","last_name":"Eassom","email":"jeassoma@e-recht24.de","gender":"Female","ip_address":"224.70.3.232"},
{"id":12,"first_name":"Ambur","last_name":"Gaine of England","email":"againeofenglandb@linkedin.com","gender":"Female","ip_address":"99.165.22.164"},
{"id":13,"first_name":"Ivan","last_name":"Wilds","email":"iwildsc@unblog.fr","gender":"Male","ip_address":"160.213.77.9"},
{"id":14,"first_name":"Athena","last_name":"Rasch","email":"araschd@artisteer.com","gender":"Female","ip_address":"162.117.106.166"},
{"id":15,"first_name":"Jacqueline","last_name":"Blankman","email":"jblankmane@eepurl.com","gender":"Female","ip_address":"18.194.29.218"},
{"id":16,"first_name":"Querida","last_name":"Riccard","email":"qriccardf@dedecms.com","gender":"Female","ip_address":"12.223.63.115"},
{"id":17,"first_name":"Karolina","last_name":"Colleran","email":"kcollerang@businesswire.com","gender":"Female","ip_address":"84.154.25.157"},
{"id":18,"first_name":"Dale","last_name":"Leon","email":"dleonh@shutterfly.com","gender":"Female","ip_address":"120.113.7.112"},
{"id":19,"first_name":"Casie","last_name":"Tilberry","email":"ctilberryi@quantcast.com","gender":"Female","ip_address":"166.127.68.72"},
{"id":20,"first_name":"Kaylyn","last_name":"Coldman","email":"kcoldmanj@ameblo.jp","gender":"Female","ip_address":"30.253.219.2"}];

$("button").click(function() {
	if (toggle) {
	$("h1").html("Males " + _.filter(people, {"gender": "Male"}).length);
	} else {
		$("h1").html("Females " + _.filter(people, {"gender": "Female"}).length);
	}
	toggle = !toggle;
});
