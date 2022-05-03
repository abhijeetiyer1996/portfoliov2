import classes from './HCards.module.css';
import {VscGithubInverted, VscWindow} from 'react-icons/vsc';

const Projects = (props) =>{
    return (<div className={classes.cardContainer}>
                <div className={classes.image}>
                    <img  className={classes.thumbnail} src={props.image} /> 
                </div>
                <div className={classes.content}>
                    <div className={classes.header}>{props.header}</div>
                    <div className={classes.desc}>
                        {props.desc}
                    </div>
                    <a href={props.repoLink} className={classes.btn}><VscGithubInverted/></a>
                    {
                        (props.liveSite) ? <a href={props.liveSite} className={classes.btn}><VscWindow/></a>:null
                    }
                </div>
            </div>)
}
export default Projects;