import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';
import { useAction } from 'src/hooks/actionHooks';
import actions from 'src/redux/actions';

const App = () => {
    const getImages = useAction(actions.getImages);

    return (
        <div className="App">
            <header className="App-header">
                <p>
          Edit 
                    <code>src/App.js</code>
and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          Learn React
                </a>
                <Button onClick={getImages}>asdas</Button>
            </header>
        </div>
    );
};

export default App;
