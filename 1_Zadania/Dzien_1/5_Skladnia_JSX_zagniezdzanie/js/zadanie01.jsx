import React from 'react';
import ReactDOM from 'react-dom';
import person from './zadanie01';

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
            <div>
                <h1> {person.title} {person.name} {person.surname}</h1>
                <span>age:{person.age}</span>
            </div>,
            document.getElementById('app')
        );
});