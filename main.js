let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<sapn style="color: #00c16c;">Soy estudiante de R.H. y Programadora Frontend en Technolochicas PRO.</sapn>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
