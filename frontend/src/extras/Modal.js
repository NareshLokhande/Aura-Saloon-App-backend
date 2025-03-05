import React from 'react';
import '../assets/css/Modal.css';

function Modal({ isOpen, toggleModal, message }) {
  if (isOpen) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      {isOpen && (
        <div className='modal'>
          <div onClick={toggleModal} className="overlay"></div>
          <div className='modal-content'>
            <h2>{message}</h2>
            <button className='close-modal' onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;


// import React, { useState } from 'react'
// import "./Modal.css"

// function Modal() {
//     const [modal, setModal ] = useState(false);

//     const toggleModal = () => {
//         setModal(!modal)
//     };

//     if(modal){
//         document.body.classList.add('active-modal')
//     }else{
//         document.body.classList.remove('active-modal')
//     }

//   return (
//     <div>
//       <button onClick={toggleModal} className='btn-modal'>
//       Register Now !
//       </button>

//     {modal && (
//         <div className='modal'>
//         <div onClick={toggleModal} 
//         className="overlay"></div>
//         <div className='modal-content'>
//             <h2> Register Here! </h2>
//             <form>
//                 <input type="text" placeholder="Enter Name"/>
//                 <input type="text" placeholder="Enter Mobile No."/>
//                 <button type="submit" className='btn-submit'> Submit </button>
//             </form>
//             <button className='close-modal' onClick={toggleModal}>  Close </button>
//         </div>
//       </div>
    
//     )}

// </div>   
//   )
// }

// export default Modal
