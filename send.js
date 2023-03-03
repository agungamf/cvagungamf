 /* =================================== send message ==================================== */
//  var btn = document.getElementById("btn");
//  btn.addEventListener("click", function(e)
//  {
//     e.preventDefault()
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;
//     var body = "name: " + name + "<br/> email: " + email + "<br/> subject: " + subject + "<br/> message: " + message; 
//     Email.send({
//         Host : "smtp@gmail.com",
//         Username : "raihanrizki83@gmail.com",
//         Password : "garoyuztbusurdzs",
//         To : "raihanrizki83@gmail.com",
//         From : email,
//         Subject : subject,
//         Body : body
//     }).then(
//       message => alert(message)
//     );
//  })

const form = document.querySelector("#form");

form.addEventListener('submit', async function(e){
  e.preventDefault();
  await fetch("https://script.google.com/macros/s/AKfycbzxwPJgpHZ_4WngJlHEaqdJv9qxCC2j0_bhQRMaXIc6KMW9uGeCkUF_oyOVyR7OKnU2/exec",
  {
    method: "POST",
    body: new FormData(form)
  } 
  );
    swal("Thank You!", "has sent a message!", "success");
  form.reset();
});