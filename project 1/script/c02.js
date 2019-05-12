
function hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function(){
        return this.rooms - this.booked;
    }

}
 var Quay = new hotel('Quay', 40, 25);
 var Park = new hotel('Park', 140, 77);


var elName = document.getElementById('hotel_name');
elName.textContent = Park.name;

var elRooms = document.getElementById('hotel_rooms');
elRooms.textContent = Park.checkAvailability();

var elName2 = document.getElementById('hotel_name2');
elName2.textContent = Quay.name;

var elRooms2 = document.getElementById('hotel_rooms2');
elRooms2.textContent = Quay.checkAvailability();