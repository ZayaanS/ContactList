//Get contact information stored in local storage
let contacts = localStorage.getItem("contacts");
//Convert contact information from string to object
contacts = JSON.parse(contacts);
//If there is no data stored in contacts, create an empty array
if (contacts == null){
	contacts = [];
	document.getElementById("tableHead").innerHTML = "<h3>You have no contacts saved.</h3>"
}
else{
	displayContacts();
}

function displayContacts(){
	//Display table heading
	document.getElementById("tableHead").innerHTML = 
			("<tr>"+
			"	<th></th>" + 
			"	<th> ID </th>" + 
			"	<th> Name </th>" + 
			"	<th> Phone </th>" + 
			"	<th> Email </th>" + 
			"	<th></th>" + 
	  		"</tr>");
	  	for (i in contacts){
	  		let contactInfo = JSON.parse(contacts[i]);
		document.getElementById("tableBody").innerHTML += ("<tr>"+
			"	<td></td>" + 
			"	<td>"+contactInfo.ID+"</td>" + 
			"	<td>"+contactInfo.Name+"</td>" + 
			"	<td>"+contactInfo.Phone+"</td>" + 
			"	<td>"+contactInfo.Email+"</td>" + 
			"	<td></td>" + 
	  		"</tr>");
	  	}
		
}

function addContact(){
	//Create a new contact from information entered into form
	let newContact = {
		ID : contacts.length+1,
		Name : document.getElementById("name").value,
		Phone : document.getElementById("phone").value,
		Email : document.getElementById("email").value
	};
	newContact =JSON.stringify(newContact);
	//Push contact into contacts array
	contacts.push(newContact);
	//Save contact information to local storage
	localStorage.setItem("contacts", JSON.stringify(contacts));
	//Refresh to display new contact
	location.reload();
}

function deleteAllContacts(){
	//Remove all contact info from local storage
	localStorage.clear();
	location.reload();
}