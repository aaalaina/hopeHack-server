const para = document.querySelector(".home");

const getApi = async () => {
let url = "https://hack-server-app.herokuapp.com/users" //replace with Ivana's link

const response = await fetch(url);
const information = await response.json();

let template = "";

information[0].map(item => {
    template += `
    <div>
    <h2>
    ${item.basic.first_name}
    </h2>
    </div>
    
    `
})

para.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", () => getApi());