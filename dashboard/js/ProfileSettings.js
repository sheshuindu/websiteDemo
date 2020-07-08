window.onload = function () {
	getProfileSettings();
};

function getProfileSettings() {
	// get Profile settings info from the server using AJAX
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			json = JSON.parse(this.responseText);
			viewDetails(json);
		}
	};
	xhttp.open("GET", "js/ProfileSettings.json", true);
	xhttp.setRequestHeader('Cache-Control', 'no-cache');
	xhttp.send();
}

function viewDetails(ProfileSettings_json) {
	var info = ProfileSettings_json["Basic Information"];
	var username = info.username;
	var email = info.email;
	var phone = info.phone;
	var collegeName = info.college;
	var yearOfCompletion = info.YDC;
	var degree = info.degree;
	txtUsername.value = username;
	txtemail.value = email;
	txtphone.value = phone;
	txtCollegeName.value = collegeName;
	selYDC.value = yearOfCompletion;
	selDegree.value = degree;
	console.log()		
}

