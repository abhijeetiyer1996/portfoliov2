import classes from './Contact.module.css';
import contactUs from "../../Assets/Editing body text-bro.svg";
import phoneCall from "../../Assets/Calling-bro.svg";
import followUs from "../../Assets/Social media-bro.svg";
import {FiFacebook, FiLinkedin, FiGithub} from "react-icons/fi";
import {IoLogoReact} from "react-icons/io5";

const Contact = () =>{
    return (<div className={classes.cLayout}>
                <h1 className={classes.header}>You can Connect with me via </h1>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <div className={classes.panel}>
                            <img alt="mail" src={contactUs}/>
                            <button className={classes.btn}>abhijeetiyer007@gmail.com</button>
                        </div>
                        <div className={classes.panel}>
                            <img alt="mail" src={phoneCall}/>
                            <button className={classes.btn}>+91 8291685462</button>
                        </div>
                        <div className={classes.panel}>
                            <img alt="mail" src={followUs}/>
                            <div className={classes.sm}>
                                <a href="https://www.facebook.com/abhijeet.iyer.3" className={classes.btn}><FiFacebook/></a>
                                <a href="https://www.linkedin.com/in/abhijeet-iyer-8613a3158/" className={classes.btn}><FiLinkedin/></a>
                                <a href="https://github.com/abhijeetiyer1996" className={classes.btn}><FiGithub/></a>
                            </div>
                        </div>
                    </div>
                    <h1 className={classes.header}>Created In React <IoLogoReact /> </h1>
                </div>
            </div>)
}
export default Contact;