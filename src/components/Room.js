function Room() {
  return (
    <>
      <h3>Sala Planta </h3>
      <label htmlFor='Capacity'>Capacidad máxima</label>
      <input type='text' name='Capacity' placeholder='30' />
      <label htmlFor='occupation'>Ocupación</label>
      <input type='text' name='occupation' placeholder='40 %' />
      <button>Modificar</button>
    </>
  );
}

export default Room;
