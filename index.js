// call API then turn object into an array

document.addEventListener("DOMContentLoaded", async () => {
  const getPlayers = async () => {
    try {
      const response = fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-ET-WEB-FT/players`
      );
      if (!response.ok) {
        throw new Error(`HTTP Error!`);
      }
      const responseJson = await response.json();
      const playerData = responseJson.players;
      console.log(playerData);

      //   const playerImage =  playerData.imageUrl.front_default;
      //   img.src = playerImage;
      const playerContainer = document.querySelector("ol");
      playerData.forEach((player) => {
        const playerElement = document.createElement("li");
        playerElement.innerHTML = `
        <li>${player.name}</li>
       <li>${player.breed} </li>
       <li>${player.status}</li>
       <li><img src="${player.imageUrl}"></li>`;
      });
    } catch (error) {
      console.error("Could not fetch resource", error);
    }
  };
  getPlayers();
});
