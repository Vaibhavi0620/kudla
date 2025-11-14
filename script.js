function saveMessage() {
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmation");

  // get user input
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    confirmation.textContent = "Please fill all fields.";
    confirmation.style.color = "red";
    return;
  }

  // create object
  const userData = {
     name: name,
        email: email,
        message: message,
    time: new Date().toLocaleString(),
     
  };

  // save to local storage
  // let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  // contacts.push(userData);
  // localStorage.setItem("contacts", JSON.stringify(contacts));

  // confirmation
  confirmation.textContent = "Thank you! Your message has been saved.";
  confirmation.style.color = "green";

  // clear form
 

  // for debugging
 alert("✅ Saved! Check localStorage for details.");
console.log(" Saved:", userData.name, userData.email, userData.message, userData.time);
console.log(" All contacts:", JSON.parse(localStorage.getItem("contacts")));
form.reset();

}
// function saveBlog() {
//   const title = document.getElementById("blogTitle").value.trim();
//   const content = document.getElementById("blogContent").value.trim();
//   const author = document.getElementById("blogAuthor").value.trim();
//   const msg = document.getElementById("blogMsg");

//   if (!title || !content || !author) {
//     msg.textContent = "Please fill in all fields.";
//     msg.style.color = "red";
//     return;
//   }

//   const newBlog = {
//     title,
//     content,
//     author,
//     date: new Date().toLocaleString(),
//   };

//   let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
//   blogs.push(newBlog);
//   localStorage.setItem("blogs", JSON.stringify(blogs));

//   msg.textContent = "✅ Blog published successfully!";
//   msg.style.color = "green";

//   // Clear form
//   document.getElementById("blogForm").reset();
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.getElementById("blogContainer");
//   if (container) {
//     const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
//     if (blogs.length === 0) {
//       container.innerHTML = "<p>No blogs yet. Be the first to share!</p>";
//     } else {
//       blogs.forEach((blog) => {
//         const post = document.createElement("div");
//         post.classList.add("blog-post");
//         post.innerHTML = `
//           <h3>${blog.title}</h3>
//           <p><em>By ${blog.author} — ${blog.date}</em></p>
//           <p>${blog.content}</p>
//           <hr>
//         `;
//         container.appendChild(post);
//       });
//     }
//   }
// });
