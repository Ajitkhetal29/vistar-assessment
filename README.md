#  Mid-Level Assessment Project


## Task Summary
The complete assessment folder is uploaded on the github and shared via mail.
The MongoDB database has already been dumped to MongoDB Atlas, so no local setup is required.
The app will fetch data directly from Atlas.
Firebase project credentials are configured in the frontend environment.

1. **Login Page**  
   - to create a login page in react i have used firebase inbuilt methods (email and password ) for signin and  singnout.

2. **List Active Customers**  
   - after login the user will be redirect home page. on home page teh active customer details will be shown with name , accounts, and address.

3. **Clickable Accounts**  
   - in teh homepage all the accounts of the cutomer are shown, user can click on this accounts to see the transaction of the same account.

4. **Mongo Queries**  
   - Query to find `account_id`s with at least one transaction below ₹5000.  
   - Query to find a distinct list of `products` available in the system.  
   - Both queries and explanations are available in the file `MongoQueries.txt`.

---

##  Setup Instructions

### 1. Clone or Download
Clone this repository or download the ZIP file shared through mail.

### 2. Install Dependencies
#### Backend
```bash
cd backend
npm install
```
```bash
cd frontend
npm install
```
### 2. Run the Project
Start Backend Server
```bash
cd backend
npm run dev
```


```bash
cd frontend
npm run dev
```
### 2. open the Project
follow the link from the terminal to go to the webpage. or enter below url in browser.
```bash
http://localhost:5173/
```



