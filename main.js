fetch("https://api.github.com/users/Dhiraj-Shrestha") //fetch default is GET method
	.then(response => response.json()) 
	.then(function(data) {
		 console.log(data)

	

		document.getElementById('myName').textContent = data['name']
		document.getElementById('myImage').src = data['avatar_url']
		// document.getElementById('myEmail').textContent = data['email']
		document.getElementById('myLocation').textContent = data['location']
		document.getElementById('myBio').textContent = data['bio']
		document.getElementById('mySite').textContent = data['blog']
		// document.getElementById('myTwitter').textContent = data['twitter_username']
	})
fetch("https://api.github.com/users/Dhiraj-Shrestha/repos")
.then(response => response.json()) 
	.then(function(data) {
		var tableBody = document.getElementById('tableBody');
		var statusHTML = '';

		data.forEach(Element => {
		    statusHTML += '<tr>';
		    statusHTML += '<td>' + Element['name'] + '</td>';
		    statusHTML += '<td>' + Element['html_url'] + '</td>';
		    statusHTML += '</tr>';
		});
		tableBody.innerHTML = statusHTML;

	});