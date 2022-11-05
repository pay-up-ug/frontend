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
            <a href="mailto:khalifanmuwonge.com" className="Menuitem">
            E-mail
            </a>
            <a href="tel:+256706081432" className="Menuitem">
            Contact us
            </a>
        </div>
        <div className="Menu">
            <div className="Menuhead">
            Company
            </div>
            <a href="https://github.com/pay-up-ug" className="Menuitem">
            Github
            </a>
        </div>
        </div>
        <div className="mark">
            Made in Uganda
        </div>
    </div>
  )
}



export default Footer