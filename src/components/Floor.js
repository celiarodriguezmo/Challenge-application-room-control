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
    <main className='main-floor'>
      <h2 className='main-floor__title'>Planta</h2>
      <button className='main-floor__button' onClick={AddRoom} id='addRoom'>
        Añadir
      </button>
      <ul className='main-floor__list'>{elements}</ul>
    </main>
  );
}

export default Floor;
