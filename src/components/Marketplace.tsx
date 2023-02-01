import React,{useContext} from 'react'
import  Navbar from './Navbar'
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import TransactionContext from '../context/TransactionContext';

const Input = ({placeholder,name,type,value,handleChange}) => (
    <input 
      placeholder={placeholder}
      type={type}
      step="0.001"
      value={value}
      onChange={(e) => handleChange(e,name)}
      className=" my-2 w-full rounded-sm p-2 text-white outline-none bg-transparent border-none text-sm"
      required
     />
  )
const Marketplace = () => {
    const { connectWallet, currentAccount,formData, setFormData,handleChange,sendTransaction, isLoading } = useContext(TransactionContext)
    const handleSubmit = (e) => {
      const { addressTo, amount, keyword, message } = formData;
  
      e.preventDefault();
  
      if (!addressTo || !amount || !keyword || !message) return;
  
      sendTransaction();
    };
  
  
  return (
    <div className='gradient-bg-transactions'>
    <Navbar/>
    <div className="flex w-full justify-center items-center">
          <div className="flex mf:flex-row  flex-col items-start justify-between md:p-20 py-12 px-4 ">
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
        <h1 className="sm:text-3xl text-white align-content:center py-1">
           Uzupełnij wszystkie pola właściwymi wartościami, aby dokonać transakcji
            </h1>
            <p className="text-center mt-5 text-white font-light">
              <b>Twoja sieć:</b>
              <br/>
              <br/>
            </p>
          
                  <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card">
                    <div className="flex justify-between flex-col w-full h-full">
                      <div className="flex justify-between items-start">
                          <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                          <SiEthereum fontSize={21} color="#fff" />
                          </div>
                          <BsInfoCircle fontSize={17} color="#fff" />
                      </div>
                      <div>
                        <p className="text-white font-light text-sm">
                        {shortenAddress(currentAccount)}
                        </p>
                        <p className="text-white font-semibold text-lg mt-1">
                        Sieć Ethereum
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                      <Input placeholder="Adres odbiorcy" name="addressTo" type="text" handleChange={handleChange} value={undefined}/>
                      <Input placeholder="Suma ETH" name="amount" type="number" handleChange={handleChange} value={undefined}/>
                      <Input placeholder="Słowa kluczowe" name="keyword" type="text" handleChange={handleChange} value={undefined}/>
                      <Input placeholder="Wiadomość do odbiorcy" name="message" type="text" handleChange={handleChange} value={undefined}/>

                      <div className="h-[1px] w-full bg-gray-400 my-2" />
                      {isLoading
                      ? <Loader />
                      : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#201a7a] rounded cursor-pointer"
                        >
                        Wyślij
                        </button>
                  )}
                  </div>
                </div>
            </div>
            </div>
    </div>
    
  )
}

export default Marketplace