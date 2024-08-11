const heading = React.createElement('div',{id:"parent"},[React.createElement('div',{id:"child"},[React.createElement('h3',{},"first Division",React.createElement('h6',{},"division second"))]),
React.createElement('div',{id:"child"},[React.createElement('h3',{},"first Division",React.createElement('h6',{},"division second"))])]);
// creating a tag using react.createelement which takes three parametres tag, object and message 
const root = ReactDOM.createRoot(document.getElementById('root'));
// creating root using RecatDOM.createRoot which takes one parametre id of the root element
root.render(heading);
// in javascript appendChild is used but in freact render is used !!
