/**
 * @param {Object} options
 * @param {string} secretKey
 * @param {string} endPoint
 */
export const ResolveObjectAndEndPoint=(options, secretKey, endpoint)=>{
    return {data:{...options, secretKey}, endpoint}
}