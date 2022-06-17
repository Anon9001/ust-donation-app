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
        victims.forEach((victim) => {
            totalNeeded += victim.victim.amount_owed;
            totalRefunded += victim.victim.amount_recived;
        })

        totalNeeded = totalNeeded*Math.pow(10, -6)
        totalRefunded = totalRefunded*Math.pow(10, -6)
        const refundedPourcentage = Math.ceil(((totalRefunded/totalNeeded) > 1 ? 1 : totalRefunded/totalNeeded)*100)
        setFundsNeeded(nFormatter(totalNeeded, 1))
        setHoldersCount(nFormatter(victims.length, 1))
        setPourcentageRefunded(refundedPourcentage)
    }

    useEffect(() => {
        setLoading(false)

        if(victims && victims.length > 0)
            calculStats()
    }, [victims])

    if(!loading) {
        return(
            <div className="mt-8">
                <div className="divider">Stats</div>
                <div className="stats flex justify-center shadow border-2 border-gray-500 mt-4">
                    <div className="stat place-items-center">
                        <div className="stat-title">Funds needed</div>
                        <div className="stat-value text-white">{fundsNeeded}$</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Holders Rekt</div>
                        <div className="stat-value text-accent">{holdersCount}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Refunded</div>
                        <progress className="progress progress-accent w-32" value={pourcentageRefunded} max="100"/>
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