import type { NextPage } from 'next'
import { useState } from 'react';
import Board from '../components/Board/Index'
import NewListBoxModal from '../components/Modal/NewListBoxModal';
import NewTaskModal from '../components/Modal/newTaskModal';

const Home: NextPage = () => {

  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isNewListBoxModalOpen, setIsNewListBoxModalOpen] = useState(false);

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }


  function handleOpenNewListBoxModal() {
    setIsNewListBoxModalOpen(true);
  }

  function handleCloseNewListBoxModal() {
    setIsNewListBoxModalOpen(false);
  }



  return (
    <main>
      <Board  onOpenNewTaskModal={handleOpenNewTaskModal}
          onOpenNewListBoxModal={handleOpenNewListBoxModal}/>
      <NewTaskModal
          isOpen={isNewTaskModalOpen}
          onRequestClose={handleCloseNewTaskModal} />

        <NewListBoxModal
          isOpen={isNewListBoxModalOpen}
          onRequestClose={handleCloseNewListBoxModal} />
    </main>
  )
}

export default Home
