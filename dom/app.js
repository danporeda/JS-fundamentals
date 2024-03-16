const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0,108,134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

const h1 = document.querySelector('h1');
const positions = ['beforebegin', 'afterbegin', 'beforeend', 'afterend'];
const elements = [];
for (let i of positions ) {
  let el = document.createElement('h2');
  el.append(i);
  // el.innerText = i;
  h1.insertAdjacentElement(i, el);
}

// const img = document.querySelector('#banner');