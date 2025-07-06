//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
];
const slec = document.querySelector("#selectMovie");
const movNam = document.querySelector("#movieName");
const movPric = document.querySelector("#moviePrice");
const selectedSeatsHolder = document.querySelector("#selectedSeatsHolder");
for (i of moviesList) {
  const opt = document.createElement("option");
  opt.textContent = i.movieName;
  slec.appendChild(opt);
}
slec.addEventListener("change", () => {
  const selectedIndex = slec.selectedIndex;
  const selectedMovie = moviesList[selectedIndex];

  movNam.textContent = selectedMovie.movieName;
  movPric.textContent = `$ ${selectedMovie.price}`;
});
// Use moviesList array for displaing the Name in the dropdown menu
//Add eventLister to each unoccupied seat
const seats = document.querySelectorAll(".seat");
const totalSeats = document.querySelector("#numberOfSeat");
const totalPrice = document.querySelector("#totalPrice");
for (const seat of seats){
    if(!(seat.classList.contains("occupied"))){
        seat.addEventListener("click",()=>{
            if(seat.classList.contains("selected")){
                seat.classList.remove("selected");
                totalSeats.textContent = document.querySelectorAll(".selected").length;
                valueOfSeat = document.querySelectorAll(".selected").length * parseInt((movPric.textContent).substring(2));
                totalPrice.textContent = `$ ${valueOfSeat}`;
                selectedSeatsHolder.innerHTML = "";
                
            }else{
                seat.classList.add("selected");
                totalSeats.textContent = document.querySelectorAll(".selected").length;
                valueOfSeat = document.querySelectorAll(".selected").length * parseInt((movPric.textContent).substring(2));
                totalPrice.textContent = `$ ${valueOfSeat}`;
                selectedSeatsHolder.innerHTML = "";
                
            }
        });
    }
}
//Add eventLsiter to continue Button
const continueBtn = document.querySelector("proceedBtn");
continueBtn.addEventListener("click", () => {
    const selectedSeats = document.querySelectorAll(".selected");
    if (selectedSeats.length === 0) {
        alert("Oops no seat Selected");
        return;
    }
    
});
//Add eventListerner to Cancel Button