// call API then turn object into an array

document.addEventListener("DOMContentLoaded", async () => {
  const getPlayers = async () => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-ET-WEB-FT/players`
      );
      if (!response.ok) {
        throw new Error(`HTTP Error!`);
      }
      const responseJson = await response.json();
      const playerData = responseJson.data.players;
      console.log(playerData);

      //   const playerImage =  playerData.imageUrl.front_default;
      //   img.src = playerImage;
      const playerContainer = document.querySelector("ol");
      playerData.forEach((player) => {
        const playerElement = document.createElement("li");
        playerElement.innerHTML = `
        <div>
        <p>${player.name}</p>
       <p>${player.breed} </p>
       <p>${player.status}</p>
       <img src="${player.imageUrl}"></div>`;
        playerContainer.appendChild(playerElement);
      });
    } catch (error) {
      console.error("Could not fetch resource", error);
    }
  };
  getPlayers();
});
