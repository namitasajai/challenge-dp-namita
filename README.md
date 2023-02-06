# Spring '23 React Challenge

### General Requirements
- We want you to duplicate the functionality of this [quiz](https://www.underthebutton.com/article/2020/01/parents-obligated-talk). This means showing each question with its options as a form that people can fill out and submit for a response.
- Your code should use `data.json` under `/src` as the content to show in the form.
- Do not **hardcode** anything as we will edit `data.json` and do some simple tests. Any edit to `data.json` takes the following forms: 1) changing the number of questions 2) changing the number of options to each question 3) changing the number of results 4) changing the text of any question, option, or result. You can assume that `data.json` will be well-formatted.
- Your quiz should be functional. The response shown doesn't have to match UTB's actual form, but it should at least be reproducible. Selecting answers and submitting should show one of the responses. Reloading the page and selecting the same answers should show the same response. 

---

### Required Features
- For each question, there should be at most 1 option that is chosen at the same time.
- When the user clicks on **show me my results** button, he/she should not be able to modify the form.
- There should be a **retake quiz** button after the result is shown that allows the user to take the quiz again.
- The user has to give an option to each question before he/she is able to click on **show me my results** button and see the results to the quiz.
- If the majority of responses to the form is A, the first element in `results` should be returned. And if the majority responses is B, the second element in `results` is returned, and so on. Therefore, if you have k options, you should also have k elements in `results`.

---

### Tools
- For styling, use whatever you want:

  - CSS frameworks (Bulma, Bootstrap)
  - CSS files (or SCSS)
  - CSS-in-JS
  - `styled-components`
  - ...

- For state management:

  - Vanilla react state and props
  - Redux
  - ...

- For navigation:
  - React Router
  - ...

---

### Getting Help
If you have any questions about the challenge or need some help, send an email to **Bach Tran** (engineeringmanager@dailypennsylvanian.com)

---

### Submission
Either **ONE** of the following will work:
- Fork this repository and commit your changes to your fork, and submit the **GitHub link** to your fork (please make the repo **public** so we can have access to your code)
- Zip your code and submit the compressed package (DO NOT INCLUDE `node_modules`!)

Besides your working code, please also take some time to complete `Submissions.txt` so we can have a better understanding of how you feel about the challenge.

After that, you should make your submission [HERE](https://developers.thedp.com/apply). Congratulations, you have finished the challenge!
