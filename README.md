#  Mid-Level Assessment Project


## Task Summary

1. **Login Page**  
   - Implemented using **Firebase Authentication** (Email & Password).  
   - Supports sign-in and sign-out functionality.

2. **List Active Customers**  
   - After login, users are redirected to the **Home Page**, where all active customer details are shown.  
   - Columns displayed: **Name**, **Address**, and **Accounts**.

3. **Clickable Accounts**  
   - Each account listed is **clickable**.  
   - On click, all **transactions** related to that account are displayed.

4. **Mongo Queries**  
   - Query to find `account_id`s with at least one transaction below ₹5000.  
   - Query to find a distinct list of `products` available in the system.  
   - Both queries and explanations are available in the file `MongoQueries.txt`.

---

## 📦 Setup Instructions

### 1. Clone or Download
Clone this repository or download the ZIP file shared via email.

### 2. Install Dependencies

#### Backend
```bash
cd backend
npm install
