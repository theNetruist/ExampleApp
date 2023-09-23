import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';
import World from 'exampleappdependency';

const App: FC = (props: any) => {
    return <>
        <Hello />
        <World />
    </>;
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);