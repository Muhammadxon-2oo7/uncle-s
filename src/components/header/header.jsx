import React from 'react'
import c from './header.module.css'
import './header.css'
import {RxTriangleDown} from "react-icons/rx"
import {FiMenu} from "react-icons/fi"
const header = () => {
  function hamfun(){
    let hamMenuEl=document.getElementById("ham__menu")
    let mobileNav =document.getElementById("mobilenav")
    // console.log(hamMenuEl.classList.length)
    if(hamMenuEl.className !== "hamActive"){
      console.log("if")
      hamMenuEl.classList.remove("header_hamburger__Wt4ob") 
      hamMenuEl.classList.add("hamActive")
      mobileNav.classList.remove("header_mobile__navbar__SZBjR")
      mobileNav.classList.add("mobilenav")
    }else{
      console.log("else")
      hamMenuEl.classList.remove("hamActive")
      hamMenuEl.classList.add("header_hamburger__Wt4ob")
      mobileNav.classList.remove("mobilenav")
      mobileNav.classList.add("header_mobile__navbar__SZBjR")
    }
  }
  return (
    <div>
      <div className={c.top_register_header}>
        <div className={c.reg_card}>
          <a href="#" className={c.reg_register}>Register</a>
          <a href="#" className={c.reg_login}>Login</a>
        </div>
      </div>
      <div className={c.middle__header}>
        <div className={c.middle__header__title}>
          <p className={c.middle__header__title__p}>Journal of Positive School Psychology</p>
        </div>
      </div>
      <div id='mbile_bottom_header' className={c.bottom__header}>
        <div id='ham__menu' className={c.hamburger} onClick={hamfun}>
          <FiMenu className={c.hamburger__icon}/>
        </div>
        
        <div id='mobilenav'  className={c.mobile__navbar}>
        <ul className={c.bottom__header__nabar}>
          <li><a href="#">CURRENT</a></li>
          <li><a href="#">ARCHIVES</a></li>
          <li className={c.dropdown}><a href="#">ABOUT <RxTriangleDown/> </a> 
          <div className={c.dropdown__content}>
          <a href="#">About the Journal</a>
          <a href="#">Aims and Scope</a>
          <a href="#">Abstracts and Indexing</a>
          <a href="#">Submissions</a>
          <a href="#">Editorial Team</a>
          <a href="#">Privacy Statement</a>
          </div></li>
          <li className={c.dropdown}><a href="#">AUTHOR GUIDELINES <RxTriangleDown/></a>
          <div className={c.dropdown__content}>
          <a href="#">About the Journal</a>
          <a href="#">Aims and Scope</a>
          <a href="#">Abstracts and Indexing</a>
          <a href="#">Submissions</a>
          <a href="#">Editorial Team</a>
          <a href="#">Privacy Statement</a>
          </div>
          </li>
          <li><a href="#">ANNOUNCEMENTS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <div className={c.bottom__header__right}>
          <form onSubmit={(e)=>{
            e.preventDefault()
          }}>
            <input type="text" />
            <button>search</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default header