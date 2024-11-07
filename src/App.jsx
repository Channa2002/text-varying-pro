
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function App() {

  const [text, setText] = useState("intial text");

  useEffect(() => {
    const intervalid = setInterval(() => {
      setText(() => {
        const words = ["hello", "world", "react", "useEffect"];
        // console.log(randomWord)
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
        return randomWord;
      });
    }, 1000);
    return () => clearInterval(intervalid);
  }, []);

  return (
    <>
      <div className='wrapper'>

        <div className='top-bar'>
          <button>Announcement</button>
          <p>
             <span>introducing</span>
             <span>mongoDb</span>
             <span>fastest</span> 
             <span>growing</span> 
          </p>
          <a href="#">link</a>
        </div>

        <div className='nav-bar'>

          <div>
          <img src="https://logotyp.us/file/mongodb.svg" width={200} height={200}  alt="" />
          </div>

          <div className='list-bar'>
          <div>
            <p>pricing</p>
          </div>
          <div>
            <p>resources</p>
          </div>
          <div>
            <p>products</p>
          </div>
          <div>
            <p>solutions</p>
          </div>
          <div>
            <p>company</p>
          </div>
          </div>

          <div className='about-section'>
            <div>
              <p>eng</p>
            </div>

            <div>
              <p>support</p>
            </div>

            <div>
              <p>signin</p>
            </div>
            
            <div>
             <button>try free</button>
            </div>
          </div>
        </div>

        <div className="body-section">
          <div className='demo-section'>
            <button>Try Free Demo</button>
            <p> Take a free test drive of MongoDB Atlas...</p>
          </div>
        </div>

        <div className="content-data">
          <h3>
          Loved by developers.
          <br />
          Built for <span className='changing-text'>{text}</span>
          </h3>

          <p>
          You don&apos;t need a separate database to support transactions, rich search, or gen AI.
          The world&apos;s <br /> most popular document database is now the world&apos;s most versatile developer data platform
          </p>
          
        </div>

        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem saepe accusamus iste reprehenderit beatae tempora adipisci, in corrupti,
           laudantium blanditiis omnis quaerat perspiciatis quam sit accusantium eveniet mollitia? Dolorum, laborum.
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem saepe accusamus iste reprehenderit beatae tempora adipisci, in corrupti,
           laudantium blanditiis omnis quaerat perspiciatis quam sit accusantium eveniet mollitia? Dolorum, laborum.
        </div>

     
      </div>
    </>
  )
}

export default App
