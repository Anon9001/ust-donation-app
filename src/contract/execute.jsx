import {LCDClient, MsgExecuteContract, Fee, Coins, Coin} from "@terra-money/terra.js";
import {CONTRACT_ADDR, URL, CHAIN_ID} from "./config";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const until = Date.now() + 1000 * 60 * 60;
const untilInterval = Date.now() + 1000 * 60;

const msgDonate = (donations) => {
    return {
        donate: {
            donations: donations
        }
    };
}

const _exec = (msg, amountToSend: Number, denom) => async (wallet) => {
    const lcd = new LCDClient({
        URL: URL,
        chainID: CHAIN_ID,
    });

    let msgExeCon = new MsgExecuteContract();

    if (amountToSend > 0) {
        const c = new Coin(denom, amountToSend.valueOf()); // .0015 LUNA
        msgExeCon = new MsgExecuteContract(
            wallet.walletAddress,
            CONTRACT_ADDR,
            msg,
            new Coins([c])
        )
    }
    else{
        msgExeCon = new MsgExecuteContract(
            wallet.walletAddress,
            CONTRACT_ADDR,
            msg,
        )
    }

    const { result } = await wallet.post({
        msgs: [
            msgExeCon,
        ],
    });

    while (true) {
        try {
            return await lcd.tx.txInfo(result.txhash);
        } catch (e) {
            if (Date.now() < untilInterval) {
                await sleep(500);
            } else if (Date.now() < until) {
                await sleep(1000 * 10);
            } else {
                throw new Error(
                    `Transaction queued. To verify the status, please check the transaction hash: ${result.txhash}`
                );
            }
        }
    }
};

export const execDonate = async (wallet, donations, amountToSend, denom) => _exec(msgDonate(donations), amountToSend, denom)(wallet);