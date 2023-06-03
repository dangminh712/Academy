

# Online Academy Web Application
## https://ace-0ock.onrender.com/
This is an Online Academy web application that consists of the following modules and functionalities:

## 1. Guest Module

### 1.1 Menu System
- Display a list of categories and subcategories
- Categories:
  - IT
    - Web Development
    - Mobile Development

### 1.2 Homepage
- Display the top 3-4 featured courses of the week
- Display the top 10 most viewed courses (across all categories)
- Display the top 10 newest courses (across all categories)
- Display the most popular categories based on course registrations of the week
- Implement eye-catching effects such as slideshow or carousel

### 1.3 Course Listing
- Show a paginated list of courses based on the selected category
- Display course information:
  - Title
  - Category
  - Instructor
  - Rating with the number of reviews
  - Course thumbnail
  - Course price with promotional price (if available)

### 1.4 Course Search
- Implement full-text search functionality allowing users to search for courses using keywords
- Search by course name and/or category
- Paginate search results
- Provide sorting options based on user preferences (e.g., rating, price)
- Highlight new and best-selling courses differently

### 1.5 Course Details
- Show detailed information about a specific course
- Display course content, including a large-sized thumbnail
- Course name
- Brief course description
- Detailed course description
- Rating, number of reviews, and number of enrolled students
- Course fee and promotional information (if available)
- Last update date
- Course syllabus with a preview option
- Display 5 other top-selling courses in the same category
- Instructor information
- Show student feedback about the course

### 1.6 User Registration
- Users need to register an account to participate in courses and provide feedback
- Use bcrypt algorithm to encrypt passwords
- Required information:
  - Full name
  - Email
  - Unique email validation
  - Optional OTP confirmation

## 2. Student Module

### 2.1 Watch List
- Students can save courses to their watchlist
- Available in the course details view

### 2.2 Manage Profile
- Allow students to change their personal information such as email, full name, and password (requires current password)
- View the list of courses in their watchlist
- Remove courses from the watchlist
- View the list of courses they have enrolled in

### 2.3 Enroll in a Course
- Students can purchase a course to participate
- Course content consists of videos provided by instructors
- Track the progress of completed lessons

### 2.4 Course Rating and Feedback
- Students can rate and provide feedback only for courses they have enrolled in

### 2.5 View Lesson Content
- Students can watch course lesson videos using a JavaScript media player library
  - Recommended libraries: Plyr (https://plyr.io), Video.js (https://videojs.com)

## 3. Instructor Module

### 3.1 Course Creation
- Instructors can create new courses
- Required course information (refer to Course Details section)
- Course description supports WYSIWYG editors such as TinyMCE, CKEditor, or Quill.js

### 3.2 Course Update
- Instructors can add or update course information and lessons
- Update course description and content
- Upload videos corresponding to missing chapters
- Mark a course as completed when all content is added

### 3.3 Manage Profile
- Instructors can update their personal information, which will be displayed in the course details section

## 4. Administrator Module

- The administrator can perform the following management operations:
  - View and manage categories
    - Basic management functions
    - Categories with existing courses cannot be deleted
  - Manage courses
    - Remove courses
  - Manage student and instructor lists
    - Basic management functions
    - Student accounts created via registration
    - Instructor accounts created by the administrator

## 5. Common Features for All User Modules

### 5.1 Login
- Custom implementation or use a library like Passport.js (http://www.passportjs.org)
- Encourage additional login options such as Google, Facebook, Twitter, GitHub, etc.

### 5.2 Update Personal Information
- Allow users to update their personal information, including full name and contact email

### 5.3 Change Password
- Implement password change functionality using the bcrypt algorithm for password encryption


##Thực hiện bởi 3 sinh viên:
###20127562 - Nguyễn Đăng Minh
###20127564 - Trần Tuấn Minh
###20127232 - Nguyễn Thái Dương


