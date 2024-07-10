# BACKEND API

Muhamad Fajar NUgraha | IT Backend

```markdown
# Prerequisites

Before running the application, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

# Tech We Use

- Express.js
- MySQL
- Typescript
```

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone
   ```

2. Navigate to the project directory:

   ```bash
   cd test-backend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

You Must Create a Database First before going to next step.

## Running the Application

To start the Express.js server and run the database setup:

```bash
# Choose your command :
npm start
```

## API Endpoints

### 1. FizzBuzz

- **Method:** `GET`
- **Path:** `/fizzbuzz/:number`
- **Description:** Menghasilkan daftar angka dari 1 hingga number, mengganti angka yang habis dibagi 3 dengan "Fizz", yang habis dibagi 5 dengan "Buzz", dan yang habis dibagi keduanya dengan "FizzBuzz".
- **Important Notes:** number harus merupakan angka positif.
- **Response Body:**
  ```json
  {
    "result": [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "Fizz Buzz"
    ]
  }
  ```

### 2. Palindrome

- **Method:** `GET`
- **Path:** `/palindrome/:string`
- **Description:** Memeriksa apakah string yang diberikan adalah palindrome.
- **Important Notes:** Palindrome adalah kata, frasa, angka, atau urutan karakter lainnya yang sama jika dibaca maju atau mundur (mengabaikan spasi, tanda baca, dan kapitalisasi).
- **Response Body:**
  ```json
  {
    "result": true // atau false
  }
  ```

### 2. Palindrome

- **Method:** `GET`
- **Path:** `/classic-cars-customers`
- **Description:** Menghasilkan daftar customerNumber dari pelanggan yang telah memesan produk dengan productLine 'Classic Cars' di mana total hitung productLine tersebut lebih besar dari 23.
- **Important Notes:** Koneksi ke database MySQL harus disesuaikan dengan konfigurasi yang benar di file src/database.ts.
- **Response Body:**
  ```json
  [
      {
          "customerNumber": 124
      },
      {
          "customerNumber": 276
      },
      {
          "customerNumber": 141
      },
      // dan seterusnya
  ]
  ```
