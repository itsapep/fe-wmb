// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='main-container'>
        <div className='banner'>
          <h1>SMM Batch 2</h1>
          <p>Front End Hands On</p>
        </div>
        <div className='login'>
          <p>Username</p>
          <input type="text" name="Username" id=""/>
          <p>Password</p>
          <input type="password"/>
          <br/>
          <button>Login</button>
        </div>
      </div>
    </>
  );
}

export default App;
