document.addEventListener("DOMContentLoaded", () => {
  // Corrected the ID used in the event listener for Room 1
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        // Used the correct element ID when displaying results for Room 1
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(["closure", "scope", "hoisting", "async"]);
    // Added the missing 'async' keyword
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // Corrected the function call to find the intersection of jsConcepts and reactConcepts for Room 2
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  // async function declaration to create an AsyncFunction object
  document.getElementById("solveRoom3").addEventListener("click", () => {
    fetch("directions.json")
      .then((response) => response.json())
      .then(async (directions) => {
        await navigateLabyrinth(directions).then((message) => {
          // Corrected the  method
          document.getElementById("room3Result").innerHTML = message;
        });
      });
  });
});

function findMostRecentBook(books) {
  // Adjusted the findMostRecentBook  function to correctly compare dates and find the most recent book
  return books.reduce((mostRecent, book) =>
    new Date(book.published) > new Date(mostRecent.published)
      ? book
      : mostRecent
  );
}

function findIntersection(setA, setB) {
  // Fixed the findIntersection function to correctly determine the intersection of two sets
  const intersection = new Set([...setA].filter((x) => setB.has(x)));
  return intersection;
}

async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    // Added the await keyword before the new Promise in the navigateLabyrinth function
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Navigating: ${direction.step}`);
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

