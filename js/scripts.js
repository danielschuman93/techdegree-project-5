//fetch data from API
fetch('https://randomuser.me/api/?results=12')
  .then(res => res.json())
//  .then(data => console.log(data))
  .then(data => generateCards(data.results))


//global variables
const galleryDiv = document.getElementById('gallery');
const body = document.querySelector('body');
let cards = document.querySelectorAll('div.card');


//function to generate HTML
function generateCards(employeeList) {
  for (i=0; i<employeeList.length; i++) {
    let card = `<div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${employeeList[i].picture.large}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${employeeList[i].name.first} ${employeeList[i].name.last}</h3>
                        <p class="card-text">${employeeList[i].email}</p>
                        <p class="card-text cap">${employeeList[i].location.city}, ${employeeList[i].location.state}</p>
                    </div>
                </div>`
   galleryDiv.innerHTML += card;  
  }
}


//function to create modal window
function createModal(data) {
  let window = `<div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src=${data.picture.medium} alt="profile picture">
                        <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
                        <p class="modal-text">${data.email}</p>
                        <p class="modal-text cap">${data.location.city}</p>
                        <hr>
                        <p class="modal-text">data.phone</p>
                        <p class="modal-text">${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.state} ${data.location.postcode}</p>
                        <p class="modal-text">data.dob.date</p>
                    </div>
                </div>`
  body.appendChild(window);
}


//event listener to display modal window
for(i=0; i<cards.length; i++){
  cards[i].addEventListener('click', (e) => {

  });
}