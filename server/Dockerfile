# Pull Docker Hub base image
FROM node:18-alpine
# Set working directory
WORKDIR /usr/app
# Install app dependencies
COPY package*.json ./
RUN npm install nodemon --save-dev
RUN npm install -qy
# Copy app to container
COPY . .
# Run the "dev" script in package.json
EXPOSE 4000

CMD ["npm", "run", "dev"]