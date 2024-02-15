const buttons = document.querySelectorAll(".button")
const content1 = document.querySelector("#content_1")
const content2 = document.querySelector("#content_2")
const content3 = document.querySelector("#content_3")
const content4 = document.querySelector("#content_4")
const content5 = document.querySelector("#content_5")


const contents = document.querySelector('.contents')

let isanimated = false

buttons.forEach(btn =>{
    btn.addEventListener("click", () => {
		console.log(btn)
		switch(btn.id) {
			case "btn_1":
				if (!isanimated) {
					setTimeout(() => {
						content1.style.display = "grid";
						content2.style.display = "none";
						content3.style.display = "none";
						content4.style.display = "none";
						content5.style.display = "none";
					}, 500)
					isanimated = true
				} else {
					content1.style.display = "grid";
						content2.style.display = "none";
						content3.style.display = "none";
						content4.style.display = "none";
						content5.style.display = "none";
				}
				break;
			case "btn_2":
				if (!isanimated) {
					setTimeout(() => {
						content1.style.display = "none";
						content2.style.display = "grid";
						content3.style.display = "none";
						content4.style.display = "none";
						content5.style.display = "none";
					}, 500)
					isanimated = true
				} else {
					content1.style.display = "none";
					content2.style.display = "grid";
					content3.style.display = "none";
					content4.style.display = "none";
					content5.style.display = "none";

				}
				break;
			case "btn_3":
				if (!isanimated) {
					setTimeout(() => {
						content1.style.display = "none";
						content2.style.display = "none";
						content3.style.display = "grid";
						content4.style.display = "none";
						content5.style.display = "none";
					}, 500)
					isanimated = true
				} else {
					content1.style.display = "none";
					content2.style.display = "none";
					content3.style.display = "grid";
					content4.style.display = "none";
					content5.style.display = "none";
				}
				break;
			case "btn_4":
				if (!isanimated) {
					setTimeout(() => {
						content1.style.display = "none";
						content2.style.display = "none";
						content3.style.display = "none";
						content4.style.display = "block";
						content5.style.display = "none";		
					}, 500)
					isanimated = true
				} else {
					content1.style.display = "none";
					content2.style.display = "none";
					content3.style.display = "none";
					content4.style.display = "block";
					content5.style.display = "none";

				}
				break;
				case "btn_5":
					if (!isanimated) {
						setTimeout(() => {
							content1.style.display = "none";
							content2.style.display = "none";
							content3.style.display = "none";
							content4.style.display = "none";
							content5.style.display = "grid";		
						}, 500)
						isanimated = true
					} else {
						content1.style.display = "none";
						content2.style.display = "none";
						content3.style.display = "none";
						content4.style.display = "none";
						content5.style.display = "grid";
	
					}
					break;
		}
    })
});