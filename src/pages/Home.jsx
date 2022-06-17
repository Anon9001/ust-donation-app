import Donation from "../components/Donation";
import Stats from "../components/Stats";
import Leaderboard from "../components/Leaderboard";
import Holders from "../components/Holders";
import {useEffect, useState} from "react";
import {getAllVictims, getDonorsData} from "../contract/query";
import {algoSmallestWallets} from "../contract/algos";

function Home(){

    const [ victims, setVictims ] = useState([]);
    const [ donors, setDonors ] = useState([]);

    const [ queryVictimsSucceed, setQueryVictimsSucceed ] = useState(false);
    const [ queryDonorsSucceed, setQueryDonorsSucceed ] = useState(false);

    const requestAllVictims = () => {
        getAllVictims()
            .then(datas => {
                setVictims(datas.victims)
                setQueryVictimsSucceed(true)
                console.log("All victims: ", datas.victims);
            })
            .catch((error) => {
                setQueryVictimsSucceed(false)
                console.error("All victims error:", error);
            });
    }

    const requestDonors = () => {
        getDonorsData()
            .then(datas => {
                setDonors(datas.donations)
                setQueryDonorsSucceed(true)
                console.log("Donors: ", datas);
            })
            .catch((error) => {
                setQueryDonorsSucceed(false)
                console.error("All victims error:", error);
            });
    }

    const updateDatas = () => {
        requestAllVictims()
        requestDonors()
    }

    useEffect(() => {
        requestAllVictims()
        requestDonors()
    }, [])

    return(
        <div className="container">
            <Donation updateDatas={updateDatas} victims={victims}/>
            <Stats victims={victims} querySucceed={queryVictimsSucceed}/>
            <Leaderboard donors={donors}/>
            <Holders victims={victims} querySucceed={queryVictimsSucceed}/>
        </div>
    )
}

export default Home