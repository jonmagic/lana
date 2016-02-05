"use strict";

import DataSet from "../app/DataSet"

describe("DataSet", ()=>{
  describe("load", ()=>{
    it("is loaded", ()=>{
      var dataset = new DataSet
      expect(dataset.load()).toEqual("loaded")
    })
  })
})
