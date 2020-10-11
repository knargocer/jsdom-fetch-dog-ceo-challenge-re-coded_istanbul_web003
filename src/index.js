console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImg(json.message));

function renderImg(json){
    json.map(e=>document.getElementById("dog-image-container").innerHTML += 
    `<img src=${e}/>`)
}


fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        renderBreeds(Object.keys(json.message))
        select(Object.keys(json.message))
    });


function renderBreeds(data){
    document.getElementById("dog-breeds").innerHTML = "";
    let i = 0
    data.map(e=>{
        i++;
        document.getElementById("dog-breeds").innerHTML += 
    `<ul>${e}</ul>`;
    
    })
    document.querySelector(`ul`).addEventListener("click",(e) => {
        e.target.style.color = "purple";

        })   
}

function select(data){
    document.getElementById("breed-dropdown").addEventListener('change', (e)=>{
        let select = data.filter(el => el.charAt(0) === e.target.value)
        renderBreeds(select);
    })
}



