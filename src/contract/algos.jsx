export const algoSmallestWallets = (victims, amountToDonate) => {
    const copy = [...victims];

    let filtered = copy.filter(victim => {
        return Number(victim.victim.amount_owed) > Number(victim.victim.amount_recived);
    });

    filtered = filtered.sort((a, b) => Number(a.victim.amount_owed) - Number(b.victim.amount_owed))

    let totalAmountToSend = 0;
    let victimsArray = [];
    while (filtered.length > 0 && amountToDonate > 0){
        let amountToSend = 0;
        const diff = Number(filtered[0].victim.amount_owed) - Number(filtered[0].victim.amount_recived);

        amountToSend = (amountToDonate > diff) ? diff : amountToDonate;
        amountToDonate = (amountToDonate > diff) ? amountToDonate-diff : 0;
        totalAmountToSend += amountToSend;

        victimsArray.push(
            {
                address : filtered[0].address,
                amt : amountToSend.toString()
            }
        )
        filtered = filtered.slice(1);
    }

    return {
        victimsArray: victimsArray,
        totalAmount : totalAmountToSend.toString(),
    };
}

export const algoSmallestOnchainWallets = (victims, amountToDonate) => {
    const copy = [...victims];

    let filtered = copy.filter(victim => {
        return (Number(victim.victim.amount_owed) > Number(victim.victim.amount_recived)) &&
            (victim.victim.on_chain === true);
    });

    const test = [...filtered];

    filtered = filtered.sort((a, b) => Number(a.victim.amount_owed) - Number(b.victim.amount_owed))

    let totalAmountToSend = 0;
    let victimsArray = [];
    while (filtered.length > 0 && amountToDonate > 0){
        let amountToSend = 0;
        const diff = Number(filtered[0].victim.amount_owed) - Number(filtered[0].victim.amount_recived);

        amountToSend = (amountToDonate > diff) ? diff : amountToDonate;
        amountToDonate = (amountToDonate > diff) ? amountToDonate-diff : 0;
        totalAmountToSend += amountToSend;

        victimsArray.push(
            {
                address : filtered[0].address,
                amt : amountToSend.toString()
            }
        )
        filtered = filtered.slice(1);
    }

    return {
        victimsArray: victimsArray,
        totalAmount : totalAmountToSend.toString(),
    };
}

export const algoSmallestOffchainWallets = (victims, amountToDonate) => {
    const copy = [...victims];

    let filtered = copy.filter(victim => {
        return Number(victim.victim.amount_owed) > Number(victim.victim.amount_recived) &&
            (victim.victim.on_chain === false);
    });

    const test = [...filtered];

    filtered = filtered.sort((a, b) => Number(a.victim.amount_owed) - Number(b.victim.amount_owed))

    let totalAmountToSend = 0;
    let victimsArray = [];
    while (filtered.length > 0 && amountToDonate > 0){
        let amountToSend = 0;
        const diff = Number(filtered[0].victim.amount_owed) - Number(filtered[0].victim.amount_recived);

        amountToSend = (amountToDonate > diff) ? diff : amountToDonate;
        amountToDonate = (amountToDonate > diff) ? amountToDonate-diff : 0;
        totalAmountToSend += amountToSend;

        victimsArray.push(
            {
                address : filtered[0].address,
                amt : amountToSend.toString()
            }
        )
        filtered = filtered.slice(1);
    }

    return {
        victimsArray: victimsArray,
        totalAmount : totalAmountToSend.toString(),
    };
}

export const algoRandomWallets = (victims, amountToDonate) => {
    const copy = [...victims];

    let filtered = copy.filter(victim => {
        return Number(victim.victim.amount_owed) > Number(victim.victim.amount_recived);
    });

    let totalAmountToSend = 0;
    let victimsArray = [];
    while (filtered.length > 0 && amountToDonate > 0){
        let amountToSend = 0;
        const index = Math.floor(Math.random() * filtered.length);
        const diff = Number(filtered[index].victim.amount_owed) - Number(filtered[index].victim.amount_recived);
        amountToSend = (amountToDonate > diff) ? diff : amountToDonate;
        amountToDonate = (amountToDonate > diff) ? amountToDonate-diff : 0;
        totalAmountToSend += amountToSend;

        victimsArray.push(
            {
                address : filtered[index].address,
                amt : amountToSend.toString()
            }
        )
        filtered.splice( index, 1 );
    }

    return {
        victimsArray: victimsArray,
        totalAmount : totalAmountToSend.toString(),
    };
}