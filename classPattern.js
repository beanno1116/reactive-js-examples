

console.log("");
console.log("CUSTOM EVENTS WITH CLASS PATTERN");
// CUSTOM EVENTS WITH CLASS EXAMPLE

class Cart extends EventTarget {

  constructor() {
    super();
  }

  addToCart(item){

    this.dispatchEvent(new CustomEvent("itemAdded",{
      detail: {
        item,
      },
    }))

  }
}

const UserCart = new Cart();
UserCart.addEventListener('itemAdded',e => console.log(`Item, ${e.detail.item} to cart`));
UserCart.addToCart('iPhone 15 Pro Max');