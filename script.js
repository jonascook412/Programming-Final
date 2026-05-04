
document.addEventListener("DOMContentLoaded", () => {

  
  const cards = document.querySelectorAll(".artist-card");

  cards.forEach(card => {
    // create favorite button
    const btn = document.createElement("button");
    btn.textContent = "☆ Favorite";
    btn.classList.add("fav-btn");

    btn.addEventListener("click", () => {
      card.classList.toggle("favorited");

      if (card.classList.contains("favorited")) {
        btn.textContent = "★ Favorited";
      } else {
        btn.textContent = "☆ Favorite";
      }
    });

    card.appendChild(btn);
  });


  // =============================
  // 2. FORM VALIDATION (CONTACT PAGE)
  // =============================
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }

      if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
      }

      alert("Message sent successfully!");
      form.reset();
    });
  }


  // =============================
  // 3. SEARCH FILTER (BROWSE PAGE)
  // =============================
  const searchInput = document.querySelector("#searchInput");

  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      const value = e.target.value.toLowerCase();

      cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

});
const artists = [
  { name: "Radiohead", genre: "Alternative Rock" },
  { name: "Nirvana", genre: "Grunge" },
  { name: "The Smashing Pumpkins", genre: "Alternative Rock" },
  { name: "The Cure", genre: "Gothic Rock" }
];

const grid = document.querySelector(".artist-grid");

if (grid) {
  grid.innerHTML = "";

  artists.forEach(artist => {
    const card = document.createElement("div");
    card.classList.add("artist-card");

    card.innerHTML = `
      <h2>${artist.name}</h2>
      <p>${artist.genre}</p>
      <a class="btn" href="artist.html">View Spotlight</a>
    `;

    grid.appendChild(card);
  });
}