export const getValuesFunction = (XValues, typeFunction) => {
    switch (typeFunction) {
        case 'square':
            return getValuesSquareFunction(XValues);
        case 'sinus':
            return getValuesSinusFunction(XValues);
        case 'h-sinus':
            return getValuesHSinusFunction(XValues)

    }
}

const getStep = (countInterval, min, max) => {
    return (max - min) / countInterval;

}

export const getXValuesIntegralRectangles = (min, max, countInterval) => {
    const step = getStep(countInterval, min, max);
    const XValues = []
    for (let i = min; i < max; i += step) {
        XValues.push(i)
    }
    return XValues;

}

const getValuesSquareFunction = (XValues) => {
    return XValues.map(x => x*x)

}

const getValuesSinusFunction = (XValues) => {
    return XValues.map(x => Math.sin(x))
}


const getValuesHSinusFunction = (XValues) => {
    return XValues.map(x => Math.sinh(x))
}


