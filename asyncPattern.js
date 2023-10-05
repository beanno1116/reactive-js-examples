


console.log("");
console.log("PROMISE PATTERN");
// REACTIVE DATA WITH PROMISES

class AsyncData {

  constructor(initialData){
    this.data = initialData;
    this.subscribers = [];
  }

  subscribe(handler) {
    if (typeof handler !== 'function') {
      throw new Error('Handler must be of type function');
    }
    this.subscribers.push(handler);
  }

  async set(key,value) {
    this.data[key] = value;

    const updates = this.subscribers.map(async (callback) => {
      await callback(key,value);
    })

    await Promise.allSettled(updates);
  }

}

const data = new AsyncData({name:'Mike'});

data.subscribe(async (key,value) => {
  await new Promise(resolve => setTimeout(resolve,500));
  console.log(`Updated UI for ${key}: ${value}`);
})

// a function to update the data and wait for all updates to complete
async function updateData() {
  await data.set('name','Bonnie'); // This will call subscribed functions and wait for them to resolve
  console.log('All property updates complete');
}

updateData();