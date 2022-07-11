import {useEffect, useState} from "react";
import {nFormatter} from "../shared/Utils";
import Spinner from "../shared/Spinner";

function Stats({ victims, querySucceed }){
    const [fundsNeeded, setFundsNeeded] = useState(nFormatter(120000000, 1))
    const [holdersCount, setHoldersCount] = useState(nFormatter(1600, 1))
    const [pourcentageRefunded, setPourcentageRefunded] = useState(0)
    const [loading, setLoading] = useState(false)

    const calculStats = () => {

        let totalNeeded = 0;
        let totalRefunded = 0;
        let totalAmount = 0;
        victims.forEach((victim) => {
            totalAmount += Number(victim.victim.amount_owed)
            totalNeeded += (Number(victim.victim.amount_owed) - Math.min(Number(victim.victim.amount_recived), Number(victim.victim.amount_owed)));
            totalRefunded += Math.min(Number(victim.victim.amount_recived), Number(victim.victim.amount_owed));
        })

        totalNeeded = totalNeeded/1e6
        totalRefunded = totalRefunded/1e6
        totalAmount = totalAmount/1e6
        const refundedPourcentage = Math.ceil(((totalRefunded/totalAmount) > 1 ? 1 : totalRefunded/totalAmount)*100)
        setFundsNeeded(nFormatter(totalNeeded, 2))
        setHoldersCount(nFormatter(victims.length, 1))
        setPourcentageRefunded(refundedPourcentage)
    }

    useEffect(() => {
        setLoading(false)

        if(victims && victims.length > 0){
            calculStats()
        }
    }, [victims])

    if(!loading) {
        return(
            <div className="mt-8">
                <div className="divider">Stats</div>
                <div className="stats w-full stats-vertical sm:stats-horizontal shadow border-2 border-gray-500 mt-4">
                    <div className="stat place-items-center">
                        <div className="stat-title">Funds needed</div>
                        <div className="stat-value text-white">{fundsNeeded}$</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">UST Victims</div>
                        <div className="stat-value text-accent">{holdersCount}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Refunded</div>
                        <progress className="progress progress-accent my-2" value={pourcentageRefunded} max="100"/>
                        <div className="stat-desc text-white">{pourcentageRefunded}%</div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="mt-8">
                <div className="divider">Stats</div>
                <div className="flex justify-center">
                    <Spinner/>
                </div>

            </div>
        )
    }
}

export default Stats