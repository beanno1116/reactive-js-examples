

console.log("PUBSUB PATTERN");
// PUBSUB PATTERN (Publish,Subscriber) EXAMPLE 1

const publishSubscribe = {
  events: {},
  subscribe(event,handler) {
    if(!this.events[event]) this.events[event] = [];
    this.events[event].push(handler);
  },
  publish(event,data) {
    if (this.events[event]) this.events[event].forEach(callback  => callback(data));
  }
}

publishSubscribe.subscribe('update',data => console.log(data));
publishSubscribe.publish('update','This would be updated data');