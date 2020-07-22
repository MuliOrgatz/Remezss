import React from "react"
import campPic from '../../assets/img/test1.jpg'

export default () =>{
    return(
    <section className="page-section" id="about">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase">אודות</h2>
            <p style={{marginBottom: '4rem'}}></p>
        </div>
        <div className="row text-center">
            <div className="col-md-5 text-right ml-auto">
                <h4 className="subheading">רמ"ז שירות וסחר</h4>
                <p className="text-muted">החלה את פעילות בשנת 2005, עובדים עם החברות... מחירים חבילות הובלה וכו ועוד קצת מידע על החברה</p>
            </div>
            <div className="col-md-4">
                <img src={campPic} className="img-fluid" alt=""/>
            </div>
        </div>
    </div>
    </section>
    )
}