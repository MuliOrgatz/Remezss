import React,{Component} from 'react';
import validator from 'validator';
import emailjs from 'emailjs-com';
import { SwitchTransition, CSSTransition } from "react-transition-group";

class Contact extends Component{
    constructor(){
        super();

        this.state ={
            formData: {
                fullName:'',
                email: '',
                phoneNumber:'',
                massage:'',
            },
            errors: {},
            mesSent:false,
            errorToSend:false,
            loading:false,
        }
    }

    checkValidtion = () =>{
        const {formData} = this.state;
        let erorMesName = "";
        let erorMesPhone = "";
        let erorMesEmail = "";
        let erorMesMessage = "";

        if(!formData.phoneNumber){
            erorMesPhone = "נא הכנס מספר טלפון ";
        }
        else if(!validator.isMobilePhone(formData.phoneNumber,"he-IL")){
            erorMesPhone = "נא הכנס מספר טלפון תקין";
        }

        if(!validator.isEmpty(formData.email)){     
            if(!validator.isEmail(formData.email)){
                erorMesEmail = "נא הכנס כתובת דואר אלקטרוני תקינה";
            }
        }

        if(!formData.fullName){
            erorMesName= "נא הכנס שם";
        }
        else if(formData.fullName.length < 2){
            erorMesName= "נא הכנס שם תקין";
        }

        if(!formData.massage){
            erorMesMessage = "נא הכנס הודעה ";
        }
        else if(formData.massage.length < 4){
             erorMesMessage = "נא הכנס הודעה תקינה";
        }
        
        if (erorMesMessage || erorMesName || erorMesPhone || erorMesEmail) {
            this.setState({ 
                errors:{
                    fullName:erorMesName, 
                    phoneNumber:erorMesPhone, 
                    massage:erorMesMessage, 
                    email:erorMesEmail
                }});
                return false;
        }else{
            this.setState({errors:{}});
        }
        return true;
    }

    sendEmail = (e,variables) =>{
        e.preventDefault(); 

        emailjs.send('gmail', 'template_vSJ7HVOT',variables,'user_WwCRjUgNDug15EVmLrYpR' )
        .then((result) => {
            console.log('Email successfully sent!')
            this.setState({loading:false});
            this.setState({mesSent:true});
        }, (error) => {
            console.log(error.text);
            this.setState({errorToSend:true});
        });
    }

    handleSubmit = async event => {
        event.preventDefault(); 
        const isValid = this.checkValidtion();
        if(isValid){
            this.setState({loading:true});
            this.sendEmail(event,
                {
                    message_html: this.state.formData.massage, 
                    to_name: this.state.formData.fullName, 
                    phone_number: this.state.formData.phoneNumber, 
                    email:this.state.formData.email
                });
        }
        else{
            this.setState({mesSent:false})
        }
    };

    handleChange = event => {
        const { formData } = this.state;
        const { name, value} = event.target;
        this.setState({
            formData: {
                ...formData,
                [name]:value,
            }
        })
    }

    massageSendSucces = () => (
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">ההודעה נשלחה בהצלחה!</h2>
                <h3 className="section-subheading text-muted">אנו נחזור אליכם בהקדם</h3>
            </div>
        </div>
    )

    contactSendingMassage = () =>(
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">צור קשר</h2>
                <h3 className="section-subheading text-muted">השאירו הודעה ונציג שלנו יחזור אליכם בהקדם</h3>
            </div>
            <form id="contactForm" name="sentMessage" noValidate="noValidate" onSubmit={this.handleSubmit}>
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                name="fullName" 
                                className="form-control" 
                                id="fullName" 
                                type="text" 
                                placeholder="שם מלא *"
                                style={this.state.errors.fullName?{border:'2px solid #dc3545'}:null}
                                required
                                value={this.state.formData.fullName} 
                                onChange={this.handleChange}
                            />
                            <p className="help-block text-danger">{this.state.errors.fullName}</p>
                        </div>
                        <div className="form-group">
                            <input
                                name="email" 
                                className="form-control" 
                                id="email" 
                                type="email"
                                style={this.state.errors.email?{border:'2px solid #dc3545'}:null}
                                placeholder="דואר אלקטרוני (אופציונלי)" 
                                value={this.state.formData.email} 
                                onChange={this.handleChange} 
                            />
                            <p className="help-block text-danger">{this.state.errors.email}</p>
                        </div>
                        <div className="form-group mb-md-0">
                            <input 
                                name="phoneNumber"
                                className="form-control" 
                                id="phoneNumber" 
                                type="text" 
                                placeholder=" מספר טלפון לחזרה *" 
                                required="required"
                                style={this.state.errors.phoneNumber?{border:'2px solid #dc3545'}:null}
                                value={this.state.formData.phoneNumber} 
                                onChange={this.handleChange}
                            />
                            <p className="help-block text-danger">{this.state.errors.phoneNumber}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group form-group-textarea mb-md-0">
                            <textarea 
                                name="massage"
                                className="form-control" 
                                id="message" 
                                placeholder="הודעה *" 
                                required="required"
                                style={this.state.errors.massage?{border:'2px solid #dc3545'}:null}
                                value={this.state.formData.massage} 
                                onChange={this.handleChange}>
                            </textarea>
                            <p className="help-block text-danger">{this.state.errors.massage}</p>
                        </div>
                    </div>
                </div>
            </form>
        </div> 
    )

    render(){
        const {mesSent,errorToSend,loading} = this.state;
        return(
            <section className="page-section row align-items-center" id="contact" style={{minHeight:'47rem'}}>
            <SwitchTransition mode="out-in">
            <CSSTransition
                key={mesSent}
                addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
                }}
                classNames="fade">
                <div className='container' >
                    {errorToSend? <div class="alert alert-danger" role="alert">
                        הייתה בעיה בשליחת ההודעה, צרו איתנו קשר בטלפון
                    </div>:null}
                    {mesSent ? this.massageSendSucces() : this.contactSendingMassage()}
                    <div className="text-center" style={mesSent?{display:'none'}:{display:''}}>
                        <button 
                            onClick={this.handleSubmit} 
                            className="btn btn-primary btn-xl text-uppercase" 
                            id="sendMessageButton" 
                            type="submit">
                                {loading?
                                    <div class="spinner-border text-light" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    :"שלח הודעה"}
                        </button>
                    </div>
                    
                </div>
            </CSSTransition>
            </SwitchTransition>
            </section>
        )
    }
}

export default Contact;