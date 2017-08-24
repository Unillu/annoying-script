var s = document.querySelector('#string');
var t = document.querySelector('#text');
var b = document.querySelector('#button');
var c = document.querySelector('#code')

b.addEventListener( 'click', typeSomething, false );

function typeSomething() {

  // clear the string
  s.innerHTML = '';

  // use input value to generate new string
  var sContent = t.value;

  for (var i = 0; i < sContent.length; i++) {

    if (sContent[i].indexOf(' ') != 0) {

      // if the char is not a space, put it in a span tag
      var e = document.createElement( 'span' );
      e.innerHTML = sContent[i];
      s.appendChild(e);

      // give the nth children annoying styles
      if ( i % 7 === 0 ) {
        e.setAttribute('style', 'color:purple;font-size:1.2em');
      } else if ( i % 6 === 0 ) {
        e.setAttribute('style', 'color:orange;font-size:.9em');
      } else if ( i % 5 === 0 ) {
        e.setAttribute('style', 'color:blue;font-size:1.4em');
      } else if ( i % 4 === 0 ) {
        e.setAttribute('style', 'color:yellow;font-size:1.6em');
      } else if ( i % 3 === 0 ) {
        e.setAttribute('style', 'color:green;font-size:.8em');
      } else if ( i % 2 === 0 ) {
        e.setAttribute('style', 'color:red;font-size:1.1em');
      } else {
        e.setAttribute('style', 'color:gray;font-size:1em');
      }

   } else {
      // if it's a space, just add it
      s.appendChild(document.createTextNode(sContent[i]));
    }
  }

  // spit out the code so others can annoy their friends
  c.innerHTML = '<pre>' + s.innerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</pre>';

};