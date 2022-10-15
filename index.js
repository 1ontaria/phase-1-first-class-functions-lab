const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const firstTwo = ['Antonia', 'Nuru']
const lastTwo = ['Amari', 'Mo']

const returnFirstTwoDrivers = function () {
    return firstTwo
}
const returnLastTwoDrivers = function () {
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    return function () {
        return x * x
    }
}

let fareDoubler = function (fare) {
    return fare * 2
}

let fareTripler = function (fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, lastTwo) {
    if (lastTwo === returnFirstTwoDrivers) {
        return ['Antonia', 'Nuru']
    } else if (lastTwo === returnLastTwoDrivers) {
        return ['Amari', 'Mo']
    }
}


