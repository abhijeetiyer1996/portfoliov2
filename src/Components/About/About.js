import classes from './About.module.css';
import {useState} from "react";
import codingBro from "../../Assets/Coding-bro.svg";
import landingPage from "../../Assets/landingPage.svg";
import profileBro from "../../Assets/Resume-bro.svg";
import Badges from "../Badges/Badges";
import {SiJavascript,SiHtml5,SiCss3,SiNodedotjs,SiReact} from "react-icons/si";

const About = () =>{
    const [activeTab, setActiveTab] = useState(1);
    const changeActiveTab = (number) =>{
        setActiveTab(number);
    }
    return (<div className={classes.aLayout} id="about">
                <div className={classes.tab}>
                    <div className={classes.tabHeader}>
                        <div className={activeTab === 1? `${classes.active} ${classes.tabHItem}`:`${classes.tabHItem}`} onClick={()=>{changeActiveTab(1)}}>About</div>
                        <div className={activeTab === 2? `${classes.active} ${classes.tabHItem}`:`${classes.tabHItem}`} onClick={()=>{changeActiveTab(2)}}>Work</div>
                        <div className={activeTab === 3? `${classes.active} ${classes.tabHItem}`:`${classes.tabHItem}`} onClick={()=>{changeActiveTab(3)}}>Skills</div>
                    </div>
                    <div className={classes.tabContent}>
                        <div className={activeTab === 1? `${classes.activeContent}`:`${classes.tabItem}`}>
                            <div className={classes.image}>
                                <img src={landingPage} alt="tab1Image"/>
                            </div>
                            <div className={classes.content}>
                                <span>
                                    <h1 className={classes.header}>Education</h1>
                                     I did my graduation in B.E Information Technology, Passionate to become a full stack developer and aiming to achieve specification in Devops Engineering. 
                                </span> 
                            </div>
                        </div>
                        <div className={activeTab === 2? `${classes.activeContent}`:`${classes.tabItem}`}>
                            <div className={classes.content}>
                                <span>
                                    <h1 className={classes.header}>Experience</h1>
                                    I have 3 years of experience in total, Starting a new job as a fullstack developer. I also love to work with JS and different frameworks like React (which I am currently learning).
                                </span>
                            </div>
                            <div className={classes.image}>
                                <img src={codingBro} alt="tab2Image"/>
                            </div>
                        </div>
                        <div className={activeTab === 3? `${classes.activeContent}`:`${classes.tabItem}`}>
                            <div className={classes.image}>
                                <img src={profileBro} alt="tab3Image"/>
                            </div>
                            <div className={classes.content}>
                                <span>
                                    <h1 className={classes.header}>Profile </h1>
                                    Currently working with these technologies
                                    <div className={classes.badgeContainer}>
                                        <Badges icon={<SiHtml5/>} text="HTML5"/>
                                        <Badges icon={<SiCss3/>} text="Css3"/>
                                        <Badges icon={<SiJavascript/>} text="JavaScript"/>
                                        <Badges icon={<SiNodedotjs/>} text="Node.js"/>
                                        <Badges icon={<SiReact/>} text="React.js"/>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)

}
export default About;