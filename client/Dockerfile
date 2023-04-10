# Pull Docker Hub base image
FROM node:18-alpine
# Set working directory
WORKDIR /usr/app
# Install app dependencies
COPY package*.json ./
RUN npm install -qy
# Copy app to container
COPY . .
# Run the "dev" script in package.json
EXPOSE 3000
CMD ["npm", "run", "start"]