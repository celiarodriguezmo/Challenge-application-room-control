function Room(props) {
  const modifyRoom = (ev) => {
    props.handleModifyRoom({
      idModify: ev.currentTarget.getAttribute("data-room-id"),
    });
  };

  const handleDelete = (ev) => {
    props.handleDeleteIcon({
      idRoom: ev.currentTarget.getAttribute("data-room-id"),
    });
  };

  const handleChangeInputs = (ev) => {
    props.handleCapacity({
      inputID: ev.currentTarget.getAttribute("data-room-id"),
      inputValue: ev.currentTarget.value,
      inputName: ev.currentTarget.name,
    });
    props.handleOccupation({
      inputID: ev.currentTarget.getAttribute("data-room-id"),
      inputValue: ev.currentTarget.value,
      inputName: ev.currentTarget.name,
    });
  };

  return (
    <li key={props.room.idRoom} className='item-room'>
      <div className='item-room__div'>
        <h3 className='item-room__title'>Sala Planta </h3>
        <i
          onClick={handleDelete}
          className='fa-solid fa-trash-can item-room__delete'
          data-room-id={props.room.idRoom}
        ></i>
      </div>

      <label className='item-room__label' htmlFor='Capacity'>
        Capacidad máxima
      </label>
      <input
        data-room-id={props.room.idRoom}
        className='item-room__input'
        type='text'
        name='capacity'
        pattern='[0-9]*'
        placeholder='max 100 pers'
        value={props.room.capacity}
        onChange={handleChangeInputs}
      />
      <label className='item-room__label' htmlFor='occupation'>
        Ocupación
      </label>
      <input
        data-room-id={props.room.idRoom}
        className='item-room__input'
        type='text'
        name='occupation'
        placeholder='hasta 100%'
        value={props.room.occupation}
        onChange={handleChangeInputs}
      />
      <button
        className='item-room__modify'
        data-room-id={props.room.idRoom}
        onClick={modifyRoom}
      >
        Modificar
      </button>
    </li>
  );
}

export default Room;
