# About my project

### Introduction

This project offers a wide range of dynamic features, providing an engaging user
experience. Here's a demo of some of its functionalities:

### Key Features:

- **Dynamic Content:** The page is entirely dynamic, adapting to user
  interactions seamlessly.
- **Shopping Cart Integration:** Clicking the "Select" button automatically adds
  the selected course's price to the shopping cart.
- **Course Selection:** When a course is selected, its name is displayed in the
  cart, making it easy for users to track their choices.
- **Credit Limitation:** To maintain fairness, there's a restriction allowing
  users to purchase up to 20 credits. Attempting to exceed this limit triggers a
  message in a toast notification on the right-hand side.
- **Time Limitation:** The cart section prominently displays a time limitation
  function, ensuring users stay aware of their progress.
- **Responsive Design:** The website is responsive, offering a consistent and
  user-friendly experience across various devices.

### State Management:

In this project, state management is efficiently handled using React's
**useState** and **useEffect** hooks. Here's an overview of how state is
managed:

- **useState:** State is initially declared using useState, allowing data to be
  held within components.
- **useEffect:** The **useEffect** hook is utilized to manage data. It retrieves
  and updates data, which is then passed to other components through props.
- **Dynamic Card Section:** The project uses the data from props to create a
  dynamic card section, offering a flexible and data-driven user interface.
- **Shopping Cart:** Multiple instances of **useState** are employed to
  conditionally manage and display data within the cart section.
- **Credit and Time Management:** Conditional statements are used for credit and
  time management, ensuring that users are informed of their remaining credits
  and time.
