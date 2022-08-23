import styles from './Matches.module.css';
import Match from './Match';
import { useState, useEffect } from 'react';

function Matches() : JSX.Element{

    interface ITeam {
        id : number,
        abbreviation : string,
        city: string,
        conference : string,
        division : string,
        full_name : string,
        name : string
    }

    interface IData {
        id : number,
        date : string,
        home_team : ITeam;
        home_team_score : number,
        period : number,
        postseason : boolean,
        season : number,
        status : string,
        time : string,
        visitor_team: ITeam;
        visitor_team_score: number
    }

    const [data, setData] = useState<IData[]>([]);

    useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/games")
            .then(res => res.json())
            .then(data => {
                let tempData = [];
                tempData = [...data.data];
                console.log(tempData);
                setData([...tempData]);
            })
    },[])

    return (
        <div className={styles.container}>
            <h1>Replay Match</h1>
            <p>Replay your favorite match to get insights of your favorite player.</p>
            <button className={`btn btn-warning ${styles.buttonMore}`}>More Upcoming Matches</button>
            {/* Using 1,2,3 and 4 to show only first 4 elements*/}
            <div className={styles.matches}>
                {[1,2,3,4].map(i  => <Match key={i} date = {data[i]?.date} home_team = {data[i]?.home_team.abbreviation} visitor_team = {data[i]?.visitor_team.abbreviation}/>)}
            </div>
        </div>
    );
}

export default Matches;