var NUM1 = 10;
var NUM2 = 10;
var NUMA = 100;
var NUMB = 15;
var NUMC = 0;
var RES_DIV = 0;
var RES_MULT = 0;
var RES_SUB = 0;
var RES_ADD = 0;
var RES_MOV = 0;
  
NUMC = NUM1 * NUM2;
NUMA = NUMA / NUMB;
NUMA = NUMA * NUMB;
NUMA = NUMA - NUMB;
NUMA = NUMA + NUMB;
NUMA = NUMA;
  
console.log("NUMC: " + NUMC);
console.log("RES_DIV: " + RES_DIV);
console.log("RES_MULT: " + RES_MULT);
console.log("RES_SUB: " + RES_SUB);
console.log("RES_ADD: " + RES_ADD);
console.log("RES_MOV: " + RES_MOV);
console.log("REINITIALIZED NUM1: " + NUM1);
console.log("REINITIALIZED NUM2: " + NUM2);