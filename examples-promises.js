function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    if( (typeof a === 'number') && (typeof a === 'number') ) {
      resolve(a + b);
    } else {
      reject('a and b need to be numbers');
    }
  });
};

addPromise(2, 3).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});
