import React, { useState } from "react";
import Card from "./Card";


const BrowseTagForm = ({ browseFormHandler, copyingList,selectTag }) => {
  const [inputTag, setInputTag] = useState("");
  
 
  const selecting = (e)=>{
    e.preventDefault();
    selectTag(e.target.value)
    selectingTag();
  }


  const selectingTag = () =>{
    
    const mylist = [...copyingList];
    const theTags = [];
    for (let i = 0; i < mylist.length; i++) {
      let j = mylist[i].tag
     theTags.push(mylist[i].tag);
    }
    

    for (let i = 0; i < theTags.length; i++) {
      if (theTags[i].includes("#", 2)) {
        const t = theTags[i].indexOf("#", 2);

        const j = theTags[i].substr(0, t);
        const l = theTags[i].substr(t, theTags[i].length);

        theTags[i] = j;
        theTags.push(l);
      }
    }
   
    //selectTag(e.target.value)
    return theTags;
  }
  const theTags = selectingTag();
 
  
    

  //    console.log("inside browseTagForm component")
  //       console.log(mylist)
  const onBrowseInput = (e) => {
    e.preventDefault();
    
    setInputTag(e.target.value);
  };
  const submitBrowseFilter = (e) => {
    e.preventDefault();
    // browseFormHandler(inputTag);
   
  };
  let dataArray = [];
let dataFromTag = {id:"",task:"",tag:"",date:""}
  //create a function such that an array is created that match the inputTag value in the task list
  for(let i = 0;i<copyingList.length;i++){
  dataFromTag = {
    id: copyingList[i].id,
    task: copyingList[i].task,
    tag: copyingList[i].tag,
    date: copyingList[i].date
  }
  dataArray.push(dataFromTag)
  
}
  //////The following code helps to create an array of items filtered by tag chosen(inputTag)
  //TO IMPLEMENT: find a way to get the number of tags per each task
  //dataArray[i].tag
 
 const dataToRender = [];
  for(let i = 0;i<dataArray.length;i++){
    let newstr = dataArray[i].tag.toString();
    
  const tagsToArray = newstr.split(" #")//array of tags ["#green","fred"]
 
 //const tagsFinal= tagsToArray.map((tags)=>tags.slice(1));
 for(let j = 0;j<tagsToArray.length;j++)
    if (tagsToArray[j] == inputTag && tagsToArray[j] != "") {
        dataToRender.push(dataArray[i]);
      }

  }
  
  //then render the array via MAP
  return (
    <Card className = "browsetagform">
      <div>
        <form>
          <div>
            <label>browse by tag</label>
            <input type="text" onChange={onBrowseInput}></input>
          </div>
          <div>
            <button type="submit" onClick={submitBrowseFilter}>
              filter
            </button>
          </div>
          <div className="selectionoftags">
            <label>choose a tag</label>
            <select onChange={selecting}><option value = {-1}>select</option>{theTags.map((tag)=>{
              return(<option key={tag} value={tag} onFocus={selectingTag}>{tag}</option>)
            })}</select>
          </div>
        </form>
        
       {theTags.map((thetag)=>{
         return(<div key={thetag}>{thetag}</div>)
       })}
       
      </div>
      {dataToRender.map((data)=>{
        return (
          <div className = "returnedtasksbytags" key = {data}>
            
            <p key={data}>{data.id},{data.task},{data.date}</p>
          </div>
        );
      })}
    </Card>
  );
};
export default BrowseTagForm;
