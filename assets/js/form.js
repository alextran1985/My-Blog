const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
// We want to GRAB reference to elements/data on the HTML page (DOM)
const formElem = document.getElementById('blog-form');
const username = document.getElementById('first-name');
const title = document.getElementById('title');
const content = document.getElementById('content');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});


formElem.addEventListener('submit', function(event) {
    // We want to prevent (Browser) action (Refresh the page)
    event.preventDefault();
    console.log("Submitting...");

    // Capture User Input data
    console.log("username: ", username.value)
    console.log("title: ", title.value)
    console.log("content: ", content.value)

    // create a temp dataset/datatype --> to put our data in a common format
    let tempUser = {
        username: username.value,
        title: title.value,
        content: content.value
    };

    console.log("New User: ", tempUser);
    console.log("New User datatype: ", typeof tempUser);


    // Save the new data to Local Storage

   // let storedData = localStorage.getItem('testing');
   
   // 1) GRAB any saved Data (if any)
   let storedData = localStorage.getItem('blog_posts');
   console.log('Saved Data: ', storedData);
   console.log('Type of Data: ', typeof storedData);
   // 2) parse the STRING/JSON DATA to something more useful --> JS OBJ
   let jsData = JSON.parse(storedData);
   console.log('Saved Data: ', jsData);
   console.log('Type of Data: ', typeof jsData);
    // 3) we ADD the new DATA
    jsData.push(tempUser);

    // 4) We need to UPDATE the SAVED data with the NEW UPDATED DATASET
    localStorage.setItem('blog_posts', JSON.stringify(jsData));
});

// I am initalizing a KEY : VALUE pair in LOCAL STORAGE
localStorage.setItem('testing', "bingo chicken");

if(!localStorage.getItem('blog_posts')) {
    localStorage.setItem('blog_posts', JSON.stringify([]));
}
document.getElementById("blog_posts").innerHTML = username;
console.log(username);