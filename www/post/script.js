document.querySelector("form").addEventListener("submit", evt => {
	evt.preventDefault();
	gapi.load("auth2", () => {
		gapi.auth2.init({
			client_id: "148379982026-77jpbdhuohqvvar9bn2lohk4uct6aauo.apps.googleusercontent.com"
		}).then(auth2 => {
			auth2.signIn().then(user => {
				console.log(user.getAuthResponse().id_token);
			});
		});
	});
});
