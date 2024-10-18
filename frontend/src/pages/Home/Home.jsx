import React, { useState } from 'react';  // Import useState from React
import NoteCard from '../../componets/Cards/NoteCard'; // Fixed the typo in 'components'
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";
import AddEditNotes from './AddEditNotes';


const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  // Sample handle functions
  const handleEdit = (id) => {
    console.log(`Editing note with ID: ${id}`);
    // Logic to load the note data into the modal for editing
  };

  const handleDelete = (id) => {
    console.log(`Deleting note with ID: ${id}`);
    // Logic to delete the note
  };

  const handlePinNote = (id) => {
    console.log(`Pinning note with ID: ${id}`);
    // Logic to pin the note
  };

  const closeModal = () => {
    setOpenAddEditModal({ ...openAddEditModal, isShown: false });
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-md:m-5">
          <NoteCard
            title={"6 am"}
            date={"9th Oct, 2024"}
            content={"rakin ghumay, abrar"}
            tags={["#abrar"]}
            isPinned={true}
            onEdit={() => handleEdit(1)}
            onDelete={() => handleDelete(1)}
            onPinNote={() => handlePinNote(1)}
          />
          <NoteCard
            title={"7 am"}
            date={"10th Oct, 2024"}
            content={"Morning routine"}
            tags={["#routine", "#morning"]}
            isPinned={false}
            onEdit={() => handleEdit(2)}
            onDelete={() => handleDelete(2)}
            onPinNote={() => handlePinNote(2)}
          />
          <NoteCard
            title={"Meeting"}
            date={"11th Oct, 2024"}
            content={"Team sync-up"}
            tags={["#work", "#meeting"]}
            isPinned={false}
            onEdit={() => handleEdit(3)}
            onDelete={() => handleDelete(3)}
            onPinNote={() => handlePinNote(3)}
          />
          {/* Add more NoteCards as necessary */}
        </div>
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#2B85FF] hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes
          onClose={() =>
            setOpenAddEditModal({ isShown: false, type: "add", data: null })
          }
          noteData={openAddEditModal.data}
          type={openAddEditModal.type}
         
        />
      </Modal>
    </>
  );
};

export default Home;
