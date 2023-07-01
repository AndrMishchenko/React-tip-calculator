import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [price, setPrice] = useState();
  const [tip, setTip] = useState();
  const [person, setPerson] = useState(1);

  const [tipAmount, setTipAmount] = useState();
  const [total, setTotal] = useState()
  const [totalTipAmount, setTotalTipAmount] = useState('sdffsd')

  useEffect(() => {
    if(person < 1){
      setTotal(price)
    }if(person >= 1){
      const calcTotal = (price + tipAmount) / person;
      setTotal(calcTotal.toFixed(2))
    }
  })

  useEffect(() => {
    if(person === 1){
      setTotalTipAmount(tipAmount)
    }if(person > 1){
      const calcTip = tipAmount / person
      setTotalTipAmount(calcTip)
    }
  })

  useEffect(() => {
    const calcTip = price * (tip / 100)
    setTipAmount(calcTip)
  })

  const getTip = (e) => {
    e.preventDefault();
    setTip(Number(e.target.textContent))
  }

  return (
    <>
      <form>
        <input
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        ></input>
      <div>
        <button onClick={getTip}>5</button>
        <button onClick={getTip}>10</button>
        <button onClick={getTip}>15</button>
        <button onClick={getTip}>20</button>
        <button onClick={getTip}>25</button>
      </div>
      <div>Person
        <input
          value={person}
          onChange={(e) => setPerson(Number(e.target.value))}
        ></input>
      </div>
      </form>

      <p>price: {price}</p>
      <p>tip: {tip}</p>
      <p>person: {person}</p>

      <div>tipAmount: {tipAmount}</div>
      <div>Total Amount for person: {total}</div>
      <div>Tip Amount for person: {totalTipAmount}</div>
    </>
  );
}

export default App;