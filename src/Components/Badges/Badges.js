import classes from "./Badge.module.css"
;const Badges = (props) =>{
    return <div className={classes.badge}>
                <span className={classes.badgeIcon}>{props.icon}</span>
                {(props.text) ? <span className={classes.badgeText}>{props.text}</span>:null}
           </div>
}
export default Badges;
