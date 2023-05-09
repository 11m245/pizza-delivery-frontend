# Pizza Order App

Using this application, users can order pizza and shop can process their orders on its login

## Demo Login Credentials

for Shop -> username - admin@gmail.com , password - 12345678 \
for users -> username - user@gmail.com , password - 12345678

## User Service Booking Steps

- **Signup**

  - Signup form will ask user Details, on valid input fields signup is processed
  - After Signup activate your Account by visiting the link sent to your email which is used at the time of signup
  - After email verification you are good to go to the login process.

- **Login**

  - Login to your account with credentials

- **Forgot Password**

  - You can click on the forgot Password button on login page, and navigate to the forgot password page, then after verifying your email id, a reset password link will be sent to your email id, which exit in your Account details
  - Using this link you can change the password from client

- **User Product Ordering Steps**

  - After Login user will be landed on the homepage which will show the available Products.

  - Select the required Products and they will be added to the cart
  - By clicking the cart user can view the selected services in the cart and also can modify the cart
  - Click on the Checl out button which will redirect you to payment gateway page
  - Please ensure to complete the payment by using any of the avialble modes
  - that's it your Product Order done

- **Reports**

  - User can view all of his bookings by clicking the reports button on the navigation

- **Shop Order Processing Steps**

  - After Login workshop will be landed on the homepage which will show the dahsboard consisting of Status wise count of all orders got placed today.
  - Clicking on any count will show coressponding orders and status
  - On each booking the new Status Buttons are available, by clicking this new status Shop can update the order's stage
  - initially the new booking will be in 01-Order Placed and Waiting for Approval then status flow will be like \
    01-Order Placed and waiting for approval -> 02-Accept and Prepare -> 03-Sent for Delivery -> 04-Rejected by Customer -> 05-Delivered -> 06-Rejected by Admin
