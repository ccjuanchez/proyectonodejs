import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
/*
import React from 'react';
import ReactDOM from 'react-dom';*/
/*const miprimercomponente=()=>
(React.createElement('div',{className:'text-center'},'HelloWorld'))
;//null progslo aque se pasa de parametros

ReactDOM.render(React.createElement(miprimercomponente,null,null),document.getElementById('root'));//que  renderizar y en donde
*//*
const Miprimercomponente=()=>(
    <div className="text-center">
        Hola mundo
        </div>
);//null progslo aque se pasa de parametros


ReactDOM.render(
    <Miprimercomponente/>, document.getElementById('root')
    );//que  renderizar y en donde
*/