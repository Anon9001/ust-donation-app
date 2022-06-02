import Donation from "../components/Donation";
import Stats from "../components/Stats";
import Leaderboard from "../components/Leaderboard";
import Holders from "../components/Holders";

function Home(){

    return(
        <div className="container">
            <Donation/>
            <Stats/>
            <Leaderboard/>
            <Holders/>
        </div>
    )
}

export default Home