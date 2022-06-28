import {truncate, nFormatter} from "../shared/Utils";
import medal1 from "../assets/medal-1.png"
import medal2 from "../assets/medal-2.png"
import medal3 from "../assets/medal-3.png"
import {useEffect, useState} from "react";
import Spinner from "../shared/Spinner";

function Leaderboard({donors}) {

    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState(null)
    const nbEntries = 10;


    useEffect(() => {
        setLoading(false)

        if(donors && donors.length > 0){
            const datasTmp = donors.sort((a, b) => b.donation_amount - a.donation_amount).slice(0, nbEntries)
            setDatas(datasTmp)
        }
    }, [donors])

    if(!loading) {
        return (
            <div className="mt-8">
                <div className="divider">Leaderboard Donations - Top {nbEntries} Donors</div>
                <div className="flex justify-between items-center mt-8 mx-4">
                    <span className="caption text-xs md:text-xs text-gray-500">Address</span>
                    <span className="caption text-xs md:text-xs text-gray-500 text-right">Amount Donated</span>
                </div>
                <div>
                    {
                        datas && datas.length > 0 ? (
                                datas.map((item, index) => (
                                index < nbEntries && (
                                    <div key={item.address} className={index === 0 ? ("flex rounded-lg bg-gray-700 border border-yellow-500 my-4 py-2 px-4")
                                                                        : index === 1 ? ("flex rounded-lg bg-gray-700 border border-gray-200 my-4 mx-2 py-2 px-4")
                                                                        : index === 2 ? ("flex rounded-lg bg-gray-700 border border-orange-400 my-4 mx-4 py-2 px-4")
                                                                        : ("flex rounded-lg bg-gray-700 my-4 border border-gray-600 mx-6 py-1 px-4")}>
                                        {
                                            (index === 0 && (
                                                <div className="mr-2">
                                                    <img src={medal1} alt="first"/>
                                                </div>
                                            )) || (index === 1 && (
                                                <div className="mr-2">
                                                    <img src={medal2} alt="second"/>
                                                </div>
                                            )) || (index === 2 && (
                                                <div className="mr-2">
                                                    <img src={medal3} alt="third"/>
                                                </div>
                                            ))
                                        }
                                        <div className="flex justify-between w-full">
                                            <p className="w-5/6 break-all text-sm lg:text-lg">{item.address}</p>
                                            <p className="w-1/6 text-right">{nFormatter(item.donation_amount/1e6, 1)}</p>
                                        </div>
                                    </div>
                                )
                            ))
                        ):
                        (
                            <div className="flex items-center justify-center mt-4">
                                <p className="text-xl font-bold">No donor yet...</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="mt-8">
                <div className="divider">Leaderboard Donations - Top {nbEntries}</div>
                <div className="flex justify-center">
                    <Spinner/>
                </div>

            </div>
        )
    }
}

export default Leaderboard