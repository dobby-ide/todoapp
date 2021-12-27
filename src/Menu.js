import Card from "./Card";

const Menu = ({ listsnames, viewChoice }) => {
  const onHomeChoosing = (e) =>{
    console.log(e.target.id);
    viewChoice(e.target.id);
  }
  return (
    <Card className="menulistcontainer">
      <div>
        <div className="availablelists">
          available lists:
          {listsnames.map((listname) => {
            return <span key={listname}> {listname} </span>;
          })}
        </div>
      </div>
      <div className="menulist">
        <ul>
          <li>
            <button onClick={onHomeChoosing} id="HOME">
              HOME
            </button>
          </li>
          <li>
            <button onClick={onHomeChoosing} id="INFO">
              info
            </button>
          </li>
          <li>
            <button onClick={onHomeChoosing} id="INSTRUCTIONS">instructions</button>
          </li>
        </ul>
      </div>
    </Card>
  );
};
export default Menu;
