function Room(props) {
  const modifyRoom = (ev) => {
    props.handleModifyRoom({
      idModify: ev.currentTarget.getAttribute("data-room-id"),
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
      <h3 className='item-room__title'>Sala Planta </h3>
      <label className='item-room__label' htmlFor='Capacity'>
        Capacidad máxima
      </label>
      <input
        data-room-id={props.room.idRoom}
        className={`item-room__input ${props.inputValidate}`}
        type='text'
        name='capacity'
        placeholder='max 100 pers'
        minLength='1'
        maxLength='3'
        value={props.room.capacity}
        onChange={handleChangeInputs}
      />
      <label className='item-room__label' htmlFor='occupation'>
        Ocupación
      </label>
      <input
        data-room-id={props.room.idRoom}
        className={`item-room__input ${props.inputValidate}`}
        type='text'
        name='occupation'
        minLength='1'
        maxLength='3'
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
