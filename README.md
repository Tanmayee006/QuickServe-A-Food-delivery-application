# QuickServe - Food Delivery Application 🍕

A modern full-stack food delivery application built with React and Spring Boot, featuring user authentication, cart management, order processing, and payment integration with Razorpay.

## 🚀 Features

### Customer Features
- **User Authentication** - Register/Login with JWT-based security
- **Food Browsing** - Explore food items by categories
- **Search & Filter** - Find dishes by name and category
- **Shopping Cart** - Add/remove items with quantity management
- **Order Management** - Place orders with delivery details
- **Payment Integration** - Secure payments via Razorpay
- **Order Tracking** - View order status and history

### Admin Features
- **Food Management** - Add, edit, and delete food items
- **Order Management** - View and update order status
- **Dashboard** - Monitor all orders and manage inventory

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **React Router** - Navigation
- **Bootstrap** - CSS framework
- **Bootstrap Icons** - Icon library
- **Axios** - HTTP client
- **React Toastify** - Notifications

### Backend
- **Spring Boot** - Java framework
- **Spring Security** - Authentication & authorization
- **Spring Data MongoDB** - Database integration
- **JWT** - Token-based authentication
- **AWS S3** - File storage for images
- **Razorpay** - Payment processing
- **MongoDB** - NoSQL database

## 📁 Project Structure

```
quickserve/
├── adminpanel/          # Admin React application
├── quickserve_foodies/  # Customer React application
├── quickserveapi/       # Spring Boot backend API
└── README.md
```

## 🔧 Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Java** (JDK 17 or higher)
- **Maven** (3.6 or higher)
- **MongoDB** (local or cloud instance)
- **AWS Account** (for S3 file storage)
- **Razorpay Account** (for payment processing)

## ⚙️ Environment Setup

### Backend Configuration

Create `application.properties` in `quickserveapi/src/main/resources/`:

```properties
# Server Configuration
server.port=8080

# MongoDB Configuration
spring.data.mongodb.uri=mongodb_url
# For MongoDB Atlas (cloud):
# spring.data.mongodb.uri=mongodb+srv://username:password@cluster.mongodb.net/quickserve

# JWT Configuration
jwt.secret.key=your-secret-key-here-make-it-long-and-secure

# AWS S3 Configuration
aws.access.key=your-aws-access-key
aws.secret.key=your-aws-secret-key
aws.region=your-aws-region
aws.s3.bucketname=your-s3-bucket-name

# Razorpay Configuration
razorpay_key=your-razorpay-key
razorpay_secret=your-razorpay-secret

# File Upload Configuration
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB
```

### Frontend Configuration

Update API URLs in service files if needed:
- Customer app: `quickserve_foodies/src/service/`
- Admin app: `adminpanel/src/services/`

Default API URL: `http://localhost:8080/api`

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/quickserve.git
cd quickserve
```

### 2. Backend Setup

```bash
cd quickserveapi

# Install dependencies and run
./mvnw spring-boot:run

# Or if you have Maven installed
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### 3. Customer Frontend Setup

```bash
cd quickserve_foodies

# Install dependencies
npm install

# Start development server
npm run dev
```

The customer app will start on `http://localhost:5173`

### 4. Admin Panel Setup

```bash
cd adminpanel

# Install dependencies
npm install

# Start development server
npm run dev
```

The admin panel will start on `http://localhost:5174`

## 🗄️ Database Setup

### MongoDB Collections

The application will automatically create the following collections:
- `users` - User accounts
- `foods` - Food items
- `carts` - Shopping carts
- `orders` - Order records

### Sample Data

You can add sample food items through the admin panel or use MongoDB Compass to import test data.

## 🔐 API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login

### Food Management
- `GET /api/foods` - Get all foods
- `GET /api/foods/{id}` - Get food by ID
- `POST /api/foods` - Add new food (Admin)
- `DELETE /api/foods/{id}` - Delete food (Admin)

### Cart Management
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `DELETE /api/cart` - Clear cart

### Order Management
- `POST /api/orders/create` - Create order
- `POST /api/orders/verify` - Verify payment
- `GET /api/orders` - Get user orders
- `GET /api/orders/all` - Get all orders (Admin)
- `PATCH /api/orders/status/{id}` - Update order status (Admin)

## 💳 Payment Integration

The application uses Razorpay for payment processing:

1. **Setup Razorpay Account**
   - Create account at [razorpay.com](https://razorpay.com)
   - Get API keys from dashboard
   - Add keys to `application.properties`

2. **Test Payments**
   - Use Razorpay test mode for development
   - Test card: `4111 1111 1111 1111`
   - Any future date for expiry
   - Any 3-digit CVV

## 📱 Usage

### Customer Flow
1. Register/Login to the application
2. Browse food items by categories
3. Add items to cart
4. Proceed to checkout
5. Fill delivery details
6. Complete payment via Razorpay
7. Track order status

### Admin Flow
1. Access admin panel
2. Add/manage food items
3. View all orders
4. Update order status
5. Monitor business metrics

## 🔒 Security Features

- JWT-based authentication
- Password encryption with BCrypt
- CORS configuration for cross-origin requests
- Input validation and sanitization
- Secure payment processing

## 📦 Deployment

### Backend Deployment (Heroku/AWS)

```bash
# Build JAR file
./mvnw clean package

# Deploy JAR to your preferred platform
```

### Frontend Deployment (Netlify/Vercel)

```bash
# Build for production
npm run build

# Deploy dist folder to your preferred platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [Tanmayee006](https://github.com/Tanmayee006)
- LinkedIn: [Tanmayee Kumbalwar](https://www.linkedin.com/in/tanmayee-kumbalwar-06b39522a/)

## 🙏 Acknowledgments

- React community for excellent documentation
- Spring Boot team for the awesome framework
- MongoDB for flexible database solution
- Razorpay for seamless payment integration
- AWS for reliable cloud storage

---

⭐ **Star this repo if you found it helpful!**
