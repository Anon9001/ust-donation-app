import {CONTRACT_ADDR, informations} from "../contract/config";

function Information() {
    return (
        <div className="card border border-cyan-400 shadow-lg mt-4  p-4">
            <div className="flex-col text-center">
                <p className="font-bold text-md">Informations:</p>
                <p className="text-sm ">{informations}</p>
                <p className="text-xs font-bold mt-6">Contract address</p>
                <p className="text-xs break-all">{CONTRACT_ADDR}</p>
            </div>
        </div>
    )
}

export default Information