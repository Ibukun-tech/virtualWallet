import axios from "axios"
import {ResolveObjectAndEndPoint as ROAE} from "../util.js"
/**
 * 
 * @class  Wallet
 */
class Wallet{
 static secretKey =""
 static endPoint="/wallet"
 
/**
 * 
 * @param {Object} options This Objects contains   "transactionReference": "2716707355", "amount": 200, "phoneNumber": "08057998539",  
 * @returns {Object}
 */
 static async Debit(options){
    const data ={...options, secretKey:this.secretKey}
    const url=`${this.endPoint}/debit`
    return axios.post(url,data)
 }
 /**
  * 
  * @param {Object} options "transactionReference": "2716707355", "amount": 200, "phoneNumber": "08057998539",
  * @returns {Object}
  */
 static async Credit(options){
    const data={...options, secretKey:this.secretKey}
    const url=`${this.endPoint}/credit`
    return axios.post(url, data)
 }

 /**
  * 
  * @param {Object} options The Option is an Object consisting of 
  * "firstName": "King",
  * "lastName": "Pharoah",
  * "Bvn":"222",
  * "email": "Pharoah@egypt.com",
  * "dateOfBirth": "1945-01-12",
  * "currency": "NGN"
  *  
  * @returns {Object}
  */
static async Generate(options){
    const data ={...options, secretKey:this.secretKey}
    const endPoint=`${this.endPoint}/generate`
    return axios.post(endPoint, data)
}

/**
 * 
 * @param {Object} options - The options is an object {phoneNumber:"09035822975"}
 * 
 * @returns {Object} 
 */
static async RetrieveAccountNumber(options){
    const data={...options, secretKey:this.secretKey}
    const endPoint=`${this.endPoint}/nuban`
    return axios.post(endPoint, data)
}

/** 
 * @param {Object} options - The PhoneNumber of your wallet and also the New password you want to set 
*/
static async SetPassword (options){
    // const data={...options, secretKey:this.secretKey}
    // const endPoint
    const {data, endPoint} =ROAE(options,this.secretKey, this.endPoint)
    return axios.post(`${endPoint}/password`, data)
}

/**
 *
 * @param {Object} options - The options take in the following parameters 
 * "phoneNumber": "13990205533",
 * "transactionPin": "0799",
 * "secretKey": "hfucj5jatq8h"
 *
 * @returns {Object}
 */

static async SetPin(options){
    const {data, endPoint}= ROAE(options, this.secretKey, this.endPoint)
    return axios.post(`${endPoint}/pin`, data)
}

/**
 * 
 * @param {Object} option - The option will *  "skip": 0,
 *  "take": 10,
 * "dateFrom": "2020-01-15",
 * "dateTo": "2020-01-15",
 * "transactionType": 1,
 * "phoneNumber": "08057998539",
 * "transactionPin": "1111",
 * "currency": "NGN",       -Currency Option can be Nigeria: NGN,USA: USD, GHANA: GHS, KENYA: KES
 * @returns {Object} 
 */
static async Transactions(option){
    const {data, endPoint}=ROAE(option, this.secretKey, this.endPoint)
    return axios.post(`${endPoint}/transactions`, data)
}
/**
 * 
 * @param {Object} option -The option will be an object it will take a phoneNumber which would be a string  
 * @returns  {Object}
 */
static async GetUserByPhoneNumber(option){
    const {data, endPoint}=ROAE(option, this.secretKey, this.endPoint)
    return axios.post(`${endPoint}/getuser`, data)
}
/**
 * 
 * @param {Object} option -The option will be an object it will take a phoneNumber which would be a string 
 * @returns {Object}
 */
static async GetUserByEmail(option){
    const {data, endPoint}=ROAE(option, this.secretKey, this.endPoint)
    return axios.post(`${endPoint}/getuser`, data)
}
/**
 * 
 * @param {Object} option -This is an Object which would take in a currency and also phoneNumber
 * @returns {Object}
 */
static async GetBalance(option){
    const {data, endPoint}=ROAE(option, this.secretKey, this.endPoint)
    return axios.post(`${endPoint}/balance`, data)
}
/**
 * 
 * @param {Object} option - This will take in an object of {
 *   "FirstName":"Jon",
 *   "LastName":"Spy",
 *   "Bvn":"222",
 *   "PhoneNumber":"2346134728127",
 *  "Email":"Jon@spy.com",
 *  "DateOfBirth" : "18-03-1981",
 * }  
 * @returns {Object} 
 */
static async UpdateBvn(option){
    const {data, endPoint}=ROAE(option, this.secretKey, this.endPoint)
    return axios.post(`${endPoint}/updatebvn, data`)
}
}
export default Wallet;