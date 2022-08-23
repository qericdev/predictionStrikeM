import styles from './Match.module.css'

interface IMatch {
    date: string,
    home_team : string,
    visitor_team : string
}

function Match({date, home_team, visitor_team}: IMatch) : JSX.Element{
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.local}>
                    <img src={`./../../images/teams/${home_team}.png`}/>
                    <p>{home_team}</p>
                </div>
                <div className={styles.hour}>
                    <p>{date?.slice(0, 10)}</p>
                </div>
                <div className={styles.visitant}>
                <img src={`./../../images/teams/${visitor_team}.png`}/>
                    <p>{visitor_team}</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p></p>
                <button>See Statistics</button>
            </div>
        </div>
    );
}

export default Match;