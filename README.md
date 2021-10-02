# codex_experiment

## Background

Initial experiments of (a) generating a simple application with Codex and (b) translating between Python and COBOL using Codex.

For the experiment generating an application with Codex:
- A set of English-language prompts entered in the [Codex JavaScript Sandbox](https://youtu.be/Zm9B-DvwOgw) generates JavaScript for a selection list of US states that displays the map of the selected state.
- For details on the Javascript experiment, see [this article that describes the experiment](https://markryan-69718.medium.com/a-first-taste-of-codex-71385ee8aaa4) and [this video that describes a related experiment with Codex](https://youtu.be/d9sbsSA8xS4)

For the experiments translating between Python and COBOL using Codex:
- "hello world" is translated from Python to COBOL and then back again to Python
- a program to sum two numbers is translated from Python to COBOL (not successful) and then a COBOL program to sum two numbers is successfully translated to Python
- For details on the Python-COBOL experiments, see [this article that describes the experiments](https://markryan-69718.medium.com/back-to-the-future-with-codex-and-cobol-766782f5ae8f)

## Files

- [us_state_maps_from_fiddle.html](https://github.com/ryanmark1867/codex_experiment/blob/main/us_state_maps_from_fiddle.html) is a self-contained example. The JavaScript for this example was generated by Codex based on a set of English-language prompts, and the wrapping HTML was generated automatically by [JSFiddle](https://jsfiddle.net/)
- [us_state_maps_raw_from_codex.html](https://github.com/ryanmark1867/codex_experiment/blob/main/us_state_maps_raw_from_codex.html) is the raw JavaScript generated by Codex. This version includes the prompts (as comments) that got Codex to generate the code.
- [hello_world.cbl](https://github.com/ryanmark1867/codex_experiment/blob/main/hello_world.cbl) is the "hello world" COBOL program generated by Codex from Python input (experiment 1 in the [article](https://markryan-69718.medium.com/back-to-the-future-with-codex-and-cobol-766782f5ae8f))
- [python_output_addition_cleaned_up.py](https://github.com/ryanmark1867/codex_experiment/blob/main/python_output_addition_cleaned_up.py) is the Python program to sum two numbers generated by Codex from COBOL input (experiment 4 in the [article](https://markryan-69718.medium.com/back-to-the-future-with-codex-and-cobol-766782f5ae8f))
