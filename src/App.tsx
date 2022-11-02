import React from 'react';
import './App.css';

function App() {
    console.log('App rendering')
    return (
        <div>
            This is APP Component
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

const Rating = () => {
    console.log('Rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}
const Star = () => {
    console.log('Star rendering')
    return (
        <div>star</div>
    )
}

const Accordion = () => {

    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

const AccordionTitle = () => {
    console.log('AccordionTitle rendering')
    return (
        <h3>Меню</h3>
    )
}
const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default App;
