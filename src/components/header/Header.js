import React from 'react'
import { Link } from 'react-scroll';

export default() => {
    return(
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">ברוך הבא לרמ"ז שיווק וסחר!</div>
                <div className="masthead-heading text-uppercase">מוצרי ספיגה והיגיינה למבוגרים</div>
                <Link 
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} >
                    <span className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">ספר לי עוד</span>
                </Link>
            </div>
        </header>
    )
}