// created by Jayprakash Nair 

function display_cards(flight_det){
    const number_of_flights = Object.keys(flight_det).length; //number of flights in the json
    
    let content = '';
    for(let count=0;count<number_of_flights;count++){
        let flight = flight_det[count];                 

        
        const departure = new Date(flight.departTime)   
        const arrival = new Date(flight.ArrivalTime)
        
            //Adding flight Details into a card
        content +=  `

        <div class="card" >
            <div class="card-body">
                <h4>Flight Number</h4>
                <p class="Flight-number">${flight_det[count]['flightNum']}</p>
                <h4>Origin</h4>
                <p class="origin">${flight_det[count]['origin']}</p>
                <h4>Destination</h4>
                <p class="destination">${flight_det[count]['destination']}</p>
                <h4>Departure</h4>
                <p class="departure-time">${departure.toUTCString()}</p>
                <h4>Arrival</h4>
                <p class="arrival-time">${arrival.toUTCString()}</p>
                <h4>Price</h4>
                <p class="price">&#8377;${flight_det[count]['price']}</p>
                <button type="button" class="btn btn-primary" id="flight${flight_det[count]['id']}" onclick="location.href='book.html'; get_flight_details(${flight_det[count]['id']});">Proceed</button>
            </div>
        </div>

    `

    }
    document.querySelector("#card-collection").innerHTML = content;
}

fetch('flights.json')               //retrieve information from json file
.then(response => response.json())
.then(data => display_cards(data));


function get_flight_details(flightid){
    window.localStorage.clear();            // clear local storage everytime when proceed is clicked
    localStorage.setItem("flightid",flightid);
}

