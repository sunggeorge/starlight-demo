# Starlight Nails Booking and Management System

![Starlight Nails Logo](/public/starlight_logo.png)

## Overview
Starlight Nails Booking and Management System is a comprehensive digital platform designed for seamless client engagement, booking, and salon management. The system includes features for loyalty programs, real-time booking, flexible payments, AR/VR nail design previews, analytics, and staff management tools.

---

## Technologies Used

| **Category**           | **Technology**               | **Description**                                                                                     |
|-------------------------|-------------------------------|-----------------------------------------------------------------------------------------------------|
| **Framework**           | React, Next.js               | React for building the user interface, and Next.js for server-side rendering and static generation. |
| **Programming Language**| JavaScript                   | Enables interactive and dynamic features on both client and server.                                |
| **Back-end**            | Serverless                   | No dedicated server; relies on client-side solutions like Supabase for data management.            |
| **User Management**     | Clerk                        | Handles authentication, access control, and user profile management.                               |
| **Database**            | Supabase Postgres DB         | A fully managed Postgres database for secure and scalable structured data storage.                 |
| **ORM**                 | Prisma / Supabase API        | Simplifies database interactions and enhances data handling efficiency.                            |
| **Payment Integration** | Stripe                       | A secure payment processing platform for various transaction methods.                              |
| **Charting Library**    | Chart.js                     | Adds interactive and visually appealing charts and graphs to the application.                      |
| **Design Tools**        | Figma                        | Collaborative tool for UI/UX design and prototyping.                                               |
| **Diagramming Tools**   | Software Ideas Modeler, Lucid Chart | Supports architectural visualization and diagram creation.                                          |

---

## Key Features Breakdown
1. **Frontend**:
   - Built with **React** and **Next.js** for fast, SEO-friendly, and responsive user interfaces.
2. **Authentication**:
   - **Clerk** ensures secure user login, registration, and role-based access control.
3. **Data Management**:
   - **Supabase Postgres DB** offers a robust, scalable database with support for structured data.
   - **Prisma** or Supabase's API provides seamless database access.
4. **Payments**:
   - **Stripe** integrates for managing payments, including loyalty point redemption and vouchers.
5. **Analytics and Reporting**:
   - **Chart.js** delivers interactive visualizations for tracking performance metrics.
6. **Advanced Features**:
   - **AR/VR capabilities** let clients virtually try nail designs before booking.

---

## Project Structure
The project is modular, with serverless architecture and a focus on scalability and user experience. Designed for flexibility, it integrates cutting-edge tools and libraries to deliver a modern, feature-rich solution.

---

- **Sprint 1**: 2025-01-27 to 2025-02-14 (3 weeks, correct).
- **Sprint 2**: 2025-02-24 to 2025-03-14 (3 weeks, correct).
- **Sprint 3**: 2025-03-17 to 2025-04-04 (3 weeks, correct).
- **Final Week**: 2025-04-07 to 2025-04-14 (1 week, correct).

---

## Epic 1: Booking System

**Description**: Implement a robust booking system that allows users to schedule appointments and managers to oversee and adjust bookings effectively.

### Features

#### **Feature: User Booking**
- **Description**: Allows users to book appointments online, view availability, and manage their bookings.

**Tasks**:
- **Task 1.1**: Develop database schema for bookings.
  - Tables for users, services, and time slots.
  - Establish relationships between tables.
  - **Iteration**: Sprint 1
- **Task 1.2**: Create a booking page UI.
  - Calendar view for available slots.
  - Dropdowns for service and staff selection.
  - **Iteration**: Sprint 1
- **Task 1.3**: Implement booking logic in the back end.
  - Validate user input, check slot availability, and save bookings.
  - **Iteration**: Sprint 1
- **Task 1.4**: Add notification functionality.
  - Send confirmation email after booking.
  - Notify users about any changes.
  - **Iteration**: Sprint 2
- **Task 1.5**: Build a "My Appointments" page.
  - Display upcoming and past bookings.
  - Allow users to cancel or reschedule appointments.
  - **Iteration**: Sprint 2

#### **Feature: Manager Booking Management**
- **Description**: Allows managers to manage appointments, optimize schedules, and notify clients of changes.

**Tasks**:
- **Task 2.1**: Build a booking management dashboard.
  - Display bookings in a calendar view.
  - Allow filtering by staff, service, or date.
  - **Iteration**: Sprint 2
- **Task 2.2**: Implement edit and cancel functionality.
  - Allow managers to update or remove bookings.
  - Notify affected users.
  - **Iteration**: Sprint 2
- **Task 2.3**: Add notifications for changes.
  - Send emails to clients and staff for cancellations or updates.
  - **Iteration**: Sprint 3
- **Task 2.4**: Create reporting tools for bookings.
  - Generate weekly and monthly appointment summaries.
  - Highlight unfilled slots.
  - **Iteration**: Sprint 3

---

## Epic 2: Payment System

**Description**: Implement a secure and efficient payment system to process transactions for bookings.

### Features

#### **Feature: User Payment**
- **Description**: Allows users to securely pay for bookings using credit cards or vouchers.

**Tasks**:
- **Task 1.1**: Integrate a payment gateway (e.g., Stripe).
  - Configure Stripe API keys for secure payment processing.
  - **Iteration**: Sprint 1
- **Task 1.2**: Build the payment UI.
  - Input fields for card details and voucher codes.
  - Display the total dynamically.
  - **Iteration**: Sprint 1
- **Task 1.3**: Implement payment success and failure handling.
  - Redirect users to a confirmation page on success.
  - Display error messages for failures.
  - **Iteration**: Sprint 2
- **Task 1.4**: Add payment history to the user profile.
  - Fetch and display past transactions.
  - **Iteration**: Sprint 2
- **Task 1.5**: Implement email notifications for payments.
  - Send receipts to users upon successful payment.
  - **Iteration**: Sprint 3

---

## Epic 3: Reporting

**Description**: Provide managers with insightful reports on bookings, payments, and overall performance.

### Features

#### **Feature: Booking Reports**
- **Description**: Generate and visualize reports on booking trends.

**Tasks**:
- **Task 1.1**: Create a report generation system for bookings.
  - Aggregate data on appointments and cancellations.
  - **Iteration**: Sprint 2
- **Task 1.2**: Develop a UI for report visualization.
  - Use charts to display trends.
  - Provide filters for date range and service type.
  - **Iteration**: Sprint 2
- **Task 1.3**: Add export functionality for booking reports.
  - Support CSV and PDF formats.
  - **Iteration**: Sprint 3

---

## Epic 4: Rating and Feedback System

**Description**: Implement a system for collecting and displaying user feedback to improve services.

### Features

#### **Feature: User Feedback Submission**
- **Description**: Allows users to leave ratings and comments after appointments.

**Tasks**:
- **Task 1.1**: Develop feedback submission form.
  - Include fields for rating and comments.
  - Validate input before submission.
  - **Iteration**: Sprint 1
- **Task 1.2**: Implement back-end logic for storing feedback.
  - Save feedback with associated appointment ID.
  - **Iteration**: Sprint 2
- **Task 1.3**: Add a thank-you message or confirmation screen.
  - Display after successful feedback submission.
  - **Iteration**: Sprint 2

Feel free to contribute or provide feedback to enhance the Starlight Nails Booking and Management System!
