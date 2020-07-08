window.onload = function () {
	getSubscriptions();
};

function getSubscriptions() {
	// get subscription info from the server using AJAX
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			json = JSON.parse(this.responseText);
			buildSubscriptionCards(json);
		}
	};
	xhttp.open("GET", "js/Subscriptions.json", true);
	xhttp.setRequestHeader('Cache-Control', 'no-cache');
	xhttp.send();
}

function buildSubscriptionCards(subscriptions_json) {
	subscriptionsPanel.innerHTML = "";
	coursecount.innerHTML = Object.keys(subscriptions_json).length;
	for (course in subscriptions_json) {
		info = subscriptions_json[course];

		let title = course;
		let author = info.author;
		let description = info.description;
		let link = info.link;
		let img = info.img;

		let card = ` <div class="card">
			<img src="` + img + `" class="card-img-top" alt="` + title + `">
			<div class="card-body">
				<h5 class="card-title">` + title + `</h5>
				<h6 class="card-subtitle mb-2 text-muted">by ` + author + `</h6>
				<p class="card-text">` + description + `</p>
				<a target="_blank" href="` + link + `" class="btn btn-outline-letfix">Go to Course</a>
			</div>
		</div>`;

		subscriptionsPanel.innerHTML += card;
	}
}
