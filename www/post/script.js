(() => {
	const brs = /\n/g;
	const whitespace = /[\s-]+/g;
	const cleanTag = tag => tag && tag.trim().toLowerCase().replace(whitespace, " ");
	const forTags = (tag, i, tags) => tag && tags.indexOf(tag) === i;
	const byTagHTML = tag => `<a class="tag" href="javascript:;">${tag}</a>`;
	const form = document.querySelector("form");
	form.addEventListener("submit", evt => {
		evt.preventDefault();
		gapi.load("auth2", () => {
			gapi.auth2.init().then(auth2 => {
				auth2.signIn().then(user => {
					const req = new XMLHttpRequest();
					req.open("POST", `//api.${location.host}/posts`, true);
					req.setRequestHeader("Content-Type", "application/json");
					req.onreadystatechange = () => {
						if(req.readyState === XMLHttpRequest.DONE) {
							if(Math.floor(req.status / 100) === 2) {
								alert("Post successful!");
								window.onbeforeunload = undefined;
								location.href = "/";
							} else {
								alert(`Error ${req.status + (req.responseText ? `:\n${req.responseText}` : "")}`);
							}
						}
					};
					req.send(JSON.stringify({
						token: user.getAuthResponse().id_token,
						title: form.elements.title.value,
						body: form.elements.body.value,
						tags: form.elements.tags.value
					}));
				});
			});
		});
	});
	window.onbeforeunload = () => form.elements.title.value || form.elements.body.value || form.elements.tags.value || undefined;
	const body = document.querySelector("#preview .body");
	const tags = document.querySelector("#preview .tags");
	form.elements.body.addEventListener("input", () => {
		body.innerHTML = form.elements.body.value.replace(brs, "<br>");
	});
	form.elements.tags.addEventListener("input", () => {
		tags.innerHTML = form.elements.tags.value.split(",").map(cleanTag).filter(forTags).map(byTagHTML).join(", ");
	});
})();
