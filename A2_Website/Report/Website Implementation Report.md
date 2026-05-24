# Assignment 2: Website Implementation Report

- **Authors**: Zachary Pathuis, Muhammad Saaim, Hiruna Ranawaka
- **FANs**: path0171, saai0013, rana0302
- **Student IDs**: 2406751, 2390378, 2389284
- **Topic ID**: COMP1103

---

## Table of Contents

1. Annotated Page Screenshots
2. Back-End Communication
3. Style Guide Summary
4. Individual Reflections

---

## Annotated Page Screenshots

Annotated screenshots of each page indicating function and specific page elements.

---

### About Us — Zachary Pathuis (path0171)

**Source file:** `about_us.html`

![About Us — annotated screenshot](Screenshots/about_us_path0171.png)

**Key elements to annotate:**

- Navigation and page layout
- Content sections and calls to action
- Links to other pages or external resources

---

### Adoption Form — Muhammad Saaim (saai0013)

**Source file:** `adoption_form.html`

![Adoption Form — annotated screenshot](Screenshots/adoption_form_saai0013.png)

**Key elements to annotate:**

- Form fields and validation
- Submit / confirmation behaviour
- User flow from pet selection to application

---

### Browser Page — Zachary Pathuis (path0171)

**Source file:** `browser_page.html`

![Browser Page — annotated screenshot](Screenshots/browser_page_path0171.png)

**Key elements to annotate:**

- Search and filter controls
- Pet listing cards or grid
- Navigation to pet detail / selection

---

### Contact Us — Zachary Pathuis (path0171)

**Source file:** `contact_us.html`

![Contact Us — annotated screenshot](Screenshots/contact_us_path0171.png)

**Key elements to annotate:**

- Contact form or messaging interface
- Location / centre information
- Appointment or enquiry actions

---

### Homepage — Hiruna Ranawaka (rana0302)

**Source file:** `homepage.html`

![Homepage — annotated screenshot](Screenshots/homepage_rana0302.png)

**Key elements to annotate:**

This annotated screenshot presents the homepage of the Adopt It pet adoption website. The homepage was designed with a clean and welcoming layout to create a positive first impression for users. It includes a navigation bar for easy access to pages such as the Browser Page, Adoption Form, and Contact Us, along with a prominent “Sign Up” button that redirects users to the profile page after registration.

The homepage also highlights the organisation’s mission through engaging visuals, adoption statistics, and inspirational slogans such as “Rescue. Love. Repeat.” Images of pets and families were included to create an emotional connection with users, while the partner section was added to showcase trusted organisations supporting the adoption platform. Additionally, the “More Info” button directly navigates users to the About Us page for further details about the organisation and its mission.
---

### Log In — Hiruna Ranawaka (rana0302)

**Source file:** `log_in.html`

![Log In — annotated screenshot](Screenshots/log_in_rana0302.png)

**Key elements to annotate:**

This annotated screenshot presents the Sign Up page of the Adopt It pet adoption website. The page was designed with a clean and user-friendly layout, combining a welcoming family-and-pet image with a simple registration form. Users are required to enter their name, email, password, and confirm their password before clicking the “Sign me up!” button. JavaScript validation was implemented to check password confirmation, and after a successful sign up, the user is redirected to the homepage.

---

### Pet Selected — Hiruna Ranawaka (rana0302)

**Source file:** `pet_selected.html`

![Pet Selected — annotated screenshot](Screenshots/pet_selected_rana0302.png)

**Key elements to annotate:**

This annotated screenshot presents the Pet Selected page of the Adopt It pet adoption website. The page was designed to provide detailed information about a selected pet, including its age, gender, location, colour, medical notes, and pre-adoption checks. Images of the pet were displayed in different activities to help users better connect with the animal before adoption.

The page also includes an “Enquire Max” button that redirects users to the adoption form page to continue the adoption process. JavaScript and JSON integration were used to dynamically update the pet details and images depending on the pet selected by the user from the browser page, creating a more interactive and personalised user experience.

### Profile Page — Muhammad Saaim (saai0013)

**Source file:** `profile_page.html`

![Profile Page — annotated screenshot](Screenshots/profile_page_saai0013.png)

**Key elements to annotate:**

- User account information display
- Saved pets / application status
- Edit profile or settings controls

---

## Back-End Communication (rana0302, saai0013)

_Describe how the front end communicates with the server (or planned integration). Include request/response flow, endpoints, data formats, and error handling where relevant._

### Overview (rana0302)

The front end communicates with the back end using HTTP requests and responses. When a user performs an action such as signing in, viewing pets, or submitting forms, the front end sends requests to the server. The server processes the request, interacts with the database when necessary, and returns a response to the front end. The front end then updates the user interface based on the received data. Error handling is also implemented to display appropriate messages if a request fails or invalid information is entered this is mainly done through javascript.

### Implementation Details for back-end communication (rana0302)

The back-end communication for the Adopt It website was mainly implemented using JavaScript and JSON to create dynamic interactions between pages and user inputs. One of the key implementations was on the pet selected page, where a JSON file was used to store pet information such as names, breeds, descriptions, medical notes, and images seperately for all pets. When a user selected a pet from the browser page, JavaScript retrieved the corresponding data from the JSON file structure and dynamically updated the page content and images. This allowed multiple pet informationa and images to be displayed using a single html page design rather than creating separate HTML pages for every pet.

JavaScript was also used extensively for form validation and error handling throughout the website. For example , on the sign up page, validation ensured that the password and confirm password fields matched before allowing account creation, while error messages were displayed if invalid data was entered. Similarly, the adoption form and contact form validated user inputs such as email addresses, phone numbers, and required text fields before submission. Although the project currently focuses mainly on front-end implementation, the structure was designed with few back-end integrations as well.


### Security and validation (saai0013)

Client-side validation checks were added in our web pages using JavaScript which improved the ease of use and reduce incorrect user input. These checks also ensured that user correctly enters all important fields such as contact number, name, and email address. This will avoid incomplete forms and enhance overall user experience by responding immediately to the user.

To improve the responsiveness and user interactivity of user, CSS was added and linked to the webpages. A friendly user-interface was added  by implementing color contrast, button styling, and form layouts. Our layouts were responsive being considering that they can be used on multiple screen sizes. 

While developing our web pages we considered basic security by using semantic HTML structure and organized file management was practiced to avoid errors and improve code readability. Backend implementation was not completely implemented, while that project structure was to be done for upcoming JSON and PHP integration. Backend data-cleaning and privileged access could have been significant in producing a final version of our website.

Overall, we focused on improving validation and a simple interface design to reduce number of user errors and a long-term trustworthy experience for our users.




---

## Style Guide Summary (path0171)

_Summarise the visual and interaction standards used across the site._

Our site uses a warm, friendly pet-adoption look built around orange and cream tones. Most styling lives in [`styles/global.css`](../styles/global.css) (header, nav, footer), with each page adding its own CSS file on top.

### Colour palette

| Role       | Colour | Usage |
| ---------- | ------ | ----- |
| Primary    | `#fe8920` / `rgb(233, 162, 61)` | Main brand orange — nav hover, filter buttons, form accents, section headings, submit buttons |
| Secondary  | `#e07515` / `#ffa75a` | Darker orange on button hover; contact panel right side; footer background `#ffbb80` |
| Background | `#ffe8cc` | Warm cream page background on homepage, browser, contact, about, pet selected, adoption, and profile |
| Text       | `#000000`, `#2c3e50`, `#888888` | Body text (black); navigation links (`#2c3e50`); secondary text such as breed labels (grey) |

White (`#ffffff`) is used for cards, filter panels, and form containers. Homepage impact headings also use **red** for emphasis on the “15 years of Impact” line.

### Typography

| Element      | Font family | Size / weight | Usage |
| ------------ | ----------- | ------------- | ----- |
| Headings     | `"inter", sans-serif` (most pages); `"Times New Roman", serif` (homepage impact section) | Page titles ~45–54px bold; section headings ~18–34px; pet name ~2.5rem | Browser “Adoptable Pets”, contact “Contact Us”, filter labels, profile headings |
| Body         | `"inter", sans-serif` | 14–16px, line-height 1.6 | Paragraphs, form labels, footer text, pet descriptions |
| UI / buttons | `"inter", sans-serif` | 15–16px bold | Header “Sign Up” / “User Profile”, nav links, filter buttons, form submit buttons |

Font Awesome 6.5 is loaded on all pages for icons (dog/cat/bird filters, social links, sliders).

### Layout and components

- **Navigation:** Sticky white header with logo (links to homepage) and orange pill button for sign-up or profile. Grey bar below with centred links (Browser, Adoption Form, Contact Us). Active/hover state uses orange text and a bottom border. Same header and nav appear on every page via shared HTML structure and [`header.js`](../scripts/Zac/header.js).
- **Buttons and forms:** Primary actions use orange fill, white text, and rounded corners (typically 20–30px `border-radius`). Hover darkens the orange. Form inputs use a simple underline style (`border-bottom: 1px solid #fe8920`) on contact and adoption pages. Client-side validation runs in JavaScript before data is sent to PHP.
- **Cards / listings:** Pet cards on the browser page are white boxes with rounded corners (`10px`), light shadow, and an orange section title. Clicking a card opens the pet detail page. Profile and adoption sections use white cards on the cream background with padding and subtle borders/shadows.
- **Consistency:** All pages share the same header, navigation, footer, and orange/cream colour scheme. Page-specific CSS files only change layout and content areas, not the global chrome. Logo assets (`logo_with_text_transparent.png`, `logo_transparent.png`) are reused in the header and footer.

### Accessibility

- Semantic HTML is used across the site (`header`, `nav`, `main`, `footer`, `section`, `aside`, heading levels).
- Images include `alt` text (logos, pet photos, team profiles).
- Form fields use `<label>` elements linked to inputs; required fields are marked in HTML.
- Colour contrast is kept readable with dark text on light backgrounds; orange is used mainly for accents and buttons with white label text.
- Layouts use flexible widths (percentages, `max-width`, flex/grid) so content scales on different screen sizes, though the site is not fully optimised for mobile.

---

## Individual Reflections

_Each team member: ~300 words on the design-to-prototype process, complexity of development, and accommodations needed for successful deployment._

---

### Muhammad Saaim — saai0013

> **Word count target:** ~300 words

During the development of our Adopt It pet adoption website, I earned productive experience in making functional and interactive web pages. While doing our assignment 1, our main goal was on making user-focused designs through personas, wireframes, storyboards and user flows. In our assignment 2, I converted all of these concepts into fully functional and working web pages with the help of HTML, CSS, and JavaScript. This procedure helped me in understanding the significance of designing with both practicability and viability in mind.

My main part in this website project was to develop Pet Adoption Application Form and the User Profile page. A challenge I faced during the development was to implement front-end and back-end communication without the use of external libraries. I had to cautiously structure the inputs, create both CSS and JavaScript files for data handling. Issues such as debugging, invalid file paths, inactive links, and multiple HTML elements improved my problem-solving abilities to a great extent. 
Another key aspect of our website was to make sure the website is user friendly and easily accessible for all users. I did my best to apply adaptive and intuitive designs, clear navigation and semantic HTML and visual structure to improve ease of reading across multiple screen sizes. Validation checks using JavaScript were also added to avoid input errors and improve overall user experience.

To achieve successful development, our project was made using systematic folder structures which were named as per each individual team members to avoid confusions. Our team members also collaborated through GitHub to experience the importance of working in a team environment, communication and maintain professional coding practices. Overall, my concepts of web development were strengthened while working for this assessment.


---

### Zachary Pathuis — path0171

> **Word count target:** ~300 words

WRITE REFLECTION HERE

---

### Hiruna Ranawaka — rana0302

> **Word count target:** ~300 words

In relation to this assignment, there have been several lessons I learned in regards to web page creation. During this entire process, it would be important to note that my position in this was to design the homepage, sign-in page, and pet selected pages. This is in the sense that the objective of the design was to ensure that the user's attention was attracted as well as ensuring that the designs were understandable by the viewer.

Apart from designing the pages, I managed to develop CSS styles for the whole web application and create header, footer, and navigation bar for the website. At the same time, thanks to the changes made by my teammates to the pages, the issue of redundancy could be avoided while creating the web application. Nevertheless, there were still some challenges I had to deal with like the website contained lots of similarities in terms of color, fonts, and spaces used. Therefore, it was important to stick to the existing design and making that the common parts were all the same.

To achieve a successful webpage, I think that communication within the team and planning accurately before starting is crucial and I think that assignment 1 – UX design report helped us a lot where we planned out on how are web page is going to look with the help of the wireframes and storyboards that we designed. Also, we found it difficult at that start on how to think of working together on the same set of pages at once and then we figured it out through GitHub where it helped us to work on our individual pages separately but at the same time. Overall, during this project I gained a lot of knowledge regarding web development and improved my coding practices as well.

