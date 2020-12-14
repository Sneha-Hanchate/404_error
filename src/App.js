import React from 'react';
import './App.css';
import H from './img/pic.jpg';
import cat from './img/cat.png';

function App() {
  return (
    <div className="container1">
          <div className="abc" >
    
      <div className="row">
      <div className="col-md-4 col-12">
        <img src={H} alt="img"/>
      </div>
        
        <div className="col-md-8 col-12"  >
                  <div  >
                    <h1 style={{fontFamily:"revert", color:"#F50057"}}> It's just a <span style={{fontSize:"15rem"}}><b>404</b></span> Error!</h1>
                    <h1 style={{fontSize:"3rem",fontFamily:"serif",  color:"#01579B"}}><b>Page Not Found</b></h1>
                    <h3>Oops! Something is broken.</h3><span><img src={cat} alt="img" width="10%" style={{marginLeft:"40%"}}/></span>
                  </div>
                  
                
                  <div className="row" style={{marginTop:"8%", textAlign:"center"}}>
                    <button style={{marginLeft:"18%"}}><b>Home</b></button>
                   
                  </div>
                
                </div>
                </div>
    </div>
    </div>
  );
}

// export default App;
// import React from 'react';
// import './App.css';
// import H from './img/pic.jpg';

// function App() {
//   return (
//     <div className="container1">
//           <div className="abc" >
    
//       <div className="row">
//       <div className="col-md-4">
//         <img src={H} alt="img"/>
//       </div>
        
//         <div className="col-md-8" >
//                   <div  >
//                     <h1 style={{fontFamily:"revert", color:"#F50057"}}> It's just a <span style={{fontSize:"10rem"}}><b>404</b></span> Error!</h1>
//                     <h1 style={{fontSize:"3rem",fontFamily:"serif", color:"#F8BBD0"}}><b>Page Not Found</b></h1>
//                   </div>
                  
//                 <div className="row" style={{marginTop:"6%"}}>
                
//                   <div  className="col-md-10 offset-md-2 col-12"><br/>
//             <h1 style={{fontFamily:"initial" , color:"brown"}}><b>Try Again...</b></h1><br/>
//             <h3  style={{fontFamily:"initial"}}>Back to your <span style={{fontSize:"2rem", color:"#18FFFF"}}><b>Home Dashboard</b></span>. </h3><br/>
//             <h3  style={{fontFamily:"initial"}}>If the error persists, seek help on the <span style={{fontSize:"2rem", color:"#18FFFF"}}><b>community site</b></span>.</h3>
//                   </div></div>
//                   <div className="row" style={{marginTop:"2%", textAlign:"center"}}>
//                     <button style={{marginLeft:"18%"}}><b>Home</b></button>
                   
//                   </div>
                
//                 </div>
//                 </div>
//     </div>
//     </div>
//   );
// }

export default App;
