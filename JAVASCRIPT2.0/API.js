const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");



let promise = fetch(URL);
console.log(promise);

const getfacts = async ()=> {
    console.log('getting data...');
    let response = await fetch(URL);
    console.log(promise); // JSON format
    let data = await response.json();
    factpara.innerText = data[1].text;

}

btn.addEventListener("click",getfacts);