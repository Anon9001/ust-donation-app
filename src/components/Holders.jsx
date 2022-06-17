import Table, { AvatarCell, StatusPill } from "./Table";
import {nFormatter, truncate} from "../shared/Utils";
import {useMemo} from "react";

function Holders({ victims, querySucceed }) {

    const columns = useMemo(() => [
        {
            Header: "Address",
            accessor: 'address',
        },
        {
            Header: "Amount",
            accessor: 'victim.amount_owed',
        },
        {
            Header: "Progress",
            accessor: 'victim.amount_recived',
        }
    ], [])

    return (
        <div className="mt-8">
            <div className="divider mb-8">Rekt list</div>
            {
                querySucceed ? (
                    <Table columns={columns} data={victims}/>
                ) : (
                    <div className="flex items-center justify-center mb-6">
                        <p className="text-sm text-error font-bold text-center">Failed getting victims data</p>
                    </div>
                )
            }
        </div>
    )
}

export default Holders