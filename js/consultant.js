let activity = document.getElementById('activity')
let appointment = document.getElementById('patients_apnt')
let appoint = document.getElementById('appoint')
let wait = document.getElementById('wait')
let inter = document.getElementById('inter')
let total = document.getElementById('total')
let schedule_appoint =  document.getElementById('schedule_appoint')
let waiting = document.getElementById('waiting')
console.log(appointment)


let details;
const url1 = 'https://hy-mail-server.herokuapp.com/patients'

fetch(url1)
    .then(response =>response.json())
    .then(data => {
        let details = data.appointments
        console.log(details)

        details.forEach(element =>{
           
            let date = new Date(element.createdAt);
            let hour, minute, am_pm;
            if(date.getHours() > 11){
                hour = date.getHours() - 12;
                am_pm = 'pm'
                if(hour <= 9){
                    hour = '0' + hour;
                } else {
                    hour = hour;
                }
            } else {
                hour = date.getHours();
                am_pm = 'am'
                if(hour <= 9){
                    hour = '0' + hour;
                } else {
                    hour = hour;
                }
            }
            if(date.getMinutes() <= 9){
                minute = '0' + date.getMinutes()
            } else {
                minute = date.getMinutes()
            }

            appointment.innerHTML += `
            <div class="flx">
            <div>
                  <p>${hour}:${minute}${am_pm}</p>
                </div>
                <div class="details">
                  <div class="flx">
                    <img src="/img/consultantDashboard/guy hawkins.svg" alt="" />
                    <p class="subtitle font">${element.name}</p>
                  </div>
                  <div class="pd-right">
                    <img src="/img/consultantDashboard/others.svg" alt="">
                  </div>
                </div>
                </div>
                
            `
        })
        appoint.innerHTML = data.scheduledAppointments
        schedule_appoint.innerHTML = data.scheduledAppointments
        wait.innerHTML = data.waitinfRoom
        waiting.innerHTML = data.waitinfRoom
        total.innerHTML = data.totalPatients
    })

let list;
const url = 'https://hy-mail-server.herokuapp.com/activities'



fetch(url)
    .then(response => response.json())
    .then(data => {
        let list = data.activities
        console.log(list)

        for(items of list){
            if(items.type === 'report'){
                inter.innerHTML += `
                <div class="inter_info">
                <img src="/img/consultantDashboard/g1.svg" alt="">
                    <p class="">${items.title}</p>
                </div>
                `
            }else if(items.type === 'interview'){
                inter.innerHTML += `
                <div class="inter_info">
                <img src="/img/consultantDashboard/g2.svg">
                <p class="">${items.title}</p>
                </div>
                `
            }
        }
    })