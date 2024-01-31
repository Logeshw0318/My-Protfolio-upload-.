// $(document).ready(function(){
//       $('#menu').click(function(){
//       $(this).toggleClass('fa-times');
//       $('header').toggleClass('toggle')
//       });
// });

// // smooth scrollling


const menu = document.querySelector(".menu");
const header = document.querySelector("header")

menu.addEventListener("click", () =>{
      menu.classList.toggle("active");
      header.classList.toggle("active");
})

document.querySelectorAll(".navbar").forEach(n => n.addEventListener("click", () =>{
      menu.classList.remove("active")
      header.classList.remove("active")
}))

function sendMail(){
      var params = {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            project : document.getElementById("project").value,
            message : document.getElementById("message").value,
      };
 
      const serviceID = "service_7thyxzf";
      const templateID = "template_an3k08f"

emailjs
.send(serviceID, templateID, params)
.then((res) =>
      {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("project").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent successfully")
      }
)
.catch((err)=>console.log(err));


}


// const btn = document.getElementById("btn");
// function sendMail(){
//       var params = {
//           name : document.getElementById("name").value,
//           email : document.getElementById("email").value,
//       //     project : document.getElementById("project").value,
//           message : document.getElementById("message").value
  
//       }
//       const serviceID = "service_jpxqfat";
//       const templateID = "template_lc3d7vb"
  
//   emailjs.send(serviceID,templateID,params)
//   .then(
//       res => {
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//       //     document.getElementById("project").value = "";
//           document.getElementById("message").value = ""
//           console.log(res);
//           alert("your message sent successfully")
//       }
//   )
//   .catch((err) => console.log(err));
//   }