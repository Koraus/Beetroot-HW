class Auditorium {
    constructor(name, seats) {
        this._name = name;
        this._fullName = "KPI::" + this._name;
        this._seats = seats;
    }

    get namePublic() {
        return this._name;
    }

    set namePublic(value) {
        this._name = value;
        this._fullName = "KPI::" + this._name;
    }


    addSeats(additionalSeats) {
        this.seats = this.seats + additionalSeats;
    }
}


const aud1 = new Auditorium("15-97", 100);


console.log(27, aud1);
aud1.namePublic = "15-97a";

console.log(30, aud1);
aud1._name = "15-97-old";

console.log(33, aud1);
