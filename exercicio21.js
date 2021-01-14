// 21) given a reference point and a list of other points, write a function called findClosest that will return the element of the list that is closest to 
// the reference point.
// note: a point here will be denoted as an object with x and y as properties.

const findClosest = (points, ref) => {

    let closest = Infinity
    let point

    for (let i = 0; i < points.length; i++) {
        let x = Math.pow(points[i].x,2) - Math.pow(ref.x,2)
        let y = Math.pow(points[i].y,2) - Math.pow(ref.y,2)
        let result = Math.sqrt(x + y)

        if (result < closest) {
            closest = result
            point = points[i]
        }
    }
    return point
}

console.log(findClosest([{ x: 4, y: 2 }, { x: 3, y: 3 }, { x: -1, y: 3 }, { x: 2, y: 3}, { x: 1, y: -2}],  { x: 1, y: 1}))