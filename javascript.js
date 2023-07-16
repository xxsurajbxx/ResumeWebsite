var slidePos = 1;
var scrollPos = 1;
const numberOfSections=5;
var sectionHeight;

window.onload=(event)=> {sectionHeight = (document.documentElement.scrollHeight - document.documentElement.clientHeight)/(numberOfSections-1);};

window.onscroll = function() {myFunction()};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	updatePos(Math.floor((winScroll/height)*(numberOfSections-1))+1);
}

function updatePos(p) {
	let currentPos = document.getElementById("pb"+scrollPos);
	currentPos.classList.remove("active");
	
	scrollPos=p;
	
	currentPos = document.getElementById("pb"+scrollPos);
	currentPos.classList.add("active");
}

function progressBar(position) {
	updatePos(position);
	
	document.body.scrollTop = sectionHeight*(position-1);
	document.documentElement.scrollTop = sectionHeight*(position-1);
}

function changeSlideTo(slide) {
	let currentSlide = document.getElementById("s"+slidePos);
	currentSlide.style.display = "none";
	let currentSlideCircle = document.getElementById("c"+slidePos);
	currentSlideCircle.classList.remove("activeCircle");
	
	slidePos=slide;
	
	currentSlide = document.getElementById("s"+slidePos);
	currentSlide.style.display = "flex";
	currentSlideCircle = document.getElementById("c"+slidePos);
	currentSlideCircle.classList.add("activeCircle");
}

function changeSlides(dir) {
    //if user clicks right arrow
	if(dir==1 && slidePos<6) {
		changeSlideTo(slidePos+1);
	}
	//if user clicks left arrow
	else if(dir==-1 && slidePos>1) {
		changeSlideTo(slidePos-1);
	}
}