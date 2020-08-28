import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'; 
import Header from '../Header/index' 


const Index = () => (
    <div className="grid-container">
       <Header></Header>
        <div className="item2">Menu</div>
        <div className="item3">Main</div>  
        <div className="item4">Right</div>
        <div className="item5">Footer</div>
    </div>
);


export default Index;

if (document.getElementById('app-container')) {
    ReactDOM.render(<Index />, document.getElementById('app-container'));
}
