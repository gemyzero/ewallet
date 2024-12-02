import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import deposit from '../assets/deposit.gif'
import withdrow from '../assets/withdraw.gif'
export default function Balnce() {
    const [balnce, setBalnce] = useState(0);
    const [transsactions, setTranssactions] = useState([
      // {id:1 , beforBalns: 0 , amount:1000 ,type:'deposit', aftarBalns: 1000}
    ]);
    const balnceValue = useRef();
    const Deposit = () => {
      let amountInput = balnceValue.current.value;
      let oBalnce = balnce ? balnce : 0;
      let opjectDeposit = {
        id: transsactions.length + 1,
        beforBalns: oBalnce,
        amount: amountInput,
        type: "deposit",
        aftarBalns: oBalnce + +amountInput,
      };
      const orgnaltranssactions = [...transsactions];
      orgnaltranssactions.push(opjectDeposit);
      setTranssactions(orgnaltranssactions);
      setBalnce(oBalnce + +amountInput);
    };
    const Withdrow = () => {
      let amountInput = balnceValue.current.value;
  
      if (balnce >= amountInput) {
        let opjectWithdrow = {
          id: transsactions.length + 1,
          beforBalns: balnce,
          amount: amountInput,
          type: "withdrow",
          aftarBalns: balnce + +amountInput,
        };
        const orgnaltranssactions = [...transsactions];
        orgnaltranssactions.push(opjectWithdrow);
        setBalnce(balnce - +amountInput);
        setTranssactions(orgnaltranssactions);
      } else {
        alert("you can not pull cash ");
      }
  
      console.log(transsactions);
    };
  
    const Revers = (index) => {
      let oTrans = [...transsactions];
      oTrans.splice(index, 1);
      setTranssactions(oTrans);
      let opj = transsactions[index];
      setBalnce(opj.beforBalns);
    };
  
    useEffect(() => {
      if (balnce || balnce == 0) {
        localStorage.setItem("balnce", balnce);
        localStorage.setItem("transsactions", JSON.stringify(transsactions));
      }
      // else{
      //   let bal = localStorage.getItem('balnce')
      //   let tran = localStorage.getItem('transsactions')
      //   setBalnce(bal);
      //   setTranssactions(JSON.parse(tran));
      // }
    }, [balnce]);
    return (
      <div >
  <div className="bg-dark text-white p-5">
  <h1> the balnce is : {balnce}</h1>
  
  </div>
        <div className="d-flex justify-content-center">
          <div className="m-5 d-flex w-100 aline-align-items-center">
            <div className="btn btn-primary mx-2 " onClick={Deposit}>
            
            <div className="px-4 py-" >
  <img src={ deposit} alt="" style={{width:'50px'}}/>
              <h4>deposit</h4> 
  </div>
            </div>
            <input type="number" className=" my-auto form-control w-100" ref={balnceValue}  style={{height:'60px' , fontSize:'30px'}}/>
  
            <div
              className="btn btn-danger mx-2"
              disabled={balnce == 0 ? true : false}
              onClick={Withdrow}
            >
  <div >
  <img src={ withdrow} alt="" style={{width:'50px'}}/>
              <h4>withdrow</h4> 
  </div>
            </div>
          </div>
        </div>
        
        <div className="">
          <table className="table table-striped table-dark ">
            <thead>
              <h3>My Transactions</h3>
              <tr>
                <th>-</th>
                <th>Before Balance</th>
                <th>Type</th>
                <th>Amount</th>
                <th>After Balance</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {transsactions.map((el, index) => {
                return (
                  <tr key={index}>
                    <th>{el.id}</th>
                    <th>{el.beforBalns}</th>
                    <th>
                      {" "}
                      <button
                        className={`btn btn-${
                          el.type === "withdrow" ? "danger" : "primary"
                        }`}
                      >
                        {el.type}
                      </button>{" "}
                    </th>
                    <th>{el.amount}</th>
  
                    <th>{el.aftarBalns}</th>
                    <th>
                      {transsactions.length - 1 == index ? (
                        <button
                          onClick={() => {
                            Revers(index);
                          }}
                          className="btn btn-danger"
                        >
                          Revers
                        </button>
                      ) : null}
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
}
    
  