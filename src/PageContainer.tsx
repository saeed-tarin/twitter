import React from 'react';
import AddPersonForm from './AddPersonForm';
import './PageContainer.css';


function MyFunction(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = (input as HTMLInputElement).value.toUpperCase();
    ul = document.getElementById("myUL");
    li = (ul as HTMLUListElement).getElementsByTagName("li");

    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    (dots as HTMLElement).style.display = "none";
    (btnText as HTMLButtonElement).innerHTML = "show less"; 
    (moreText as HTMLElement).style.display = "inline";

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function SecondFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if ((dots as HTMLElement).style.display === "none") {
        (dots as HTMLElement).style.display = "inline";
      (btnText as HTMLButtonElement).innerHTML = "show more"; 
      (moreText as HTMLElement).style.display = "none";
    } else {
        (dots as HTMLElement).style.display = "none";
        (btnText as HTMLButtonElement).innerHTML = "show less"; 
        (moreText as HTMLElement).style.display = "inline";
    }
}


function handleSubmit(e:any) {
    e.preventDefault();
    alert("Hi!!!");
  }

function PageContainer() {
    return(
        <div className="container">
            <div className="raw">
                <div className="sidenav">
                    <p><i className="fa fa-fw fa-twitter"></i></p>
                    <a href="#home"><i className='fa fa-fw fa-home'></i> Home</a>
                    <a href="#explore"><i className="fa-fw material-icons"> explore</i> Explore</a>
                    <a href="#notifications"><i className='fa fa-fw fa-bell'></i> Notifications</a>
                    <a href="#messages"><i className='fa fa-envelope-o fa-fw'></i> Messages</a>
                    <a href="#bookmarks"><i className="fa fa-fw fa-bookmark"></i> Bookmarks</a>
                    <a href="#lists"><i className='fa fa-fw fa-bars'></i> Lists</a>
                    <a href="#profile"><i className='fa fa-user fa-fw'></i> Profile</a>
                    <a href="#more"><i className="glyphicon glyphicon-option-horizontal fa-fw"></i> More</a>
                    <button className="button">Tweet</button>
                </div>
                
                <div id="inputP" className="tweet">  
                    <AddPersonForm data={"ali"}/>  
                </div>

                <div className="filter">     
                    <div className="listbox"> 
                        <input className="myinput" type="text" id="myInput" onKeyUp={MyFunction} 
                                placeholder="Search twitter"></input>   
                                  
                        <ul id="myUL">
                            <li><a href="#">Adele</a></li>
                            <li><a href="#">Agnes</a></li>
                            <li><a href="#">Billy</a></li>
                            <li><a href="#">Bob</a></li>
                            <li><a href="#">Calvin</a></li>
                            <li><a href="#">Christina</a></li>
                            <li><a href="#">Cindy</a></li>
                            <span id="dots"></span><span id="more">
                                <li><a href="#">saeed</a></li>
                                <li><a href="#">hamid</a></li>
                                <li><a href="#">vahid</a></li>
                                <li><a href="#">sajad</a></li>
                                <li><a href="#">hosein</a></li>
                                <li><a href="#">iraj</a></li>
                                <li><a href="#">saeed1</a></li>
                                <li><a href="#">hamid1</a></li>
                                <li><a href="#">vahid1</a></li>
                                <li><a href="#">sajad1</a></li>
                                <li><a href="#">hosein1</a></li>
                                <li><a href="#">iraj1</a></li>
                            </span>
                            <button onClick={SecondFunction} id="myBtn">show more</button>
                        </ul>
                    </div>
                    <div className="dropup">
                    <div>
                        <button className="dropbtn">message</button>
                        <div className="dropup-content">
                            <a href="#" onClick={handleSubmit}>person 1</a>
                            <a href="#" onClick={handleSubmit}>person 2</a>
                            <a href="#" onClick={handleSubmit}>person 3</a>
                        </div>
                        </div>
                    </div>
                    
                    

                </div>
            </div>
            
        </div>
    );
}

export default PageContainer;