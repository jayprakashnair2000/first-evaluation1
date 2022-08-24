let flight_id = localStorage.getItem("flightid");
let finame = localStorage.getItem("firname");
let laname = localStorage.getItem("lasname");
let emailadd = localStorage.getItem("emailaddr");
let agep = localStorage.getItem("agepa");
let phoneno = localStorage.getItem("phoneno");
let gen = localStorage.getItem("gend");
let finame1 = localStorage.getItem("firname1");
let laname1 = localStorage.getItem("lasname1");
let agep1 = localStorage.getItem("agepa1");
let gen1 = localStorage.getItem("gend1");
let flag = localStorage.getItem("flag");


flight_id -= 1;



let content = '';

function display_value(data) {
    var departure = new Date(data[flight_id].departTime);
    var arrival = new Date(data[flight_id].ArrivalTime);

    content += `
    <div class="details" >
        
        <div class="b">
            <h3> ${data[flight_id].flightNum}</h3>
            
            <h3>Origin: <span> ${data[flight_id].origin}</span></h3>
            
            <h3>Destination: <span> ${data[flight_id].destination}</span></h3>
            
            <h3>Departure: <span>${departure.toUTCString()} </span></h3>
            
            <h3>Arrival: <span>${arrival.toUTCString()} </span></h3>
            
            <h3>Price: <span> &#8377;${data[flight_id].price}</h3>
            </div>  
            <div class="b">
                <h3> Passenger name: ${finame} ${laname}</h3>
                <h3>Age: ${agep}</h3>
                <h3>Email: ${emailadd}</h3>
                <h3>Phone Number: ${phoneno}</h3>
                <h3>Gender: ${gen}</h3>
            </div>
            <div class="qr"> 
            <img src="img/qrcode.png" width="200" height="200">
            
            </div>
            
        </div>
        
        

    </div>
    <a class="button123" href="#" onclick="window.location.href='index.html'">Go To Home </a>


`
    document.querySelector("#card-collection").innerHTML = content;



}
function display_value1(data) {
    var departure = new Date(data[flight_id].departTime);
    var arrival = new Date(data[flight_id].ArrivalTime);

    content += `
    <div class="details" >
        
        <div class="b">
            <h3> ${data[flight_id].flightNum}</h3>
            
            <h3>Origin: <span> ${data[flight_id].origin}</span></h3>
            
            <h3>Destination: <span> ${data[flight_id].destination}</span></h3>
            
            <h3>Departure: <span>${departure.toUTCString()} </span></h3>
            
            <h3>Arrival: <span>${arrival.toUTCString()} </span></h3>
            
            <h3>Price: <span> &#8377;${data[flight_id].price}</h3>
            </div>  
            <div class="b">
            <h2> First Passenger </h2>

            <h3> Passenger name: ${finame} ${laname}</h3>
            <h3>Age: ${agep}</h3>
            <h3>Email: ${emailadd}</h3>
            <h3>Phone Number: ${phoneno}</h3>
            <h3>Gender: ${gen}</h3>

            <h2> Second Passenger</h2>

            <h3> Passenger name: ${finame1} ${laname1}</h3>
            <h3>Age: ${agep1}</h3>
            <h3>Gender: ${gen1}</h3>
            
            </div>
            <div class="qr"> 
            <img src="img/qrcode.png" width="200" height="200">
            
            </div>
            
           

        </div>
        <a class="button123" href="#" onclick="window.location.href='index.html'">Go To Home </a>


`
    document.querySelector("#card-collection").innerHTML = content;



}



if (flag == 1) {
    fetch('flights.json')
        .then(response => response.json())
        .then(data => display_value1(data))
}

else {
    fetch('flights.json')
        .then(response => response.json())
        .then(data1 => display_value(data1))
}

