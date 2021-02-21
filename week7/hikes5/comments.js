import { Comment } from './comment.js';

const comments = [];

//method to add Comment
function print(filtered) {
    const div = document.querySelector('#insert');
    div.innerHTML = filtered.map(
        item =>
            `
        
        `
    ).join('');
};