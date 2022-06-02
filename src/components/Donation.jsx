import {useState} from "react";
import {FaHeart} from 'react-icons/fa'
import usdc from "../assets/usdc.svg"
import usdt from "../assets/usdt.svg"
import {RiInformationFill} from 'react-icons/ri'
import Wallet from '../assets/wallet.png'
import {truncate} from "../shared/Utils";

function Donation() {

    const [amount, setAmount] = useState(0);
    const [refundType, setRefundType] = useState("0");
    const [currency, setCurrency] = useState({name:"USDT"});
    const [txResult, setTxResult] = useState({status: 0, message: ""});
    const [walletConnected, setWalletConnected] = useState(false)
    const [address, setAddress] = useState("");
    const [amountAvailable, setAmountAvailable] = useState(0);

    const currencies = [
        {
            name: "USDT",
            icon: usdt
        },
        {
            name: "USDC",
            icon: usdc
        }
    ];

    const refundAlgo = [
        {
            title: "Distribute to 10% smallest holders only",
            value: "0",
            description: "Insert description here"
        },
        {
            title: "Distribute to all wallets",
            value: "1",
            description: "Insert description here"
        },
        {
            title: "Distribute to all wallets with a 50k cap",
            value: "2",
            description: "Insert description here"
        },
        {
            title: "Distribute to all wallets with a 200k cap",
            value: "3",
            description: "Insert description here"
        }
    ];

    const updateAmount = (e) => {
        const val = e.target.value;
        if (e.target.validity.valid) setAmount(val);
    }

    const handleSelect = (e) => {
        setCurrency({ name: e.target.value });
    }

    const handleRadioButton = (e) => {
        setRefundType(e.target.value)
    }

    const handleButton = () => {
        console.log("Amount: " + amount );
        console.log("RefundType: " + refundType );
        console.log("Currency: " + currency.name );
        if(amount === 0)
            setTxResult({status: 2, message: "Amount = 0"})
        else
            setTxResult({status: 1, message: ""})
    }

    const handleConnectWallet = async() => {
        if(!walletConnected){
            setAddress("0x00347788ab87398bc833921903")
            setAmountAvailable(964.6)
            setWalletConnected(true)
        }
        else{
            setAddress("")
            setAmountAvailable(0)
            setWalletConnected(false)
        }
    }

    return(
        <div className="mt-8">
            <div className="card border-2 border-gray-500 text-primary-content shadow-[0_0_60px_-10px] shadow-cyan-500">
                <div className="card-body p-6">
                    <p className="text-xl text-cyan-300 font-bold text-center uppercase mb-4">Donation</p>
                    {
                        walletConnected && (
                            <span className="caption text-sm md:text-xs text-gray-500 mt-4">Address: {truncate(address)}</span>
                        )
                    }

                    <div className="rounded-lg bg-gray-700 py-2 px-4 mb-4">
                        <div className="flex justify-between items-center">
                            <span className="caption text-sm md:text-sm text-gray-400">Currency</span>
                            <div className="flex items-center">
                                <span className="caption text-sm md:text-xs text-gray-400">Available:</span>
                                <span className="caption text-sm md:text-xs font-bold text-accent ml-1.5">{amountAvailable}</span>
                            </div>
                        </div>
                        <div className="flex items-center mt-3">
                            <div className="flex items-center justify-center mb-3">
                                <select className="select select-bordered" value={currency.name}  onChange={handleSelect}>
                                    {currencies.map((currency) => (
                                        <option value={currency.name} key={currency.name}>{currency.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex-1"></div>
                            <input type="text"
                                   value={amount}
                                   onChange={updateAmount}
                                   pattern="^-?[0-9]\d*\.?\d*$"
                                   placeholder="0.0"
                                   min="0" maxLength="15"
                                   autoComplete="off" autoCorrect="off"
                                   className="input text-2xl text-right bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="px-4 mb-4">
                        <span className="text-gray-400">Refund Type</span>
                        <div className="mt-2">
                            {
                                refundAlgo && refundAlgo.length > 0 ? (
                                    refundAlgo.map((item) => (
                                        <div className="" key={item.value}>
                                            <label className="label cursor-pointer inline-flex items-center">
                                                <input type="radio"
                                                       value={item.value}
                                                       checked={ refundType === item.value}
                                                       onChange={handleRadioButton}
                                                       className="radio checked:bg-cyan-500"/>
                                                <span className="label-text ml-4 mr-2">{item.title}</span>
                                                <span  className="tooltip" data-tip={item.description}><RiInformationFill/></span>
                                            </label>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-xl font-bold">Nothing yet...</p>
                                )
                            }
                        </div>
                    </div>
                    {
                        txResult.status === 1 && (
                            <div className="alert alert-success shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6"
                                         fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>Thank you very much for your donation!</span>
                                </div>
                            </div>
                        ) || txResult.status === 2 && (
                            <div className="alert alert-error shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>Transaction error: {txResult.message}</span>
                                </div>
                            </div>
                        )
                    }


                    <div className="card-actions justify-center mt-4">
                        {
                            !walletConnected ? (
                                <button className="btn btn-accent gap-2" onClick={handleConnectWallet}>
                                    <img src={Wallet} alt="wallet" className="h-6"/>
                                    <span>Connect Wallet</span>
                                </button>
                            ) : (
                                <button className="btn btn-accent gap-2" onClick={handleButton}>
                                    <span>Donate</span>
                                    <FaHeart/>
                                </button>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Donation