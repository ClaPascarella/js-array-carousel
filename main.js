let immagineAttualmenteAttiva;
let prossimaSlide;


let slides = document.getElementsByClassName("slide");

document.getElementById("btnNext").addEventListener("click", function () {
	
	for (let i = 0; i < slides.length; i++) {

		const slide = slides[i];
		

		
		if (slide.classList.contains("active")) {
			slide.classList.remove("active");
			immagineAttualmenteAttiva = i;
		}
	}

	prossimaSlide = immagineAttualmenteAttiva + 1;

	if (prossimaSlide >= slides.length) {
		prossimaSlide = 0;
	}

	slides[prossimaSlide].classList.add("active");

	console.log(`Sposto la selezione da ${immagineAttualmenteAttiva} a ${prossimaSlide}`);
});


document.getElementById("btnPrev").addEventListener("click", function () {
    console.log("Sono un pulsante ma non ho uno scopo, aiutami!");
});