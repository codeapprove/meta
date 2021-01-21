// This file is meant to test sub-line diffing

// Here I'm going to change the leading whitespace before the args
myFunction.doWithArgs(
  arg1,
  arg2.getProperty()
);

// Here I'm going to add a third import to see if it handles the commas right
import { foo, bar } from "library";
