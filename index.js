import axios from "axios";
import Wallet from "./lib/Wallets/wallet";
import Self from "./lib/Self/self";
/** 
 * @class VirtualWallet
 */

class VirtualWallet{
     static wallet=Wallet
     static self= Self
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
    }
}
export default VirtualWallet