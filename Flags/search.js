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
