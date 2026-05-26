const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is an open-source JavaScript library developed by Meta for building fast and interactive user interfaces. It allows developers to create reusable UI components and efficiently update the user interface using a Virtual DOM. React is mainly used for building single-page applications (SPAs) and modern frontend web applications.",
  },

  {
    id: 2,
    question: "What is useState in React?",
    answer:
      "useState is a built-in React Hook that allows functional components to manage and update state. It returns an array containing the current state value and a function used to update that value. Whenever the state changes, React automatically re-renders the component to reflect the updated data on the screen.",
  },

  {
    id: 3,
    question: "What are components in React?",
    answer:
      "Components are reusable and independent pieces of UI in React. Each component contains its own structure, logic, and styling, making applications easier to organize and maintain. React applications are built by combining multiple small components together to create larger interfaces.",
  },

  {
    id: 4,
    question: "Why is React fast?",
    answer:
      "React is fast because it uses a Virtual DOM, which is a lightweight copy of the real DOM. Instead of updating the entire page whenever data changes, React compares the previous Virtual DOM with the updated one and changes only the necessary parts in the real DOM. This process improves performance and creates a smoother user experience.",
  },
];

export default faqs;