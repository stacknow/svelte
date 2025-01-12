# Stage 1: Build the application
FROM node:18-slim AS builder

# Set the working directory
WORKDIR /app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the SvelteKit app
RUN npm run build

# Stage 2: Run the application
FROM node:18-slim AS server

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 3000

# Command to start the application
CMD ["node", "build"]
