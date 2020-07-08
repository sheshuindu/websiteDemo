window.onload = function () {
	getPaymentHistory();
};

function getPaymentHistory() {
	// get PaymentHistory info from the server using AJAX
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			json = JSON.parse(this.responseText);
			buildPaymentHistoryTable(json);
		}
	};
	xhttp.open("GET", "js/PaymentHistory.json", true);
	xhttp.setRequestHeader('Cache-Control', 'no-cache');
	xhttp.send();
}

function buildPaymentHistoryTable(PaymentHistory_json) {
	var sno = 0;
	for (payment in PaymentHistory_json) {
		sno++;
		info = PaymentHistory_json[payment];
		let ordernumber = info.ordernumber;
		let orderstatus = info.orderstatus;
		let orderon = info.orderon;
		let amount = info.amount;
		let package = info.package;
		
		let row = ` 
		<tr>
		<td>`+sno+`</td>
		<td>`+ordernumber+`</td>
		<td>`+orderstatus+`</td>
		<td>`+amount+`</td>
		<td>`+orderon+`</td>
		<td>`+package+`</td>
		</tr>`
	    PaymentHistory.innerHTML += row;
	}
	$('#sample').DataTable();
}
