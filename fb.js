var request = require("request");

var app_id = "XXX_YOUR_APP_ID_HERE_XXX";
var app_secret = "XXX_YOUR_APP_SECRET_HERE_XXX";

var all_data = [];
var the_token;
var call_counter = 0;
// these are facebook profile IDs....
var the_ids = [
  "105759908674",
  "105759908674",
  "10643211755",
  "107651419258212",
  "108038612554992"
];
// this will loop through each Facebook ID, and call the 'fetch_posts' function for each one (passing it the ID number)...
the_ids.forEach(function(val, index) {
	fetch_posts(val, index);
});
// So here's that function that gets called for each facebook ID....
function fetch_posts(profile, count) {
	// here's where the access token gets requested first from FB...
	//var access_request_url = 'https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id=' + app_id + '&client_secret=' + app_secret;
	var the_request = "https://graph.facebook.com/v2.5/" + profile + "/posts?limit=5&fields=name,message,picture,link,type,caption,created_time,description,from&access_token=" + app_id + "|" + app_secret;
	request({
		url: the_request,
		method: 'GET'
	}, function(err, res) {
		// here's what happens when it gets the token request response back...
		var the_posts = JSON.parse(res.body); // this just makes sure the JSON is parsed properly
		all_data.push(the_posts.data); // add each batch of updates to an array of results
		call_counter++;  // increment the counter..
		if (call_counter == the_ids.length) { // if we have reached the last ID...
			console.log(JSON.stringify(all_data)); // print out the results as one new blob of JSON...
		}
	});
}
