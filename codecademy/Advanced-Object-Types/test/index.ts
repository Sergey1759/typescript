import { getObstacleEvents } from './computer-vision';
class Car implements AutonomousCar{
    isRunning;
    steeringControl;
    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events:Events){
        let arr = Object.keys(events);

        if(this.isRunning){
            arr.forEach(key => {
                if(events[key] == false){
                    return
                }
                if(key == 'ObstacleLeft'){
                    this.steeringControl.turn('right');
                }
                if(key == 'ObstacleRight'){
                    this.steeringControl.turn('left');
                }
            })
        } else {
            return console.log('car is off')
        }
    }
}

interface AutonomousCar {
    isRunning?: boolean;
    respond:(events: Events) => void;
}

interface AutonomousCarProps {
    isRunning?: boolean;
    steeringControl: SteeringControl
}

interface Events {
    [event:string] : boolean
}

interface Control {
    execute:(command: string) => void
}
interface Steering extends Control{
    turn:(direction : string) => void
}

class SteeringControl  implements Steering{
    execute(command:string){
        console.log('Executing: ' + command)
    }
    turn(direction:string){
        this.execute(`turn ${direction}`)
    }
}
let steering = new SteeringControl();

let autonomousCar = new Car({isRunning: true, steeringControl: steering});
autonomousCar.respond(getObstacleEvents());



