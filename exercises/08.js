// ## Part 2 — Modules, Array Methods, async/await, Optional Chaining
// ### Exercise 8 — async/await
// Run this file in the browser console or with Node 18+.

const BASE_URL = "https://jsonplaceholder.typicode.com";

// 1 + 2. fetchPosts() with try/catch
async function fetchPosts() {
  try {
    const res = await fetch(BASE_URL + "/posts");
    const data = await res.json();

    const firstFive = data.slice(0, 5);

    firstFive.forEach((post) => console.log(post.title));

    return firstFive;
  } catch (error) {
    console.log("Failed to load posts");
  }
}

// 3. getPostById(id)
async function getPostById(id) {
  const res = await fetch(BASE_URL + "/posts/" + id);

  if (!res.ok) {
    throw new Error("Post not found");
  }

  return await res.json();
}

// Call fetchPosts()
fetchPosts();

// Call getPostById(1) and log the result.
getPostById(1)
  .then((post) => console.log(post))
  .catch((error) => console.log(error.message));

// Call getPostById(99999) and handle the error.
getPostById(99999)
  .then((post) => console.log(post))
  .catch((error) => console.log(error.message));