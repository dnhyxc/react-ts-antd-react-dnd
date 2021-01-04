import React from 'react';
import './App.less';

interface IProps {
  children: any;
}

const App: React.FC<IProps> = ({ children }) => {
  return (
    <div className="App">
      {children}
    </div>
  );
}

export default App;
