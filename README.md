# Spring '23 React Challenge 

### General Overview
  Developed a quiz application with dynamic functionality, allowing for easy customization and modification of quiz content. Implemented form submissions to display results based on user responses, utilizing data from a JSON file. Ensured the application's robustness by implementing a solution that is not hardcoded and can handle changes to the number of questions, options, results, and their respective text. The application is fully functional, with a reproducible response system that displays the same result upon repeated submissions with the same answers.

---

### Features
- For each question, there is at most 1 option that is chosen at the same time.
- When the user clicks on **show me my results** button, he/she is not able to modify the form.
- **Retake quiz** button after result are displayed allows user to take the quiz again.
- The user must choose an option to each question before he/she is able to click on **show me my results** button and see the results to the quiz.
- If the majority of responses to the form is A, the first element in `results` should be returned. And if the majority responses is B, the second element in `results` is returned, and so on.

---

### Tools
- Application: 
  - React

- Styling:
  - CSS files (or SCSS)
  - CSS-in-JS
  - `styled-components`

- For state management:
  - Redux

- For navigation:
  - React Router
---

