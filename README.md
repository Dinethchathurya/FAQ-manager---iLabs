# FAQ-manager-iLabs
 This is the assignment inside interview process 

# 🚀 Microservices Project Setup Guide

## 📌 Project Overview
This project is a **microservices-based architecture** consisting of:

- **User Management Service (`usermanagement`)** – Handles user authentication and JWT issuance.
- **FAQ Manager Service (`faqmanager`)** – Manages FAQs with Swagger UI for API documentation.
- **API Gateway (`api-gateway`)** – Routes and secures requests to the microservices.
- **Front-end Application (`React + Vite`)** – User interface for interacting with the services.
- **PostgreSQL Databases** – Two separate databases for `usermanagement` and `faqmanager`.
- **pgAdmin** – UI for managing the PostgreSQL databases.
- **Docker** – Used to manage the PostgreSQL and pgAdmin containers.

---

## 🛠️ Prerequisites
Ensure you have the following installed:

- **Java 17** (for Spring Boot applications)
- **Node.js 18+** (for Vite + React front-end)
- **Docker & Docker Compose** (for PostgreSQL and pgAdmin)
- **IntelliJ IDEA** (or any Java IDE with Maven support)

---

## 📌 1️⃣ Setting Up Environment Variables
This project uses `.env` files for **configuring database credentials and services**.

### 🔹 **Rename the `.env-template` files to `.env` and update your details:**
```sh
mv .env-template .env
```

🔹 Inside each .env file, update:
```
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_database_name
```

✅ This allows the system to correctly link with PostgreSQL & pgAdmin.

## 📌 2️⃣  Running the Backend Microservices (Spring Boot 3+)

Open IntelliJ IDEA (or any Java IDE) and start each microservice in separate terminal tabs.

Start Services in Order:
1.	API Gateway (api-gateway)

```sh
mvn spring-boot:run
```
2.	User Management Service (usermanagement)

```sh
mvn spring-boot:run
```

3.	FAQ Manager Service (faqmanager)

```sh
mvn spring-boot:run
```

✅ All three services should be running without issues.

## 📌 3️⃣ Running the Front-end (React + Vite)
Navigate to the front-end directory and start the Vite development server:

```sh
cd faqmanager-frontend
npm install   # Install dependencies (only the first time)
npm run dev   # Start the development server
```

✅ Open your browser at: http://localhost:5173

## 📌 4️⃣ Accessing the APIs With Swagger UI 

🔹 Swagger API Documentation

Once faqmanager is running, you can access Swagger UI at:

```
http://localhost:8081/swagger-ui/index.html
```
