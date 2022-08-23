import styles from './Footer.module.css'

function Footer() : JSX.Element {
    return (
        <div className={styles.container}>
            <h1>PREDICTIONSTRIKE.</h1>
            <p>Join now to be updated of every movement and statistics of your favorite player.</p>
            <p className={styles.email}>predictionstriketest@prediction.com</p>
            <div className={styles.images}>
                <img src="./../images/Facebook.png"/>
                <img src="./../images/Instagram.png"/>
                <img src="./../images/Twitter.png"/>
            </div>
            
        </div>
    );
}

export default Footer;