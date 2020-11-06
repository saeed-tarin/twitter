
import React from 'react';
import "./AddPersonForm.css";

function AddPersonForm(props: { data: string; }) {
    function myFunc(){
      var inp,lis;
      inp = document.getElementById("Messageid");
      lis = document.getElementById("lis");
      (lis as HTMLUListElement).style.marginRight = "5%";
      (lis as HTMLUListElement).style.borderRadius = "10px";
      (lis as HTMLUListElement).style.width = "96%";
      (lis as HTMLUListElement).style.textAlign = "center";
      if((inp as HTMLInputElement).value != "")
        {
          var newItem = document.createElement("LI");
          newItem.style.marginTop = "3px";
          newItem.style.padding = "8px";
          newItem.style.fontSize = "18px";
          newItem.style.color = "#ffffff";
          newItem.style.width = "100%";
          newItem.style.borderBottom = "1px solid black";
          newItem.style.textDecoration = "none";
          newItem.style.display = "block";
          newItem.style.borderRadius = "10px";
          newItem.style.background = "#3f3f3f";
          var textnode = document.createTextNode((inp as HTMLInputElement).value);
            newItem.appendChild(textnode);
            (lis as HTMLUListElement).insertBefore(newItem, (lis as HTMLUListElement).childNodes[0]);
            (inp as HTMLInputElement).value = "";
        }
    }

function handleFiles() {
  var fileList,fileElem,lis;
  fileList = document.getElementById("fileList");
  fileElem = document.getElementById("fileElem");
  lis = document.getElementById("lis");
  (lis as HTMLUListElement).style.marginRight = "5%";
  (lis as HTMLUListElement).style.borderRadius = "10px";
  (lis as HTMLUListElement).style.width = "96%";
  (lis as HTMLUListElement).style.textAlign = "center";
  (fileList as HTMLDivElement).innerHTML = "";
  for (let i = 0; i < (fileElem as HTMLInputElement).value[0].length; i++) {
    const li = document.createElement("li");
    li.style.marginTop = "3px";
    li.style.padding = "8px";
    li.style.fontSize = "18px";
    li.style.color = "#ffffff";
    li.style.width = "100%";
    li.style.borderBottom = "1px solid black";
    li.style.textDecoration = "none";
    li.style.display = "block";
    li.style.borderRadius = "10px";
    li.style.background = "#3f3f3f";

    (lis as HTMLUListElement).insertBefore(li,(lis as HTMLUListElement).childNodes[0]);
    
    const img = document.createElement("img");
    img.src = URL.createObjectURL((fileElem as any).files[i]);
    img.height = 160;
    img.onload = function() {
      URL.revokeObjectURL(img.src);
    }
    li.appendChild(img);
    
  }
}

    function handleSubmit(e:any) {
      e.preventDefault();
      myFunc();
    }
    return (
      <form onSubmit={handleSubmit}>
        <div className="innerc">
            <button className="btninf">{props.data.charAt(0)}</button>
            <input id="Messageid" className="tweetinp" type="text" placeholder="Your Message"
                ></input>
            <button className="tweetbtn" onClick={handleSubmit}>Tweet</button>
            <label className="btn btn-primary">
                <i className="fa fa-image"></i><input id="fileElem" onChange={handleFiles} className="temp"
                      type="file" name="image"/>
              </label>
        </div>

        <div id="fileList">
          
        </div>
        <ul id="lis">
          
        </ul>
      </form>
      
    );
  }
  export default AddPersonForm;