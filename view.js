const search = document.getElementById("search");

let users = document.querySelectorAll(".card")

search.addEventListener("input", (e) => {

    let value = e.target.value;
    value = value.toLowerCase();

    users.forEach(user => {

        console.log(user)

        const isVisible = user.dataset.name.includes(value)

        user.classList.toggle("go-away", !isVisible)
        
    });

})

document.body.addEventListener("contextmenu", (e) => {

    e.preventDefault();

})

	document.onclick = hideMenu;
	document.oncontextmenu = rightClick
	
function hideMenu() {
	document.getElementById("context")
	.style.display = "none"
}

function rightClick(e) {
	e.preventDefault();

	if (document.getElementById("context")
			.style.display == "block")
		hideMenu();
	else{
		var menu = document.getElementById("context")

		menu.style.display = 'block';
		menu.style.left = e.pageX + "px";
		menu.style.top = e.pageY + "px";
	}
}

function dont() {
    localStorage.setItem("modal", "f")
}

if (localStorage.getItem("modal") == "t" || localStorage.getItem("modal") == "f") {

    if (localStorage.getItem("modal") == "f") {

        console.log('Modal is FALSE!')

    }else if (localStorage.getItem("modal") == "t") {

        console.log('Modal is TRUE!')
        location.href = "#inv"

    }else {

        console.warn('Modal is NULL')
        console.error(localStorage.getItem("modal"))

    }

}else {

    localStorage.setItem("modal", "t")

}
