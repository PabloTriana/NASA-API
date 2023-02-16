let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest();
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let API_KEY = "DjGaS2S70ZBCvZzdnDZbt5QSfo0802khQkiw22jf";
  let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${API_KEY}`); 
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  document.querySelector("#content").innerHTML += `<img_src = "${data.photos[0].img_src}">`;
}