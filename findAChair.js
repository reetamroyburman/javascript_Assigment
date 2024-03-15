function findChairs(rooms, need) {
    let chairsTaken = [];
    let chairsNeeded = need;

    for (let i = 0; i < rooms.length; i++) {
        let occupants = rooms[i][0].length;
        let chairsAvailable = rooms[i][1] - occupants;

        if (chairsNeeded <= 0) break;

        if (chairsAvailable > 0) {
            if (chairsAvailable >= chairsNeeded) {
                chairsTaken.push(chairsNeeded);
                chairsNeeded = 0;
            } else {
                chairsTaken.push(chairsAvailable);
                chairsNeeded -= chairsAvailable;
            }
        } else {
            chairsTaken.push(0);
        }
    }

    if (chairsNeeded > 0) return 0;
    if (chairsTaken.length === 0) return 1;
    return chairsTaken;
}


const rooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
const need = 4;
console.log(findChairs(rooms, need)); 
