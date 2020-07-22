import React,{Component} from 'react'
import { Link, scrollSpy } from 'react-scroll';

class NavBar extends Component {
        constructor(props) {
        super(props);
        this.state = {
            active:"",
            services: false,
            about: false,
            gallery:false,
            map:false,
            contact:false,
            close:false
        };
        this.onScroll = this.onScroll.bind(this);
    }

    makeTrue = async (title) =>{
        await this.allFalse();
        this.setState({[title]:true})
        if(this.state.contact && this.state.map){
            this.setState({map:false})
        }
    }

    async allFalse(){
        this.setState({
            services: false,
            about: false,
            gallery:false,
            map:false,
            contact:false,
        })
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
        if ( window.scrollY > 100) {
            this.onScroll("navbar-shrink");
        }
        else{
            this.onScroll("");
        }
        if ( window.scrollY < 600) {
            this.allFalse();
        }
        });
        
        scrollSpy.update()
    }

    handleLinkClick(title){
        setTimeout(()=> this.makeTrue(title), 730)
    }

    onScroll(addClass) {
        this.setState({ addClass });
    }
  

render(){
    return(
        <nav className={"navbar navbar-expand-lg navbar-dark fixed-top "+ this.state.addClass} id="mainNav">
            <div className="container">
                <span style={{fontFamily:'Amatic SC'}} className="pointer navbar-brand js-scroll-trigger" font="true" onClick={event =>  window.location.href='/'}>
                    רמ"ז שירות וסחר
                    <a style={{marginRight:'0.5rem'}} className="btn btn-dark btn-social" href={"tel:"+ this.props.telephonNumber}>
                        <i className="fa fa-phone" ></i>
                    </a>
                    <a style={{marginRight:'0.5rem'}} className="nav-item nav-link btn btn-dark btn-social" href="https://www.facebook.com/%D7%A8%D7%9E%D7%96-%D7%A9%D7%99%D7%95%D7%95%D7%A7-%D7%95%D7%A1%D7%97%D7%A8-1557544711204382" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </span>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">תפריט<i className="fas fa-bars mr-1"></i></button>
                <div className="collapse navbar-collapse text-right" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase mr-auto">
                            <Link  
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={700}
                            isDynamic={true}
                            onSetActive={() => this.makeTrue('services')}
                            className="nav-item "
                            data-toggle="collapse" 
                            data-target=".navbar-collapse.show">
                                <span 
                                    className={this.state.services? "nav-link js-scroll-trigger active pointer" : "nav-link js-scroll-trigger pointer"} 
                                    href="#services"
                                    onClick={()=> this.handleLinkClick('services')}>
                                    שירותים
                                </span>
                        </Link>
                        <Link  
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={700} 
                            isDynamic={true}
                            onSetActive={() => this.makeTrue('gallery')}
                            data-toggle="collapse" 
                            data-target=".navbar-collapse.show"
                            className="nav-item">
                                <span 
                                    className={this.state.gallery? "nav-link js-scroll-trigger active pointer" : "nav-link js-scroll-trigger pointer"} 
                                    href="#gallery"
                                    onClick={()=> this.handleLinkClick('gallery')}>
                                    מוצרים
                                </span>
                        </Link>
                        <Link  
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={700}
                            isDynamic={true}
                            onSetActive={() => this.makeTrue('about')}
                            data-toggle="collapse" 
                            data-target=".navbar-collapse.show"
                            className="nav-item">
                                <span 
                                    className={this.state.about? "pointer nav-link js-scroll-trigger active" : "pointer nav-link js-scroll-trigger"}  
                                    href="#about"
                                    onClick={()=> this.handleLinkClick('about')}>
                                    עלינו
                                </span>
                        </Link>
                        <Link  
                            to="map"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={700}
                            isDynamic={true}
                            onSetActive={() => this.makeTrue('map')}
                            data-toggle="collapse" 
                            data-target=".navbar-collapse.show"
                            className="nav-item">
                                <span 
                                    className={this.state.map? "pointer nav-link js-scroll-trigger active" : "pointer nav-link js-scroll-trigger"}   
                                    href="#map"
                                    onClick={()=> this.handleLinkClick('map')}>
                                    מפה
                                </span>
                        </Link>
                        <Link  
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={700}
                            isDynamic={true}
                            onSetActive={() => this.makeTrue('contact')}
                            data-toggle="collapse"
                            data-target=".navbar-collapse.show"
                            className="nav-item">
                                <span 
                                    className={this.state.contact ? "pointer nav-link js-scroll-trigger active" : "pointer nav-link js-scroll-trigger"}
                                    href="#contact"
                                    onClick={()=> this.handleLinkClick('contact')}>
                                    צור קשר
                                </span>
                        </Link>
                        
                    </ul>
                </div>    
            </div>
        </nav>
    );
}}

export default NavBar;