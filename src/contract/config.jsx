export const CONTRACT_ADDR = "terra1zuy5dmpamma8vaymuta94tyq59npk6sfxn8scwh63tjkwl8ahyjs524g3t";
export const CHAIN_ID = 1489;
export const URL = "https://pisco-lcd.terra.dev";
export const networkAllowed = "pisco";

export const currencies = [
    {
        name: "aUSDC",
        denom: "ibc/F91EA2C0A23697A1048E08C2F787E3A58AC6F706A1CD2257A504925158CFC0F3",
    }
];

export const informations = "Millions of people who used Anchor were conned into believing it was a safe savings account. When the Ponzi scheme collapsed, insiders escaped, while retail savers were left with nothing.  This donation portal will help those hardest-hit victims recover.";

export const refundAlgo = [
    {
        title: "Distribute to the smallest holders first",
        value: "0",
        description: "The algo will make whole smallest wallets first."
    },
    {
        title: "Distribute to random wallets",
        value: "1",
        description: "The algo will pick up a randomly choosen wallet and make it whole. It will repeat the process until the given amount is exhausted."
    },
    {
        title: "Distribute to the smallest holders on-chain first",
        value: "2",
        description: "The algo will make whole smallest wallets first. Only people who bought UST on-chain (swap/DEX) will be chosen. Off-chain wallets will have better chance to be refunded by exchanges."
    },
    {
        title: "Distribute to the smallest holders off-chain first",
        value: "3",
        description: "The algo will make whole smallest wallets first. Only people who bought UST on exchanges will be chosen."
    },
];