module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let  turns = Math.pow (2, disksNumber);
    let speed = turnsSpeed/3600;
    let seconds = turns/speed;
    return {turns, seconds};
}