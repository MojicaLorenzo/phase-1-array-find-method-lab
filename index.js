// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ] 

function superbowlWin(record) {
    for(let result of record) {
        if(result.result === 'W') {
            return (result.year)

        }
    }
    //return result === record.year
}
superbowlWin(record)

record.find(specificYear)
 function specificYear() {
    for (let item of record) {
        if(item.item === 'W') {
            return (item.year)
        }
    }
 }
