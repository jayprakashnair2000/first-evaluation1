function flight_display(card_det){
    let content = '';
    for(let count=0;count<Object.keys(card_det).lengths;count++){
        let flight = card_det[count];
        const departure = new Date(flight.departTime)// for converting it to utc format
        const arrival = new Date(flight.ArrivalTime)//  for converting it to utc format
        
        content +=  `
        <div class="row">
        <div class="col-sm-6">
        <div class="card" >
            <div class="card-body">
                <h3>Flight Number</h3>
                <p class="Flight-number">${flight_det[count]['flightNum']}</p>
                <h3>Origin</h3>
                <p class="origin">${flight_det[count]['origin']}</p>
                <h3>Destination</h3>
                <p class="destination">${flight_det[count]['destination']}</p>
                <h3>Departure</h3>
                <p class="departure-time">${departure.toUTCString()}</p>
                <h3>Arrival</h3>
                <p class="arrival-time">${arrival.toUTCString()}</p>
                <h3>Price</h3>
                <p class="price">&#8377;${flight_det[count]['price']}</p>
                <button type="button" class="btn btn-primary" id="flight${flight_det[count]['id']}">Proceed</button>
            </div>
        </div>
        </div>
        </div>

    `

}
document.querySelector("#card-collection").innerHTML = content;
}






fetch('flights.json')
	.then(response => response.json())
	.then(data => flight_display(cards))
	
