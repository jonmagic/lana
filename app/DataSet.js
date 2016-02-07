import fs from "fs"
import parse from "csv-parse"

export default class {
  constructor(path) {
    this.loaded = false
    this.data = []
    this.seconds = 0.0

    this.parser = parse({auto_parse: true})
    this.parser.on("readable", ()=>{
      var record;
      while(record = this.parser.read()) {
        this.data.push(record)
        this.seconds = record[0]
      }
    })
    this.parser.on("error", (error)=>{
      console.log(error.message)
    })

    this.stream = fs.createReadStream(path)
    this.stream.on("end", ()=>{
      if(this.data[0][0] == "Time[s]") {
        this.data.shift()
      }
      this.loaded = true
    })
    this.stream.pipe(this.parser)
  }

  dataForTimespan(start_time, end_time) {
    function binaryIndexOf(searchElement) {
      var minIndex = 0
      var maxIndex = this.length - 1
      var currentIndex
      var currentElement

      while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = this[currentIndex]

        if (currentElement[0] < searchElement) {
          minIndex = currentIndex + 1
        }
        else if (currentElement[0] > searchElement) {
          maxIndex = currentIndex - 1
        }
        else {
          return currentIndex
        }
      }

      return currentIndex + 1
    }

    var start_index = binaryIndexOf.call(this.data, start_time)
    var end_index = binaryIndexOf.call(this.data, end_time)

    return this.data.slice(start_index, end_index)
  }
}
