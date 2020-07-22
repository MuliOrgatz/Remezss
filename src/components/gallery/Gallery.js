import React, {Component} from 'react'
import GalleryModal from './GalleryModal'

class Gallery extends Component{
    constructor(){
        super();
        this.state = { 
            isModalOpen: false,
            modalId:0
        };
        
    }

    componentDidMount(){
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(modalId) {
        this.setState({isModalOpen: true,modalId});
      };
    
      closeModal() {
        this.setState({isModalOpen: false});
      };

render(){
    const {galleryLinks} = this.props;
    const {isModalOpen} = this.state;
    return(
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">מוצרים</h2>
                    <h3 className="section-subheading text-muted">חלק מהמוצרים לדוגמה</h3>
                </div>
                <div className="row">
                    {
                        galleryLinks && galleryLinks.map(({title, caption, imgUrl},index) =>
                        <div className="col-lg-4 col-sm-6 mb-4" key={index} >
                            <div className="portfolio-item" >
                                <div className="portfolio-link" onClick = {() => {this.openModal(index)}}>
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fa fa-info-circle fa-3x"></i></div>
                                    </div> 
                                    <img className="img-fluid" src={imgUrl} alt=""/>
                                </div>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">{title}</div>
                                    <div className="portfolio-caption-subheading text-muted">{caption}</div>
                                </div>
                            </div>
                        </div>
                        )
                    } 
                </div>
                <GalleryModal telephonNumber={this.props.telephonNumber} galleryLinks={galleryLinks} isModalOpen={isModalOpen} closeModal={this.closeModal} modalId={this.state.modalId}/>
            </div>
        </section>
    )
}}

export default Gallery;