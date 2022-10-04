import Room from "./Room.js";

function Floor(props) {
  function AddRoom(ev) {
    props.handleAddRoom({
      idButton: ev.currentTarget.id,
    });
  }

  const elements = props.rooms.map((room, index) => {
    return (
      <Room
        key={index}
        room={props.room}
        handleCapacity={props.handleCapacity}
        handleOccupation={props.handleOccupation}
      />
    );
  });

  return (
    <>
      <h2>Planta</h2>
      <button onClick={AddRoom} id='addRoom'>
        Añadir
      </button>
      <ul>{elements}</ul>
    </>
  );
}

export default Floor;
