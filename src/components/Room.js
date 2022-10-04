function Room(props) {
  const handleChangeInputs = (ev) => {
    props.handleCapacity({
      inputValue: ev.currentTarget.value,
      inputName: ev.currentTarget.name,
    });
    props.handleOccupation({
      inputValue: ev.currentTarget.value,
      inputName: ev.currentTarget.name,
    });
  };

  return (
    <li key={props.room.idRoom}>
      <h3>Sala Planta </h3>
      <label htmlFor='Capacity'>Capacidad máxima</label>
      <input
        type='text'
        name='capacity'
        placeholder='30'
        value={props.room.capacity}
        onChange={handleChangeInputs}
      />
      <label htmlFor='occupation'>Ocupación</label>
      <input
        type='text'
        name='occupation'
        placeholder='%'
        value={props.room.occupation}
        onChange={handleChangeInputs}
      />
      <button>Modificar</button>
    </li>
  );
}

export default Room;
