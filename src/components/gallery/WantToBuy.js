import React,{Component} from 'react'
import Modal from 'react-bootstrap/Modal'

class WantToBuy extends Component{
     
    render(){
        const {isBuyOpen,closeModal} = this.props;
    return(
        <Modal
            show={isBuyOpen}
            onHide={closeModal}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="close-modal">
                   <span className='btn' onClick={closeModal}><i className="fas fa-times"></i></span> 
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="modal-body" style={{textAlign:'center'}}>
                                <h2 className="text-uppercase">מעוניין במוצר זה?</h2>
                                <p className="item-intro text-muted">התקשרו עכשיו ל - <strong>{this.props.telephonNumber}</strong> לקבלת הצעת מחיר</p>
                                <div className='row justify-content-center'>
                                        <a className="btn btn-primary col-md-6 ml-2 mb-2" href={"tel:" + this.props.telephonNumber} ><i className="fa fa-phone ml-1"></i>התקשר</a>
                                        <button className="btn btn-primary col-sm-6 ml-2 mb-2" type="button" onClick={closeModal}><i className="fas fa-times ml-1"></i>סגור</button>                                                            
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
    }
}

export default WantToBuy;