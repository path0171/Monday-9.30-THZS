## Usability Test Plan: Clear objectives for the testing process.

### Description of the 6 test participants (Hiruna - rana0301):

Six participants with different ages, backgrounds, and levels of digital literacy were taken to evaluate the Adopt It website. Participants ranged from 19 to 65 years old which included university students, working professionals, and a retired army soldier. Their experience with technology varied from highly confident users who regularly use laptops and mobile devices to less experienced users with limited exposure to modern technology. Most participants had never used a pet adoption website before, making them first-time users. Several participants also expressed an interest in pet adoption or companionship, allowing the evaluation to capture realistic user perspectives and identify usability issues across a broad range of users.

### List of specific tasks participants performed (Saaim - saai0013):

All the test participants were asked to perform multiple tasks to test the usability, functionality, and navigation of the website "Adopt It". All of these tasks primarily focused on how the user interacts with the pet adoption process which also included frontend interaction and backend functionality such as validation checks in the adoption form.

The tasks performed included creating a user account from the sign up page, filtering pets based on user preferences, choosing a specific pet and knowing their profile. Participants were also asked to fill in their personal details in the adoption form and submit their application. Other tasks that were carried out were filling the Contact Us form and analysing details through User Profile page.

These tasks demonstrated the responsiveness of the website across laptops and mobile devices and evaluated the efficiency of JavaScript validation. Along with that, these tasks also showcased the overall user satisfaction with this website.

### Methodology used (Zac - path0171):

Six methodology methods were used across six participants. These were: a post-test questionnaire, think-aloud protocol (Appendix 1–2), observations, pre-test questionnaire (Appendix 3–4), 10-question post-survey, and SEQ (Appendix 5–6). The post-test questionnaire given to Kinura (Appendix 1) and the survey given to Joel (Appendix 5) collected open-ended, reflective feedback and suggestions for improvement after task completion, with the survey ratings particularly being useful for assessing how well certain criteria were met. The think-aloud protocol was applied to Mark (Appendix 2), capturing real-time verbal commentary as he navigated the site, which revealed a discoverability issue with the About Is page that post-task questioning alone couldn’t. Observational notes were recorded for Anabella (Appendix 3), documenting behaviours and reactions without interruption. Pre-test questionnaires were done for Novera (Appendix 4), revealing prior digital literacy and expectations before interaction. Finally, Graham (Appendix 6) responded to a Single Ease Question (SEQ), which provided a concise difficulty rating with qualitative justification. Together, these methods captured both quantitative and qualitative data across varied user demographics.

---

## Testing Summary and Analysis: Report of results from the testing process.

### Summary of the process and outcomes of usability tests (Hiruna - rana0302):

The usability testing process involved six participants with varying ages, backgrounds, and levels of digital literacy completing a set of tasks on the Adopt It website. Participants were asked to create an account, browse available pets, view pet profiles, submit an adoption application, complete the Contact Us form, and access information through the User Profile page. These tasks were designed to evaluate both the website’s usability and its back-end functionality, including form validation and data handling. Testing was conducted on a range of devices, including laptops, desktops, and mobile phones, to assess responsiveness and consistency across platforms.

Data was collected through a combination of pre-test questionnaires, post-test questionnaires, think-aloud protocols, observations, surveys, and Single Ease Question (SEQ) responses. This approach provided both qualitative and quantitative data regarding user satisfaction, ease of navigation, task completion, and overall website performance.

The results indicated that all participants were able to complete the assigned tasks successfully. Most users found the website visually appealing, easy to understand, and efficient to navigate. Feedback highlighted the effectiveness of the pet browsing and adoption process, as well as the usefulness of the form validation features. However, some participants experienced difficulty locating certain information, particularly the About Us page. Overall, the collected data demonstrated strong usability while identifying areas where navigation visibility could be improved.

### Analysed collected data, identifying key findings, common pain points, and areas of success (Saaim - saai0013):

Our usability testing procedure gave us a significant understanding of how all the participants connected with our Adopt It website and spotlighted both our strengths and weaknesses along with overall user experience. Most of the participants were easily able to manage their assigned tasks successfully which was indicated by the help of all the collected data from observations, pre-test and post-test questions, and etc. The structure of our website, consistent colour theme, easy navigation and adaptive layouts contributed greatly in enhancing overall user experience.

One of the key areas of success discovered while testing was the Adoption Form page. Users appreciated the simple and clear structure and user friendly form due to legible labels, clear design, and planned layout. Including pictures and information of our pets also made our adoption process appealing and interactive. Validation through JavaScript was also a great success since it reduced the number of incomplete submissions and helped users to fill out their missing information before completing their form submission.

Another successful element of our website was the pet selected page. All the users were easily able to manage to the pet selected page from the browser page without any hesitation. Users were able to understand all the adoption details regarding their chosen pet with the help of all the pet information and images. Feedback also reflected that users were satisfied with overall performance of our website because of visual impression and direct navigation flow to different pages.

Although there was a decent feedback, multiple trouble spots were identified during the testing phase. One of the major concerns of the users was to receive a feedback on their application after completing with the adoption form. They expected a popup on-screen message after clicking on the submit button. Therefore, many participants were not sure whether their form was completely submitted.

Moreover, the users also faced a minor issue when using their mobile phones for testing. They observed that particular sections were congested and needed some spacing changes to have a more functional approach. Participants also suggested us to enhance the button contrast to make it more noticeable and approachable.

Covering all, our observed data reflected that our website was a success and followed all the necessary pet adoption workflow while also highlighting few areas where improvement is to be done in upcoming design iterations.

### Three significant usability issues to address and why they are important (Hiruna - rana0302):

Three significant usability issues were prioritised based on feedback gathered during testing. First was the poor visibility of the About Us page, identified by Mark. Although he found the site easy to navigate, he struggled to locate information about the organisation before proceeding with adoption. He suggested adding an About Us option to the navigation bar, because trust and credibility are important factors in making adoption decisions.

The second issue was the absence of a phone number field during account registration, suggested by Kinura, who noted it would improve security verification and provide a more convenient way to receive adoption-related notifications and alerts.

The third issue, raised by Graham, was the lack of clear input guidance in forms. He was uncertain about the required phone number format on the Contact Us page and suggested clearer instructions.

These issues were prioritised as they directly affect user trust, error prevention, and task completion.

---

## Iteration Description: Description of the proposed changes to the website, based on the usability evaluation (Zac - path0171)

Based on the usability testing feedback, there are several changes that can be made to improve the website. In HTML, an “About Us” link will be added to the main navigation bar so it is easy and quicker to find, this addresses Mark’s discoverability issue and avoids the user having to read the home page to get to the About Us page (Appendix 2). The current About Us link button on the homepage will remain, but with updated CSS to improve its contrast against the background, making it more visible. The button design will match the current design of the Sing Up button in the header. A phone number field will be added to the Sign Up form, with PHP server-side validation and data stored in users.JSON, as Kinura suggested (Appendix 1). JavaScript will be updated to show an on-screen confirmation after successful Adoption Form submission, so users know their application was received, matching the "Message Sent" text on the Contact Us page for consistency and addressing Anabelle’s confirmation issue (Appendix 3). Inline format hints, such as expected phone pattern will also be added to the Adoption Form page and Contact Us page, responding to Graham’s uncertainty about required inputs (Appendix 6). Existing client-side validation will be updated for the new registration field while preserving the clear labels and error prevention that Anabelle praised on the adoption form (Appendix 3).

### Annotated Screenshots Indicating Changes to Website

**About Us button added to navigation bar and updated CSS button design for "More Info":**

![About Us Button added to Navigation Bar](Screenshots/about_us_changes.png)

**Added phone number box for Sign Up page:**

![Phone Number Box for Sign Up Page](Screenshots/sign_up_changes.png)

**On screen confirmation for Adoption Form page:**

![On Screen Confirmation for Adoption Form Page](Screenshots/adoption_submission_changes.png)

**Inline format hints for Contact Us page:**

![Inline Format Hints for Contact Us Page](Screenshots/contact_changes.png)

**Inline format hints for Adoption Form page:**

![Inline Format Hints for Adoption Form Page](Screenshots/adoption_form_changes.png)

All changes screenshots can be found in Appendix 8.

---

## Appendix:

### FAN annotated list of each team member covering sections of report completed

**Hiruna - rana0301**  
Description of the 6 test participants
Summary of the process and outcomes of usability tests  
Three significant usability issues to address and why they are important

Test Participants:
   Kinura: Signing in
   Mark: Navigating to various locations in search of a pet

**Saaim - saai0013**  
List of specific tasks participants performed  
Analysed collected data, identifying key findings, common pain points, and areas of success

Test Participants:
   Anabella: Submitting an adoption application
   Novera: Analyse details on pet selected page

**Zac - path0171**  
Methodology used  
Iteration Description: Description of the proposed changes to the website, based on the usability evaluation

Test Participants:
   Joel: Filtering to find a specific pet
   Graham: Filling in the Contact Us form

## Rana0301 - Signing in and navigating to various locations in search of a pet

### Appendix 1

**Test Participant 1: Kinura**

**Description:**

The first test participant is Kinura, a 24-year-old postgraduate student. He regularly uses a Lenovo laptop for both academic and work-related tasks, making him confident and comfortable when using technology and navigating websites. However, he has no background in programming or web development, so he approaches the website from the perspective of a typical end user.

Kinura moved from Sri Lanka to Australia four years ago and had to leave his pet dog behind when he migrated. Since then, he has missed having a pet companion and is currently interested in adopting a pet to help overcome feelings of loneliness. As someone actively looking to adopt a pet, he represents a realistic target user for the Adopt It website

**Task Performed - Sign Up process**

The participant was asked to complete the sign-up process by creating a new account on the Adopt It website. This task involved navigating to the sign-up page, entering the required personal information such as name, email and also creating and confirming a password, and submitting the request by clicking the sign me up button. The objective was to evaluate how easily a first-time user (Kinura) could locate the sign-up page, understand the required fields, complete it successfully, and receive feedback from the system during the registration process. This task also tested the effectiveness of the overall user experience for new users.

**Methodology results (Post Test Questions):**

1. How was your overall experience in the signup process?

   During the post-test interview, Kinura provided positive feedback regarding the overall sign-up process and found it very easy to complete.

2. Are there any areas that you think we should change to make this more user friendly?

   He suggested that the registration  should include a phone number field. According to him, providing a phone number would improve account security by allowing additional verification methods and make it easier for users to receive important notifications and updates. He explained that he rarely checks his email, so receiving alerts through a phone number would be more convenient and ensure that he does not miss important information related to pet adoption enquiries and account activity. This feedback highlights a potential improvement that could enhance both the usability and functionality of the sign-up process.

---

### Appendix 2

**Test Participant 2: Mark**

**Description:**

The second test participant is Mark, a 65-year-old retired army soldier. Due to his age and previous career, he has had limited exposure to modern technology and does not use digital devices frequently. He owns an older desktop computer at home, which he uses only for basic tasks such as browsing the internet and checking information when necessary. As a result, he is not highly confident when navigating websites and can sometimes find complex interfaces confusing.

Following the passing of his wife, Mark has been looking for a dog companion to help cope with loneliness and boredom. Having spent much of his life serving in the military and working closely with fellow soldiers, he is fond of being surrounded by people for most of his life and finds living alone challenging. As a potential pet adopter, Mark values simplicity and efficiency when using websites. He prefers having clear navigation, easy access to important information, and straightforward processes that do not require excessive clicking or searching.

**Task Performed: - Navigating to various locations in search of a pet**

Mark was asked to navigate through the Adopt It website to search for a suitable pet. This task involved browsing different sections of the website, viewing available pets, accessing individual pet profiles, and locating relevant information that could help him make an adoption decision. The objective was to evaluate how easily an older user with limited technological experience could navigate the website, find desired information, and move between pages without confusion. This task also assessed the effectiveness of the website’s navigation structure, clarity of labels, and overall accessibility for users who prefer quick and straightforward access to information.

**Methodology results (Thinking Aloud Process):**

During the think-aloud session, Mark commented that he found the website easy to navigate overall. He was able to move from the sign-up page to the browser page, select a pet, and access the adoption form without experiencing any major difficulties. He appreciated the straightforward navigation and felt that the adoption process was simple to follow, even with his limited experience using technology.

However, Mark encountered an issue when he wanted to learn more about the organisation before proceeding with the adoption process as he was concern regarding the companies effectiveness and background. After signing up, he looked for information about the company but was unable to immediately locate the About Us page. When he asked me where he could find this information, I showed him that it was accessible through the small “About” link in the footer and through the “More Info” button on the homepage. Mark expressed dissatisfaction with both options. He felt that the footer link was too small and difficult to notice, while the “More Info” button on the homepage was not prominent enough to attract his attention. As a result, he suggested adding an About Us option directly to the main navigation bar. According to Mark, this would make company information much easier to find and improve the overall user experience as it is a very important feature, particularly for older users who prefer clear and visible navigation options.

---

## Saai0013 - Submitting an adoption application and analyse details on pet selected page

### Appendix 3

**Test Participate 1: Anabella**

**Description:** The first test participant is Anabella a 21 year-old student at university. She prefers to shop products and services online using her laptop. She was aware of all types of web applications and had a little bit digital literacy but she never used a pet adoption website. The testing tasks were carried out using Google Chrome on windows laptop.

**Task Performed - Submitting an Adoption Application:**

Anabella was instructed to navigate to the application page, fill up all her details and then submit an application.

Initially, through navigation menu she navigated to the pet application page. Then, she viewed the pet images there and began to fill up her personal details. Next, she choose to adopt a pet using pet dropdown menu. After that, she typed her previous pet experience in that specific field and finally pressed the submit application button.

**Methodology results - Observation:**

Anabella's observation during the testing were noted down and are as follows:

1. Participant was able to easily understand page layout without any hesitation.
2. There was no difficulty in locating navigation menu.
3. Participant expected some enhanced confirmation response before pressing the submit button.
4. Participant suggested to add a popup after final submission of the adoption application.
5. She also appreciated the pet images and responsive and user-friendly layout.

---

### Appendix 4

**Test Participate 2: Novera Aayan**

**Description:** Second participant is a 20 year old undergraduate student at university studying Accounting and Finance. She has a high digital literacy of modern technology and completed our testing on her mobile phone using Google Chrome.

**Task Performed - analyse details on pet selected page:**

She was instructed to start with the Browse Pets page, choose a pet and go through the details of that specific pet.

Firstly, she opened the Browser Page using the navigation menu and looked through all the pets and then opted for a dog named "Rocky". Then, she went through all the information of Rocky and finally navigated to the application form page.

**Methodology results - Pre-test Questions:**

1. How familiar are you with latest websites and forms?  
   Ans. I frequently use online services, and shopping websites.

2. Have you used a pet adoption website earlier?  
   Ans. No, I have never used but I am familiar with similar web pages and layouts.

3. What are your expectations from a pet adoption website?  
   Ans. All the pet information must be clear, navigation and layouts should be user-friendly and responsive with a simple process for adoption.

---

## Path0171 - Filtering to find a specific pet and filling in the Contact Us form

### Appendix 5

**Test Participate 1: Joel**

**Description:**

The first test participant was a 19-year-old university student named Joel. He uses a 13-inch M1 MacBook Air for daily study and personal use. He is comfortable with using tech and navigating websites; however, he is not a developer. He has never explored or adopted through a pet adoption website before. The website was tested on his laptop using Google Chrome, and he had no prior briefing on the layout of the site, only a short description of what the website is for. He represents a younger and tech-literate adopter who wants to narrow down options quickly rather than scroll through every animal.

**Task Performed – Filtering to find a specific pet:**

For the purpose of this task, the pet that will be found is Daisy, who is a female poodle.

**Instruction given:**

“Starting on the browser page, you want to use the tools given to select Daisy, a female Poodle located in Glenelg, and open her pet profile page”

**Steps taken:**

- Step 1: Navigated to the filter tab on the left side and clicked “Dog” under TYPE. This hid the Cat and Bird cards, so only dogs remained (~10 seconds)
- Step 2: Clicked “Female” under GENDER. This is his Male dogs, such as dogs, leaving Daisy and Bailey visible (~3 seconds)
- Step 3: Clicked “Glenelg” under LOCATION. Bailey became hidden, and Daisy remained (~3 seconds)
- Step 4: Clicked on the image in Daisy’s card, which opened her pet profile (~5 seconds)

**Total time to complete:** ~21 seconds

**Outcome:** Daisy was successfully selected, and the filtering tools were effectively used to find the pet.

**Methodology Results – 10-question post-test survey:**

Scale: 1 = Strongly Disagree, 5 = Strongly Agree

**Questions:**

1. Did you understand what had to be done to complete the task?  
   Rating: 5  
   Comment: Yes, instructions were clear and easy to follow.

2. Did you find the filter panel easy to locate?  
   Rating: 5  
   Comment: Yes, the filter panel was obvious and easy to find. I liked how it followed the page as I scrolled. I also liked how it contrasted the background colours with a big, white, rounded box. The filter headings were noticed immediately, also.

3. Could you understand the structure of the page, and did it feel organised?  
   Rating: 5  
   Comment: Yes, it was well organised and visually appealing. The nav link and footer were well designed and easy to navigate, also. Side filters and the main grid matched and were both very easy to follow.

4. Did the labels on the filters make sense (Type, Location, Gender, Search)?  
   Rating: 5  
   Comment: Yes, each label was clear, and my expected results matched the filtering. I did notice, however, a spelling mistake of Noarlunga, which is spelt “Norlunga”. Also, due to the small number of pets, filtering didn’t really feel needed, and if you know what pet you are looking for, the search bar is the obvious option.

5. Did combining filters work as you expected?  
   Rating: 5  
   Comment: Yes, combining filters worked as expected and updated accordingly.

6. Could you tell when no pets matched the filter?  
   Rating: 5  
   Comment: Yes, I could tell based on the information on the pet cards. However, I never got to the stage where no results were shown, so I cannot comment on what happens in such a scenario.

7. Did the pet cards shown have enough information for you to confirm you have the right pet before selecting?  
   Rating: 5  
   Comment: Mostly, the name and breed on the card were enough for the basics, but I noticed that when filtering for location, there was no indication on the card, so I had to trust the filters completely. More info, like location and also age on the card, can feel more reassuring and make me confident in my decision.

8. Would you feel confident browsing this site to find pets again?  
   Rating: 5  
   Comment: Yes, however, I think I would just scroll to find pets with the number currently on the site, or use the filter to find a location without having to select each pet to tell.

9. Based on your experience with this page, do you believe you could effectively navigate other pages too?  
   Rating: 5  
   Comment: Yes, if all pages follow a similar style and experience, I could effectively navigate through each page without error.

10. Were you satisfied with the experience of finding a pet to adopt?  
    Rating: 5  
    Comment: Yes, I was overall satisfied with the experience, with only mild frictions here and there, such as the card details and Noarlunga spelling. However, these did not affect my overall satisfaction. I also loved the design of the website; it was appealing, and the small animations were not overwhelming, often making the website easier to navigate.

---

### Appendix 6

**Test Participate 2: Graham**

**Description:**

The second participant is a 55-year-old male named Graham, who is a full-time construction planner. He uses a desktop computer for scheduling, email and document review, and is proficient in software such as Revit and Excel. He is comfortable with standard web forms but prefers clear labels and does not like overwhelming animations that he sees on modern websites. Graham has never used a pet adoption site before, so he is new to the website style. The task was tested on a Windows desktop using Google Chrome, with no prior experience of the website.

**Task Performed – Filling in the Contact Us form:**

**Instruction given:**

“Starting on the Contact Us, following the on-page instructions to fill in the form, send a message asking whether Saturday morning visits are available. Be sure to fill in all sections of the contact form.”

**Steps taken:**

- Step 1: Skimmed through the intro text and glanced at Reach Us information and map implementation. (~20 seconds)
- Step 2: Filled Name: Graham. (~5 seconds)
- Step 3: Filled Gmail: g.pathuis@gmail.com. Spelt gmail as gamil, but corrected it. Formatting was accepted either way. (~25 seconds)
- Step 4: Filled Phone: 04** \*** \*\*\* (~10 seconds)
- Step 5: Filled Subject: Saturday Morning Visits (~15 seconds)
- Step 6: Filled Message: Hi, I was wondering whether Saturday morning visits are possible? Thank you. (~40 seconds)
- Step 7: Navigated to and clicked submit. Reviewed information before submitting and after, received “Message Sent!” confirmation, along with “Thanks for reaching out…”. (~10 seconds)
- Step 8: Confirmed that the task was complete and did not choose to “Send Another Message”. (~5 seconds)

**Total time to complete:** ~ 2 minutes and 28 seconds

**Outcome:** Form was submitted successfully with confirmation message “Message Sent!” shown. Data was successfully saved via php/data.php and added to the contact_messages.JSON (Appendix 7)

**Methodology Results – Single Ease Question (SEQ):**

Scale: 1 = Strongly Disagree, 5 = Strongly Agree

**Question:** How easy or difficult did you find it to complete this task, and why? Do you think others would share a similar opinion?

**Rating:** 4

**Comment (Transcribed as accurately as possible from conversation):** “Sending a message via the Contact Us form was pretty easy. The form is what I’d expect, and what I was familiar with. I wasn’t quite sure of a couple of things, mainly the format of the phone number. It was not mentioned whether I needed spaces or dashes or neither, and whether it was done by country code or not. The “Message Sent” bit was a helpful and obvious indicator that my message had been sent and received. I think one point of improvement for the email section, particularly, could be a dropdown of popular mailing extensions for ease of use, as spelling an email extension wrong could often be hard to notice when looking back through why a form didn’t submit.”

---

### Appendix 7

![Contact Message Evidence](Screenshots/contact_message_evidence.png)

Screenshot of Contact Us page message showing successful submission.

---

### Appendix 8

**Annotated Screenshots of changes**

**About Us button added to navigation bar and updated CSS button design for "More Info":**

![About Us Button added to Navigation Bar](Screenshots/about_us_changes.png)

**Added phone number box for Sign Up page:**

![Phone Number Box for Sign Up Page](Screenshots/sign_up_changes.png)

**On screen confirmation for Adoption Form page:**

![On Screen Confirmation for Adoption Form Page](Screenshots/adoption_submission_changes.png)

**Inline format hints for Contact Us page:**

![Inline Format Hints for Contact Us Page](Screenshots/contact_changes.png)

**Inline format hints for Adoption Form page:**

![Inline Format Hints for Adoption Form Page](Screenshots/adoption_form_changes.png)
