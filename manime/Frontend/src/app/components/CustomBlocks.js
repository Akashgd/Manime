import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

// Define the custom blocks
Blockly.defineBlocksWithJsonArray([
  {
    type: "animation_block_1",
    message0: "make circle of %1 radius",
    args0: [
      
      {
        type: "field_number",
        name: "radius",
        value: 3,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 160,
    tooltip: "circle",
    helpUrl: "",
  },
  
]);

// Register the JavaScript generator
Blockly.JavaScript = Blockly.JavaScript || javascriptGenerator;

// Define the JavaScript code generation logic for the custom blocks
Blockly.JavaScript['animation_block_1'] = function(block) {
  console.log("hii")
  return 0;
};

Blockly.JavaScript['animation_block_2'] = function(block) {
  console.log("hii2")
  return code;
};
