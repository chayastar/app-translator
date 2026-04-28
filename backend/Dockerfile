# a. תמונה רשמית של Node.js
FROM node:18-alpine

# b. הגדרת תיקיית עבודה
WORKDIR /app

# c. העתקת קבצי החבילות והתקנה
COPY package*.json ./
RUN npm install

# d. העתקת שאר קוד המקור
COPY . .

# e. חשיפת הפורט (לפי הקוד שלך זה בד"כ 3001)
EXPOSE 3001

# f. פקודת הרצה
CMD ["node", "server.js"]

