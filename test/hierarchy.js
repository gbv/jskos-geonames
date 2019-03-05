const expect = require("chai").expect
const Hierarchy = require('../lib/hierarchy')

describe("Hierarchy", () => {
  var hier

  it("loads a hierarchy file", () => {
    hier = new Hierarchy(__dirname + '/hierarchy.csv')
    expect(Object.keys(hier)).to.have.members(['broader','narrower'])
  })

  it("populates narrower/broader", () => {
    expect(hier.broader[27]).to.have.members([12,8])
    expect(hier.narrower[12]).to.have.members([23,27])
  })

})
