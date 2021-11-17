function Auditorium(name, seats) {
    const _this = {};
    _this.name = name;
    _this.seats = seats;

    _this.addSeats = function (additionalSeats) {
        _this.seats = _this.seats + additionalSeats;
    }

    return _this;
}


const aud1 = Auditorium("15-97", 100);
aud1.addSeats(15);

const aud2 = Auditorium("15-98", 15);


console.log("aud1", aud1);
console.log("aud2", aud2);
console.log(aud1.addSeats === aud2.addSeats);