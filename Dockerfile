# ---------- Build stage ----------
FROM node:20-alpine AS builder

# Create app folder in the image
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Vite React app
RUN npm run build

# ---------- Run stage ----------
FROM nginx:alpine

# Copy our custom nginx.conf into the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from the builder stage into Nginx's html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Cloud Run expects the container to listen on port 8080
EXPOSE 8080

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
