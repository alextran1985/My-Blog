const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

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

// Display to Blog page
const blogPostsString = localStorage.getItem("blog_posts")
const blogPosts = JSON.parse(blogPostsString);

let text = "";
for (let i = 0; i < blogPosts.length; i++) {
  console.log(blogPosts[i])
  text += "<div>"
  text += "<h2>" + blogPosts[i]['title'] + "</h2>"
  text += "<h4>" + blogPosts[i]['content'] + "</h4>"
  text += "<h5>" + blogPosts[i]['username'] + "</h5>"


 text += "<hr/>"

 text += "</div>"

//  localStorage.clear();


}

console.log(text)

document.getElementById("blog").innerHTML = text;