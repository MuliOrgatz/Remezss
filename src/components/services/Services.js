import React from 'react'

export default()=>{
    return(
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">על השירות שלנו...</h2>
                    <h3 className="section-subheading text-muted">מכירת מוצרי ספיגה וסיעוד למבוגרים</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fa fa-briefcase fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">מקצועיות</h4>
                        <p className="text-muted">חברתנו משווקת מוצרי ספיגה וסיעוד למבוגרים, מובילים באיכותם, מחברות המובילות בארץ ובעולם</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fa fa-user-md fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">יעוץ</h4>
                        <p className="text-muted">ניתן להנות משירות יעוץ והתאמה אישית לכל אחד תוך התחייבות לשירות המקצועי, המהיר והאיכותי ביותר</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fa fa-truck fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">משלוחים</h4>
                        <p className="text-muted">אנו מבצעים שירות משלוחים עד לפתח הבית, ללא עלות</p>
                    </div>
                </div>
            </div>
        </section>
    )
}