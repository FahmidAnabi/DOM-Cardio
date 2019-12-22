// Make a div
const div = document.createElement(`div`);
// add a class of wrapper to it
div.classList.add(`wrapper`);
// put it into the body
document.body.appendChild(div);

// make an unordered list add three list items with the words "one, two three" in them
const ul = `
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>`;
// put that list into the above wrapper
div.innerHTML = ul;

// create an image
const img = document.createElement(`img`);
// set the source to an image
img.src = `https://picsum.photos/500`;
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add(`cute`);
// add an alt of Cute Puppy
img.alt = `Cute Puppy`;
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class="myDiv">
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
</div>`;
// put this div before the unordered list from above
const ulElement = div.querySelector(`ul`);
ulElement.insertAdjacentHTML(`beforebegin`, myHTML);
// add a class to the second paragraph called warning
const myDiv = document.querySelector(`.myDiv`);
myDiv.children[1].classList.add(`warning`);
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>Their height is ${height}cm and ${age} years old. In Dog years this person would be ${age *
    7} years old. That would be a tall dog!</p>
    </div>
  `;
  return html;
}

// make a new div with a class of cards
const cards = document.createElement(`div`);
cards.classList.add(`cards`);

// Have that function make 4 cards
let cardHTML = generatePlayerCard(`MD`, 25, 167);
cardHTML += generatePlayerCard(`Fahmid`, 25, 167);
cardHTML += generatePlayerCard(`Hasan`, 25, 167);
cardHTML += generatePlayerCard(`Anabi`, 25, 167);
// append those cards to the div
cards.innerHTML = cardHTML;
// put the div into the DOM just before the wrapper element
div.insertAdjacentHTML(`beforebegin`, cardHTML);


// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
