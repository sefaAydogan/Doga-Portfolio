const carouselSlide = document.querySelector("#slider-slide");
const carouselImages = document.querySelectorAll("#slider-slide img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = 40;
carouselSlide.style.transform = "translateX(" + -size * counter + "rem)";

nextBtn.addEventListener("click", () => {
	if (counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = "translateX(" + -size * counter + "rem)";
});
prevBtn.addEventListener("click", () => {
	if (counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = "translateX(" + -size * counter + "rem)";
});
carouselSlide.addEventListener("transitionend", () => {
	if (carouselImages[counter].id === "lastClone") {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = "translateX(" + -size * counter + "rem)";
	}
	if (carouselImages[counter].id === "firstClone") {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = "translateX(" + -size * counter + "rem)";
	}
});
