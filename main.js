fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    // Create user cards
    const userCards = document.getElementById("user-cards");
    data.forEach((user) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
                        <h2>${user.name}</h2>
                        <p><strong>Username:</strong> ${user.username}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
                    `;
      userCards.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
