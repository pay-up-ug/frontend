import React from "react"
import "./Footer.css"

function Footer() {
  return (
    <div className="Footer">
        <div className="BottomSection">
        <div className="LogoSec">
           <>Copyright {new Date().getFullYear()}</>
           <div className="Name">PAY-UP</div> 
        </div>
        <div className="Menu">
            <div className="Menuhead">
            Support
            </div>
            <div className="Menuitem">
            E-mail
            </div>
            <div className="Menuitem">
            Contact us
            </div>
        </div>
        <div className="Menu">
            <div className="Menuhead">
            Company
            </div>
            <div className="Menuitem">
            Team
            </div>
        </div>
        </div>
        <div className="mark">
            Made in Uganda
        </div>
    </div>
  )
}



export default Footer