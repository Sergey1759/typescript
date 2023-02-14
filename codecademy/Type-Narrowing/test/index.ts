import {
    RaccoonMeadowsVolunteers,
    RaccoonMeadowsActivity,
    raccoonMeadowsVolunteers,
} from './raccoon-meadows-log';

import {
    WolfPointVolunteers,
    WolfPointActivity,
    wolfPointVolunteers,
} from './wolf-point-log';

type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

type Volunteers = {
    id: number;
    name: string;
    activities: CombinedActivity[];
};


function combineVolunteers(
    volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
) {
    let OneTypeVolunteers:Volunteers[] = volunteers.map((volunteer: (RaccoonMeadowsVolunteers | WolfPointVolunteers)) => {
        return <Volunteers> {
            id : typeof volunteer.id == "string" ? parseInt(volunteer.id,10) : volunteer.id,
            name: volunteer.name,
            activities: volunteer.activities.map(activityVerifiedToBoolean)
        }
    });
    return OneTypeVolunteers
}
function activityVerifiedToBoolean(activity): WolfPointActivity {
    let clone_activity = {...activity}
    if(typeof clone_activity.verified == "string"){
        if(clone_activity.verified == 'Yes') {
            clone_activity.verified = true;
        } else if(clone_activity.verified == 'No'){
            clone_activity.verified = false
        }
    }
    return clone_activity;
}

function calculateHours(volunteers: Volunteers[]) {
    return volunteers.map((volunteer) => {
        let hours = 0;

        volunteer.activities.forEach((activity) => {
            if(activity.verified) {
                if('hours' in activity){
                    hours += activity.hours
                } else {
                    hours += activity.time
                }
            }
        });

        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours,
        };
    });
}
function byHours(a,b) {
    return b.hours - a.hours;
}

const combinedVolunteers = combineVolunteers(
    [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
);

let result = calculateHours(combinedVolunteers);
result = result.sort(byHours);
console.log(result);