# Mt. Vernon / Midtown Inn — Book Your Stay

A direct-booking web app (PWA) for the motel. Guests book overnight rooms or
day-use slots; the front desk gets an email; the guest pays at check-in.
**No Expedia / Booking.com / Dayuse commission — 100% of the booking is kept.**

---

## Files in this repo
| File | What it is |
|------|------------|
| `index.html` | The whole app (booking flow + Manager screen) |
| `manifest.json` | Makes it installable ("Add to Home Screen") |
| `sw.js` | Service worker (offline + install) |
| `icon-192.png` / `icon-512.png` | App icons (swap for the real logo anytime) |

---

## Setup — do this ONCE (open `index.html`, edit the top CONFIG block)

1. **`MANAGER_PIN`** — change `"1234"` to your own PIN before anyone sees it.

2. **`WEB3FORMS_KEY`** — get a free key:
   - Go to https://web3forms.com
   - Enter **midtowninmd@gmail.com**, copy the access key, paste it here.
   - Now every booking emails the front desk. ✅

3. **`FIREBASE`** *(optional, but recommended)* — paste your `firebaseConfig`.
   - In Firebase console: create a project → add a Web app → copy the config object.
   - Create a Firestore database (start in test mode for now).
   - The app auto-creates two collections: `bookings` and `settings`.
   - Without this, the app still works but saves only on one device.

4. **Rooms & prices** — starting values are in CONFIG, but after launch you
   change everything from the in-app **Manager screen** (tap the ⚙ gear, enter PIN).

---

## Deploy (GitHub → Vercel)

1. Create a new GitHub repo, upload all the files in this folder.
2. Go to https://vercel.com → **Add New → Project** → import the repo.
3. Framework preset: **Other** (it's a static site — no build step). Click **Deploy**.
4. You get a live URL like `your-repo.vercel.app`.

### Use your own address (recommended for the QR codes)
- In Vercel → Project → **Settings → Domains** → add `book.mtvernoninn.com`.
- In Namecheap (or your domain host) add the DNS record Vercel shows you.
- Now the app lives at a permanent address you control forever.

---

## Connect it to everything

- **Wix site:** edit the "Book Your Stay" button → link it to your booking URL.
- **QR codes:** point them at the booking URL (e.g. `book.mtvernoninn.com`).
  Because the address never changes, you never reprint a QR code again.

---

## How a booking works
1. Guest picks room + dates (or a day-use slot) → sees live availability.
2. Enters name / email / phone → taps **Reserve**.
3. Booking saves + an email hits **midtowninmd@gmail.com**.
4. Guest gets a confirmation code (e.g. `MID-X7K2P`).
5. Guest shows the code at the front desk and **pays on arrival**.

## Avoiding double-booking (hold-back model)
Only the rooms you set aside in `allocation` are sold on this app — keep those
OFF Expedia/Booking/Dayuse. That way the channel manager (ChannelPro) and this
app can never sell the same room twice. Later, if ChannelPro offers an API or
iCal feed, the app can sync live and you won't need to hold rooms back.

Har Har Mahadev. 🔱
