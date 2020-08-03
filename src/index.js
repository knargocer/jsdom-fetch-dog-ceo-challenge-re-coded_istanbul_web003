console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
  .then(function(response) {
  return response.json();
})

.then(function(json){
  let data = JSON.parse(json);
  for(let i = 0 ; i<json.length; i++){
    document.querySelector()
  }
  
    
})


fetch(imgUrl)
.then(function(response) {
  return response.json();
})
.then(function(json){
  for (let i = 0; i< json.length; i++){
    document.querySelector("dog-image-container").innerHTML=" <img src = json[i]>";
  }
})