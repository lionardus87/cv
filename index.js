document.addEventListener("DOMContentLoaded", function () {
	const hobbyBtn = document.getElementById("hobbyBtn");
	const aboutBtn = document.getElementById("aboutBtn");

	const hobbyToast = new bootstrap.Toast(document.getElementById("hobbyToast"));
	const aboutToast = new bootstrap.Toast(document.getElementById("aboutToast"));

	hobbyBtn.addEventListener("click", () => {
		hobbyToast.show();
	});

	aboutBtn.addEventListener("click", () => {
		aboutToast.show();
	});
});
