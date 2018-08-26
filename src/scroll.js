import Scroll from 'scroll-js'

console.log("Hello")

var scroll = new Scroll(document.body);
scroll.to(0, 500).then(function () {
   console.log("Woohoo!")
});
