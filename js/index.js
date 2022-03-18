// TOGGLE BUTTON FOR THE DASHBOARD AND SCHEDULE PAGE
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = "block";
})

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = "none"
})


// fetch('https://hy-mail-server.herokuapp.com/patients')
//   .then(res => res.json())
//   .then(data => {
//     let appointments = data.appointments
//     appointments.forEach(element => {
//       console.log(element)
//     biza.innerHTML += `
//     <div class="patients-data">
//     <div>
//       <p>09:00am</p>
//     </div>
//     <div class="details">
//       <div class="flx">
//         <img src="../img/consultantDashboard/guy hawkins.svg" alt="" />
//         <p class="subtitle font">${element.name}</p>
//       </div>
//       <div class="pd-right">
//         <img src="img/consultantDashboard/others.svg" alt="" />
//       </div>
//     </div>
//     </div>
//     `
//     });
//   })

