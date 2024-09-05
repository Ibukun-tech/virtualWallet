import axios  from "axios";
import {ResolveObjectAndEndPoint as ROAE} from "../util.js"
/**
 * @class Card
 */

class Card{
    static endPoint="cards"
    static secretKey=""

    /**
     * 
     * @param {Object} option - The options should contain
     * amount - decimal - amount to fund the card
     * firstName - string - first name of the card holder
     * lastName - string - last name of the card holder
     * email - string - email account of the holder
     * dob(date of birth) - string - Date of birth of card holder
     * idNo - string -  Valid Identity Number (e.g. BVN) of Card holder
     * idType - decimal - Identity type of card holder
     * currency - string -  Card Currency "USD" or "NGN"
     * isPhyscialCard - Boolean - Type of card to be created true(For Physical card) false(for virtual card)
     * address - string - Delivery Address of Cardholder for Physical Cards
     * stateId - decimal - Delivery Stateid of Cardholder(Physical cards only) 
     * @returns {Object} 
     */
    static async CreateCard(option){
        const {data, endpoint}=ROAE(option, this.secretKey, this.endPoint)
        return axios.post(`${endpoint}/create`, data)
    }

    /**
     * 
     * @param {Object} option This should contain
     * cardId - string - CardId to fund
     * amount - decimal - amount to fund 
     * @returns {Object}
     */
    static async FundCard(option){
        const {data, endPoint}=ROAE(option, this.secretKey, this.endPoint)
        return axios.post(`${endPoint}/fund`,data )
    }

    /**
     * @param {Object} option - This should contain
     * cardId - string - CardId to fund
     * amount - decimal - amount to fund 
     * @returns {Object}
     */
    static async DebitCard(option){
        const {data:debitData, endpoint }=ROAE(option, this.secretKey, this.endPoint)
        return axios.post(`${endpoint}/withdraw`, debitData)
    }

    /**
     * 
     * 
     * @param {Object} option - This should contain 
     *  cardId - string - CardId to fund
     * @returns {Object}
     */
    static async FreezeCard(option){
        const {data, endpoint}=ROAE(option, this.secretKey, this.endPoint)
        return axios.post(`${endpoint}/freeze`, data)
    }

    /**
     * @param {Object} option - This should contain
     * cardId - string - CardId to fund
     * 
     * @returns {Object}
     */
    static async UnFreezeCard(option){
        const {data, endPoint}=ROAE(option, this.secretKey, this.endPoint)
        return axios.post(`${endPoint}/unfreeze`, data)
    }

    /** 
     * @param {Object} option -This should contain
     * cardId - string - CardId to fund
     * @returns {Object}  
    */
    static async CardDetails(option){
        const {data, endPoint}=ROAE(option, this.secretKey, this.endPoint)
        return axios.post(`${endPoint}/details` ,data)
    }

    /**
     * 
     * @param {Object} option - This should contain 
     * cardId - string - CardId to fund
     * @returns {Object}
     */
    static async CardTransactions(option){
        const {data, endPoint}=ROAE(option, this.secretKey, this.endPoint)
        return axios.post(`${endPoint}/transactions`, data)
    }

    /**
     * @param {Object} option - This should contain 
     * cardId - string - CardId to fund
     * pin - string - new pin you want to change to  
     * @returns {Object} 
     */
    static async ChangePin(option){
        const {data, endPoint}=ROAE(option, this.secretKey, this.endPoint)
        return axios.post(`${endPoint}/ChangePin`, data)
    }
}

export default Card