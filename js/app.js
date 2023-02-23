'use strict';

document.addEventListener("DOMContentLoaded", function() {

	//----------------------HAMBURGER-----------------------
		const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
			const button = document.querySelector(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);
	
			button.addEventListener('click', (e) => {
				button.classList.toggle('hamburger--active');
				nav.classList.toggle('header__nav--active');
				header.classList.toggle('header--menu');
			});
	
		};
		hamburger('.hamburger', '.header__nav', '.header');

		//------------------------------ACCORDIONS---------------------------
		const accordions = (accordionSelector) => {
			const	accordion = document.querySelectorAll(accordionSelector);

			accordion.forEach(item => {
				const accordionClick = item.querySelector('.accordion__header'),
							accordionContent = item.querySelector('.accordion__content');

				accordionClick.addEventListener('click', (e) => {
					if(!item.classList.contains('accordion--active')) {

						item.classList.add('accordion--active')
						accordionContent.style.height = "auto"
						var height = accordionContent.clientHeight + "px"
						accordionContent.style.height = "0px"

						setTimeout(() => {
							accordionContent.style.height = height
						}, 0)

						} else {
							accordionContent.style.height = "0px"
								item.classList.remove('accordion--active')
					}

				});
			});

		};
		accordions('.accordion');

});
