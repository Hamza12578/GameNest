const games = [
  {
    name: "Flippy Bird",
    image: "https://via.placeholder.com/150",
    link: "games/flippy-bird/index.html"
  }
];

const container = document.getElementById("gameContainer");

games.forEach(game => {
  const div = document.createElement("div");
  div.className = "game";

  div.innerHTML = `
    <img src="${game.image}">
    <h3>${game.name}</h3>
  `;

  div.onclick = () => {
    window.location.href = game.link;
  };

  container.appendChild(div);
});
