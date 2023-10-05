/**
 *  Not to be confuse with the observer pattern
 * 
 *  Resembles how Observables work in Rx.js
 * 
 * 
 */

console.log("");
console.log("OBSERVABLE PATTERN");


class Observable {

  constructor(producer){
    this.producer = producer;
  }

  /**
   * 
   * @param {object} observer 
   * @returns {object} 
   * 
   * a method to subscribe to an observer
   */
  subscribe(observer) {

    // check that observer is an object
    if (typeof observer !== 'object' || observer === null) {
      throw new Error('Observer must be an object');
    }

    // check that the observer object has a next method
    if (typeof observer.next !== 'function') {
      throw new Error('Observer must have a next method');
    }

    // check that the observer object has a error method
    if (typeof observer.error !== 'function') {
      throw new Error('Observer must have a error method');
    }

    // check that the observer object has a complete method
    if (typeof observer.complete !== 'function') {
      throw new Error('Observer must have complete method');
    }

    const unsubscribe = this.producer(observer);

    // return an instance of the Observable object with a unsubscribe method
    return {
      unsubscribe: () => {
        if (unsubscribe && typeof unsubscribe === 'function') {
          unsubscribe();
        }
      }
    }

  }

}


const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();

  return () => {
    console.log('Observer unsubscribed');
  }
})




/**
 *  An example of a observer object
 *  must have a next,error,complete method
 */
let dataObj = {
  next: value => console.log(`Recieved value: ${value}`),
  error: err => console.log(`Error: ${err}`),
  complete: () => console.log('Completed')
};




let subscription = observable.subscribe(dataObj);

subscription.unsubscribe();