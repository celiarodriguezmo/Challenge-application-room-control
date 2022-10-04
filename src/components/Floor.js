import Room from "./Room.js";

function Floor() {
  function handleAddRoom(ev) {
    return console.log("Añade una sala!");
  }

  return (
    <>
      <h2>Planta</h2>
      <button onClick={handleAddRoom} id='1'>
        Añadir
      </button>
      <ul>
        <li>
          <Room />
        </li>
      </ul>
    </>
  );
}

export default Floor;
