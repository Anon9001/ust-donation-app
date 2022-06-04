import Table, { AvatarCell, StatusPill } from "./Table";
import {nFormatter, truncate} from "../shared/Utils";
import {useMemo} from "react";

const getData = () => {
    const data = [
        {
            address: truncate('0x27834649302a193848923020'),
            amount: nFormatter(83784593,1),
            status: 10,
        },
        {
            address: truncate('0x27834649302a193809484'),
            amount: nFormatter(274382,1),
            status: 42,
        },
        {
            address: truncate('0x27834649302a193843457484'),
            amount: nFormatter(2344,1),
            status: 53,
        },
        {
            address: truncate('0x2783464930289394594943'),
            amount: nFormatter(32934982,1),
            status: 83,
        },
        {
            address: truncate('0x27483392302a193848923020'),
            amount: nFormatter(1233,1),
            status: 8,
        },
        {
            address: truncate('0x27834649302a1AD9002'),
            amount: nFormatter(1000,1),
            status: '73',
        },
    ]
    return [...data, ...data, ...data, ...data]
}

function Holders() {

    const columns = useMemo(() => [
        {
            Header: "Address",
            accessor: 'address',
            Cell: AvatarCell,
        },
        {
            Header: "Amount",
            accessor: 'amount',
        },
        {
            Header: "Progress",
            accessor: 'status',
            Cell: StatusPill,
        }
    ], [])

    const data = useMemo(() => getData(), [])

    return (
        <div className="mt-8">
            <div className="divider mb-8">Rekt list</div>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default Holders