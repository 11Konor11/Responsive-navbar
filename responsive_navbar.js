const list = document.querySelector("#list")
const listItem1 = document.getElementById("github")
const listItem2 = document.getElementById("google")
const listItem3 = document.getElementById("youtube")
const navigationBtn = document.querySelector("#navigation-btn")


navigationBtn.addEventListener("click", function(){
	let visibility = list.getAttribute("data-visible")
	if(visibility === "false"){
		list.setAttribute("data-visible", "true")
		listItem1.classList.remove(`li-item`)
		listItem2.classList.remove(`li-item`)
		listItem3.classList.remove(`li-item`)
		list.style.animation = "appearance 600ms"
		list.style.animationFillMode = "forwards"
		navigationBtn.style.animation = "disappearance 300ms"
		navigationBtn.innerText = "X"
	}else{
		list.setAttribute("data-visible", "false")
		list.style.animation = "none"
		listItem1.classList.add(`li-item`)
		listItem2.classList.add(`li-item`)
		listItem3.classList.add(`li-item`)
		list.style.animation = "disappearance 600ms"
		navigationBtn.style.animation = "appearance 300ms"
		navigationBtn.innerText = "≡"
	}	

})