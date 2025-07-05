# 🏏 SPL Bidding Platform

A web-based bidding system for Society Premier League (SPL) cricket tournaments, built using:

- 🔥 Django + Django REST Framework (backend)
- ⚛️ React (frontend)
- 🔒 JWT-based team login
- 💾 Auth persistence across refresh
- 🎨 Bootstrap UI

---

## 📦 Features

- Team login using username/password
- View players and place bids
- Live player preview with stats and image
- Team budget management
- "Next Player" cycle button
- "My Team" view to see purchased players
- Protected routes for `/bidding` and `/my-team`
- Persistent login using JWT stored in localStorage
- Responsive UI using Bootstrap 5

---

## 🧪 Sample Credentials

| Team       | Username    | Password     |
|------------|-------------|--------------|
| Team Alpha | `teamalpha` | `password123`|
| Team Beta  | `teambeta`  | `password123`|

---

## ⚙️ Backend (Django) Setup

1. **Clone and setup virtualenv**

```bash
git clone <your-repo-url>
cd backend/
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

2. **Configure Django settings**

- Ensure `auction` is added to `INSTALLED_APPS`
- Configure `TEMPLATES` for admin

3. **Run migrations and create superuser**

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

4. **Seed sample players and teams**

```bash
python manage.py seed_data
```

5. **Run server**

```bash
python manage.py runserver
```

- API: `http://localhost:8000/api/auction/`
- Admin: `http://localhost:8000/admin/`

---

## ⚛️ Frontend (React) Setup

1. **Install dependencies**

```bash
cd frontend/
npm install
```

2. **Start the React app**

```bash
npm run dev
```

3. **App will run at**

```
http://localhost:5173/
```

---

## 🔐 Authentication Flow

- Users log in using `/api/auction/token/` (JWT)
- JWT `access` is stored in `localStorage`
- `TeamContext` fetches current team info on app load (if token exists)
- Protected routes (`/bidding`, `/my-team`) redirect to `/` if not logged in

---

## 🧠 Key Code Highlights

### 1. `TeamContext.jsx`

Handles team state and loads from token:

```js
const token = localStorage.getItem("access");
if (token) {
  axios.get("/my-team/", { headers: { Authorization: `Bearer ${token}` } })
}
```

---

### 2. `PrivateRoute.jsx`

Wraps protected pages:

```jsx
if (!team) return <Navigate to="/" replace />;
```

---

### 3. `Navbar.jsx`

Displays team info + logout:

```jsx
{team && <span>{team.name} (₹{team.budget})</span>}
```

---

## 🖼 UI Built with Bootstrap

Converted all pages from Tailwind to Bootstrap for consistent styling:

- Login
- Bidding page
- My Team view
- Navbar

---

## 🚧 Coming Soon

- Real-time bidding with WebSockets
- Admin panel for controlling auction flow
- Timer per bid
- Bid history per player

---

## 🆘 Troubleshooting

- **Login failed?**
  - Check backend is running and sample data is seeded
- **401 on `/my-team/`?**
  - Token might be missing or expired

---

## 🧾 License

MIT License. Use freely for your society tournament or fork for your custom use!

---

## 👨‍💻 Created by

Kapil Lohakare & ChatGPT — for Society Premier League 🏏