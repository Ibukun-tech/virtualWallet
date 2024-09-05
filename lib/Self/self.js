import axios from "axios"
import {ResolveObjectAndEndPoint as ROAE } from "../util.js"
/**
 * @class Self
 */
class Self{
    static endPoint="self"
    static secretKey=""

    /**
     * 
     * @param {Object} option -This option takes in the currency The currency can be  Options
     * Nigeria: NGN
     * USA: USD
     * GHANA: GHS
     * KENYA: KES
     * @returns {Object}
     */
    static async CheckBalance(option){
        const {data, endpoint}=ROAE(option, this.secretKey, this.endPoint)
        return axios.post(`${endpoint}/balance`, data)
    }

    /**
     * 
     * @param {Object} option -The option would take an object which would take a 
     * skip - int - The amount of transaction items to skip
     * take - int - The amount of transaction data to return
     * dateFrom - datetimeFormat{yyyy-mm-dd} - The initial date    
     * dateTo - datetimeFormat{yyyy-mm-dd}- The final date  
     * TransactionType - int - The type of transaction- Credit = 1, Debit = 2, All = 0 or 3
     * Currency - string - The desired currency in which the wallet balance should be displayed in     * 
     * @returns {Object}
     */
    static async Transactions(option){
        const {data,endpoint}=ROAE(option, this.secretKey,this.endPoint)
        return axios.post(`${endpoint}/transactios`, data)
    }

    /**
     * @param {Object} option- This option will take 
     * skip - int - items to skip
     * take - int - items to take
     * @returns {Object} 
     */
    static async GetSubWallets(option){
        const {data, endpoint}=ROAE(option, this.secretKey, this.endPoint)
        return axios.post(`${endpoint}/users`, data)
    }  
}
export default Self