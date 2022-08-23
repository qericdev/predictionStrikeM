import styles from './Hero.module.css';

function Hero() {
    return(
        <div className={`${styles.background}`}>
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className={`col-10 col-sm-8 col-lg-6 ${styles.rightImage}`}>
              <img src="./../../images/hero.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div className={`col-lg-6 ${styles.leftText}`}> 
              <h1 className="display-5 fw-bold lh-1 mb-3">Invest in your favorite player</h1>
              <p className="lead">Choose your favorite player and follow his evolution game by game. Available a wide variety of sports from different parts of the world.</p>
              <div className={`d-grid gap-2 d-md-flex justify-content-md-start ${styles.buttonsBox}`}>
                <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Start Now</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn More</button>
              </div>
            </div>
          </div>
        </div> 
    )
}

export default Hero;