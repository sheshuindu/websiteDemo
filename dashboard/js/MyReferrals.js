window.onload = function () {
	getMyReferrals();
};

function getMyReferrals() {
	// get MyReferrals info from the server using AJAX
	console.log("hello")
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			json = JSON.parse(this.responseText);
			console.log(json)
			buildMyReferralListTable(json["Referrals"]);
			txtReferralCode.value = json["ReferralCode"];
			buildReferralURL(json["ReferralCode"]);

		}
	};
	xhttp.open("GET", "js/MyReferrals.json", true);
	xhttp.setRequestHeader('Cache-Control', 'no-cache');
	xhttp.send();
}

function buildMyReferralListTable(referralList_json) {
	var sno = 0;
	for (referral in referralList_json) {
		sno++;
		info = referralList_json[referral];
		let ReferralName = info.referralName;
		let ReferralEmailId = info.referralEmailID;
		let Date = info.date;
		let Earnings = info.earnings;

		console.log(ReferralName);
		let row = ` 
		<tr>
		<td>`+ sno + `</td>
		<td>`+ ReferralName + `</td>
		<td>`+ ReferralEmailId + `</td>
		<td>`+ Date + `</td>
		<td>₹ `+ Earnings + `</td>
		</tr>`
		referralsListData.innerHTML += row;
	}
	$('#referralListTable').DataTable();
}

function buildReferralURL(referralCode) {
	var referralURL = "http://letfix.com/r/" + referralCode;
	txtReferralURL.value = referralURL;
}

function copyText(id) {
	var copyText = document.getElementById(id)
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	alert("Copied to Clipboard");
}
