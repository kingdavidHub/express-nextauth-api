# Express NextAuth API

This is a basic API project using Express and NextAuth for authentication.

## Project Structure

- `src/`: Contains the source code for the project.
  - `config/`: Configuration files.
    - `db.ts`: Database connection configuration.
  - `controller/`: Controllers for handling requests.
  - `routes/`: Route definitions.
  - `services/`: Service layer for business logic.
  - `types/`: Type definitions.
  - `app.ts`: Main application file.

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd express-nextauth-api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Project

1. Start the development server:
   ```sh
   npm run dev
   ```
2. The server will run on the port specified in the `.env` file (default is 5000).

## Environment Variables

Create a `.env` file in the root directory and add the following:
```
PORT=5000
MONGO_URI=<your-mongodb-uri>
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project.
- `npm start`: Start the production server.

## License

This project is licensed under the ISC License.