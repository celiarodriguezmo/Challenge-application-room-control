import SelectFloor from "./SelectFloor.js";

function Header(props) {
  return (
    <header className='header'>
      <h1 className='header__title'>Salas</h1>
      <SelectFloor handleSelectFloor={props.handleSelectFloor} />
      <span className='header__separator'></span>
    </header>
  );
}

export default Header;
