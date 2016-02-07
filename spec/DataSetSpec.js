import DataSet from "../app/DataSet"
const path = __dirname + "/fixtures/hello_world.csv"

describe("DataSet", ()=>{
  var dataset = new DataSet(path)

  beforeAll((done)=>{
    setTimeout(()=>{
      done()
    }, 100)
  })

  describe("loaded", ()=>{
    it("returns true when data has loaded", ()=>{
      expect(dataset.loaded).toBe(true)
    })
  })

  describe("data", ()=>{
    it("returns loaded data", ()=>{
      expect(dataset.data.length).toEqual(999)
    })
  })

  describe("seconds", ()=>{
    it("returns seconds in set", ()=>{
      expect(dataset.seconds).toEqual(0.172783833333333)
    })
  })

  describe("dataForTimespan", ()=>{
    it("returns data for timespan", ()=>{
      expect(dataset.dataForTimespan(0.0014, 0.0019)).toEqual([
        [0.001439333333333,1],
        [0.001543333333333,0],
        [0.001751416666667,1],
        [0.001855500000000,0]
      ])
    })
  })
})
