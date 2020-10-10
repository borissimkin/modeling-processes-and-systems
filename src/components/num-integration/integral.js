export const getPointsFunction = (typeFunction, min, max) => {
    const mathFunction = getMathFunctionByType(typeFunction)
    const points = []
    for (let i  = min; i <= max; i++)
    {
        points.push(
            {
                x: i,
                y: mathFunction(i)
            }
        )
    }
    return points;

}

const getMathFunctionByType = (typeFunction) => {
    let mathFunction;
    switch (typeFunction) {
        case 'square':
            mathFunction = (x) => x*x;
            break
        case 'sinus':
            mathFunction = Math.sin;
            break;
        case 'h-sinus':
            mathFunction = Math.sinh
            break
    }
    return mathFunction
}

const getStep = (countInterval, min, max) => {
    return (max - min) / countInterval;

}

export const getPointsRectangles = (typeFunction, min, max, countInterval, typeMethodIntegration) => {
    switch (typeMethodIntegration) {
        case 'left':
            return getPointsLeftRectangles(typeFunction, min, max, countInterval)
        case 'right':
            return getPointsRightRectangles(typeFunction, min, max, countInterval)
        case 'middle':
            return getPointsMiddleRectangles(typeFunction, min, max, countInterval)

    }

}

const getPointsLeftRectangles = (typeFunction, min, max, countInterval) => {
    const mathFunction = getMathFunctionByType(typeFunction);
    const step = getStep(countInterval, min, max);
    const points = []
    for (let i = min; i < max; i += step) {
        points.push(
            {
                x: i,
                y: mathFunction(i)
            }
        )
    }
    return points;

}

const getPointsRightRectangles = (typeFunction, min, max, countInterval) => {
    const mathFunction = getMathFunctionByType(typeFunction);
    const step = getStep(countInterval, min, max);
    const points = []
    for (let i = min+step; i <= max; i += step) {
        points.push(
            {
                x: i,
                y: mathFunction(i)
            }
        )
    }
    return points;
}

const getPointsMiddleRectangles = (typeFunction, min, max, countInterval) => {
    const mathFunction = getMathFunctionByType(typeFunction);
    const step = getStep(countInterval, min, max);
    const points = []
    for (let i = min+step; i <= max; i += step) {
        points.push(
            {
                x: i,
                y: step / 2 + mathFunction(i)
            }
        )
    }
    return points;
}

export const getIntegral = (min, max, countInterval, points) => {
    const step = getStep(countInterval, min, max)
    return points.reduce((accumulator, point) => {
        return accumulator + point.y * step
    }, 0)

}


