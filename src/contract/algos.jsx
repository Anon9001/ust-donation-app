export const algoSmallestWallets = (victims, amountToDonate) => {
    const copy = [...victims];

    let filtered = copy.filter(victim => {
        return victim.victim.amount_owed !== victim.victim.amount_recived;
    });

    filtered = filtered.sort((a, b) => a.victim.amount_owed - b.victim.amount_owed)

    console.log("amountToDonate: ", amountToDonate)
    console.log("Before: ", filtered)

    let totalAmountToSend = 0;
    let victimsArray = [];
    while (filtered.length > 0 && amountToDonate > 0){
        let amountToSend = 0;
        const diff = filtered[0].victim.amount_owed - filtered[0].victim.amount_recived;
        console.log("Diff: ", diff)
        if(amountToDonate >= diff){
            amountToSend = diff;
            amountToDonate = amountToDonate - diff;
        }
        else{
            amountToSend = amountToDonate;
            amountToDonate = 0;
        }
        totalAmountToSend += amountToSend;

        victimsArray.push(
            {
                address : filtered[0].address,
                amt : amountToSend
            }
        )

        filtered = filtered.slice(1);
        console.log("Round: ", filtered)
    }

    console.log("Send: ", victimsArray)
    return {
        victimsArray: victimsArray,
        totalAmount : totalAmountToSend,
    };
}