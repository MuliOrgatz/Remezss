import React, {Component} from 'react'
import PrivacyModal from './PrivacyModal'

class Footer extends Component{
    constructor(){
        super();
        this.state = { 
            isModalOpen: false,
        };   
    }

    openModal = () => {
        this.setState({isModalOpen: true});
    };
    
    closeModal = () => {
        this.setState({isModalOpen: false});
    };

render(){
    const {isModalOpen} = this.state;
    return(
        <footer className="footer py-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-right">Copyright © Muli orgatz 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href={"tel:" + this.props.telephonNumber}>
                            <i className="fa fa-phone" ></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/%D7%A8%D7%9E%D7%96-%D7%A9%D7%99%D7%95%D7%95%D7%A7-%D7%95%D7%A1%D7%97%D7%A8-1557544711204382" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 text-lg-left">
                        <span className="privacy" onClick={this.openModal}>מדיניות פרטיות</span>
                    </div>
                </div>
            </div>
            <PrivacyModal isModalOpen={isModalOpen} closeModal={this.closeModal}></PrivacyModal>
        </footer>
    )
}
}
export default Footer;