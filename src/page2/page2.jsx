import React, {useContext} from 'react';
import {Alert} from 'antd';
import GlobalContext from '../home/GlobalContext';

const page2 = function() {
  const contextValue = useContext(GlobalContext);
  return (
    <div className="page2">
      <h2>This is the page2</h2>
      <Alert message={contextValue.title} type="success" />
    </div>
  );
};

export default page2;
