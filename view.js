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
