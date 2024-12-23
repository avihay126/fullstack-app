# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire frontend source code
COPY . .

# Build the app for production
RUN npm run build

# Expose the port your app runs on (change 3000 if necessary)
EXPOSE 3000

# Use a lightweight web server to serve the built app
FROM nginx:1.23
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000
