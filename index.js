import axios from "axios";
import Wallet from "./lib/Wallets/wallet";
import Self from "./lib/Self/self";
import Card from "./lib/Card/card";
import airtime from "./lib/Airtime"
import Airtime from "./lib/Airtime/airtime";
/** 
 * @class VirtualWallet
 */

class VirtualWallet{
     static wallet=Wallet
     static self= Self
     static card=Card
     static airtime= Airtime
     // public Bank
    /**
     * 
     * @param {Object}  options  It would be an option of the 
     * secret key and public key with a boolean 
     * 
     */
    constructor(options){
        axios.defaults.headers.Authorization =`Bearer ${options.publicKey}`;
        axios.defaults.headers["Content-type"]="application/json";
        axios.defaults.baseURL=options.origin?'https://sandbox.wallets.africa/': 'https://api.wallets.africa/';
        this.wallet.secretKey=options.secretKey
        this.self.secretKey=options.secretKey
        this.card.secretKey=options.secretKey
        this.airtime.secretKey=options.secretKey
    }
}
export default VirtualWallet