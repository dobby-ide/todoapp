import Card from "./Card";

const Menu = ({ listsnames, viewChoice }) => {
  const onHomeChoosing = (e) =>{
    console.log(e.target.id);
    viewChoice(e.target.id);
  }
  return (
    <Card className="menu">
      <div className="menu__buttons">
        <div onClick={onHomeChoosing} id="HOME" className="menu__buttons-btn">
          HOME
        </div>

        <div onClick={onHomeChoosing} id="INFO" className="menu__buttons-btn">
          info
        </div>

        <div
          onClick={onHomeChoosing}
          id="INSTRUCTIONS"
          className="menu__buttons-btn"
        >
          instructions
        </div>
      </div>
      <div className="menu__available-lists">
        available lists:
        {listsnames.map((listname) => {
          return <span key={listname}> {listname} </span>;
        })}
      </div>
    </Card>
  );
};
export default Menu;
