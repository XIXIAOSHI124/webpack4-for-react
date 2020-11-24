import React, {useContext, useState} from 'react';
import {Button, Modal} from 'antd';
import GlobalContext from '../home/GlobalContext';

const page1 = function() {
  const contextValue = useContext(GlobalContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleClickBtn = () => {
    setIsOpen(true);
  };

  return (
    <div className="page1">
      <h2>This is the page1</h2>
      <Button type="primary" onClick={handleClickBtn}>Author</Button>
      <Modal
        title="Basic Modal"
        visible={isOpen}
        closable={false}
        onOk={() => {
          setIsOpen(false);
        }}
        onCancel={() => {
          setIsOpen(false);
        }}

      >
        <label>Author:</label>
        <span>{contextValue.author}</span>
      </Modal>
    </div>
  );
};

export default page1;
