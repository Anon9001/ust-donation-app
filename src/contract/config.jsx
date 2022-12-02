export const CONTRACT_ADDR = "terra1gcgp0nsr9cu0w4vue64c80q67q32ws69avja2gfal3wcvnyn6d4sngmwl5";
export const CHAIN_ID = 799;
export const URL = "https://phoenix-lcd.terra.dev/";
export const networkAllowed = "phoenix-1";

export const currencies = [
    {
        name: "axlUSDT",
        denom: "ibc/B3504E092456BA618CC28AC671A71FB08C6CA0FD0BE7C8A5B5A3E2DD933CC9E4",
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
