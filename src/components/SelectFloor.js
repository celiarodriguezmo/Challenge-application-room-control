function SelectFloor(props) {
  function handleSelect(ev) {
    props.handleSelectFloor({
      idFloor: ev.currentTarget.value,
    });
  }
  return (
    <div className='div-select'>
      <select onChange={handleSelect} className='select' type='select'>
        <option value='Planta 1' defaultValue>
          Planta 1
        </option>
        <option value='Planta 2'>Planta 2</option>
      </select>
    </div>
  );
}

export default SelectFloor;
