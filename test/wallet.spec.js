import VirtualWallet from "../index";

//    secretKey: process.env.SECRET_KEY as string,
    // publicKey:  as string,
    // sandbox: true,
const virtual=new VirtualWallet({
 publicKey:process.env.PUBLIC_KEY,
 secretKey:process.env.SECRET_KEY,
 sandbox:true
})