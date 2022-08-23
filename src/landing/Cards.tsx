import styles from './Cards.module.css';

function Cards() : JSX.Element {
    return (
        <div className={styles.container}>
            <h1>How It Works?</h1>
            <p>Easy to apply, quick to understand and fast to execute.</p>
            <div className={styles.cards}>
                <div>
                    <img className={styles.stepOne} alt="First Step" src="./../../images/Step01.png"/>
                    <h1>Create Account</h1>
                    <p>Sign up using an access code from a friend or add yourself to the whitelist.</p>
                </div>
                <div>
                    <img className={styles.stepTwo} alt="Second Step" src="./../../images/Step02.png"/>
                    <h1>Deposit Funds</h1>
                    <p>Use credit card to add your money to your PredictionStrike account anytime you want.</p>
                </div>
                <div>
                    <img className={styles.stepThree} alt="Third Step" src="./../../images/Step03.png"/>
                    <h1>Invest in Players</h1>
                    <p>Buy and own shares of your favorite players just like you buy a real stock.</p>
                </div>
                <div>
                    <img className={styles.stepFour} alt="Fourth Step" src="./../../images/Step04.png"/>
                    <h1>Watch it Grow</h1>
                    <p>The value of players and teams will increase or decrease based on upon their performance as well as supply and demand.</p>
                </div>
                <div>
                    <img className={styles.stepFive} alt="Five Step" src="./../../images/Step05.png"/>
                    <h1>Buy & Sell</h1>
                    <p>Trade your shares of players and teams at anytime you like as you would regular stock.</p>
                </div>
                <div>
                    <img className={styles.stepSix} alt="Six Step" src="./../../images/Step06.png"/>
                    <h1>Cash Out</h1>
                    <p>At anytime you can cash out for the current value of your portfolio and receive your funds inmediately.</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;