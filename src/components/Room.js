function Room(props) {
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
        className='item-room__input'
        type='text'
        name='capacity'
        placeholder='30'
        value={String(props.room.capacity)}
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
        placeholder='%'
        value={props.room.occupation}
        onChange={handleChangeInputs}
      />
      <button className='item-room__modify'>Modificar</button>
    </li>
  );
}

export default Room;
