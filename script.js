/*
Name Peter Vahlberg
Class: CPSC 332
Assignment: HW4
Last Modified: 10/7
Bonus points: Added delete button
*/


// List of additional artworks to add dynamically
const newArtworks = [
  { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
  { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
  { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
  { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
  { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
  { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
  { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
  { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
  { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
  { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];
// Add your JavaScript code here.
// Later, move this to an external JavaScript file for better organization.

const whiteColor = 'rgb(232, 232, 232)';
const selectedColor = 'rgb(100, 120, 0)';
let selectedCounter = 0;


// Adding event listeners

let artPieces = document.getElementsByClassName('art-panel');
for (const panel of artPieces) {
  panel.addEventListener('click', panelClicked);
}

document.getElementById('reset-button').addEventListener('click', resetGallery);

document.getElementById('add-art-button').addEventListener('click', addArtPiece);

document.getElementById('delete-art-button').addEventListener('click', deleteArts);

const grid = document.getElementsByClassName('art-grid')[0];

function addArtPiece() {
  const newPanel = document.createElement('div');
  const newImg = document.createElement('img');
  const newTitle = document.createElement('p');
  newPanel.className = 'art-panel';
  newPanel.addEventListener('click', panelClicked);

  const randArtNumber = Math.floor(Math.random() * newArtworks.length);
  newImg.src = newArtworks[randArtNumber].img;
  newImg.alt = newArtworks[randArtNumber].title;
  
  newTitle.textContent = newArtworks[randArtNumber].title + ' by ' + newArtworks[randArtNumber].artist;

  newPanel.appendChild(newImg);
  newPanel.appendChild(newTitle);

  grid.appendChild(newPanel);

}

function panelClicked(event) {
  let element = event.target;
  if (element.tagName == 'IMG') {
      element = element.parentNode;
  } else if (element.tagName == 'P') {
      element = element.parentNode;
  }
  let currentColor = element.style.backgroundColor;
  if (currentColor == selectedColor) {
      element.style.backgroundColor = whiteColor;
      selectedCounter--;
  } else {
      element.style.backgroundColor = selectedColor;
      selectedCounter++;
  }

  updateCounter();
}

function updateCounter() {
  document.getElementById('counter').textContent = "Artworks Viewed: " + selectedCounter;

  const deleteButton = document.getElementById('delete-art-button');
  if (selectedCounter == 0) {
      deleteButton.style.backgroundColor = '#333';
  } else {
      deleteButton.style.backgroundColor = 'rgb(255, 0, 0)';
  }
}

function resetGallery() {
  const panels = document.getElementsByClassName('art-panel');
  for (const panel of panels) {
      if (panel.tagName == 'DIV') {
          panel.style.backgroundColor = whiteColor;
      }
  }
  selectedCounter = 0;
  updateCounter();
}

function deleteArts() {
  const panels = document.getElementsByClassName('art-panel');
  for (let i = panels.length - 1; i >= 0; i--) {
      if (panels[i].style.backgroundColor == selectedColor) {
          grid.removeChild(panels[i]);
      }
  }
  selectedCounter = 0;
  updateCounter();
}


