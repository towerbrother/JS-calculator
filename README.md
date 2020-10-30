# JS-calculator

The calculator is built with **HTML**, **CSS** and **Vanilla Javascript**.

It consist of two main parts: the **display** and the **keys**.

- The display has a scrollbar on the x-axis to manage potential overflow.
- There are four type of keys:
  - Operators
  - Numbers
  - Decimal
  - Clear

Each key has associated with it a click event listener that trigger specific methods depending which key is clicked. Ultimately, in each case, the display is updated using the `updateDisplay()` method.

I used a `state` object to keep track of keys clicked, the value displayed and of the operands. The `waitingForSecondOperand` value allows me to know whether the first operand and the operator where already inserted or not and act accordingly.

The `reset()` method brings back state to its original values.

The end user is able to click multiple times, in sequence, different operators keys and the `state` object will keep track of it. In case of the decimals however, the end user will not be able to add the dot as first value or in case a decimal dot is already showing on the display.

## Contact details

Hi, I am Giorgio Torre a self-taught frontend developer. I have been coding, learning, debugging, creating and most importantly having fun for the past year and I am now looking for a position as frontend engineer.

To see what I can do follow this [link](https://towerbrother.github.io/portfolio-app/) to my projects portfolio site.

You can find me on [LinkedIn](https://www.linkedin.com/in/giorgiotorre/) or via email at <giorgio.torre8@gmail.com>

I am looking forward to hearing from you.
