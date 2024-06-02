import Card from "./Card";


const Info = () =>{
    return (
      <Card className="info">
        <div className="info__main"></div>
        <h3 className="info__header">General Informations</h3>
        <p>Author: Fabio Privitera</p>
        <p>
          All code is written and developed by me, this ToDo list application
          was written and developed to fulfill requirements in React Dev course.
        </p>
        <p>
          The application might present some bugs and it is still work in
          progress. Latest modifications eliminated some potential crashes and I
          add new styling by using SCSS.
        </p>
        <p>
          All the styling is done by using pure CSS (SCSS engine in dev mode)
        </p>
        <p>
          No images or any copyright to be mentioned, all work and code are
          solely my intellectual property. It is possible to copy part or all of
          the application.
        </p>
      </Card>
    );
}
export default Info;