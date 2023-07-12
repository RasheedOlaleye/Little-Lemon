import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const ModaApp = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); // Automatically open the modal when navigating to the page
  }, []);

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showModal && <Modal onClose={closeModal} />}
      <h1 className="text-4xl font-bold">Food Ordering App</h1>
    </div>
  );
};

export default ModaApp;
