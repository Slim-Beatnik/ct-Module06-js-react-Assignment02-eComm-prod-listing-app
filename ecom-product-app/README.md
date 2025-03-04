<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![none][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">ct-Module06-js-react-Assignment01-eComm-prod-listing-app</h3>

  <p align="center">
    # **🌐 Advanced JS & Intro to React Module Project: E-Commerce Product Listing App**

## **📌 Project Overview**

In this project, students will build a simple **E-Commerce Product Listing App** using React. This project reinforces **React components, props, and state** by designing a layout without using frameworks like Bootstrap, focusing on custom styling.

---

## **✨ Learning Objectives**

By the end of this project, students will be able to:  
✅ Organize code using **React components**.  
✅ Manage state using the **useState** hook.  
✅ Pass and manage data through **props** between components.  
✅ Structure a React application with a **parent-child component hierarchy**.

**Note:** Students will not be using event handling yet, but this project sets the foundation for it in later lessons.

---

#### **🛠 Project Setup Instructions**

1️⃣ **Set up the React app:**

* Open the terminal and create a new React project:

| npx create-vite ecom-product-app \--template react |
| :---- |

* Navigate into the project folder:

| cd ecom-product-app |
| :---- |

* Install dependencies:

| npm install |
| :---- |

**2️⃣ Plan Your Components:**  
The project consists of three main components, following the React component hierarchy:

| Component | Description |
| ----- | ----- |
| App Component (Parent) | The main component that holds the state for the list of products and passes data as props to child components. |
| ProductList Component (Child of App) | Receives the list of products from App via props and maps through them to display each product. |
| ProductItem Component (Child of ProductList) | Represents a single product, receiving individual product data via props. |

---

#### **📌 Component Breakdown & Tasks**

1️⃣ App Component (Parent Component)

* **Responsibilities:**  
  * Manages the **state** that holds an array of products.  
  * Passes the **list of products** as a **prop** to the `ProductList` component.  
  * Styles the **main structure** of the app using CSS.  
* **Tasks for Students:**  
  ✅ Initialize state using `useState` to store a list of products (each product should have attributes like `id`, `name`, `price`, and `description`).  
  ✅ Pass the product list as **props** to `ProductList`.  
  ✅ Apply **custom CSS styling** for the app layout.

---

2️⃣ ProductList Component (Receives products as props)

* **Responsibilities:**  
  * Receives the **product list** from `App` as a **prop**.  
  * Maps through the product list and **renders** each product using `ProductItem`.  
* **Tasks for Students:**  
  ✅ Create a `ProductList` component that takes the **product list as a prop** and maps through it.  
  ✅ Use the `.map()` method to **iterate over products** and render a `ProductItem` for each.  
  ✅ Apply **custom CSS styling** for the **product list layout**.

---

3️⃣ ProductItem Component (Receives individual product data as props)

* **Responsibilities:**  
  * Represents **one product** with its **name, price, and description**.  
  * Receives **individual product data** from `ProductList` via **props**.  
* **Tasks for Students:**  
  ✅ Display **product details**: Name, Price, and Description.  
  ✅ Use **props** to receive data and render it dynamically.  
  ✅ Style each product **visually distinct** using **CSS**.

---

#### **🛠 Testing Your App**

Before submission, students should verify:  
✅ The **list of products** is displayed on the page.  
✅ **State and props** are used **correctly** between components.  
✅ The **layout and styling** look polished and consistent.

---

#### **🌟 Optional Features (Bonus Challenges)**

If you feel confident, you can extend the app by adding:  
🚀 **Category Filtering**: Add a "category" attribute and allow users to filter products based on categories.  
🚀 **Product Images**: Include images for each product and display them in `ProductItem`.

---

#### **✅ Final Checklist Before Submission**

✅ **A list of products is displayed** on the page.  
✅ **React components** are structured properly with **state and props**.  
✅ **CSS is applied** for a well-styled, responsive UI.

---

📤 Submission Instructions

🔹 **Push the project to GitHub**.  
🔹 **Submit the GitHub repository link** in the assignment portal.

---

### 💯 Grading Criteria (Total: 25 Points)

| Criteria | Full Points (5 pts) | Partial Points (2-4 pts) | Needs Improvement (0-1 pts) |
| ----- | ----- | ----- | ----- |
| **State Management** (5 pts) | Uses `useState` correctly and updates state properly | Uses `useState`, but with minor issues | Missing or incorrect use of `useState` |
| **Props Implementation** (5 pts) | Passes props correctly and uses them dynamically | Uses props, but with minor inconsistencies | Missing or incorrectly implemented props |
| **Component Structure** (5 pts) | App, ProductList, and ProductItem are structured well | Components are structured, but not fully optimized | Components are disorganized or missing |
| **Styling & Layout** (5 pts) | Well-structured and visually appealing styling | Some styling issues, but functional | Poor or no styling applied |
| **Functionality & Testing** (5 pts) | App functions as expected, meets all requirements | Some functionality issues, but mostly works | Major bugs or missing key features |

### 🎯 Tips for Success

✅ Keep your components **modular** and **organized**.  
✅ Use **props** efficiently to **pass data** between components.  
✅ Test your app frequently to **catch errors early**.  
✅ Ensure your CSS provides a **consistent and appealing UI**.
    <br />
    <a href="https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="kh-ct-module06-assignment02.netlify.app">View Demo</a>
    &middot;
    <a href="https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the none. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - totem64@gmail.com

Project Link: [https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app](https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app.svg?style=for-the-badge
[contributors-url]: https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app.svg?style=for-the-badge
[forks-url]: https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app/network/members
[stars-shield]: https://img.shields.io/github/stars/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app.svg?style=for-the-badge
[stars-url]: https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app.svg?style=for-the-badge
[issues-url]: https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app/issues
[license-shield]: https://img.shields.io/github/license/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app.svg?style=for-the-badge
[license-url]: https://github.com/Slim-Beatnik/ct-Module06-js-react-Assignment02-eComm-prod-listing-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/3dkylehill
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
