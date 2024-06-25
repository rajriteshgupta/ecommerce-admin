# E-commerce Admin

A fully customisable e-commerce admin application to provide functionality to create multiple stores, billbards, categories etc. This application is capable of managing all stores, products, orders at one place. 

## Features

- Multiple stores at one place
- Light/dark/system mode option
- Fully customisable
- Compatible for desktop as well as mobile screen
- Easy to use interface
- Sign in/Sign up with Google


## Screenshots

![ecommerce-admin](https://github.com/rajriteshgupta/ecommerce-admin/assets/37078846/daf5794f-9ae9-4f43-be3e-c9ece8e88f6e)

## Tech Stack

**Client:** React, Redux, Tailwind CSS

**Server:** Node, Next.js

**Database:** MongoDb

**ORM:** PrismaDb

**Image store:** Cloudinary

**Authentication:** Clerk

**Payment gateway:** Stripe

## Demo

For demo, please use this [Link](https://ritesh-ecommerce-admin.vercel.app/).

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

`CLERK_SECRET_KEY`

`NEXT_PUBLIC_CLERK_SIGN_IN_URL`

`NEXT_PUBLIC_CLERK_SIGN_UP_URL`

`NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`

`NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`

`DATABASE_URL`

`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

`STRIPE_API_KEY`

`FRONTEND_STORE_URL`

`STRIPE_WEBHOOK_SECRET`


## Run Locally

Clone the project

```bash
  git clone https://github.com/rajriteshgupta/ecommerce-admin.git
```

Go to the project directory

```bash
  cd ecommerce-admin
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
