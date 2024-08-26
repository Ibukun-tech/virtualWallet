import axios from "axios"
import {ResolveObjectAndEndPoint as ROAE} from "../util"
class Airtime {
   static endPoint ="airtime" 
   static secretKey=""

   static async AirtimeProvider(){
    const body={secretKey:this.secretKey}
    return axios.post(`${this.endPoint}/providers`, body)
   }

   /**
    * 
    * @param {Object} option 
    * @returns 
    */
   static async AirtimePurchase(option){
    const{body,endpoint} = ROAE(option,  this.secretKey, this.endPoint)
    return axios.post(`${endpoint}/purchase`, body)
   }
}

export default Airtime