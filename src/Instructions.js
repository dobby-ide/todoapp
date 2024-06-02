import React from "react";
import Card from "./Card";
const Instructions = () =>{
return (
  <Card className="instructions">
    <h3 className="instructions__header">Instructions</h3>
    <p>
      In this application it is possible to use one or more list that serves as
      Todo list.
    </p>
    <p>
      every item in the list can be added, signed as completed(simple click on a
      task) and then removed from the list(press delete crossed button)
    </p>

    <p>
      the list could be sorted by date (a date that is chosen to be the due date
      for the task) or by last modification/creation time (sort by last
      modification time button){' '}
    </p>
    <p>
      item can be pushed forward up the list or down the list with their
      relatives button (up or down)
    </p>
    <p>
      To add a tag click on the id number of the task and add a tag and confirm
      to exit the "add a tag" mode
    </p>

    <p>
      when one is in modify mode and more than one list is available, tasks can
      be moved from one list to another simply by selecting the list where the
      task should then go
    </p>
    <p>
      user can search items by words, or by tags from two different text input
      field in the application
    </p>
  </Card>
);

}
export default Instructions;