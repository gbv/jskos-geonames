#!/usr/bin/env node

const fs = require('fs')

/**
 * Load and index hierarchy file with additional hierarchical relationships
 * not covered by the tree hierarchy.
 */

class Hierarchy {  
  constructor(file) {
    const broader = []
    const narrower = []

    const lines = fs.readFileSync(file,'utf8').split("\n")    

    lines.forEach(line => {
      const [parentId, childId] = line.split(',').map(x => 1*x)
      if (!parentId) return

      if (broader[childId]) {
        broader[childId].push(parentId)  
      } else {
        broader[childId] = [ parentId ]
      }

      if (narrower[parentId]) {
        narrower[parentId].push(childId)  
      } else {
        narrower[parentId] = [ childId ]
      }

    })

    this.broader = broader
    this.narrower = narrower
  }
}

module.exports = Hierarchy
