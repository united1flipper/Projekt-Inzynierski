import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import  Navbar from './Navbar'

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  return(
    <div className="blue-glassmorphism m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md ho">
    
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base"><b>Od</b>: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base"><b>Do</b>: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white text-base"><b>Suma</b>: {amount} ETH</p>
          {message && (
            <>
            
              <p className="text-white text-base"><b>Wiadomość</b>: {message}</p>
            </>
          )}
        </div>
        <div className=" p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>

  )
}

const Transactions = () => {

  const {currentAccount,transactions} = useContext(TransactionContext);

  return (
    <div className="gradient-bg-transactions">
      <Navbar/>
    <div className="flex w-full justify-center items-center 2xl:px-20">
      
      <div className="flex flex-col md:p-12 py-12 px-4">
      {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Ostatnie transakcje
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Połacz się ze swoim kontem MetaMask, aby zobaczyć ostatnie transakcje
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
        {transactions.reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Transactions