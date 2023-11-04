// // // // // // // // // // // // // // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // // // // // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // // // // // // // // // // // // // const postList = document.getElementById("post-list");

// // // // // // // // // // // // // // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // // // // // //     const postText = postInput.value.trim();
// // // // // // // // // // // // // // // // // // // // // //     if (postText) {
// // // // // // // // // // // // // // // // // // // // // //         const post = document.createElement("div");
// // // // // // // // // // // // // // // // // // // // // //         post.className = "post";
// // // // // // // // // // // // // // // // // // // // // //         post.textContent = postText;

// // // // // // // // // // // // // // // // // // // // // //         const commentInput = document.createElement("input");
// // // // // // // // // // // // // // // // // // // // // //         commentInput.type = "text";
// // // // // // // // // // // // // // // // // // // // // //         commentInput.placeholder = "Add a comment";
// // // // // // // // // // // // // // // // // // // // // //         const commentButton = document.createElement("button");
// // // // // // // // // // // // // // // // // // // // // //         commentButton.textContent = "Comment";

// // // // // // // // // // // // // // // // // // // // // //         const commentList = document.createElement("div");
// // // // // // // // // // // // // // // // // // // // // //         commentList.className = "comment-list";

// // // // // // // // // // // // // // // // // // // // // //         commentButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // // // // // //             const commentText = commentInput.value.trim();
// // // // // // // // // // // // // // // // // // // // // //             if (commentText) {
// // // // // // // // // // // // // // // // // // // // // //                 const comment = document.createElement("div");
// // // // // // // // // // // // // // // // // // // // // //                 comment.className = "comment";
// // // // // // // // // // // // // // // // // // // // // //                 comment.textContent = commentText;
// // // // // // // // // // // // // // // // // // // // // //                 commentList.appendChild(comment);
// // // // // // // // // // // // // // // // // // // // // //                 commentInput.value = "";
// // // // // // // // // // // // // // // // // // // // // //             }
// // // // // // // // // // // // // // // // // // // // // //         });

// // // // // // // // // // // // // // // // // // // // // //         post.appendChild(commentInput);
// // // // // // // // // // // // // // // // // // // // // //         post.appendChild(commentButton);
// // // // // // // // // // // // // // // // // // // // // //         post.appendChild(commentList);

// // // // // // // // // // // // // // // // // // // // // //         postList.appendChild(post);
// // // // // // // // // // // // // // // // // // // // // //         postInput.value = "";
// // // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // // // // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // // // // // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // // // // // // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // // // // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // // // // //     if (canPost) {
// // // // // // // // // // // // // // // // // // // // //         const postText = postInput.value.trim();
// // // // // // // // // // // // // // // // // // // // //         if (postText) {
// // // // // // // // // // // // // // // // // // // // //             const post = document.createElement("div");
// // // // // // // // // // // // // // // // // // // // //             post.className = "post";
// // // // // // // // // // // // // // // // // // // // //             post.textContent = postText;

// // // // // // // // // // // // // // // // // // // // //             const commentInput = document.createElement("input");
// // // // // // // // // // // // // // // // // // // // //             commentInput.type = "text";
// // // // // // // // // // // // // // // // // // // // //             commentInput.placeholder = "Add a comment";
// // // // // // // // // // // // // // // // // // // // //             const commentButton = document.createElement("button");
// // // // // // // // // // // // // // // // // // // // //             commentButton.textContent = "Comment";

// // // // // // // // // // // // // // // // // // // // //             const commentList = document.createElement("div");
// // // // // // // // // // // // // // // // // // // // //             commentList.className = "comment-list";

// // // // // // // // // // // // // // // // // // // // //             commentButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // // // // //                 const commentText = commentInput.value.trim();
// // // // // // // // // // // // // // // // // // // // //                 if (commentText) {
// // // // // // // // // // // // // // // // // // // // //                     const comment = document.createElement("div");
// // // // // // // // // // // // // // // // // // // // //                     comment.className = "comment";
// // // // // // // // // // // // // // // // // // // // //                     comment.textContent = commentText;
// // // // // // // // // // // // // // // // // // // // //                     commentList.appendChild(comment);
// // // // // // // // // // // // // // // // // // // // //                     commentInput.value = "";
// // // // // // // // // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // // // // // // // //             const solveButton = document.createElement("button");
// // // // // // // // // // // // // // // // // // // // //             solveButton.textContent = "Solve";
// // // // // // // // // // // // // // // // // // // // //             solveButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // // // // //                 canPost = true; // Allowing the user to post again
// // // // // // // // // // // // // // // // // // // // //                 postInput.disabled = false;
// // // // // // // // // // // // // // // // // // // // //                 postButton.disabled = false;
// // // // // // // // // // // // // // // // // // // // //                 solveButton.style.display = "none";
// // // // // // // // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // // // // // // // //             post.appendChild(commentInput);
// // // // // // // // // // // // // // // // // // // // //             post.appendChild(commentButton);
// // // // // // // // // // // // // // // // // // // // //             post.appendChild(commentList);
// // // // // // // // // // // // // // // // // // // // //             post.appendChild(solveButton);

// // // // // // // // // // // // // // // // // // // // //             postList.appendChild(post);
// // // // // // // // // // // // // // // // // // // // //             postInput.value = "";
// // // // // // // // // // // // // // // // // // // // //             canPost = false; // Preventing the user from posting another tweet
// // // // // // // // // // // // // // // // // // // // //             postInput.disabled = true; // Disabling the input field
// // // // // // // // // // // // // // // // // // // // //             postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // // });



// // // // // // // // // // // // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // // // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // // // // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // // // // // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // // // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // // // //     if (canPost) {
// // // // // // // // // // // // // // // // // // // //         const postText = postInput.value.trim();
// // // // // // // // // // // // // // // // // // // //         if (postText) {
// // // // // // // // // // // // // // // // // // // //             const post = document.createElement("div");
// // // // // // // // // // // // // // // // // // // //             post.className = "post";
// // // // // // // // // // // // // // // // // // // //             post.textContent = postText;

// // // // // // // // // // // // // // // // // // // //             const commentInput = document.createElement("input");
// // // // // // // // // // // // // // // // // // // //             commentInput.type = "text";
// // // // // // // // // // // // // // // // // // // //             commentInput.placeholder = "Add a comment";
// // // // // // // // // // // // // // // // // // // //             const commentButton = document.createElement("button");
// // // // // // // // // // // // // // // // // // // //             commentButton.textContent = "Comment";

// // // // // // // // // // // // // // // // // // // //             const commentList = document.createElement("div");
// // // // // // // // // // // // // // // // // // // //             commentList.className = "comment-list";

// // // // // // // // // // // // // // // // // // // //             commentButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // // // //                 const commentText = commentInput.value.trim();
// // // // // // // // // // // // // // // // // // // //                 if (commentText) {
// // // // // // // // // // // // // // // // // // // //                     const comment = document.createElement("div");
// // // // // // // // // // // // // // // // // // // //                     comment.className = "comment";
// // // // // // // // // // // // // // // // // // // //                     comment.textContent = commentText;
// // // // // // // // // // // // // // // // // // // //                     commentList.appendChild(comment);
// // // // // // // // // // // // // // // // // // // //                     commentInput.value = "";
// // // // // // // // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // // // // // // //             const solveButton = document.createElement("button");
// // // // // // // // // // // // // // // // // // // //             solveButton.textContent = "Solve";
// // // // // // // // // // // // // // // // // // // //             solveButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // // // //                 canPost = true; // Allowing the user to post again
// // // // // // // // // // // // // // // // // // // //                 postInput.disabled = false;
// // // // // // // // // // // // // // // // // // // //                 postButton.disabled = false;
// // // // // // // // // // // // // // // // // // // //                 solveButton.style.display = "none";
// // // // // // // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // // // // // // //             post.appendChild(commentInput);
// // // // // // // // // // // // // // // // // // // //             post.appendChild(commentButton);
// // // // // // // // // // // // // // // // // // // //             post.appendChild(commentList);
// // // // // // // // // // // // // // // // // // // //             post.appendChild(solveButton);

// // // // // // // // // // // // // // // // // // // //             // Insert the new tweet at the top, just below the prompt area
// // // // // // // // // // // // // // // // // // // //             postList.insertBefore(post, postList.firstChild);

// // // // // // // // // // // // // // // // // // // //             postInput.value = "";
// // // // // // // // // // // // // // // // // // // //             canPost = false; // Preventing the user from posting another tweet
// // // // // // // // // // // // // // // // // // // //             postInput.disabled = true; // Disabling the input field
// // // // // // // // // // // // // // // // // // // //             postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // });


// // // // // // // // // // // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // // // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // // // // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // // //     if (canPost) {
// // // // // // // // // // // // // // // // // // //         const postText = postInput.value.trim();
// // // // // // // // // // // // // // // // // // //         if (postText) {
// // // // // // // // // // // // // // // // // // //             const post = document.createElement("div");
// // // // // // // // // // // // // // // // // // //             post.className = "post";
// // // // // // // // // // // // // // // // // // //             post.textContent = postText;

// // // // // // // // // // // // // // // // // // //             const commentInput = document.createElement("input");
// // // // // // // // // // // // // // // // // // //             commentInput.type = "text";
// // // // // // // // // // // // // // // // // // //             commentInput.placeholder = "Add a comment";
// // // // // // // // // // // // // // // // // // //             const commentButton = document.createElement("button");
// // // // // // // // // // // // // // // // // // //             commentButton.textContent = "Comment";

// // // // // // // // // // // // // // // // // // //             const commentList = document.createElement("div");
// // // // // // // // // // // // // // // // // // //             commentList.className = "comment-list";

// // // // // // // // // // // // // // // // // // //             commentButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // // //                 const commentText = commentInput.value.trim();
// // // // // // // // // // // // // // // // // // //                 if (commentText) {
// // // // // // // // // // // // // // // // // // //                     const comment = document.createElement("div");
// // // // // // // // // // // // // // // // // // //                     comment.className = "comment";
// // // // // // // // // // // // // // // // // // //                     comment.textContent = commentText;
// // // // // // // // // // // // // // // // // // //                     commentList.appendChild(comment);
// // // // // // // // // // // // // // // // // // //                     commentInput.value = "";
// // // // // // // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // // // // // //             const solveButton = document.createElement("button");
// // // // // // // // // // // // // // // // // // //             solveButton.textContent = "Solve";
// // // // // // // // // // // // // // // // // // //             solveButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // // //                 canPost = true; // Allowing the user to post again
// // // // // // // // // // // // // // // // // // //                 postInput.disabled = false;
// // // // // // // // // // // // // // // // // // //                 postButton.disabled = false;
// // // // // // // // // // // // // // // // // // //                 solveButton.style.display = "none";
// // // // // // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // // // // // //             post.appendChild(commentInput);
// // // // // // // // // // // // // // // // // // //             post.appendChild(commentButton);
// // // // // // // // // // // // // // // // // // //             post.appendChild(commentList);
// // // // // // // // // // // // // // // // // // //             post.appendChild(solveButton);

// // // // // // // // // // // // // // // // // // //             // Insert the new tweet at the top, just below the prompt area
// // // // // // // // // // // // // // // // // // //             const firstTweet = postList.querySelector('.post');
// // // // // // // // // // // // // // // // // // //             if (firstTweet) {
// // // // // // // // // // // // // // // // // // //                 postList.insertBefore(post, firstTweet);
// // // // // // // // // // // // // // // // // // //             } else {
// // // // // // // // // // // // // // // // // // //                 postList.appendChild(post);
// // // // // // // // // // // // // // // // // // //             }

// // // // // // // // // // // // // // // // // // //             postInput.value = "";
// // // // // // // // // // // // // // // // // // //             canPost = false; // Preventing the user from posting another tweet
// // // // // // // // // // // // // // // // // // //             postInput.disabled = true; // Disabling the input field
// // // // // // // // // // // // // // // // // // //             postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // });


// // // // // // // // // // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // // // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // //     if (canPost) {
// // // // // // // // // // // // // // // // // //         const postText = postInput.value.trim();
// // // // // // // // // // // // // // // // // //         if (postText) {
// // // // // // // // // // // // // // // // // //             const post = document.createElement("div");
// // // // // // // // // // // // // // // // // //             post.className = "post";

// // // // // // // // // // // // // // // // // //             // Add a custom class to the tweet with the "Solve" button
// // // // // // // // // // // // // // // // // //             if (!postList.querySelector('.post.solve')) {
// // // // // // // // // // // // // // // // // //                 post.className += " solve";
// // // // // // // // // // // // // // // // // //             }

// // // // // // // // // // // // // // // // // //             post.textContent = postText;

// // // // // // // // // // // // // // // // // //             const commentInput = document.createElement("input");
// // // // // // // // // // // // // // // // // //             commentInput.type = "text";
// // // // // // // // // // // // // // // // // //             commentInput.placeholder = "Add a comment";
// // // // // // // // // // // // // // // // // //             const commentButton = document.createElement("button");
// // // // // // // // // // // // // // // // // //             commentButton.textContent = "Comment";

// // // // // // // // // // // // // // // // // //             const commentList = document.createElement("div");
// // // // // // // // // // // // // // // // // //             commentList.className = "comment-list";

// // // // // // // // // // // // // // // // // //             commentButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // //                 const commentText = commentInput.value.trim();
// // // // // // // // // // // // // // // // // //                 if (commentText) {
// // // // // // // // // // // // // // // // // //                     const comment = document.createElement("div");
// // // // // // // // // // // // // // // // // //                     comment.className = "comment";
// // // // // // // // // // // // // // // // // //                     comment.textContent = commentText;
// // // // // // // // // // // // // // // // // //                     commentList.appendChild(comment);
// // // // // // // // // // // // // // // // // //                     commentInput.value = "";
// // // // // // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // // // // //             const solveButton = document.createElement("button");
// // // // // // // // // // // // // // // // // //             solveButton.textContent = "Solve";
// // // // // // // // // // // // // // // // // //             solveButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // // //                 canPost = true; // Allowing the user to post again
// // // // // // // // // // // // // // // // // //                 postInput.disabled = false;
// // // // // // // // // // // // // // // // // //                 postButton.disabled = false;
// // // // // // // // // // // // // // // // // //                 solveButton.style.display = "none";
// // // // // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // // // // //             post.appendChild(commentInput);
// // // // // // // // // // // // // // // // // //             post.appendChild(commentButton);
// // // // // // // // // // // // // // // // // //             post.appendChild(commentList);
// // // // // // // // // // // // // // // // // //             post.appendChild(solveButton);

// // // // // // // // // // // // // // // // // //             // Insert the new tweet at the top, just below the prompt area
// // // // // // // // // // // // // // // // // //             const firstTweet = postList.querySelector('.post');
// // // // // // // // // // // // // // // // // //             if (firstTweet) {
// // // // // // // // // // // // // // // // // //                 postList.insertBefore(post, firstTweet);
// // // // // // // // // // // // // // // // // //             } else {
// // // // // // // // // // // // // // // // // //                 postList.appendChild(post);
// // // // // // // // // // // // // // // // // //             }

// // // // // // // // // // // // // // // // // //             postInput.value = "";
// // // // // // // // // // // // // // // // // //             canPost = false; // Preventing the user from posting another tweet
// // // // // // // // // // // // // // // // // //             postInput.disabled = true; // Disabling the input field
// // // // // // // // // // // // // // // // // //             postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // });


// // // // // // // // // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // //     if (canPost) {
// // // // // // // // // // // // // // // // //         const postText = postInput.value.trim();
// // // // // // // // // // // // // // // // //         if (postText) {
// // // // // // // // // // // // // // // // //             const post = document.createElement("div");
// // // // // // // // // // // // // // // // //             post.className = "post";
// // // // // // // // // // // // // // // // //             post.textContent = postText;

// // // // // // // // // // // // // // // // //             const commentInput = document.createElement("input");
// // // // // // // // // // // // // // // // //             commentInput.type = "text";
// // // // // // // // // // // // // // // // //             commentInput.placeholder = "Add a comment";
// // // // // // // // // // // // // // // // //             const commentButton = document.createElement("button");
// // // // // // // // // // // // // // // // //             commentButton.textContent = "Comment";

// // // // // // // // // // // // // // // // //             const commentList = document.createElement("div");
// // // // // // // // // // // // // // // // //             commentList.className = "comment-list";

// // // // // // // // // // // // // // // // //             commentButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // //                 const commentText = commentInput.value.trim();
// // // // // // // // // // // // // // // // //                 if (commentText) {
// // // // // // // // // // // // // // // // //                     const comment = document.createElement("div");
// // // // // // // // // // // // // // // // //                     comment.className = "comment";
// // // // // // // // // // // // // // // // //                     comment.textContent = commentText;
// // // // // // // // // // // // // // // // //                     commentList.appendChild(comment);
// // // // // // // // // // // // // // // // //                     commentInput.value = "";
// // // // // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // // // //             const solveButton = document.createElement("button");
// // // // // // // // // // // // // // // // //             solveButton.textContent = "Solve";
// // // // // // // // // // // // // // // // //             solveButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // // //                 canPost = true; // Allowing the user to post again
// // // // // // // // // // // // // // // // //                 postInput.disabled = false;
// // // // // // // // // // // // // // // // //                 postButton.disabled = false;
// // // // // // // // // // // // // // // // //                 solveButton.style.display = "none";
// // // // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // // // //             post.appendChild(commentInput);
// // // // // // // // // // // // // // // // //             post.appendChild(commentButton);
// // // // // // // // // // // // // // // // //             post.appendChild(commentList);
// // // // // // // // // // // // // // // // //             post.appendChild(solveButton);

// // // // // // // // // // // // // // // // //             // Insert the new tweet at the top, just below the prompt area
// // // // // // // // // // // // // // // // //             const firstTweet = postList.querySelector('.post');
// // // // // // // // // // // // // // // // //             if (firstTweet) {
// // // // // // // // // // // // // // // // //                 postList.insertBefore(post, firstTweet);

// // // // // // // // // // // // // // // // //                 // Add a margin to create a gap between the first and second tweet
// // // // // // // // // // // // // // // // //                 if (firstTweet.nextElementSibling) {
// // // // // // // // // // // // // // // // //                     firstTweet.nextElementSibling.style.marginTop = '50px';
// // // // // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // // // // //             } else {
// // // // // // // // // // // // // // // // //                 postList.appendChild(post);
// // // // // // // // // // // // // // // // //             }

// // // // // // // // // // // // // // // // //             postInput.value = "";
// // // // // // // // // // // // // // // // //             canPost = false; // Preventing the user from posting another tweet
// // // // // // // // // // // // // // // // //             postInput.disabled = true; // Disabling the input field
// // // // // // // // // // // // // // // // //             postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // });


// // // // // // // // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // //     if (canPost) {
// // // // // // // // // // // // // // // //         const postText = postInput.value.trim();
// // // // // // // // // // // // // // // //         if (postText) {
// // // // // // // // // // // // // // // //             const post = document.createElement("div");
// // // // // // // // // // // // // // // //             post.className = "post";
// // // // // // // // // // // // // // // //             post.textContent = postText;

// // // // // // // // // // // // // // // //             const commentInput = document.createElement("input");
// // // // // // // // // // // // // // // //             commentInput.type = "text";
// // // // // // // // // // // // // // // //             commentInput.placeholder = "Add a comment";
// // // // // // // // // // // // // // // //             const commentButton = document.createElement("button");
// // // // // // // // // // // // // // // //             commentButton.textContent = "Comment";

// // // // // // // // // // // // // // // //             const commentList = document.createElement("div");
// // // // // // // // // // // // // // // //             commentList.className = "comment-list";

// // // // // // // // // // // // // // // //             commentButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // //                 const commentText = commentInput.value.trim();
// // // // // // // // // // // // // // // //                 if (commentText) {
// // // // // // // // // // // // // // // //                     const comment = document.createElement("div");
// // // // // // // // // // // // // // // //                     comment.className = "comment";
// // // // // // // // // // // // // // // //                     comment.textContent = commentText;
// // // // // // // // // // // // // // // //                     commentList.appendChild(comment);
// // // // // // // // // // // // // // // //                     commentInput.value = "";
// // // // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // // //             const solveButton = document.createElement("button");
// // // // // // // // // // // // // // // //             solveButton.textContent = "Solve";
// // // // // // // // // // // // // // // //             solveButton.addEventListener("click", () => {
// // // // // // // // // // // // // // // //                 canPost = true; // Allowing the user to post again
// // // // // // // // // // // // // // // //                 postInput.disabled = false;
// // // // // // // // // // // // // // // //                 postButton.disabled = false;
// // // // // // // // // // // // // // // //                 solveButton.style.display = "none";
// // // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // // //             post.appendChild(commentInput);
// // // // // // // // // // // // // // // //             post.appendChild(commentButton);
// // // // // // // // // // // // // // // //             post.appendChild(commentList);
// // // // // // // // // // // // // // // //             post.appendChild(solveButton);

// // // // // // // // // // // // // // // //             // Insert the new tweet at the top, just below the prompt area
// // // // // // // // // // // // // // // //             const firstTweet = postList.querySelector('.post');
// // // // // // // // // // // // // // // //             if (firstTweet) {
// // // // // // // // // // // // // // // //                 postList.insertBefore(post, firstTweet);

// // // // // // // // // // // // // // // //                 // Add a margin to create a gap between the first and second tweet
// // // // // // // // // // // // // // // //                 if (firstTweet.nextElementSibling) {
// // // // // // // // // // // // // // // //                     firstTweet.nextElementSibling.style.marginTop = '100px';
// // // // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // // // //             } else {
// // // // // // // // // // // // // // // //                 postList.appendChild(post);
// // // // // // // // // // // // // // // //             }

// // // // // // // // // // // // // // // //             postInput.value = "";
// // // // // // // // // // // // // // // //             canPost = false; // Preventing the user from posting another tweet
// // // // // // // // // // // // // // // //             postInput.disabled = true; // Disabling the input field
// // // // // // // // // // // // // // // //             postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // });





// // // // // // // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // // // // // // //     if (canPost) {
// // // // // // // // // // // // // // //         const postText = postInput.value.trim();
// // // // // // // // // // // // // // //         if (postText) {
// // // // // // // // // // // // // // //             const post = document.createElement("div");
// // // // // // // // // // // // // // //             post.className = "post";
// // // // // // // // // // // // // // //             post.textContent = postText;

// // // // // // // // // // // // // // //             const commentInput = document.createElement("input");
// // // // // // // // // // // // // // //             commentInput.type = "text";
// // // // // // // // // // // // // // //             commentInput.placeholder = "Add a comment";
// // // // // // // // // // // // // // //             const commentButton = document.createElement("button");
// // // // // // // // // // // // // // //             commentButton.textContent = "Comment";

// // // // // // // // // // // // // // //             const commentList = document.createElement("div");
// // // // // // // // // // // // // // //             commentList.className = "comment-list";

// // // // // // // // // // // // // // //             commentButton.addEventListener("click", () => {
// // // // // // // // // // // // // // //                 const commentText = commentInput.value.trim();
// // // // // // // // // // // // // // //                 if (commentText) {
// // // // // // // // // // // // // // //                     const comment = document.createElement("div");
// // // // // // // // // // // // // // //                     comment.className = "comment";
// // // // // // // // // // // // // // //                     comment.textContent = commentText;
// // // // // // // // // // // // // // //                     commentList.appendChild(comment);
// // // // // // // // // // // // // // //                     commentInput.value = "";
// // // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // //             const solveButton = document.createElement("button");
// // // // // // // // // // // // // // //             solveButton.textContent = "Solve";
// // // // // // // // // // // // // // //             solveButton.addEventListener("click", () => {
// // // // // // // // // // // // // // //                 canPost = true; // Allowing the user to post again
// // // // // // // // // // // // // // //                 postInput.disabled = false;
// // // // // // // // // // // // // // //                 postButton.disabled = false;
// // // // // // // // // // // // // // //                 solveButton.style.display = "none";
// // // // // // // // // // // // // // //             });

// // // // // // // // // // // // // // //             post.appendChild(commentInput);
// // // // // // // // // // // // // // //             post.appendChild(commentButton);
// // // // // // // // // // // // // // //             post.appendChild(commentList);
// // // // // // // // // // // // // // //             post.appendChild(solveButton);

// // // // // // // // // // // // // // //             // Insert the new tweet at the top, just below the prompt area
// // // // // // // // // // // // // // //             const firstTweet = postList.querySelector('.post');
// // // // // // // // // // // // // // //             if (firstTweet) {
// // // // // // // // // // // // // // //                 postList.insertBefore(post, firstTweet.nextElementSibling);

// // // // // // // // // // // // // // //                 // Add a margin to create a gap between the first and second tweet
// // // // // // // // // // // // // // //                 if (firstTweet.nextElementSibling) {
// // // // // // // // // // // // // // //                     firstTweet.nextElementSibling.style.marginTop = '100px';
// // // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // // //             } else {
// // // // // // // // // // // // // // //                 postList.appendChild(post);
// // // // // // // // // // // // // // //             }

// // // // // // // // // // // // // // //             postInput.value = "";
// // // // // // // // // // // // // // //             canPost = false; // Preventing the user from posting another tweet
// // // // // // // // // // // // // // //             postInput.disabled = true; // Disabling the input field
// // // // // // // // // // // // // // //             postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // });


// // // // // // // // // // // // // // // // Function to add a new tweet to the feed
// // // // // // // // // // // // // // // function addNewTweet() {
// // // // // // // // // // // // // // //   const tweetInput = document.querySelector(".tweetbox__input input");
// // // // // // // // // // // // // // //   const tweetImageInput = document.getElementById("tweetImage");
// // // // // // // // // // // // // // //   const tweetImage = tweetImageInput.files[0]; // Get the selected image file

// // // // // // // // // // // // // // //   // Get the text entered by the user in the input field
// // // // // // // // // // // // // // //   const tweetText = tweetInput.value;

// // // // // // // // // // // // // // //   if (tweetText.trim() === "") {
// // // // // // // // // // // // // // //     // Don't add an empty tweet
// // // // // // // // // // // // // // //     return;
// // // // // // // // // // // // // // //   }

// // // // // // // // // // // // // // //   // Create the content for the new tweet using the user's input
// // // // // // // // // // // // // // //   const postContent = `
// // // // // // // // // // // // // // //   <div class="post__avatar">
// // // // // // // // // // // // // // //     <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" />
// // // // // // // // // // // // // // //   </div>
// // // // // // // // // // // // // // //   <div class="post__body">
// // // // // // // // // // // // // // //     <div class="post__header">
// // // // // // // // // // // // // // //       <div class="post__headerText">
// // // // // // // // // // // // // // //         <h3>
// // // // // // // // // // // // // // //           Your Name
// // // // // // // // // // // // // // //           <span class="post__headerSpecial">
// // // // // // // // // // // // // // //             <span class="material-icons post__badge"> verified </span>@yourusername
// // // // // // // // // // // // // // //           </span>
// // // // // // // // // // // // // // //         </h3>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //       <div class="post__headerDescription">
// // // // // // // // // // // // // // //         <p>${tweetText}</p>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //     <img src="${URL.createObjectURL(tweetImage)}" alt="Uploaded Image" /> 
// // // // // // // // // // // // // // //     <!-- Display the uploaded image -->
// // // // // // // // // // // // // // //     You can customize the tweet content further here
// // // // // // // // // // // // // // //   </div>
// // // // // // // // // // // // // // // `;

// // // // // // // // // // // // // // //   // Get the feed container and update its HTML
// // // // // // // // // // // // // // //   const feedContainer = document.getElementById("feed-container");
// // // // // // // // // // // // // // //   feedContainer.innerHTML = postContent + feedContainer.innerHTML;

// // // // // // // // // // // // // // //   // Clear the input field after posting
// // // // // // // // // // // // // // //   tweetInput.value = "";
// // // // // // // // // // // // // // //   tweetImageInput.value = "";
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // Add an event listener to the tweet button
// // // // // // // // // // // // // // // const tweetButton = document.querySelector(".tweetBox__tweetButton");
// // // // // // // // // // // // // // // tweetButton.addEventListener("click", addNewTweet);


// // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // //     if (canPost) {
// // // // // // // // //         const postText = postInput.value.trim();
// // // // // // // // //         if (postText) {
// // // // // // // // //             const post = document.createElement("div");
// // // // // // // // //             post.className = "post";
// // // // // // // // //             post.textContent = postText;

// // // // // // // // //             const commentInput = document.createElement("input");
// // // // // // // // //             commentInput.type = "text";
// // // // // // // // //             commentInput.placeholder = "Add a comment";
// // // // // // // // //             const commentButton = document.createElement("button");
// // // // // // // // //             commentButton.textContent = "Comment";

// // // // // // // // //             const commentList = document.createElement("div");
// // // // // // // // //             commentList.className = "comment-list";

// // // // // // // // //             commentButton.addEventListener("click", () => {
// // // // // // // // //                 const commentText = commentInput.value.trim();
// // // // // // // // //                 if (commentText) {
// // // // // // // // //                     const comment = document.createElement("div");
// // // // // // // // //                     comment.className = "comment";
// // // // // // // // //                     comment.textContent = commentText;
// // // // // // // // //                     commentList.appendChild(comment);
// // // // // // // // //                     commentInput.value = "";
// // // // // // // // //                 }
// // // // // // // // //             });

// // // // // // // // //             const solveButton = document.createElement("button");
// // // // // // // // //             solveButton.textContent = "Solve";
// // // // // // // // //             solveButton.addEventListener("click", () => {
// // // // // // // // //                 canPost = true; // Allowing the user to post again
// // // // // // // // //                 postInput.disabled = false;
// // // // // // // // //                 postButton.disabled = false;
// // // // // // // // //                 solveButton.style.display = "none";
// // // // // // // // //             });

// // // // // // // // //             post.appendChild(commentInput);
// // // // // // // // //             post.appendChild(commentButton);
// // // // // // // // //             post.appendChild(commentList);
// // // // // // // // //             post.appendChild(solveButton);

// // // // // // // // //             // Insert the new tweet at the top, just below the prompt area
// // // // // // // // //             postList.insertBefore(post, postList.firstChild);

// // // // // // // // //             postInput.value = "";
// // // // // // // // //             canPost = false; // Preventing the user from posting another tweet
// // // // // // // // //             postInput.disabled = true; // Disabling the input field
// // // // // // // // //             postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // //         }
// // // // // // // // //     }
// // // // // // // // // });




// // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // //   if (canPost) {
// // // // // // // // // //     const postText = postInput.value.trim();
// // // // // // // // // //     if (postText) {
// // // // // // // // // //       const post = document.createElement("div");
// // // // // // // // // //       post.className = "post";
// // // // // // // // // //       post.textContent = postText;

// // // // // // // // // //       const commentInput = document.createElement("input");
// // // // // // // // // //       commentInput.type = "text";
// // // // // // // // // //       commentInput.placeholder = "Add a comment";
// // // // // // // // // //       const commentButton = document.createElement("button");
// // // // // // // // // //       commentButton.textContent = "Comment";

// // // // // // // // // //       const commentList = document.createElement("div");
// // // // // // // // // //       commentList.className = "comment-list";

// // // // // // // // // //       commentButton.addEventListener("click", () => {
// // // // // // // // // //         const commentText = commentInput.value.trim();
// // // // // // // // // //         if (commentText) {
// // // // // // // // // //           const comment = document.createElement("div");
// // // // // // // // // //           comment.className = "comment";
// // // // // // // // // //           comment.textContent = commentText;
// // // // // // // // // //           commentList.appendChild(comment);
// // // // // // // // // //           commentInput.value = "";
// // // // // // // // // //         }
// // // // // // // // // //       });

// // // // // // // // // //       const solveButton = document.createElement("button");
// // // // // // // // // //       solveButton.textContent = "Solve";
// // // // // // // // // //       solveButton.addEventListener("click", () => {
// // // // // // // // // //         canPost = true; // Allowing the user to post again
// // // // // // // // // //         postInput.disabled = false;
// // // // // // // // // //         postButton.disabled = false;
// // // // // // // // // //         solveButton.style.display = "none";
// // // // // // // // // //       });

// // // // // // // // // //       const solveHistoryButton = document.createElement("button");
// // // // // // // // // //       solveHistoryButton.textContent = "Solve History";
// // // // // // // // // //       solveHistoryButton.addEventListener("click", () => {
// // // // // // // // // //         // Redirect to the "Solve History" page or perform any other action
// // // // // // // // // //         window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
// // // // // // // // // //       });

// // // // // // // // // //       const createNewPostButton = document.createElement("button");
// // // // // // // // // //       createNewPostButton.textContent = "Create New Post";
// // // // // // // // // //       createNewPostButton.addEventListener("click", () => {
// // // // // // // // // //         // Redirect to the "Create New Post" page or perform any other action
// // // // // // // // // //         window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
// // // // // // // // // //       });

// // // // // // // // // //       post.appendChild(commentInput);
// // // // // // // // // //       post.appendChild(commentButton);
// // // // // // // // // //       post.appendChild(commentList);
// // // // // // // // // //       post.appendChild(solveButton);
// // // // // // // // // //       post.appendChild(solveHistoryButton);
// // // // // // // // // //       post.appendChild(createNewPostButton);

// // // // // // // // // //       // Insert the new tweet at the top, just below the prompt area
// // // // // // // // // //       postList.insertBefore(post, postList.firstChild);

// // // // // // // // // //       postInput.value = "";
// // // // // // // // // //       canPost = false; // Preventing the user from posting another tweet
// // // // // // // // // //       postInput.disabled = true; // Disabling the input field
// // // // // // // // // //       postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // // //     }
// // // // // // // // // //   }
// // // // // // // // // // });


// // // // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // // // //   if (canPost) {
// // // // // // // // // // // //     const postText = postInput.value.trim();
// // // // // // // // // // // //     if (postText) {
// // // // // // // // // // // //       const post = document.createElement("div");
// // // // // // // // // // // //       post.className = "post";
// // // // // // // // // // // //       post.textContent = postText;

// // // // // // // // // // // //       const commentInput = document.createElement("input");
// // // // // // // // // // // //       commentInput.type = "text";
// // // // // // // // // // // //       commentInput.placeholder = "Add a comment";
// // // // // // // // // // // //       const commentButton = document.createElement("button");
// // // // // // // // // // // //       commentButton.textContent = "Comment";

// // // // // // // // // // // //       const commentList = document.createElement("div");
// // // // // // // // // // // //       commentList.className = "comment-list";

// // // // // // // // // // // //       commentButton.addEventListener("click", () => {
// // // // // // // // // // // //         const commentText = commentInput.value.trim();
// // // // // // // // // // // //         if (commentText) {
// // // // // // // // // // // //           const comment = document.createElement("div");
// // // // // // // // // // // //           comment.className = "comment";
// // // // // // // // // // // //           comment.textContent = commentText;
// // // // // // // // // // // //           commentList.appendChild(comment);
// // // // // // // // // // // //           commentInput.value = "";
// // // // // // // // // // // //         }
// // // // // // // // // // // //       });

// // // // // // // // // // // //       const solveButton = document.createElement("button");
// // // // // // // // // // // //       solveButton.textContent = "Solve";
// // // // // // // // // // // //       solveButton.addEventListener("click", () => {
// // // // // // // // // // // //         canPost = true; // Allowing the user to post again
// // // // // // // // // // // //         postInput.disabled = false;
// // // // // // // // // // // //         postButton.disabled = false;
// // // // // // // // // // // //         solveButton.style.display = "none";
// // // // // // // // // // // //         solveHistoryButton.style.display = "none"; // Hide "Solve History" button
// // // // // // // // // // // //         createNewPostButton.style.display = "none"; // Hide "Create New Post" button
// // // // // // // // // // // //       });

// // // // // // // // // // // //       const solveHistoryButton = document.createElement("button");
// // // // // // // // // // // //       solveHistoryButton.textContent = "Solve History";
// // // // // // // // // // // //       solveHistoryButton.addEventListener("click", () => {
// // // // // // // // // // // //         // Redirect to the "Solve History" page or perform any other action
// // // // // // // // // // // //         window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
// // // // // // // // // // // //       });

// // // // // // // // // // // //       const createNewPostButton = document.createElement("button");
// // // // // // // // // // // //       createNewPostButton.textContent = "Create New Post";
// // // // // // // // // // // //       createNewPostButton.addEventListener("click", () => {
// // // // // // // // // // // //         // Redirect to the "Create New Post" page or perform any other action
// // // // // // // // // // // //         window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
// // // // // // // // // // // //       });

// // // // // // // // // // // //       post.appendChild(commentInput);
// // // // // // // // // // // //       post.appendChild(commentButton);
// // // // // // // // // // // //       post.appendChild(commentList);
// // // // // // // // // // // //       post.appendChild(solveButton);
// // // // // // // // // // // //       post.appendChild(solveHistoryButton);
// // // // // // // // // // // //       post.appendChild(createNewPostButton);

// // // // // // // // // // // //       // Insert the new tweet at the top, just below the prompt area
// // // // // // // // // // // //       postList.insertBefore(post, postList.firstChild);

// // // // // // // // // // // //       postInput.value = "";
// // // // // // // // // // // //       canPost = false; // Preventing the user from posting another tweet
// // // // // // // // // // // //       postInput.disabled = true; // Disabling the input field
// // // // // // // // // // // //       postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }
// // // // // // // // // // // // });




// // // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // // // Load existing tweets from local storage
// // // // // // // // // // // const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
// // // // // // // // // // // if (storedTweets.length > 0) {
// // // // // // // // // // //   storedTweets.forEach((tweet) => {
// // // // // // // // // // //     const post = createTweetElement(tweet);
// // // // // // // // // // //     postList.appendChild(post);
// // // // // // // // // // //   });
// // // // // // // // // // // }

// // // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // // //   if (canPost) {
// // // // // // // // // // //     const postText = postInput.value.trim();
// // // // // // // // // // //     if (postText) {
// // // // // // // // // // //       const post = createTweetElement(postText);
// // // // // // // // // // //       postList.insertBefore(post, postList.firstChild);

// // // // // // // // // // //       // Save the tweet to local storage
// // // // // // // // // // //       storedTweets.unshift(postText);
// // // // // // // // // // //       localStorage.setItem("tweets", JSON.stringify(storedTweets));

// // // // // // // // // // //       postInput.value = "";
// // // // // // // // // // //       canPost = false; // Preventing the user from posting another tweet
// // // // // // // // // // //       postInput.disabled = true; // Disabling the input field
// // // // // // // // // // //       postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // // // //     }
// // // // // // // // // // //   }
// // // // // // // // // // // });

// // // // // // // // // // // function createTweetElement(text) {
// // // // // // // // // // //   const post = document.createElement("div");
// // // // // // // // // // //   post.className = "post";
// // // // // // // // // // //   post.textContent = text;

// // // // // // // // // // //   const commentInput = document.createElement("input");
// // // // // // // // // // //   commentInput.type = "text";
// // // // // // // // // // //   commentInput.placeholder = "Add a comment";
// // // // // // // // // // //   const commentButton = document.createElement("button");
// // // // // // // // // // //   commentButton.textContent = "Comment";

// // // // // // // // // // //   const commentList = document.createElement("div");
// // // // // // // // // // //   commentList.className = "comment-list";

// // // // // // // // // // //   commentButton.addEventListener("click", () => {
// // // // // // // // // // //     const commentText = commentInput.value.trim();
// // // // // // // // // // //     if (commentText) {
// // // // // // // // // // //       const comment = document.createElement("div");
// // // // // // // // // // //       comment.className = "comment";
// // // // // // // // // // //       comment.textContent = commentText;
// // // // // // // // // // //       commentList.appendChild(comment);
// // // // // // // // // // //       commentInput.value = "";
// // // // // // // // // // //     }
// // // // // // // // // // //   });

// // // // // // // // // // //   const solveButton = document.createElement("button");
// // // // // // // // // // //   solveButton.textContent = "Solve";
// // // // // // // // // // //   solveButton.addEventListener("click", () => {
// // // // // // // // // // //     canPost = true; // Allowing the user to post again
// // // // // // // // // // //     postInput.disabled = false;
// // // // // // // // // // //     postButton.disabled = false;
// // // // // // // // // // //     solveButton.style.display = "none";
// // // // // // // // // // //     solveHistoryButton.style.display = "none"; // Hide "Solve History" button
// // // // // // // // // // //     createNewPostButton.style.display = "none"; // Hide "Create New Post" button
// // // // // // // // // // //   });

// // // // // // // // // // //   const solveHistoryButton = document.createElement("button");
// // // // // // // // // // //   solveHistoryButton.textContent = "Solve History";
// // // // // // // // // // //   solveHistoryButton.addEventListener("click", () => {
// // // // // // // // // // //     // Redirect to the "Solve History" page or perform any other action
// // // // // // // // // // //     window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
// // // // // // // // // // //   });

// // // // // // // // // // //   const createNewPostButton = document.createElement("button");
// // // // // // // // // // //   createNewPostButton.textContent = "Create New Post";
// // // // // // // // // // //   createNewPostButton.addEventListener("click", () => {
// // // // // // // // // // //     // Redirect to the "Create New Post" page or perform any other action
// // // // // // // // // // //     window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
// // // // // // // // // // //   });

// // // // // // // // // // //   post.appendChild(commentInput);
// // // // // // // // // // //   post.appendChild(commentButton);
// // // // // // // // // // //   post.appendChild(commentList);
// // // // // // // // // // //   post.appendChild(solveButton);
// // // // // // // // // // //   post.appendChild(solveHistoryButton);
// // // // // // // // // // //   post.appendChild(createNewPostButton);

// // // // // // // // // // //   return post;
// // // // // // // // // // // }


// // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // // Load existing tweets and their solve button states from local storage
// // // // // // // // // // const storedData = JSON.parse(localStorage.getItem("tweetData")) || [];

// // // // // // // // // // storedData.forEach((data) => {
// // // // // // // // // //   const post = createTweetElement(data.text);
// // // // // // // // // //   if (data.solved) {
// // // // // // // // // //     // If the tweet was solved, simulate a click on the Solve button
// // // // // // // // // //     const solveButton = post.querySelector(".solve-button");
// // // // // // // // // //     if (solveButton) {
// // // // // // // // // //       simulateButtonClick(solveButton);
// // // // // // // // // //     }
// // // // // // // // // //   }
// // // // // // // // // //   postList.appendChild(post);
// // // // // // // // // // });

// // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // //   if (canPost) {
// // // // // // // // // //     const postText = postInput.value.trim();
// // // // // // // // // //     if (postText) {
// // // // // // // // // //       const post = createTweetElement(postText);
// // // // // // // // // //       postList.insertBefore(post, postList.firstChild);

// // // // // // // // // //       // Save the tweet and its solve button state to local storage
// // // // // // // // // //       storedData.unshift({ text: postText, solved: false });
// // // // // // // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));

// // // // // // // // // //       postInput.value = "";
// // // // // // // // // //       canPost = false; // Preventing the user from posting another tweet
// // // // // // // // // //       postInput.disabled = true; // Disabling the input field
// // // // // // // // // //       postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // // //     }
// // // // // // // // // //   }
// // // // // // // // // // });

// // // // // // // // // // function createTweetElement(text) {
// // // // // // // // // //   const post = document.createElement("div");
// // // // // // // // // //   post.className = "post";
// // // // // // // // // //   post.textContent = text;

// // // // // // // // // //   const commentInput = document.createElement("input");
// // // // // // // // // //   commentInput.type = "text";
// // // // // // // // // //   commentInput.placeholder = "Add a comment";
// // // // // // // // // //   const commentButton = document.createElement("button");
// // // // // // // // // //   commentButton.textContent = "Comment";

// // // // // // // // // //   const commentList = document.createElement("div");
// // // // // // // // // //   commentList.className = "comment-list";

// // // // // // // // // //   commentButton.addEventListener("click", () => {
// // // // // // // // // //     const commentText = commentInput.value.trim();
// // // // // // // // // //     if (commentText) {
// // // // // // // // // //       const comment = document.createElement("div");
// // // // // // // // // //       comment.className = "comment";
// // // // // // // // // //       comment.textContent = commentText;
// // // // // // // // // //       commentList.appendChild(comment);
// // // // // // // // // //       commentInput.value = "";
// // // // // // // // // //     }
// // // // // // // // // //   });

// // // // // // // // // //   const solveButton = document.createElement("button");
// // // // // // // // // //   solveButton.textContent = "Solve";
// // // // // // // // // //   solveButton.className = "solve-button";
// // // // // // // // // //   solveButton.addEventListener("click", () => {
// // // // // // // // // //     // Toggle the solve button state and store it in local storage
// // // // // // // // // //     const index = storedData.findIndex((data) => data.text === text);
// // // // // // // // // //     if (index !== -1) {
// // // // // // // // // //       storedData[index].solved = !storedData[index].solved;
// // // // // // // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));
// // // // // // // // // //     }

// // // // // // // // // //     canPost = true; // Allowing the user to post again
// // // // // // // // // //     postInput.disabled = false;
// // // // // // // // // //     postButton.disabled = false;
// // // // // // // // // //     solveButton.style.display = "none";
// // // // // // // // // //     solveHistoryButton.style.display = "none"; // Hide "Solve History" button
// // // // // // // // // //     createNewPostButton.style.display = "none"; // Hide "Create New Post" button
// // // // // // // // // //   });

// // // // // // // // // //   const solveHistoryButton = document.createElement("button");
// // // // // // // // // //   solveHistoryButton.textContent = "Solve History";
// // // // // // // // // //   solveHistoryButton.addEventListener("click", () => {
// // // // // // // // // //     // Redirect to the "Solve History" page or perform any other action
// // // // // // // // // //     window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
// // // // // // // // // //   });

// // // // // // // // // //   const createNewPostButton = document.createElement("button");
// // // // // // // // // //   createNewPostButton.textContent = "Create New Post";
// // // // // // // // // //   createNewPostButton.addEventListener("click", () => {
// // // // // // // // // //     // Redirect to the "Create New Post" page or perform any other action
// // // // // // // // // //     window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
// // // // // // // // // //   });

// // // // // // // // // //   post.appendChild(commentInput);
// // // // // // // // // //   post.appendChild(commentButton);
// // // // // // // // // //   post.appendChild(commentList);
// // // // // // // // // //   post.appendChild(solveButton);
// // // // // // // // // //   post.appendChild(solveHistoryButton);
// // // // // // // // // //   post.appendChild(createNewPostButton);

// // // // // // // // // //   return post;
// // // // // // // // // // }

// // // // // // // // // // function simulateButtonClick(button) {
// // // // // // // // // //   if (document.createEvent) {
// // // // // // // // // //     const event = document.createEvent("MouseEvents");
// // // // // // // // // //     event.initEvent("click", true, true);
// // // // // // // // // //     button.dispatchEvent(event);
// // // // // // // // // //   } else if (button.click) {
// // // // // // // // // //     button.click();
// // // // // // // // // //   }
// // // // // // // // // // }

// // // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // // Load existing tweets from local storage
// // // // // // // // // // const storedData = JSON.parse(localStorage.getItem("tweetData")) || [];

// // // // // // // // // // // Function to create a tweet element and apply the "solved" state
// // // // // // // // // // function createTweetElement(data) {
// // // // // // // // // //   const post = document.createElement("div");
// // // // // // // // // //   post.className = "post";
// // // // // // // // // //   post.textContent = data.text;

// // // // // // // // // //   // ... (create other elements)

// // // // // // // // // //   const solveButton = document.createElement("button");
// // // // // // // // // //   solveButton.textContent = "Solve";
// // // // // // // // // //   solveButton.className = "solve-button";

// // // // // // // // // //   // Check and apply the "solved" state
// // // // // // // // // //   if (data.solved) {
// // // // // // // // // //     // If the tweet was solved, simulate a click on the Solve button
// // // // // // // // // //     simulateButtonClick(solveButton);
// // // // // // // // // //   }

// // // // // // // // // //   solveButton.addEventListener("click", () => {
// // // // // // // // // //     // Toggle the solve button state and store it in local storage
// // // // // // // // // //     const index = storedData.findIndex((item) => item.text === data.text);
// // // // // // // // // //     if (index !== -1) {
// // // // // // // // // //       storedData[index].solved = !storedData[index].solved;
// // // // // // // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));
// // // // // // // // // //     }

// // // // // // // // // //     // ... (rest of the code)
// // // // // // // // // //   });

// // // // // // // // // //   // ... (add other elements to the post)

// // // // // // // // // //   return post;
// // // // // // // // // // }

// // // // // // // // // // // Create tweet elements and append them to the postList
// // // // // // // // // // storedData.forEach((data) => {
// // // // // // // // // //   const post = createTweetElement(data);
// // // // // // // // // //   postList.appendChild(post);
// // // // // // // // // // });

// // // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // // //   if (canPost) {
// // // // // // // // // //     const postText = postInput.value.trim();
// // // // // // // // // //     if (postText) {
// // // // // // // // // //       const post = createTweetElement({ text: postText, solved: false });
// // // // // // // // // //       postList.insertBefore(post, postList.firstChild);

// // // // // // // // // //       // Save the tweet to local storage
// // // // // // // // // //       storedData.unshift({ text: postText, solved: false });
// // // // // // // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));

// // // // // // // // // //       postInput.value = "";
// // // // // // // // // //       canPost = false; // Preventing the user from posting another tweet
// // // // // // // // // //       postInput.disabled = true; // Disabling the input field
// // // // // // // // // //       postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // // //     }
// // // // // // // // // //   }
// // // // // // // // // // });

// // // // // // // // // // // Rest of the code...

// // // // // // // // // // function createTweetElement(text) {
// // // // // // // // // //   const post = document.createElement("div");
// // // // // // // // // //   post.className = "post";
// // // // // // // // // //   post.textContent = text;

// // // // // // // // // //   const commentInput = document.createElement("input");
// // // // // // // // // //   commentInput.type = "text";
// // // // // // // // // //   commentInput.placeholder = "Add a comment";
// // // // // // // // // //   const commentButton = document.createElement("button");
// // // // // // // // // //   commentButton.textContent = "Comment";

// // // // // // // // // //   const commentList = document.createElement("div");
// // // // // // // // // //   commentList.className = "comment-list";

// // // // // // // // // //   commentButton.addEventListener("click", () => {
// // // // // // // // // //     const commentText = commentInput.value.trim();
// // // // // // // // // //     if (commentText) {
// // // // // // // // // //       const comment = document.createElement("div");
// // // // // // // // // //       comment.className = "comment";
// // // // // // // // // //       comment.textContent = commentText;
// // // // // // // // // //       commentList.appendChild(comment);
// // // // // // // // // //       commentInput.value = "";
// // // // // // // // // //     }
// // // // // // // // // //   });

// // // // // // // // // //   const solveButton = document.createElement("button");
// // // // // // // // // //   solveButton.textContent = "Solve";
// // // // // // // // // //   solveButton.className = "solve-button";
// // // // // // // // // //   solveButton.addEventListener("click", () => {
// // // // // // // // // //     // Toggle the solve button state and store it in local storage
// // // // // // // // // //     const index = storedData.findIndex((data) => data.text === text);
// // // // // // // // // //     if (index !== -1) {
// // // // // // // // // //       storedData[index].solved = !storedData[index].solved;
// // // // // // // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));
// // // // // // // // // //     }

// // // // // // // // // //     canPost = true; // Allowing the user to post again
// // // // // // // // // //     postInput.disabled = false;
// // // // // // // // // //     postButton.disabled = false;
// // // // // // // // // //     solveButton.style.display = "none";
// // // // // // // // // //     solveHistoryButton.style.display = "none"; // Hide "Solve History" button
// // // // // // // // // //     createNewPostButton.style.display = "none"; // Hide "Create New Post" button
// // // // // // // // // //   });

// // // // // // // // // //   const solveHistoryButton = document.createElement("button");
// // // // // // // // // //   solveHistoryButton.textContent = "Solve History";
// // // // // // // // // //   solveHistoryButton.addEventListener("click", () => {
// // // // // // // // // //     // Redirect to the "Solve History" page or perform any other action
// // // // // // // // // //     window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
// // // // // // // // // //   });

// // // // // // // // // //   const createNewPostButton = document.createElement("button");
// // // // // // // // // //   createNewPostButton.textContent = "Create New Post";
// // // // // // // // // //   createNewPostButton.addEventListener("click", () => {
// // // // // // // // // //     // Redirect to the "Create New Post" page or perform any other action
// // // // // // // // // //     window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
// // // // // // // // // //   });

// // // // // // // // // //   post.appendChild(commentInput);
// // // // // // // // // //   post.appendChild(commentButton);
// // // // // // // // // //   post.appendChild(commentList);
// // // // // // // // // //   post.appendChild(solveButton);
// // // // // // // // // //   post.appendChild(solveHistoryButton);
// // // // // // // // // //   post.appendChild(createNewPostButton);

// // // // // // // // // //   return post;
// // // // // // // // // // }

// // // // // // // // // // function simulateButtonClick(button) {
// // // // // // // // // //   if (document.createEvent) {
// // // // // // // // // //     const event = document.createEvent("MouseEvents");
// // // // // // // // // //     event.initEvent("click", true, true);
// // // // // // // // // //     button.dispatchEvent(event);
// // // // // // // // // //   } else if (button.click) {
// // // // // // // // // //     button.click();
// // // // // // // // // //   }
// // // // // // // // // // }

// // // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // // Load existing tweets from local storage
// // // // // // // // // const storedData = JSON.parse(localStorage.getItem("tweetData")) || [];

// // // // // // // // // // Function to create a tweet element and apply the "solved" state
// // // // // // // // // function createTweetElement(data) {
// // // // // // // // //   const post = document.createElement("div");
// // // // // // // // //   post.className = "post";
// // // // // // // // //   post.textContent = data.text;

// // // // // // // // //   const commentInput = document.createElement("input");
// // // // // // // // //   commentInput.type = "text";
// // // // // // // // //   commentInput.placeholder = "Add a comment";
// // // // // // // // //   const commentButton = document.createElement("button");
// // // // // // // // //   commentButton.textContent = "Comment";

// // // // // // // // //   const commentList = document.createElement("div");
// // // // // // // // //   commentList.className = "comment-list";

// // // // // // // // //   commentButton.addEventListener("click", () => {
// // // // // // // // //     const commentText = commentInput.value.trim();
// // // // // // // // //     if (commentText) {
// // // // // // // // //       const comment = document.createElement("div");
// // // // // // // // //       comment.className = "comment";
// // // // // // // // //       comment.textContent = commentText;
// // // // // // // // //       commentList.appendChild(comment);
// // // // // // // // //       commentInput.value = "";
// // // // // // // // //     }
// // // // // // // // //   });

// // // // // // // // //   const solveButton = document.createElement("button");
// // // // // // // // //   solveButton.textContent = "Solve";
// // // // // // // // //   solveButton.className = "solve-button";

// // // // // // // // //   // Check and apply the "solved" state
// // // // // // // // //   if (data.solved) {
// // // // // // // // //     // If the tweet was solved, simulate a click on the Solve button
// // // // // // // // //     simulateButtonClick(solveButton);
// // // // // // // // //   }

// // // // // // // // //   solveButton.addEventListener("click", () => {
// // // // // // // // //     // Toggle the solve button state and store it in local storage
// // // // // // // // //     const index = storedData.findIndex((item) => item.text === data.text);
// // // // // // // // //     if (index !== -1) {
// // // // // // // // //       storedData[index].solved = !storedData[index].solved;
// // // // // // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));
// // // // // // // // //     }

// // // // // // // // //     canPost = true; // Allowing the user to post again
// // // // // // // // //     postInput.disabled = false;
// // // // // // // // //     postButton.disabled = false;
// // // // // // // // //     solveButton.style.display = "none";
// // // // // // // // //     solveHistoryButton.style.display = "none"; // Hide "Solve History" button
// // // // // // // // //     createNewPostButton.style.display = "none"; // Hide "Create New Post" button
// // // // // // // // //   });

// // // // // // // // //   const solveHistoryButton = document.createElement("button");
// // // // // // // // //   solveHistoryButton.textContent = "Solve History";
// // // // // // // // //   solveHistoryButton.addEventListener("click", () => {
// // // // // // // // //     // Redirect to the "Solve History" page or perform any other action
// // // // // // // // //     window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
// // // // // // // // //   });

// // // // // // // // //   const createNewPostButton = document.createElement("button");
// // // // // // // // //   createNewPostButton.textContent = "Create New Post";
// // // // // // // // //   createNewPostButton.addEventListener("click", () => {
// // // // // // // // //     // Redirect to the "Create New Post" page or perform any other action
// // // // // // // // //     window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
// // // // // // // // //   });

// // // // // // // // //   post.appendChild(commentInput);
// // // // // // // // //   post.appendChild(commentButton);
// // // // // // // // //   post.appendChild(commentList);
// // // // // // // // //   post.appendChild(solveButton);
// // // // // // // // //   post.appendChild(solveHistoryButton);
// // // // // // // // //   post.appendChild(createNewPostButton);

// // // // // // // // //   return post;
// // // // // // // // // }

// // // // // // // // // // Create tweet elements and append them to the postList
// // // // // // // // // storedData.forEach((data) => {
// // // // // // // // //   const post = createTweetElement(data);
// // // // // // // // //   postList.appendChild(post);
// // // // // // // // // });

// // // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // // //   if (canPost) {
// // // // // // // // //     const postText = postInput.value.trim();
// // // // // // // // //     if (postText) {
// // // // // // // // //       const post = createTweetElement({ text: postText, solved: false });
// // // // // // // // //       postList.insertBefore(post, postList.firstChild);

// // // // // // // // //       // Save the tweet to local storage
// // // // // // // // //       storedData.unshift({ text: postText, solved: false });
// // // // // // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));

// // // // // // // // //       postInput.value = "";
// // // // // // // // //       canPost = false; // Preventing the user from posting another tweet
// // // // // // // // //       postInput.disabled = true; // Disabling the input field
// // // // // // // // //       postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // // //     }
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // // Simulate a button click
// // // // // // // // // function simulateButtonClick(button) {
// // // // // // // // //   if (document.createEvent) {
// // // // // // // // //     const event = document.createEvent("MouseEvents");
// // // // // // // // //     event.initEvent("click", true, true);
// // // // // // // // //     button.dispatchEvent(event);
// // // // // // // // //   } else if (button.click) {
// // // // // // // // //     button.click();
// // // // // // // // //   }
// // // // // // // // // }



// // // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // // const postList = document.getElementById("post-list");
// // // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // // Load existing tweets from local storage
// // // // // // // // const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
// // // // // // // // if (storedTweets.length > 0) {
// // // // // // // //   storedTweets.forEach((tweet) => {
// // // // // // // //     const post = createTweetElement(tweet);
// // // // // // // //     postList.appendChild(post);
// // // // // // // //   });
// // // // // // // // }

// // // // // // // // postButton.addEventListener("click", () => {
// // // // // // // //   if (canPost) {
// // // // // // // //     const postText = postInput.value.trim();
// // // // // // // //     if (postText) {
// // // // // // // //       const post = createTweetElement(postText);
// // // // // // // //       postList.insertBefore(post, postList.firstChild);

// // // // // // // //       // Save the tweet to local storage
// // // // // // // //       storedTweets.unshift(postText);
// // // // // // // //       localStorage.setItem("tweets", JSON.stringify(storedTweets));

// // // // // // // //       postInput.value = "";
// // // // // // // //       canPost = false; // Preventing the user from posting another tweet
// // // // // // // //       postInput.disabled = true; // Disabling the input field
// // // // // // // //       postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // // //     }
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // function createTweetElement(text) {
// // // // // // // //   const post = document.createElement("div");
// // // // // // // //   post.className = "post";
// // // // // // // //   post.textContent = text;

// // // // // // // //   const commentInput = document.createElement("input");
// // // // // // // //   commentInput.type = "text";
// // // // // // // //   commentInput.placeholder = "Add a comment";
// // // // // // // //   const commentButton = document.createElement("button");
// // // // // // // //   commentButton.textContent = "Comment";

// // // // // // // //   const commentList = document.createElement("div");
// // // // // // // //   commentList.className = "comment-list";

// // // // // // // //   commentButton.addEventListener("click", () => {
// // // // // // // //     const commentText = commentInput.value.trim();
// // // // // // // //     if (commentText) {
// // // // // // // //       const comment = document.createElement("div");
// // // // // // // //       comment.className = "comment";
// // // // // // // //       comment.textContent = commentText;
// // // // // // // //       commentList.appendChild(comment);
// // // // // // // //       commentInput.value = "";
// // // // // // // //     }
// // // // // // // //   });

// // // // // // // //   const solveButton = document.createElement("button");
// // // // // // // //   solveButton.textContent = "Solve";
// // // // // // // //   solveButton.addEventListener("click", () => {
// // // // // // // //     canPost = true; // Allowing the user to post again
// // // // // // // //     postInput.disabled = false;
// // // // // // // //     postButton.disabled = false;
// // // // // // // //     solveButton.style.display = "none";
// // // // // // // //     solveHistoryButton.style.display = "none"; // Hide "Solve History" button
// // // // // // // //     createNewPostButton.style.display = "none"; // Hide "Create New Post" button
// // // // // // // //   });

// // // // // // // //   const solveHistoryButton = document.createElement("button");
// // // // // // // //   solveHistoryButton.textContent = "Solve History";
// // // // // // // //   solveHistoryButton.addEventListener("click", () => {
// // // // // // // //     // Redirect to the "Solve History" page or perform any other action
// // // // // // // //     window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
// // // // // // // //   });

// // // // // // // //   const createNewPostButton = document.createElement("button");
// // // // // // // //   createNewPostButton.textContent = "Create New Post";
// // // // // // // //   createNewPostButton.addEventListener("click", () => {
// // // // // // // //     // Redirect to the "Create New Post" page or perform any other action
// // // // // // // //     window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
// // // // // // // //   });

// // // // // // // //   post.appendChild(commentInput);
// // // // // // // //   post.appendChild(commentButton);
// // // // // // // //   post.appendChild(commentList);
// // // // // // // //   post.appendChild(solveButton);
// // // // // // // //   post.appendChild(solveHistoryButton);
// // // // // // // //   post.appendChild(createNewPostButton);

// // // // // // // //   return post;
// // // // // // // // }



// // // // // // // const postInput = document.getElementById("post-input");
// // // // // // // const postButton = document.getElementById("post-button");
// // // // // // // const postList = document.getElementById("post-list");
// // // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // // Load existing tweets and their solve button states from local storage
// // // // // // // const storedData = JSON.parse(localStorage.getItem("tweetData")) || [];

// // // // // // // storedData.forEach((data) => {
// // // // // // //   const post = createTweetElement(data.text);
// // // // // // //   if (data.solved) {
// // // // // // //     // If the tweet was solved, simulate a click on the Solve button
// // // // // // //     const solveButton = post.querySelector(".solve-button");
// // // // // // //     if (solveButton) {
// // // // // // //       simulateButtonClick(solveButton);
// // // // // // //     }
// // // // // // //   }
// // // // // // //   postList.appendChild(post);
// // // // // // // });

// // // // // // // postButton.addEventListener("click", () => {
// // // // // // //   if (canPost) {
// // // // // // //     const postText = postInput.value.trim();
// // // // // // //     if (postText) {
// // // // // // //       const post = createTweetElement(postText);
// // // // // // //       postList.insertBefore(post, postList.firstChild);

// // // // // // //       // Save the tweet and its solve button state to local storage
// // // // // // //       storedData.unshift({ text: postText, solved: false });
// // // // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));

// // // // // // //       postInput.value = "";
// // // // // // //       canPost = false; // Preventing the user from posting another tweet
// // // // // // //       postInput.disabled = true; // Disabling the input field
// // // // // // //       postButton.disabled = true; // Disabling the "Tweet" button
// // // // // // //     }
// // // // // // //   }
// // // // // // // });

// // // // // // // function createTweetElement(text) {
// // // // // // //   const post = document.createElement("div");
// // // // // // //   post.className = "post";
// // // // // // //   post.textContent = text;

// // // // // // //   const commentInput = document.createElement("input");
// // // // // // //   commentInput.type = "text";
// // // // // // //   commentInput.placeholder = "Add a comment";
// // // // // // //   const commentButton = document.createElement("button");
// // // // // // //   commentButton.textContent = "Comment";

// // // // // // //   const commentList = document.createElement("div");
// // // // // // //   commentList.className = "comment-list";

// // // // // // //   commentButton.addEventListener("click", () => {
// // // // // // //     const commentText = commentInput.value.trim();
// // // // // // //     if (commentText) {
// // // // // // //       const comment = document.createElement("div");
// // // // // // //       comment.className = "comment";
// // // // // // //       comment.textContent = commentText;
// // // // // // //       commentList.appendChild(comment);
// // // // // // //       commentInput.value = "";
// // // // // // //     }
// // // // // // //   });

// // // // // // //   const solveButton = document.createElement("button");
// // // // // // //   solveButton.textContent = "Solve";
// // // // // // //   solveButton.className = "solve-button";
// // // // // // //   solveButton.addEventListener("click", () => {
// // // // // // //     // Toggle the solve button state and store it in local storage
// // // // // // //     const index = storedData.findIndex((data) => data.text === text);
// // // // // // //     if (index !== -1) {
// // // // // // //       storedData[index].solved = !storedData[index].solved;
// // // // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));
// // // // // // //     }

// // // // // // //     canPost = true; // Allowing the user to post again
// // // // // // //     postInput.disabled = false;
// // // // // // //     postButton.disabled = false;
// // // // // // //     solveButton.style.display = "none";
// // // // // // //     solveHistoryButton.style.display = "none"; // Hide "Solve History" button
// // // // // // //     createNewPostButton.style.display = "none"; // Hide "Create New Post" button
// // // // // // //   });

// // // // // // //   const solveHistoryButton = document.createElement("button");
// // // // // // //   solveHistoryButton.textContent = "Solve History";
// // // // // // //   solveHistoryButton.addEventListener("click", () => {
// // // // // // //     // Redirect to the "Solve History" page or perform any other action
// // // // // // //     window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
// // // // // // //   });

// // // // // // //   const createNewPostButton = document.createElement("button");
// // // // // // //   createNewPostButton.textContent = "Create New Post";
// // // // // // //   createNewPostButton.addEventListener("click", () => {
// // // // // // //     // Redirect to the "Create New Post" page or perform any other action
// // // // // // //     window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
// // // // // // //   });

// // // // // // //   post.appendChild(commentInput);
// // // // // // //   post.appendChild(commentButton);
// // // // // // //   post.appendChild(commentList);
// // // // // // //   post.appendChild(solveButton);
// // // // // // //   post.appendChild(solveHistoryButton);
// // // // // // //   post.appendChild(createNewPostButton);

// // // // // // //   return post;
// // // // // // // }

// // // // // // // function simulateButtonClick(button) {
// // // // // // //   if (document.createEvent) {
// // // // // // //     const event = document.createEvent("MouseEvents");
// // // // // // //     event.initEvent("click", true, true);
// // // // // // //     button.dispatchEvent(event);
// // // // // // //   } else if (button.click) {
// // // // // // //     button.click();
// // // // // // //   }
// // // // // // // }


// // // // // // const postInput = document.getElementById("post-input");
// // // // // // const postButton = document.getElementById("post-button");
// // // // // // const postList = document.getElementById("post-list");
// // // // // // let canPost = true; // Variable to track if the user can post

// // // // // // // Load existing tweets and their solve button states from local storage
// // // // // // const storedData = JSON.parse(localStorage.getItem("tweetData")) || [];

// // // // // // storedData.forEach((data) => {
// // // // // //   const post = createTweetElement(data.text);
// // // // // //   postList.appendChild(post);

// // // // // //   // If this tweet's "solved" state is true and it's not the top tweet, simulate a click on the Solve button
// // // // // //   if (data.solved && post !== postList.firstChild) {
// // // // // //     const solveButton = post.querySelector(".solve-button");
// // // // // //     if (solveButton) {
// // // // // //       simulateButtonClick(solveButton);
// // // // // //     }
// // // // // //   }
// // // // // // });

// // // // // // postButton.addEventListener("click", () => {
// // // // // //   if (canPost) {
// // // // // //     const postText = postInput.value.trim();
// // // // // //     if (postText) {
// // // // // //       const post = createTweetElement(postText);
// // // // // //       postList.insertBefore(post, postList.firstChild);

// // // // // //       // Save the tweet and its solve button state to local storage
// // // // // //       const isTopTweet = post === postList.firstChild;
// // // // // //       storedData.unshift({ text: postText, solved: isTopTweet ? false : true });
// // // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));

// // // // // //       postInput.value = "";
// // // // // //       canPost = false; // Preventing the user from posting another tweet
// // // // // //       postInput.disabled = true; // Disabling the input field
// // // // // //       postButton.disabled = true; // Disabling the "Tweet" button
// // // // // //     }
// // // // // //   }
// // // // // // });

// // // // // // function createTweetElement(text) {
// // // // // //   const post = document.createElement("div");
// // // // // //   post.className = "post";
// // // // // //   post.textContent = text;

// // // // // //   const commentInput = document.createElement("input");
// // // // // //   commentInput.type = "text";
// // // // // //   commentInput.placeholder = "Add a comment";
// // // // // //   const commentButton = document.createElement("button");
// // // // // //   commentButton.textContent = "Comment";

// // // // // //   const commentList = document.createElement("div");
// // // // // //   commentList.className = "comment-list";

// // // // // //   commentButton.addEventListener("click", () => {
// // // // // //     const commentText = commentInput.value.trim();
// // // // // //     if (commentText) {
// // // // // //       const comment = document.createElement("div");
// // // // // //       comment.className = "comment";
// // // // // //       comment.textContent = commentText;
// // // // // //       commentList.appendChild(comment);
// // // // // //       commentInput.value = "";
// // // // // //     }
// // // // // //   });

// // // // // //   const solveButton = document.createElement("button");
// // // // // //   solveButton.textContent = "Solve";
// // // // // //   solveButton.className = "solve-button";
// // // // // //   solveButton.addEventListener("click", () => {
// // // // // //     // Toggle the solve button state and store it in local storage
// // // // // //     const index = storedData.findIndex((data) => data.text === text);
// // // // // //     if (index !== -1) {
// // // // // //       storedData[index].solved = !storedData[index].solved;
// // // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));
// // // // // //     }

// // // // // //     canPost = true; // Allowing the user to post again
// // // // // //     postInput.disabled = false;
// // // // // //     postButton.disabled = false;
// // // // // //     solveButton.style.display = "none";
// // // // // //     solveHistoryButton.style.display = "none"; // Hide "Solve History" button
// // // // // //     createNewPostButton.style.display = "none"; // Hide "Create New Post" button
// // // // // //   });

// // // // // //   const solveHistoryButton = document.createElement("button");
// // // // // //   solveHistoryButton.textContent = "Solve History";
// // // // // //   solveHistoryButton.addEventListener("click", () => {
// // // // // //     // Redirect to the "Solve History" page or perform any other action
// // // // // //     window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
// // // // // //   });

// // // // // //   const createNewPostButton = document.createElement("button");
// // // // // //   createNewPostButton.textContent = "Create New Post";
// // // // // //   createNewPostButton.addEventListener("click", () => {
// // // // // //     // Redirect to the "Create New Post" page or perform any other action
// // // // // //     window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
// // // // // //   });

// // // // // //   post.appendChild(commentInput);
// // // // // //   post.appendChild(commentButton);
// // // // // //   post.appendChild(commentList);
// // // // // //   post.appendChild(solveButton);
// // // // // //   post.appendChild(solveHistoryButton);
// // // // // //   post.appendChild(createNewPostButton);

// // // // // //   return post;
// // // // // // }

// // // // // // function simulateButtonClick(button) {
// // // // // //   if (document.createEvent) {
// // // // // //     const event = document.createEvent("MouseEvents");
// // // // // //     event.initEvent("click", true, true);
// // // // // //     button.dispatchEvent(event);
// // // // // //   } else if (button.click) {
// // // // // //     button.click();
// // // // // //   }
// // // // // // }


// // // // // const postInput = document.getElementById("post-input");
// // // // // const postButton = document.getElementById("post-button");
// // // // // const postList = document.getElementById("post-list");
// // // // // let canPost = true; // Variable to track if the user can post

// // // // // // Load existing tweets and their solve button states from local storage
// // // // // // localStorage.removeItem("tweetData");
// // // // // const storedData = JSON.parse(localStorage.getItem("tweetData")) || [];



// // // // // storedData.forEach((data) => {
// // // // //   const post = createTweetElement(data.text);
// // // // //   postList.appendChild(post);

// // // // //   // If this tweet's "solved" state is true and it's not the top tweet, simulate a click on the Solve button
// // // // //   if (data.solved && post !== postList.firstChild) {
// // // // //     const solveButton = post.querySelector(".solve-button");
// // // // //     if (solveButton) {
// // // // //       simulateButtonClick(solveButton);
// // // // //     }
// // // // //   }
// // // // // });

// // // // // postButton.addEventListener("click", () => {
// // // // //   if (canPost) {
// // // // //     const postText = postInput.value.trim();
// // // // //     if (postText) {
// // // // //       const post = createTweetElement(postText);
// // // // //       postList.insertBefore(post, postList.firstChild);

// // // // //       // Save the tweet and its solve button state to local storage
// // // // //       const isTopTweet = post === postList.firstChild;
// // // // //       storedData.unshift({ text: postText, solved: isTopTweet ? false : true });
// // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));
// // // // //     //   localStorage.removeItem("tweetData");

// // // // //       postInput.value = "";
// // // // //       canPost = false; // Preventing the user from posting another tweet
// // // // //       postInput.disabled = true; // Disabling the input field
// // // // //       postButton.disabled = true; // Disabling the "Tweet" button
// // // // //     }
// // // // //   }
// // // // // });

// // // // // function createTweetElement(text) {
// // // // //   const post = document.createElement("div");
// // // // //   post.className = "post";
// // // // //   post.textContent = text;

// // // // //   const commentInput = document.createElement("input");
// // // // //   commentInput.type = "text";
// // // // //   commentInput.placeholder = "Add a comment";
// // // // //   const commentButton = document.createElement("button");
// // // // //   commentButton.textContent = "Comment";

// // // // //   const commentList = document.createElement("div");
// // // // //   commentList.className = "comment-list";

// // // // //   commentButton.addEventListener("click", () => {
// // // // //     const commentText = commentInput.value.trim();
// // // // //     if (commentText) {
// // // // //       const comment = document.createElement("div");
// // // // //       comment.className = "comment";
// // // // //       comment.textContent = commentText;
// // // // //       commentList.appendChild(comment);
// // // // //       commentInput.value = "";
// // // // //     }
// // // // //   });

// // // // //   const solveButton = document.createElement("button");
// // // // //   solveButton.textContent = "Solve";
// // // // //   solveButton.className = "solve-button";
// // // // //   solveButton.addEventListener("click", () => {
// // // // //     // Toggle the solve button state and store it in local storage
// // // // //     const index = storedData.findIndex((data) => data.text === text);
// // // // //     if (index !== -1) {
// // // // //       storedData[index].solved = !storedData[index].solved;
// // // // //       localStorage.setItem("tweetData", JSON.stringify(storedData));
// // // // //     //   localStorage.removeItem("tweetData");
// // // // //     }

// // // // //     canPost = true; // Allowing the user to post again
// // // // //     postInput.disabled = false;
// // // // //     postButton.disabled = false;
// // // // //     solveButton.style.display = "none";
// // // // //     solveHistoryButton.style.display = "none"; // Hide "Solve History" button
// // // // //     createNewPostButton.style.display = "none"; // Hide "Create New Post" button
// // // // //   });

// // // // //   const solveHistoryButton = document.createElement("button");
// // // // //   solveHistoryButton.textContent = "Solve History";
// // // // //   solveHistoryButton.addEventListener("click", () => {
// // // // //     // Redirect to the "Solve History" page or perform any other action
// // // // //     window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
// // // // //   });

// // // // //   const createNewPostButton = document.createElement("button");
// // // // //   createNewPostButton.textContent = "Create New Post";
// // // // //   createNewPostButton.addEventListener("click", () => {
// // // // //     // Redirect to the "Create New Post" page or perform any other action
// // // // //     window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
// // // // //   });

// // // // //   post.appendChild(commentInput);
// // // // //   post.appendChild(commentButton);
// // // // //   post.appendChild(commentList);
// // // // //   post.appendChild(solveButton);
// // // // //   post.appendChild(solveHistoryButton);
// // // // //   post.appendChild(createNewPostButton);

// // // // //   return post;
// // // // // }

// // // // // function simulateButtonClick(button) {
// // // // //   const event = new MouseEvent("click", {
// // // // //     bubbles: true,
// // // // //     cancelable: true,
// // // // //     view: window,
// // // // //   });
// // // // //   button.dispatchEvent(event);
// // // // // }


// // // // const postInput = document.getElementById("post-input");
// // // // const postButton = document.getElementById("post-button");
// // // // const postList = document.getElementById("post-list");
// // // // let canPost = true; // Variable to track if the user can post

// // // // postButton.addEventListener("click", () => {
// // // //   if (canPost) {
// // // //     const postText = postInput.value.trim();
// // // //     if (postText) {
// // // //       const post = createTweetElement(postText);
// // // //       postList.insertBefore(post, postList.firstChild);

// // // //       postInput.value = "";
// // // //       canPost = false; // Preventing the user from posting another tweet
// // // //       postInput.disabled = true; // Disabling the input field
// // // //       postButton.disabled = true; // Disabling the "Tweet" button
// // // //     }
// // // //   }
// // // // });

// // // // function createTweetElement(text) {
// // // //   const post = document.createElement("div");
// // // //   post.className = "post";
// // // //   post.textContent = text;

// // // //   const commentInput = document.createElement("input");
// // // //   commentInput.type = "text";
// // // //   commentInput.placeholder = "Add a comment";
// // // //   const commentButton = document.createElement("button");
// // // //   commentButton.textContent = "Comment";

// // // //   const commentList = document.createElement("div");
// // // //   commentList.className = "comment-list";

// // // //   commentButton.addEventListener("click", () => {
// // // //     const commentText = commentInput.value.trim();
// // // //     if (commentText) {
// // // //       const comment = document.createElement("div");
// // // //       comment.className = "comment";
// // // //       comment.textContent = commentText;
// // // //       commentList.appendChild(comment);
// // // //       commentInput.value = "";
// // // //     }
// // // //   });

// // // //   const solveButton = document.createElement("button");
// // // //   solveButton.textContent = "Solve";
// // // //   solveButton.className = "solve-button";
// // // //   solveButton.addEventListener("click", () => {
// // // //     canPost = true; // Allowing the user to post again
// // // //     postInput.disabled = false;
// // // //     postButton.disabled = false;
// // // //     solveButton.style.display = "none";
// // // //   });

// // // //   post.appendChild(commentInput);
// // // //   post.appendChild(commentButton);
// // // //   post.appendChild(commentList);
// // // //   post.appendChild(solveButton);

// // // //   return post;
// // // // }



// // // const postInput = document.getElementById("post-input");
// // // const postButton = document.getElementById("post-button");
// // // const postList = document.getElementById("post-list");
// // // let canPost = true; // Variable to track if the user can post

// // // postButton.addEventListener("click", () => {
// // //   if (canPost) {
// // //     const postText = postInput.value.trim();
// // //     if (postText) {
// // //       const post = createTweetElement(postText);
// // //       postList.insertBefore(post, postList.firstChild);

// // //       postInput.value = "";
// // //       canPost = false; // Preventing the user from posting another tweet
// // //       postInput.disabled = true; // Disabling the input field
// // //       postButton.disabled = true; // Disabling the "Tweet" button
// // //     }
// // //   }
// // // });

// // // function createTweetElement(text) {
// // //   const post = document.createElement("div");
// // //   post.className = "post";
// // //   post.textContent = text;

// // //   const commentInput = document.createElement("input");
// // //   commentInput.type = "text";
// // //   commentInput.placeholder = "Add a comment";
// // //   const commentButton = document.createElement("button");
// // //   commentButton.textContent = "Comment";

// // //   const commentList = document.createElement("div");
// // //   commentList.className = "comment-list";

// // //   commentButton.addEventListener("click", () => {
// // //     const commentText = commentInput.value.trim();
// // //     if (commentText) {
// // //       const comment = document.createElement("div");
// // //       comment.className = "comment";
// // //       comment.textContent = commentText;
// // //       commentList.appendChild(comment);
// // //       commentInput.value = "";
// // //     }
// // //   });

// // //   const solveButton = document.createElement("button");
// // //   solveButton.textContent = "Solve";
// // //   solveButton.className = "solve-button";
// // //   solveButton.addEventListener("click", () => {
// // //     canPost = true; // Allowing the user to post again
// // //     postInput.disabled = false;
// // //     postButton.disabled = false;
// // //     solveButton.style.display = "none";
// // //   });

// // //   const solveHistoryButton = document.createElement("button");
// // //   solveHistoryButton.textContent = "Solve History";
// // //   solveHistoryButton.addEventListener("click", () => {
// // //     // Redirect to the "Solve History" page or perform any other action
// // //     window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
// // //   });

// // //   const createNewPostButton = document.createElement("button");
// // //   createNewPostButton.textContent = "Create New Post";
// // //   createNewPostButton.addEventListener("click", () => {
// // //     // Redirect to the "Create New Post" page or perform any other action
// // //     window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
// // //   });

// // //   post.appendChild(commentInput);
// // //   post.appendChild(commentButton);
// // //   post.appendChild(commentList);
// // //   post.appendChild(solveButton);
// // //   post.appendChild(solveHistoryButton);
// // //   post.appendChild(createNewPostButton);

// // //   return post;
// // // }



















// // const postInput = document.getElementById("post-input");
// // const postButton = document.getElementById("post-button");
// // const postList = document.getElementById("post-list");
// // let canPost = true; // Variable to track if the user can post

// // postButton.addEventListener("click", () => {
// //   if (canPost) {
// //     const postText = postInput.value.trim();
// //     if (postText) {
// //       const post = createTweetElement(postText);
// //       postList.insertBefore(post, postList.firstChild);

// //       postInput.value = "";
// //       canPost = false; // Preventing the user from posting another tweet
// //       postInput.disabled = true; // Disabling the input field
// //       postButton.disabled = true; // Disabling the "Tweet" button
// //     }
// //   }
// // });

// // function createTweetElement(text) {
// //   const post = document.createElement("div");
// //   post.className = "post";
// //   post.textContent = text;

// //   const commentInput = document.createElement("input");
// //   commentInput.type = "text";
// //   commentInput.placeholder = "Add a comment";
// //   const commentButton = document.createElement("button");
// //   commentButton.textContent = "Comment";

// //   const commentList = document.createElement("div");
// //   commentList.className = "comment-list";

// //   commentButton.addEventListener("click", () => {
// //     const commentText = commentInput.value.trim();
// //     if (commentText) {
// //       const comment = document.createElement("div");
// //       comment.className = "comment";
// //       comment.textContent = commentText;
// //       commentList.appendChild(comment);
// //       commentInput.value = "";
// //     }
// //   });

// //   const solveButton = document.createElement("button");
// //   solveButton.textContent = "Solve";
// //   solveButton.className = "solve-button";
// //   solveButton.addEventListener("click", () => {
// //     canPost = true; // Allowing the user to post again
// //     postInput.disabled = false;
// //     postButton.disabled = false;
// //     solveButton.style.display = "none";
// //     solveHistoryButton.style.display = "none";
// //     createNewPostButton.style.display = "none";
// //   });

// //   const solveHistoryButton = document.createElement("button");
// //   solveHistoryButton.textContent = "Solve History";
// //   solveHistoryButton.style.display = "block"; // Initially visible
// //   solveHistoryButton.addEventListener("click", () => {
// //     // Redirect to the "Solve History" page or perform any other action
// //     window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
// //   });

// //   const createNewPostButton = document.createElement("button");
// //   createNewPostButton.textContent = "Create New Post";
// //   createNewPostButton.style.display = "block"; // Initially visible
// //   createNewPostButton.addEventListener("click", () => {
// //     // Redirect to the "Create New Post" page or perform any other action
// //     window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
// //   });

// //   post.appendChild(commentInput);
// //   post.appendChild(commentButton);
// //   post.appendChild(commentList);
// //   post.appendChild(solveButton);
// //   post.appendChild(solveHistoryButton);
// //   post.appendChild(createNewPostButton);

// //   return post;
// // }










// const postInput = document.getElementById("post-input");
// const postButton = document.getElementById("post-button");
// const postList = document.getElementById("post-list");
// let canPost = true; // Variable to track if the user can post

// // Load existing tweets from local storage on page load
// const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];

// // Render existing tweets from local storage
// storedTweets.forEach((tweetText) => {
//   const tweet = createTweetElement(tweetText);
//   postList.appendChild(tweet);
// });

// postButton.addEventListener("click", () => {
//   if (canPost) {
//     const postText = postInput.value.trim();
//     if (postText) {
//       const post = createTweetElement(postText);
//       postList.insertBefore(post, postList.firstChild);

//       // Save the new tweet in local storage
//       storedTweets.unshift(postText);
//       localStorage.setItem("tweets", JSON.stringify(storedTweets));

//       postInput.value = "";
//       canPost = false; // Preventing the user from posting another tweet
//       postInput.disabled = true; // Disabling the input field
//       postButton.disabled = true; // Disabling the "Tweet" button
//     }
//   }
// });

// function createTweetElement(text) {
//   const tweet = document.createElement("div");
//   tweet.className = "post";
//   tweet.textContent = text;

//   const commentInput = document.createElement("input");
//   commentInput.type = "text";
//   commentInput.placeholder = "Add a comment";
//   const commentButton = document.createElement("button");
//   commentButton.textContent = "Comment";

//   const commentList = document.createElement("div");
//   commentList.className = "comment-list";

//   commentButton.addEventListener("click", () => {
//     const commentText = commentInput.value.trim();
//     if (commentText) {
//       const comment = document.createElement("div");
//       comment.className = "comment";
//       comment.textContent = commentText;
//       commentList.appendChild(comment);
//       commentInput.value = "";
//     }
//   });

//   const solveButton = document.createElement("button");
//   solveButton.textContent = "Solve";
//   solveButton.className = "solve-button";
//   solveButton.addEventListener("click", () => {
//     canPost = true; // Allowing the user to post again
//     postInput.disabled = false;
//     postButton.disabled = false;
//     solveButton.style.display = "none";
//     solveHistoryButton.style.display = "none";
//     createNewPostButton.style.display = "none";
//   });

//   const solveHistoryButton = document.createElement("button");
//   solveHistoryButton.textContent = "Solve History";
//   solveHistoryButton.style.display = "block"; // Initially visible
//   solveHistoryButton.addEventListener("click", () => {
//     // Redirect to the "Solve History" page or perform any other action
//     window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
//   });

//   const createNewPostButton = document.createElement("button");
//   createNewPostButton.textContent = "Create New Post";
//   createNewPostButton.style.display = "block"; // Initially visible
//   createNewPostButton.addEventListener("click", () => {
//     // Redirect to the "Create New Post" page or perform any other action
//     window.location.href = "create-new-post.html"; // Example: Redirect to a Create New Post page
//   });

//   tweet.appendChild(commentInput);
//   tweet.appendChild(commentButton);
//   tweet.appendChild(commentList);
//   tweet.appendChild(solveButton);
//   tweet.appendChild(solveHistoryButton);
//   tweet.appendChild(createNewPostButton);

//   return tweet;
// }







// const postInput = document.getElementById("post-input");
// const postButton = document.getElementById("post-button");
// const postList = document.getElementById("post-list");
// let canPost = true; // Variable to track if the user can post

// // Load existing tweets from local storage
// const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
// if (storedTweets.length > 0) {
//   storedTweets.forEach((tweet) => {
//     const post = createTweetElement(tweet);
//     postList.appendChild(post);
//   });
// }

// postButton.addEventListener("click", () => {
//   if (canPost) {
//     const postText = postInput.value.trim();
//     if (postText) {
//       const post = createTweetElement(postText);
//       postList.insertBefore(post, postList.firstChild);

//       // Save the tweet to local storage
//       storedTweets.unshift(postText);
//       localStorage.setItem("tweets", JSON.stringify(storedTweets));

//       postInput.value = "";
//       canPost = false; // Preventing the user from posting another tweet
//       postInput.disabled = true; // Disabling the input field
//       postButton.disabled = true; // Disabling the "Tweet" button
//     }
//   }
// });

// function createTweetElement(text) {
//   const post = document.createElement("div");
//   post.className = "post";
//   post.textContent = text;

//   const commentInput = document.createElement("input");
//   commentInput.type = "text";
//   commentInput.placeholder = "Add a comment";
//   const commentButton = document.createElement("button");
//   commentButton.textContent = "Comment";

//   const commentList = document.createElement("div");
//   commentList.className = "comment-list";

//   commentButton.addEventListener("click", () => {
//     const commentText = commentInput.value.trim();
//     if (commentText) {
//       const comment = document.createElement("div");
//       comment.className = "comment";
//       comment.textContent = commentText;
//       commentList.appendChild(comment);
//       commentInput.value = "";
//     }
//   });

//   const solveButton = document.createElement("button");
//   solveButton.textContent = "Solve";
//   solveButton.addEventListener("click", () => {
//     canPost = true; // Allowing the user to post again
//     postInput.disabled = false;
//     postButton.disabled = false;
//     solveButton.style.display = "none";
//     solveHistoryButton.style.display = "none"; // Hide "Solve History" button
//     createNewPostButton.style.display = "none"; // Hide "Create New Post" button
//   });

//   const solveHistoryButton = document.createElement("button");
//   solveHistoryButton.textContent = "Solve History";
//   solveHistoryButton.addEventListener("click", () => {
//     // Redirect to the "Solve History" page or perform any other action
//     window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
//   });

//   const createNewPostButton = document.createElement("button");
//   createNewPostButton.textContent = "Create New Post";
//   createNewPostButton.addEventListener("click", () => {
//     // Redirect to the "Create New Post" page or perform any other action
//     window.location.href = "http://127.0.0.1:5501/html-css-projects/new%20tries/CreateNewPost/create-post.html"; // Example: Redirect to a Create New Post page
//   });

//   post.appendChild(commentInput);
//   post.appendChild(commentButton);
//   post.appendChild(commentList);
//   post.appendChild(solveButton);
//   post.appendChild(solveHistoryButton);
//   post.appendChild(createNewPostButton);

//   return post;
// }

// const randomMessageDiv = document.getElementById("random-message");
// const newSectionButton = document.getElementById("new-section-button");

// newSectionButton.addEventListener("click", () => {
//     // Generate a random message
//     const messages = [
//         "Hello, World!",
//         "This is a random message.",
//         "Click the button again for another message.",
//         // Add more messages as needed
//     ];
//     const randomIndex = Math.floor(Math.random() * messages.length);
//     const randomMessage = messages[randomIndex];

//     // Create a new div with the random message
//     const messageDiv = document.createElement("div");
//     messageDiv.className = "random-message";
//     messageDiv.textContent = randomMessage;

//     // Replace the existing content with the new message
//     randomMessageDiv.innerHTML = "";
//     randomMessageDiv.appendChild(messageDiv);
// });















const postInput = document.getElementById("post-input");
const postButton = document.getElementById("post-button");
const postList = document.getElementById("post-list");
let canPost = true; // Variable to track if the user can post

const wasButtonClicked = localStorage.getItem("wasButtonClicked");

if (wasButtonClicked === "true") {
  postButton.textContent = "Check Created Post";
  canPost = false;
  postInput.disabled = true;
}
// Load existing tweets from local storage
const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
if (storedTweets.length === 0) {
  // If local storage is empty, add a blank entry
  storedTweets.push("");
}

storedTweets.forEach((tweet) => {
  const post = createTweetElement(tweet);
  postList.appendChild(post);
});

postButton.addEventListener("click", () => {
    if (!wasButtonClicked) {
        // Change the button text to "Check Created Post" if it's the first click
        postButton.textContent = "Check Created Post";
        localStorage.setItem("wasButtonClicked", "true");
      }
  if (canPost) {
    const postText = postInput.value.trim();
    if (postText) {
      const post = createTweetElement(postText);
      postList.insertBefore(post, postList.firstChild);

      // Save the tweet to local storage
      storedTweets.unshift(postText);
      localStorage.setItem("tweets", JSON.stringify(storedTweets));

      postInput.value = "";
      canPost = false; // Preventing the user from posting another tweet
      postInput.disabled = true; // Disabling the input field
      postButton.disabled = true; // Disabling the "Tweet" button
    }
  }
});

function createTweetElement(text) {
  const post = document.createElement("div");
  post.className = "post";
  post.textContent = text;

  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.placeholder = "Add a comment";
  const commentButton = document.createElement("button");
  commentButton.textContent = "Comment";

  const commentList = document.createElement("div");
  commentList.className = "comment-list";

  commentButton.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText) {
      const comment = document.createElement("div");
      comment.className = "comment";
      comment.textContent = commentText;
      commentList.appendChild(comment);
      commentInput.value = "";
    }
  });

  const solveButton = document.createElement("button");
  solveButton.textContent = "Solve";
  solveButton.addEventListener("click", () => {
    canPost = true; // Allowing the user to post again
    postInput.disabled = false;
    postButton.disabled = false;
    solveButton.style.display = "none";
    solveHistoryButton.style.display = "none"; // Hide "Solve History" button
    createNewPostButton.style.display = "none"; // Hide "Create New Post" button
  });

  const solveHistoryButton = document.createElement("button");
  solveHistoryButton.textContent = "Solve History";
  solveHistoryButton.addEventListener("click", () => {
    // Redirect to the "Solve History" page or perform any other action
    window.location.href = "solve-history.html"; // Example: Redirect to a Solve History page
  });

  const createNewPostButton = document.createElement("button");
  createNewPostButton.textContent = "Create New Post";
  createNewPostButton.addEventListener("click", () => {
    // Redirect to the "Create New Post" page or perform any other action
    window.location.href = "http://127.0.0.1:5501/html-css-projects/new%20tries/CreateNewPost/create-post.html"; // Example: Redirect to a Create New Post page
  });

  post.appendChild(commentInput);
  post.appendChild(commentButton);
  post.appendChild(commentList);
  post.appendChild(solveButton);
  post.appendChild(solveHistoryButton);
  post.appendChild(createNewPostButton);

  return post;
}

const randomMessageDiv = document.getElementById("random-message");
const newSectionButton = document.getElementById("new-section-button");

newSectionButton.addEventListener("click", () => {
  // Generate a random message
  const messages = [
    "Hello, World!",
    "This is a random message.",
    "Click the button again for another message.",
    // Add more messages as needed
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];

  // Create a new div with the random message
  const messageDiv = document.createElement("div");
  messageDiv.className = "random-message";
  messageDiv.textContent = randomMessage;

  // Replace the existing content with the new message
  randomMessageDiv.innerHTML = "";
  randomMessageDiv.appendChild(messageDiv);
});
