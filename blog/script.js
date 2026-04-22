let dateTime = new Date().toLocaleString();

let blogPosts = [];

const blogForm = document.getElementById("blogForm");
const formSubmitButton = document.getElementById("submitButton");
const blogpostTitle = document.getElementById("title");
const blogpostMessage = document.getElementById("message");
const blogpostsContainer = document.querySelector(".blogposts");

const searchbar = document.getElementById("searchbar");

const modal = document.getElementById("editModal");
var closeModal = document.getElementsByClassName("close")[0];

document.getElementById("dateTime").innerHTML = dateTime;

function getAllPosts() {
    blogpostsContainer.innerHTML = "";
    blogPosts.forEach(function(post, index) {
        const individualPost = document.createElement("div");
        individualPost.className = "blogPost";
        individualPost.innerHTML = `
            <button class="deleteButton" data-index="${index}">Delete</button>
            <h3>${post.title}</h3>
            <p>${post.message}</p>
            <small>${post.date}</small>
            <button class="editButton" data-index="${index}">Edit</button>
        `;
        blogpostsContainer.appendChild(individualPost);
    });
}

function addBlogPost(title, message) {
    const post = {
        title: title,
        message: message,
        date: new Date().toLocaleString()
    };
    blogPosts.push(post);
    getAllPosts();
}

blogForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = blogpostTitle.value;
    const message = blogpostMessage.value;
    addBlogPost(title, message);
    blogForm.reset();
});

blogpostsContainer.addEventListener("click", function(event) {
    // Delete post
    if (event.target.classList.contains("deleteButton")) {
        const index = event.target.getAttribute("data-index");
        blogPosts.splice(index, 1);
        getAllPosts();
    }

    // Open modal and populate fields with existing post data
    if (event.target.classList.contains("editButton")) {
        const index = event.target.getAttribute("data-index");
        const post = blogPosts[index];

        document.getElementById("editTitle").value = post.title;
        document.getElementById("editMessage").value = post.message;
        modal.setAttribute("data-index", index);

        modal.style.display = "block";
    }
});

// Save the edited post
document.getElementById("saveEdit").addEventListener("click", function() {
    const index = modal.getAttribute("data-index");

    blogPosts[index].title = document.getElementById("editTitle").value;

    blogPosts[index].message = document.getElementById("editMessage").value;

    modal.style.display = "none";
    getAllPosts();
});

// Close modal via X button
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close modal by clicking outside it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

searchbar.addEventListener("input", function() {
    const searchValue = searchbar.value.toLowerCase();
    const allPosts = document.querySelectorAll(".blogPost");

    allPosts.forEach(function(post) {
        const title = post.querySelector("h3").textContent.toLowerCase();
        const message = post.querySelector("p").textContent.toLowerCase();

        if (title.includes(searchValue) || message.includes(searchValue)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
});

