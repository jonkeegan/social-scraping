import requests

# Enter your Facebook App credentials from developers.facebook.com
app_id = ''
app_secret = ''
access_token = app_id + '|' + app_secret

# Enter the Facebook handle of the page you want to scrape, e.g. 'nytimes' or 'Breitbart'
publisher_id = 'nytimes'

# Tell the API want fields you want it to return (copy everything after 'fields=' from the Graph API console)
# Possible fields for posts can be found here: https://developers.facebook.com/docs/graph-api/reference/v2.9/post/
post_fields = 'name,message,picture,link,type,caption,created_time,description,from'

# Construct the Facebook Graph API URL to be opened
graph_url = 'https://graph.facebook.com/v2.9/' + publisher_id + '/posts/?fields=%s&limit=5&access_token=%s' % (post_fields, access_token)
# Print the Graph API URL to the Terminal window (not necessary - just useful for checking in browser)
print graph_url

# Open and read the URL using Requests
r = requests.get(graph_url)
# Extract the JSON from the Graph page
json = r.json()
# Identify the JSON pertaining to the ~100 Facebook posts returned by the API
posts = json['data']

# Go through each of the posts returned by the API
for post in posts:
	# For each post, display the timestamp followed by a space (' '), then its 'type' ('video', 'image', etc.)
	print post['created_time'] + ' ' + post['type']
