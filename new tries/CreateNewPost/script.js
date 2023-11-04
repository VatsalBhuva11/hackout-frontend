// // document.addEventListener("DOMContentLoaded", () => {
// //     const postButton = document.getElementById("post-button");
// //     const commentSection = document.getElementById("comment-section");

// //     postButton.addEventListener("click", () => {
// //         // Show the comment section when the "Post" button is clicked
// //         commentSection.style.display = "block";
// //     });

// //     const commentInput = document.getElementById("comment-input");
// //     const commentButton = document.getElementById("comment-button");
// //     const commentList = document.getElementById("comment-list");

// //     commentButton.addEventListener("click", () => {
// //         const commentText = commentInput.value.trim();
// //         if (commentText) {
// //             const comment = document.createElement("div");
// //             comment.className = "comment";
// //             comment.textContent = commentText;
// //             commentList.appendChild(comment);
// //             commentInput.value = "";
// //         }
// //     });
// // });




// document.addEventListener("DOMContentLoaded", () => {
//     const postButton = document.getElementById("post-button");
//     const commentSection = document.getElementById("comment-section");
//     const createPostHeading = document.querySelector("h1");
//     const postTitle = document.getElementById("post-title");
//     const postContent = document.getElementById("post-content");

//     postButton.addEventListener("click", () => {
//         // Hide the "Create New Post" heading
//         createPostHeading.style.display = "none";

//         // Disable the "Post" button after clicking
//         postButton.disabled = true;

//         // Freeze the input and content boxes
//         postTitle.disabled = true;
//         postContent.disabled = true;

//         // Show the comment section when the "Post" button is clicked
//         commentSection.style.display = "block";
//     });

//     const commentInput = document.getElementById("comment-input");
//     const commentButton = document.getElementById("comment-button");
//     const commentList = document.getElementById("comment-list");

//     commentButton.addEventListener("click", () => {
//         const commentText = commentInput.value.trim();
//         if (commentText) {
//             const comment = document.createElement("div");
//             comment.className = "comment";
//             comment.textContent = commentText;
//             commentList.appendChild(comment);
//             commentInput.value = "";
//         }
//     });
// });

// const redirectButton = document.getElementById("redirect-button");

// redirectButton.addEventListener("click", () => {
//     window.location.href = "http://127.0.0.1:5501/html-css-projects/new%20tries/index.html";
// });




document.addEventListener("DOMContentLoaded", () => {
    const postButton = document.getElementById("post-button");
    const commentSection = document.getElementById("comment-section");
    const createPostHeading = document.querySelector("h1");
    const postTitle = document.getElementById("post-title");
    const postContent = document.getElementById("post-content");
    const commentInput = document.getElementById("comment-input");
    const commentButton = document.getElementById("comment-button");
    const commentList = document.getElementById("comment-list");

    // Load stored data from local storage
    const storedTitle = localStorage.getItem("title") || "";
    const storedContent = localStorage.getItem("content") || "";
    const isPostButtonClicked = localStorage.getItem("isPostButtonClicked") === "true";
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];

    // Populate the title and content inputs
    postTitle.value = storedTitle;
    postContent.value = storedContent;

    // Hide the "Create New Post" heading if "Post" button was clicked
    if (isPostButtonClicked) {
        createPostHeading.style.display = "none";
    }

    // Disable the "Post" button after clicking
    if (isPostButtonClicked) {
        postButton.disabled = true;
    }

    // Freeze the input and content boxes if "Post" button was clicked
    if (isPostButtonClicked) {
        postTitle.disabled = true;
        postContent.disabled = true;
    }

    // Show the comment section if "Post" button was clicked
    if (isPostButtonClicked) {
        commentSection.style.display = "block";
    }

    // Populate comments if "Post" button was clicked
    storedComments.forEach((comment) => {
        const commentElement = createCommentElement(comment);
        commentList.appendChild(commentElement);
    });

    postButton.addEventListener("click", () => {
        // Hide the "Create New Post" heading
        createPostHeading.style.display = "none";

        // Disable the "Post" button after clicking
        postButton.disabled = true;

        // Freeze the input and content boxes
        postTitle.disabled = true;
        postContent.disabled = true;

        // Show the comment section when the "Post" button is clicked
        commentSection.style.display = "block";

        // Save data to local storage
        const title = postTitle.value.trim();
        const content = postContent.value.trim();
        const isClicked = true;

        localStorage.setItem("title", title);
        localStorage.setItem("content", content);
        localStorage.setItem("isPostButtonClicked", isClicked);
    });

    commentButton.addEventListener("click", () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentElement = createCommentElement(commentText);
            commentList.appendChild(commentElement);
            commentInput.value = "";

            // Save comments to local storage
            storedComments.push(commentText);
            localStorage.setItem("comments", JSON.stringify(storedComments));
        }
    });

    const redirectButton = document.getElementById("redirect-button");

    redirectButton.addEventListener("click", () => {
        window.location.href = "http://127.0.0.1:5501/html-css-projects/new%20tries/index.html";
    });

    function createCommentElement(text) {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.textContent = text;
        return commentElement;
    }
});
