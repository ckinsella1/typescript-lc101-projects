import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket{
    name: string;
    totalCapacityKg: number; 
    cargoItems: []
    astronauts: []
    constructor(name: string, totalCapacityKg: number){
        this.name = name 
        this.totalCapacityKg = totalCapacityKg 
    }
    sumMass( items: Payload[] ) {
        console.log(items)
        for (let i = 0; i < 10; i++) {
            let mass = this.cargoItems[i] + this.astronauts[i]
            return mass; 
        }
    }
    currentMassKg() {
        let astronautWeight = this.sumMass(this.astronauts);
        let cargoWeight = this.sumMass(this.cargoItems);
        return astronautWeight + cargoWeight
    }
    canAdd(item: Payload) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
        return true;
        }
        else {
            return false;
        }
    }
    addCargo(cargo: Cargo) {
        let availability = this.canAdd(cargo)
        return availability;
    }
    addAstronaut(astronaut: Astronaut) {
        let availability = this.canAdd(astronaut)
        return availability;
    }
}