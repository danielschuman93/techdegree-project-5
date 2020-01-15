//global variables
const galleryDiv = document.getElementById('gallery');
const body = document.querySelector('body');
let peopleArray = [];


//fetch data from API
fetch('https://randomuser.me/api/?nat=us&results=12')
  .then(res => res.json())
  .then(data => {
    peopleArray = [...data.results];
    generateCards(data.results);})


//function to generate HTML
function generateCards(employeeList) {
  for (i=0; i<employeeList.length; i++) {
    let card = `<div title="${i}" class="card">
                    <div title="${i}" class="card-img-container">
                        <img title="${i}" class="card-img" src="${employeeList[i].picture.large}" alt="profile picture">
                    </div>
                    <div title="${i}" class="card-info-container">
                        <h3 title="${i}" id="name" class="card-name cap">${employeeList[i].name.first} ${employeeList[i].name.last}</h3>
                        <p title="${i}" class="card-text">${employeeList[i].email}</p>
                        <p title="${i}" class="card-text cap">${employeeList[i].location.city}, ${employeeList[i].location.state}</p>
                    </div>
                </div>`
   galleryDiv.innerHTML += card;  
  }
}


//function to create modal window
function createModal(data) {
  let window = document.createElement('div');
  window.className = 'modal-container';
  window.innerHTML = 
                `<div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src=${data.picture.large} alt="profile picture">
                        <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
                        <p class="modal-text">${data.email}</p>
                        <p class="modal-text cap">${data.location.city}</p>
                        <hr>
                        <p class="modal-text">${data.phone}</p>
                        <p class="modal-text">${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.state} ${data.location.postcode}</p>
                        <p class="modal-text">Birthday: ${data.dob.date.slice(5,7)}/${data.dob.date.slice(8,10)}/${data.dob.date.slice(0,4)}</p>
                    </div>
                </div>`
  ;
  body.appendChild(window);
  window.style.display = 'block';
  
  //event handler to close modal window
  const closeBtn = document.getElementById('modal-close-btn');
  closeBtn.addEventListener('click', () => {
    window.remove()
  });
}


//event listener to display modal window
galleryDiv.addEventListener('click', (e) => {
  if (e.target.className.includes('card')) {
    createModal(peopleArray[e.target.title]);
  }
 });