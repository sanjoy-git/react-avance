import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Modal.setAppElement('');


export default function ReactModel() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  let subtitle1;
  const [modalIsOpen1, setIsOpen1] = React.useState(false);

  function openModal1() {
    setIsOpen1(true);
  }

  function afterOpenModal1() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  return (
    <>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 style={{color:'green'}}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <label htmlFor="name">Name</label><input type="text" name="" id="" />
          </form>
        </Modal>
      </div>

      <div>
        <button onClick={openModal1}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen1}
          onAfterOpen={afterOpenModal1}
          onRequestClose={closeModal1}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 style={{color:'red'}}>Hello</h2>
          <button onClick={closeModal1}>close</button>
          <div>I am a modal</div>
          <form>
            <label htmlFor="name">Name</label><input type="text" name="" id="" />
          </form>
        </Modal>
      </div>
    </>
  )
}
