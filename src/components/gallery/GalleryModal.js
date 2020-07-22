import React,{Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import WantToBuy from './WantToBuy'

class GalleryModal extends Component{
    constructor(){
        super();
        this.state = { 
            isBuyOpen: false,
        };

    }

    componentDidMount(){
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({isBuyOpen: true});
      };

    closeModal() {
        this.setState({isBuyOpen: false});
      };
     
    render(){
        const {galleryLinks, isModalOpen,closeModal, modalId} = this.props;
        const{isBuyOpen} = this.state;
    return(
        <Modal
            show={isModalOpen}
            onHide={closeModal}
            dialogClassName="modal-90w"
            keyboard
        >
            <Modal.Body>
                <div className="close-modal">
                   <span className='btn' onClick={closeModal}><i className="fas fa-times"></i></span> 
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="modal-body" style={{textAlign:'center'}}>
                                <h2 className="text-uppercase">{galleryLinks[modalId].title}</h2>
                                <p className="item-intro text-muted">{galleryLinks[modalId].caption}</p>
                                <img className="img-fluid d-block mx-auto" src={galleryLinks[modalId].imgUrl} alt="" />
                                <p style={{textAlign:'right'}}>{galleryLinks[modalId].moreDetails}</p>
                                <ul className="list-inline" style={{paddingRight:'0'}}>
                                    <li>כמות בחבילה: {galleryLinks[modalId].amount}</li>
                                    <li>מידות קיימות: {galleryLinks[modalId].measure}</li>
                                </ul>
                                <div className='row justify-content-center'>
                                        <button className="btn btn-primary col-md-4 ml-2 mb-2" onClick={this.openModal}><i className="fas fa-shopping-cart ml-1"></i>לקבלת הצעת מחיר</button>
                                        <button className="btn btn-primary col-md-4 ml-2 mb-2" type="button" onClick={closeModal}><i className="fas fa-times ml-1"></i>סגור מוצר</button>                                                            
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <WantToBuy telephonNumber={this.props.telephonNumber} isBuyOpen={isBuyOpen} closeModal={this.closeModal}></WantToBuy>
        </Modal>
    )
    }
}
export default GalleryModal;