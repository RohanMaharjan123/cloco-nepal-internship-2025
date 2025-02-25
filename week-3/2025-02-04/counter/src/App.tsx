import React from 'react';
import Counter from './Counter';

const App: React.FC = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Messing With React and TS.</h1>
            <Counter />
        </div>
    );
};

export default App;