# 1. משתמשים בתמונה של Playwright כבסיס
FROM mcr.microsoft.com/playwright:v1.51.0-focal
  

# 2. קובעים תיקיית עבודה
WORKDIR /app

# 3. מעתיקים את קובץ ה־package.json וה־package-lock.json (אם קיים)
COPY package*.json ./

# 4. מתקינים תלויות NPM
RUN npm install

# 5. מעתיקים את שאר קבצי הפרויקט
COPY . .

# 6. אפשר להריץ כאן פקודות נוספות אם יש צורך בתלויות לינוקס נוספות
# למשל:
# RUN apt-get update && apt-get install -y <package_name>

# 7. אם תרצה אפשר להגדיר פקודה דיפולטית, לדוגמה:
# CMD ["npm", "test"]
