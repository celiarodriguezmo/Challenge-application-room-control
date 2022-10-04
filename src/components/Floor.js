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
        room={room}
        handleCapacity={props.handleCapacity}
        handleOccupation={props.handleOccupation}
      />
    );
  });

  return (
    <main className='main-floor'>
      <div className='main-floor__div'>
        <h2 className='main-floor__title'>Planta 1</h2>
        <button className='main-floor__button' onClick={AddRoom} id='addRoom'>
          Añadir sala
        </button>
      </div>
      <ul className='main-floor__list'>{elements}</ul>
    </main>
  );
}

export default Floor;
