import { useState } from 'react';
import Records from './components/Records.js';
import Receipt from './components/Receipt.js';
import './App.css';

function App() {
 

    const [receipts, setReceipts] = useState(Records);

     
 return (
    <div className="App">
    {receipts.map((receiptData, index) => {
      return <Receipt {...receiptData} key={index}/>
    })}
    </div>
  );

}

export default App;
