# Calculator

This project primarily uses Javascript DOM manipulation via event listeners to achieve calculator functionality. I created a skeleton of html elements for the UI and styled it with CSS, incorportating some Flexbox and Grid in order to place the buttons and make the page responsive.

A quiver of helper functions make the calculator work by storing input values, operators, performing calculations, deleting inputs, clearing values, and toggling positive and negative numbers. Those functions are called by event listeners when a user clicks on a calculator button or when an appropriate keyboard button is pressed.

Major challenges/points of learning for me came from syntax for calling multiple functions in an event listener, using conditionals within an event listener, figuring out what the conditions should be in order to achieve the expected functionality, and how to pass the correct values from a button into the appropriate functions. The most major hangup came from using 'this.value' when a button was pressed, which I found will not work when inside of a conditional ('this.value' will then return 'undefined' instead of the expected value, as including 'this' in a conditional changes its scope to global).

I flailed for hours trying to make 'this.value' work, then I deleted all of the logic and started fresh with a different, convoulted approach, then deleted all of that and started again, ending up at basically the same point I had on my first try. My breakthrough came when I realized I just needed to require a parameter for the button clicked in the corresponding function, and to pass the value of the button to the function when the button is clicked. It's a shame that using 'this' inside a conditional doesn't work as I had hoped it would, because that would have been a cleaner solution and would have saved me days of frustration, but I'm proud that I figured out the solution I used.

In addition to using the most complex Javascript I'd written to date, I also made a point of challenging my abilities with CSS. While the overall design is pretty simple, I made a point to use CSS Grid for the keypad layout because I had never previously used Grid in a project (and it also seemed like the logical tool to use). I also drew upon some of my prior experience with Flexbox in order to fine-tune things and refresh my Flexbox knowledge.

I also tried to use sparing comments in the Javascript in order to explain how major things worked.

I'm proud of how this project came together as it truly did challenge me, and I feel like for the most part I found clean solutions to those challenges.