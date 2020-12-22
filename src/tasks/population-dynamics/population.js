export const population = (settings) => {
    /**
     * Больше информации - https://bookaa.ru/matematicheskoe-modelirovanie/modeli-dinamiki-populyaciy-i-yekologiya.html
     * r, m - характерные постоянные рождаемости и смертности;
     * K – “несущая способность” окружающей среды.
     * */
    console.log({settings})
    const pointsVictim = []
    const pointsPredator = []
    const h = 0.1;
    pointsPredator.push({x: 0, y: settings.startCountPredators})
    pointsVictim.push({x: 0, y: settings.startCountVictims})

    let victimWasZero = false;
    let predatorsWasZero = false;

    for (let i = 0; i < 100000; i++) {
        const X = pointsVictim[i].y;
        const Y = pointsPredator[i].y;
        if (!victimWasZero) {
            if (X === 0)
                victimWasZero = true
        }
        if (!predatorsWasZero) {
            if (Y === 0)
                predatorsWasZero = true
        }

        let dx = ((settings.r * settings.k * (X + h) - settings.s * (X + h) * Y) -
            (settings.r * settings.k * (X - h) - settings.s * (X - h) * Y)) / 2 * h
        let dy = ((settings.s * X * (Y + h) - settings.m * (Y + h)) - (settings.s * X * (Y - h) - settings.m * (Y - h))) / 2 * h

        let newVictims;
        let newPredators;
        if (victimWasZero) {
            newVictims = 0
        } else {
            newVictims = X + dx;
        }
        if (predatorsWasZero) {
            newPredators = 0
        } else {
            newPredators = Y + dy
        }
        if (isAlmostZero(newVictims))
            newVictims = 0;
        if (isAlmostZero(newPredators))
            newPredators = 0
        if (newVictims === 0 && newPredators === 0)
            break
        pointsPredator.push({x: i+1 ,y:newPredators});
        pointsVictim.push({x: i+1, y: newVictims});
    }
    return {pointsVictim, pointsPredator}

}


function isAlmostZero(number) {
    const eps = 0.01
    return number < eps
}