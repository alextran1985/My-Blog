let blogData = [];

let userName = document.getElementById('input-username');
let title = document.getElementById('input-title');
let contents = document.getElementById('input-contents');

function Blog(BlogUsername, BlogTitle, BlogContents){
  this.userName = BlogUserName,
  this.title = BlogTitle,
  this.contents = BlogContents
}
// This function triggers when a button is clicked
function addNewBook(){
   let blog = new Blog(userName.value, title.value, contents.value);
   let blogStringified = JSON.stringify(blog);
   
   blogData.push(blogStringified);
   localStorage.setItem('data', blogData)
}