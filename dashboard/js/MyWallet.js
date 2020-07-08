window.onload = function () {
	getMyWallet();


};

function getMyWallet() {
	//get MyWithdrawals info from the server using AJAX
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			json = JSON.parse(this.responseText);
			buildWalletBalancePanel(json['WalletBalance']);
			buildMyWithdrawalsTable(json['MyWithdrawals']);
			buildWalletTransactionsTable(json['WalletTransactions']);
			viewBankDetails(json['BankDetails']);
		}
	};
	xhttp.open("GET", "js/MyWallet.json", true);
	xhttp.setRequestHeader('Cache-Control', 'no-cache');
	xhttp.send();
}

function buildMyWithdrawalsTable(MyWithdrawals_json) {
	var sno = 0;
	for (withdrawal in MyWithdrawals_json) {
		sno++;
		info = MyWithdrawals_json[withdrawal];
		let date = info.date;
		let amount = info.amount;
		let status = info.status;
		let row = `
		<tr>
		<td>`+ sno + `</td>
		<td>`+ date + `</td>
		<td>`+ amount + `</td>
		<td>`+ status + `</td>
		</tr>`

		withdrawalsData.innerHTML += row;
	}
	$('#withdrawalsTable').DataTable();
}




function viewBankDetails(bankdetails_json) {
	var info = bankdetails_json;
	var accountname = info.accountname;
	var accountnumber = info.accountnumber;
	var bankname = info.bankname;
	var ifsccode = info.ifsccode;
	var branchname = info.branchname;

	AccountName.value = accountname;
	AccountNumber.value = accountnumber;
	BankName.value = bankname;
	IFSCCode.value = ifsccode;
	BranchName.value = branchname;
}


function buildWalletTransactionsTable(WalletTransactions_json) {
	var sno = 0;
	for (transaction in WalletTransactions_json) {
		sno++;
		let info = WalletTransactions_json[transaction];
		let date = info.date;
		let orderid = info.orderid;
		let amount = info.amount;
		let status = info.status;
		console.log(date);
		let row = `
		<tr>
		<td>`+ sno + `</td>
		<td>`+ date + `</td>
		<td>`+ orderid + `</td>
		<td>`+ amount + `</td>
		<td>`+ status + `</td>
		</tr>`
		console.log(walletTransactionsData);
		walletTransactionsData.innerHTML += row;
	}
	$('#walletTransactionsTable').DataTable();
}


function buildWalletBalancePanel(WalletDetails_json) {
	var balance = WalletDetails_json;
	walletbalance.innerHTML = '₹ ' + balance;
}
