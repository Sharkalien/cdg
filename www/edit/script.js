(() => {
	const brs = /\n/g;
	const brTags = /<br>/gi;
	const whitespace = /[\s-]+/g;
	const cleanTag = tag => tag && tag.trim().toLowerCase().replace(whitespace, " ");
	const forTags = (tag, i, tags) => tag && tags.indexOf(tag) === i;
	const byTagHTML = tag => `<a class="tag" href="javascript:;">${tag}</a>`;
	const formatDate = d => {
		d = new Date(d);
		return `${d.getMonth() + 1}-${d.getDate()}.${d.getFullYear()}`;
	};
	const form = document.querySelector("form");
	form.addEventListener("submit", evt => {
		evt.preventDefault();
		gapi.load("auth2", () => {
			gapi.auth2.init().then(auth2 => {
				auth2.signIn().then(user => {
					const req = new XMLHttpRequest();
					req.open("PUT", `/api/posts/${form.elements.id.value}`, true);
					req.setRequestHeader("Content-Type", "application/json");
					req.onreadystatechange = () => {
						if(req.readyState === XMLHttpRequest.DONE) {
							if(Math.floor(req.status / 100) === 2) {
								alert("Edit successful!");
							} else {
								alert(`Error ${req.status + (req.responseText ? `:\n${req.responseText}` : "")}`);
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
	window.onbeforeunload = () => form.elements.body.value || form.elements.tags.value || undefined;
	const author = document.querySelector("#preview .author");
	const body = document.querySelector("#preview .body");
	const tags = document.querySelector("#preview .tags");
	const date = document.querySelector("#preview .date");
	const inputBody = () => {
		body.innerHTML = form.elements.body.value.replace(brs, "<br>");
	};
	const inputTags = () => {
		tags.innerHTML = form.elements.tags.value.split(",").map(cleanTag).filter(forTags).map(byTagHTML).join(", ");
	};
	form.elements.body.addEventListener("input", inputBody);
	form.elements.tags.addEventListener("input", inputTags);
	let id = 0;
	const inputID = () => {
		const req = new XMLHttpRequest();
		req.open("GET", `/api/posts/${id = form.elements.id.value}`, true);
		req.onreadystatechange = () => {
			if(req.readyState === XMLHttpRequest.DONE) {
				if(Math.floor(req.status / 100) === 2) {
					if(id === form.elements.id.value) {
						const post = JSON.parse(req.responseText);
						author.textContent = post.user;
						form.elements.body.value = post.body.replace(brTags, "\n");
						form.elements.tags.value = post.tags.join(", ");
						inputBody();
						inputTags();
						date.textContent = formatDate(post.date);
					}
				} else {
					alert(`Error ${req.status + (req.responseText ? `:\n${req.responseText}` : "")}`);
				}
			}
		};
		req.send();
	};
	form.elements.id.addEventListener("input", inputID);
	inputID();
	document.querySelector("#delete").addEventListener("click", () => {
		if(confirm("Are you sure you want to delete this post?")) {
			gapi.load("auth2", () => {
				gapi.auth2.init().then(auth2 => {
					auth2.signIn().then(user => {
						const req = new XMLHttpRequest();
						req.open("DELETE", `/api/posts/${form.elements.id.value}`, true);
						req.setRequestHeader("Content-Type", "application/json");
						req.onreadystatechange = () => {
							if(req.readyState === XMLHttpRequest.DONE) {
								if(Math.floor(req.status / 100) === 2) {
									alert("Deletion successful!");
									window.onbeforeunload = undefined;
									location.reload();
								} else {
									alert(`Error ${req.status + (req.responseText ? `:\n${req.responseText}` : "")}`);
								}
							}
						};
						req.send(JSON.stringify({
							token: user.getAuthResponse().id_token
						}));
					});
				});
			});
		}
	});
})();
