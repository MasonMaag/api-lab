const residentsBtn = document.querySelector("#residents")

const buttonClick = evt => {
    evt.preventDefault()
 
    axios
        .get("https://swapi.dev/api/planets/2/")
        .then(response => {
            console.log(response.data)
            const { residents } = response.data
            residents.forEach(el => {
                axios
                    .get(el)
                    .then(res => {
                    console.log(res.data)
                    const { name } = res.data
                    let nameTag = document.createElement("h2")
                    nameTag.textContent = name
                    document.body.appendChild(nameTag)       
                    })
                    .catch(err => console.log(err))
            })
        })
        .catch(err => console.log(err));
}

residentsBtn.addEventListener('click', buttonClick)