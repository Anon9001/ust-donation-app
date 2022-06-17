export const CONTRACT_ADDR = "terra1ehl4z9a6rkxet9wltasm8s0563tlpp7792rnpnktmz5al3zx8cws3h4lwt";
export const CHAIN_ID = 681;
export const URL = "https://pisco-lcd.terra.dev";
export const networkAllowed = "pisco";

 export const currencies = [
    {
        name: "USDT",
        denom: "uusdt",
    },
    {
        name: "USDC",
        denom: "uusdc",
    },
    {
        name: "Luna",
        denom: "uluna",
    }
];

export const refundAlgo = [
    {
        title: "Distribute to the smallest holders first",
        value: "0",
        description: "Insert description here"
    },
    {
        title: "Distribute to all wallets with a 10k cap",
        value: "1",
        description: "Insert description here"
    },
    {
        title: "Distribute to all wallets",
        value: "2",
        description: "Insert description here"
    },
];