const form = document.querySelector("form");
form.addEventListener("submit", evt => {
	evt.preventDefault();
	gapi.load("auth2", () => {
		gapi.auth2.init({
			client_id: "148379982026-77jpbdhuohqvvar9bn2lohk4uct6aauo.apps.googleusercontent.com"
		}).then(auth2 => {
			auth2.signIn().then(user => {
				const req = new XMLHttpRequest();
				req.open("POST", "/post", true);
				req.setRequestHeader("Content-Type", "application/json");
				req.onreadystatechange = () => {
					if(req.readyState === XMLHttpRequest.DONE) {
						if(Math.floor(req.status / 100) === 2) {
							alert("Success!");
							location.href = "/";
						} else {
							alert(`Error ${req.status}`);
						}
					}
				};
				req.send(JSON.stringify({
					token: user.getAuthResponse().id_token,
					body: form.elements.body.value,
					tags: form.elements.tags.value
				}));
			});
		});
	});
});
