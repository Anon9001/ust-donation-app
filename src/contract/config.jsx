export const CONTRACT_ADDR = "terra1exnvs2xzk52fhf322pqtw3fs5yek97aqqtrym7lqu4ddr73xs5qqqhdlxr";
export const CHAIN_ID = 895;
export const URL = "https://pisco-lcd.terra.dev";
export const networkAllowed = "pisco";

 export const currencies = [

    {
        name: "Luna",
        denom: "uluna",
    }
];

export const refundAlgo = [
    {
        title: "Distribute to the smallest holders first",
        value: "0",
        description: "The algo will make whole smallest wallets first."
    },
    {
        title: "Distribute to all wallets",
        value: "1",
        description: "The algo will pick up a randomly choosen wallet and make it whole. It will repeat the processuntil the given amount is exhausted"
    },
    {
        title: "Distribute to the smallest holders on-chain first",
        value: "2",
        description: "The algo will make whole smallest wallets first. Only people who bought UST on-chain (swap/dex) will be choosen. Off-chain wallets will have better chance to be refunded by exchanges."
    },
    {
        title: "Distribute to the smallest holders off-chain first",
        value: "3",
        description: "The algo will make whole smallest wallets first. Only people who bought UST on exchanges will be choosen."
    },
];