export const CONTRACT_ADDR = "terra12r6gl4czhye2rejzuawyryaj30wsvnch3qr0ped4aknwzz9lua5qm46xx8";
export const CHAIN_ID = 205;
export const URL = "https://phoenix-lcd.terra.dev/";
export const networkAllowed = "phoenix-1";

export const currencies = [
    {
        name: "aUSDC",
        denom: "ibc/CBF67A2BCF6CAE343FDF251E510C8E18C361FC02B23430C121116E0811835DEF",
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
