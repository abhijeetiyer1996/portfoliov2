import classes from './Home.module.css';
import landingImage from "../../Assets/Developer activity-bro.svg";
import {VscSymbolKeyword, VscFolderLibrary} from "react-icons/vsc";
import {FiLinkedin} from "react-icons/fi";
import {Link} from "react-router-dom";

const Home = () =>{
    return (<div className={classes.layout}>
                <div className={classes.container}>
                    <div className={classes.image}>
                        <img alt="landing Image" src={landingImage} />
                    </div>
                    <div className={classes.content}>
                        <span className={classes.text}>
                           <span className={classes.header}>Hello! I am <span className={classes.highLight}>Abhijeet</span></span>
                           <span className={classes.title}>An Engineer learning Full Stack development. Welcome to my <span className={classes.highLight}>Portfolio</span></span>
                        </span> 
                        <div className={classes.btnContainer}>
                            <a className={classes.infoBtn}><VscSymbolKeyword size={20}/></a>
                            <a className={classes.infoBtn}><FiLinkedin size={20}/></a>
                            <Link to="/Projects" className={classes.infoBtn}><VscFolderLibrary size={20}/></Link>
                        </div>
                         
                    </div>
                </div>
            </div>)
}
export default Home;