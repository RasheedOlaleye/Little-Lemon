import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiLoaderAlt } from 'react-icons/bi';

const Modal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [nameError, setNameError] = useState('');
  const [quantityError, setQuantityError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Please enter a name');
      isValid = false;
    } else {
      setNameError('');
    }

    if (quantity.trim() === '') {
      setQuantityError('Please enter a quantity');
      isValid = false;
    } else {
      setQuantityError('');
    }

    if (!isValid) {
      return;
    }

    // Start the submission process
    setIsSubmitting(true);

    try {
      // Simulate an asynchronous API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Perform your desired actions with the form data here
      console.log('Name:', name);
      console.log('Quantity:', quantity);
      // Reset the form fields
      setName('');
      setQuantity('');
      // Close the modal
      onClose();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Finish the submission process
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg relative w-[600px] h-[300px]">
        <button className="absolute top-0 right-0 p-2" onClick={onClose}>
          <AiOutlineClose className="text-gray-500 hover:text-gray-700" size={24} />
        </button>
        <h2 className="text-lg font-bold mb-2">Food Ordering App Modal</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                nameError && 'border-red-500'
              }`}
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
              Quantity
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                quantityError && 'border-red-500'
              }`}
              id="quantity"
              type="number"
              placeholder="Enter the quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            {quantityError && <p className="text-red-500 text-sm">{quantityError}</p>}
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? <BiLoaderAlt className="animate-spin inline-block mr-2" /> : null}
              {isSubmitting ? 'Submitting' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
