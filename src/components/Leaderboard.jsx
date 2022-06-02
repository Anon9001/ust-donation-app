import {truncate, nFormatter} from "../shared/Utils";
import medal1 from "../assets/medal-1.png"
import medal2 from "../assets/medal-2.png"
import medal3 from "../assets/medal-3.png"
import {useState} from "react";
import Spinner from "../shared/Spinner";

function Leaderboard() {

    const [loading, setLoading] = useState(false)
    const nbEntries = 15;
    const leaderboard = [
        {
            address: "0x27834649302a193848923020",
            amount: 12392
        },
        {
            address: "0x27834649302a193848923021",
            amount: 123
        },
        {
            address: "0x2792837849201230201",
            amount: 94338
        },
        {
            address: "0x2792837849201230202",
            amount: 94338
        },
        {
            address: "0x2792837849201230203",
            amount: 9433883747
        }
    ];

    if(!loading) {
        return (
            <div className="mt-8">
                <div className="divider">Leaderboard Donations - Top {nbEntries}</div>
                <div className="flex justify-between items-center mt-8 mx-4">
                    <span className="caption text-xs md:text-xs text-gray-500">Address</span>
                    <span className="caption text-xs md:text-xs text-gray-500 text-right">Amount Donated</span>
                </div>
                <div>
                    {
                        leaderboard && leaderboard.length > 0 ? (
                            leaderboard.map((item, index) => (
                                index < nbEntries && (
                                    <div key={item.address} className={index === 0 ? ("flex rounded-lg bg-gray-700 border border-yellow-500 my-4 py-2 px-4")
                                                                        : index === 1 ? ("flex rounded-lg bg-gray-700 border border-gray-200 my-4 mx-2 py-2 px-4")
                                                                        : index === 2 ? ("flex rounded-lg bg-gray-700 border border-orange-400 my-4 mx-4 py-2 px-4")
                                                                        : ("flex rounded-lg bg-gray-700 my-4 border border-gray-600 mx-6 py-1 px-4")}>
                                        {
                                            index === 0 && (
                                                <div className="mr-2">
                                                    <img src={medal1} alt="first"/>
                                                </div>
                                            ) || index === 1 && (
                                                <div className="mr-2">
                                                    <img src={medal2} alt="second"/>
                                                </div>
                                            ) || index === 2 && (
                                                <div className="mr-2">
                                                    <img src={medal3} alt="third"/>
                                                </div>
                                            )
                                        }
                                        <div className="flex justify-between w-full">
                                            <div>{truncate(item.address)}</div>
                                            <p className="text-right text-lg">{nFormatter(item.amount, 1)}</p>
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