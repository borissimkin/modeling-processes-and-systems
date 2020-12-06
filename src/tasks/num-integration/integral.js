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

export const getPointsAccuracyGraph = (typeFunction, typeMethodIntegration, limitsIntegration, limitsCountsInterval) => {
    const points = []
    for (let i = limitsCountsInterval.min; i <= limitsCountsInterval.max; i++)
    {
        let pointsRectangles = getPointsRectangles(typeFunction, limitsIntegration.min, limitsIntegration.max, i, typeMethodIntegration)
        let trueIntegral = getTrueIntegral(typeFunction, limitsIntegration)
        let integralRectangles = getIntegral(limitsIntegration.min, limitsIntegration.max, i, pointsRectangles)
        let errorValue = trueIntegral / integralRectangles * 100;
        points.push(
            {
                x: i,
                y: errorValue
            }
        )
    }
    return points;

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
    const points = [];
    let value = min;
    for (let i = 0; i < countInterval; i++)
    {
        points.push(
            {
                x: value,
                y: mathFunction(value)
            }
        )
        value += step;
    }
    return points;

}

const getPointsRightRectangles = (typeFunction, min, max, countInterval) => {
    const mathFunction = getMathFunctionByType(typeFunction);
    const step = getStep(countInterval, min, max);
    const points = []
    let value = min+step;
    for (let i = 0; i < countInterval; i++)
    {
        points.push(
            {
                x: value,
                y: mathFunction(value)
            }
        )
        value += step;
    }
    return points;
}

const getPointsMiddleRectangles = (typeFunction, min, max, countInterval) => {
    const mathFunction = getMathFunctionByType(typeFunction);
    const step = getStep(countInterval, min, max);
    const points = []
    let value = min;
    for (let i = 0; i < countInterval; i++)
    {
        points.push(
            {
                x: value,
                y: step / 2 + mathFunction(value)
            }
        )
        value += step;
    }
    return points;
}

export const getIntegral = (min, max, countInterval, points) => {
    const step = getStep(countInterval, min, max)
    return points.reduce((accumulator, point) => {
        return accumulator + point.y * step
    }, 0)

}

export const getTrueIntegral = (typeFunction, limitsIntegration) => {
    let min = limitsIntegration.min,
        max = limitsIntegration.max;
    let valueIntegralMin,
        valueIntegralMax;
    switch (typeFunction) {
        case 'square':
            valueIntegralMin = min*min*min / 3;
            valueIntegralMax = max*max*max / 3;
            break;
        case 'sinus':
            valueIntegralMin =  -Math.cos(min);
            valueIntegralMax = -Math.cos(max);
            break;
        case 'h-sinus':
            valueIntegralMin = Math.cosh(min);
            valueIntegralMax = Math.cosh(max);
            break;


    }
    return valueIntegralMax - valueIntegralMin;

}


