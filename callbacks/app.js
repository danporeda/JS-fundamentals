// document.body.style.backgroundColor = 'red';

// setTimeout(() => {
//   document.body.style.backgroundColor = 'orange';
//   setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
//     setTimeout(() => {
//       document.body.style.backgroundColor = 'green';
//       setTimeout(() => {
//         document.body.style.backgroundColor = 'blue';
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const delayedColorChange = (color, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = color;
//     doNext && doNext();
//   }, delay);
// };

// delayedColorChange('red', 1000, () => {
//   delayedColorChange('yellow', 1000, () => {
//     delayedColorChange('blue', 1000, () => {
//       delayedColorChange('green', 1000, () => {
//         delayedColorChange('orange', 1000);
//       })
//     })
//   })
// })

const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure('Connection Timeout')
    } else {
      success(`here is your data from ${url}`)
    }
  }, delay)
}

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('Connection Timeout')
      } else {
        resolve(`here is your data from ${url}`)
      }
    }, delay)
  })
}

// fakeRequestCallback('books.com', 
//   function(response) {
//     console.log('It Worked')
//     console.log(response)
// }, function(err) {
//   console.log('error!!', err)
// });

// const request = fakeRequestPromise('yelp.com/api/coffee');
// request.then(() => {
//   console.log('it worked.')
// }).catch(() => {
//   console.log('nope')
// })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//   .then((data) => {
//     console.log('it worked (page 1)')
//     console.log(data)
//     return fakeRequestPromise('yelp.com/api/coffee/page2')
//   })
//   .then((data) => {
//     console.log('it worked (page 2)')
//     console.log(data)
//     return fakeRequestPromise('yelp.com/api/coffee/page3')
//   })
//   .then((data) => {
//     console.log('it worked (page 3)')
//     console.log(data)
//     return fakeRequestPromise('yelp.com/api/coffee/page4')
//   })
//   .then((data) => {
//     console.log('it worked (page 4)')
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log('failed.')
//     console.log(err)
//   })

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  })
}

delayedColorChange('red', 1000)
  .then(() => delayedColorChange('orange', 1000))
  .then(() => delayedColorChange('yellow', 1000))
  .then(() => delayedColorChange('green', 1000))
  .then(() => delayedColorChange('teal', 1000))
  .then(() => delayedColorChange('blue', 1000))
  .then(() => delayedColorChange('indigo', 1000))
  .then(() => delayedColorChange('purple', 1000))
  .then(() => delayedColorChange('violet', 1000))
  .catch((err) => 'fuck off mate');