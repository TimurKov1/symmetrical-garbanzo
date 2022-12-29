const burger = document.querySelector(".burger");
burger.addEventListener("click", function() {
	burger.classList.toggle("burger_active");
});

$(function () {
	$('.menu-open').click(function () {
		$('.menu-burger').toggleClass('show-menu')
	})
});

