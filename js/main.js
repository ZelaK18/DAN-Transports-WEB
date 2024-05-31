/////////////// MENU NAV-BAR HAMBURGER \\\\\\\\\
	var sidenav = document.getElementById("mySidenav");
	var openBtn = document.getElementById("openBtn");
	var closeBtn = document.getElementById("closeBtn");

	openBtn.onclick = openNav;
	closeBtn.onclick = closeNav;
	function openNav() {
	  sidenav.classList.add("active");
	}
	function closeNav() {
	  sidenav.classList.remove("active");
	}
/////////////// SLIDESHOW \\\\\\\\\\\\\\\\\\\\\\
	let slideIndex = 1;
	showSlides(slideIndex);
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
	function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("slide");
		if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
		}
		slides[slideIndex-1].style.display = "block";
	}
/////////////// INFO TRUCK \\\\\\\\\\\\\\\\\\\\\
	document.addEventListener("DOMContentLoaded", function() {
		const tabContents = document.querySelectorAll('.tab-pane');
		tabContents.forEach(content => {
			content.style.display = 'none';
		});
		const defaultTab = document.querySelector('.tabs li:first-child');
		defaultTab.classList.add('active');
		const defaultTabId = defaultTab.getAttribute('data-tab');
		const defaultTabContent = document.getElementById(defaultTabId);
		defaultTabContent.style.display = 'block';
		const tabs = document.querySelectorAll('.tabs li');
		tabs.forEach(tab => {
			tab.addEventListener('click', function() {
				tabs.forEach(tab => {
					tab.classList.remove('active');
				});
				this.classList.add('active');
				const tabId = this.getAttribute('data-tab');
				tabContents.forEach(content => {
					content.style.display = 'none';
				});
				const selectedTabContent = document.getElementById(tabId);
				selectedTabContent.style.display = 'block';
			});
		});
	});
