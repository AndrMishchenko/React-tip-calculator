import './App.css';
import {useEffect, useState} from 'react'
import title from './Photo/logo.svg' 
import doll from './Photo/dollar.svg'
import pers from './Photo/person.svg'

function App() {

  const [price, setPrice] = useState(0);
  const [tip, setTip] = useState(0);
  
  const [customTip, setCustomTip] = useState(0)
  const [customTipResult, setCustomTipResult] = useState(0)
  const [customTipPerson, setCustomTipPerson] = useState(0)

  const [person, setPerson] = useState(1);

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalTipAmount, setTotalTipAmount] = useState(0);

  const [infoPeople, setInfoPeople] = useState('')

  console.log(typeof customTip)

  useEffect(() => {
    if(person < 1){
      setTotal(price)
    }if(person >= 1){
      const calcTotal = (price + tipAmount) / person;
      setTotal(calcTotal.toFixed(2))
    }
  }, [price, person, tipAmount])

  useEffect(() => {
    if(person === 1){
      setTotalTipAmount(tipAmount)
    }if(person > 1){
      const calcTip = tipAmount / person
      setTotalTipAmount(calcTip)
    }
  },[person, tipAmount])

  useEffect(() => {
    const calcTip = price * (tip / 100)
    setTipAmount(calcTip)
  }, [tip])

  const getTip = (e) => {
    e.preventDefault();
    setTip(Number(e.target.textContent))
  }

  useEffect(() => {
    const calcCustomTip = price * (customTip / 100)
    setCustomTipResult(Number(calcCustomTip.toFixed(2)))
  })

  useEffect(() => {
    const calcperTip = customTipResult / person;
    setCustomTipPerson(Number(calcperTip))
  })

  useEffect(() => {
    if(person === 0){
      setInfoPeople('Can`t be zero')
    }else{
      setInfoPeople('')
    }
  })

  return (
    <>
    <div className='wrapper'>
      <div className='head-img'>
        <img src={title}></img>
      </div>
      <div className='wrapper-tip-block'>
        <div className='main-box-tip'>
        <form className='block-enter-value'>
            <p className='bill-input-text'>Bill</p>
              <div className='block-bill-input'>
                <img src={doll}></img>
                <input
                  className='bill-input'
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  step="0.01"
                ></input>
              </div>
          <p className='tip-text'>Select Tip %</p>
          <div className='tip-block'>
            <button onClick={getTip}>5</button>
            <button onClick={getTip}>10</button>
            <button onClick={getTip}>15</button>
            <button onClick={getTip}>20</button>
            <button onClick={getTip}>25</button>
            <input
              value={customTip}
              onChange={(e) => setCustomTip(Number(e.target.value))}
              placeholder='custom'
              className='custom-tip'
            ></input>
          </div>
            <div className='block-people'>
              <p className='numb-people'>Number of People</p>
              <p className='not-people'>{infoPeople}</p>
            </div>
            <div className='block-person-input'>
              <img 
                src={pers}
                className='img-pers'
              ></img>
              <input
                value={person}
                onChange={(e) => setPerson(Number(e.target.value))}
                className='person-input'
              ></input>
            </div>
          
          </form>
          <div className='block-output-value'>
            <div className='output-value'>
              <div className='block-tip-person'>
                { totalTipAmount === 0 
                  ? 
                    <div className='tip-person'>
                      <div className='tip-amount-person'>
                        <p>Tip Amount</p>
                        <p>/ person</p>
                      </div>
                      <div className='test'>
                        <p>${customTipPerson.toFixed(2)}</p>
                      </div> 
                    </div>
                  : 
                    <div className='tip-person'>
                      <div>
                        <p>Tip Amount</p>
                        <p>/ person</p>
                      </div>
                      <div className='test'>
                        <p>${totalTipAmount.toFixed(2)}</p>
                      </div> 
                    </div>
                }
              </div>
              
              <div className='block-total-person'>
                <div className='total-person'>
                  <p>Total</p>
                  <p>/ person</p>
                </div>
                <div className='total'>${total}</div>
              </div>
              
              <button className='reset'>RESET</button>
            </div> 
          </div>
          
        </div>
      </div>
      
    </div>
    </>
  );
}

export default App;

/**/