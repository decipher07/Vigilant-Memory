require('dotenv').config();
import  abi from './Transactions.json'

export const contractAddress = process.env.CONTRACTADDRESS;
export const contractABI = abi.abi;