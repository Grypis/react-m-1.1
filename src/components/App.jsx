/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
 */

/* function Product() {
  return (
    <div>
      <h2>Coockie</h2>
      <p>Price: 999 credits</p>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1>Product</h1>
      <Product />
      <Product />
      <Product />
    </div>
  );
} */

import Product from "./Product";
  
export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    </div>
  );
}



// import Mailbox from "./Mailbox";

/* const favBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book, index) => {
        return <li key={index}>{book.name}</li>
      })}
    </ul>
  );
}; 

const App = () => {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favBooks}/>
    </>
  )
} */

const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
  }

export const Alert = ({children}) => {
  return (
    <p style={alertStyles}>Please update your email!</p>,
    <p style={alertStyles}>Theetre</p>

  );
};