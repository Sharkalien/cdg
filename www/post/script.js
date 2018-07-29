document.querySelector("form").addEventListener("submit", evt => {
	evt.preventDefault();
	gapi.load("auth2", () => {
		gapi.auth2.init({
			client_id: "148379982026-77jpbdhuohqvvar9bn2lohk4uct6aauo.apps.googleusercontent.com"
		}).then(auth2 => {
			auth2.signIn().then(user => {
				const req = new XMLHttpRequest();
				req.open("POST", "/post", true);
				req.onreadystatechange = () => {
					if(req.readyState === XMLHttpRequest.DONE) {
						if(req.status === 200) {
							alert("Success!");
							location.href = "/";
						} else {
							alert(`Error ${req.status}`);
						}
					}
				};
				req.send(user.getAuthResponse().id_token);
			});
		});
	});
});
