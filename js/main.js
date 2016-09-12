//  Create a function that registers a new user on the previous login appliction.  Make usre it's on the same page and doesn't refresh when clicked, since we're not storing the data yet.  Test to ensure that the username is not already taken and that the password is at least 8 characters.

var objPeople = [
	{
		username: "gina",
		password: "one"
	},
	{
		username: "nicole",
		password: "two"
	},
	{
		username: "michael",
		password: "three"
	},
]

// login functionality
function login() {
// retrieve data input from the form
var username = document.getElementById("username").value
var password = document.getElementById("password").value

// loop through all the user objects and confirm if the usernae and password are correct	
	for(i = 0; i < objPeople.length; i++){
		if(username == objPeople[i].username && password == objPeople[i].password){
			console.log(username + " You have successfully logged in ")
			return
		}
	}console.log(" Invalid username or password, please try again")
}

function registerUser() {
	var registerUser = document.getElementById("newUser").value
	var registerPassword = document.getElementById("newPassword").value
	var newUser = {
		username: registerUser,
		password: registerPassword
	}

	for(i = 0; i < objPeople.length; i++) {
		if(registerUser == objPeople[i].username) {
			alert("Usernae already exist.  Please choose another")
			return
		} else if(registerPassword.length < 8) {
			alert("Password is too short, please select 8 characters or more")
			return
		}
	}

	objPeople.push(newUser)
	console.log(objPeople)
}
