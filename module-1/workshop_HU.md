# Module 1 Workshop: Projekt beállítás és az első kártya

## Cél

Hozz létre egy új React projektet Tailwind CSS-sel és jeleníts meg egy egyszerű, középre igazított kártyát címmel és leírással.

---

## Task 1: Új Vite projekt létrehozása

### Step 1.1: Projekt inicializálása

Nyisd meg a terminált és futtasd:

```bash
npm create vite@latest mits-dashboard -- --template react-ts
```

Ez létrehoz egy új `mits-dashboard` nevű projektet React-tel és TypeScript-tel.

### Step 1.2: Navigálás a projekthez

```bash
cd mits-dashboard
```

### Step 1.3: Függőségek telepítése

```bash
npm install
```

### Step 1.4: Ellenőrzés, hogy működik

Indítsd el a fejlesztői szervert:

```bash
npm run dev
```

Nyisd meg a böngészőt a `http://localhost:5173` címen. Látnod kellene az alapértelmezett Vite + React oldalt.

**Nyomj `Ctrl+C`-t a terminálban, hogy most leállítsd a szervert.**

---

## Task 2: Tailwind CSS telepítése és konfigurálása

A Tailwind CSS v4 egy modern Vite plugin megközelítést használ optimális teljesítményhez.

### Step 2.1: Tailwind CSS és Vite plugin telepítése

```bash
npm install tailwindcss @tailwindcss/vite
```

> **Megjegyzés:** A Tailwind CSS v4 egy dedikált Vite plugint használ a régebbi PostCSS megközelítés helyett. Ez egyszerűbb és gyorsabb!

### Step 2.2: Vite konfigurálása Tailwind használatához

Nyisd meg a `vite.config.ts` fájlt és add hozzá a Tailwind plugint:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
});
```

> **Fontos:** Add hozzá a `tailwindcss()` plugint **előbb**, mint a `react()` plugint a plugins tömbben.

### Step 2.3: Tailwind hozzáadása a CSS-hez

Nyisd meg a `src/index.css` fájlt. Látni fogod a Vite alapértelmezett stílusait (root változók, body stílusok, stb.).

**Töröld ki mindent** és cseréld le csak ezzel az egy sorral:

```css
@import "tailwindcss";
```

> **Fontos:** Győződj meg róla, hogy eltávolítottad az ÖSSZES alapértelmezett Vite CSS-t. A fájlnak csak az `@import "tailwindcss";` sort kell tartalmaznia - semmi mást!

Ez az egyetlen import hozza be a Tailwind összes alap stílusát, komponensét és utilityját.

> **Tailwind v4 egyszerűség:** A v4-ben csak a `@import "tailwindcss"`-t használod a v3-ban használt három külön `@tailwind` direktíva helyett.

### Step 2.4: Ellenőrzés, hogy a Tailwind működik

Indítsd el újra a dev szervert:

```bash
npm run dev
```

Nyisd meg a `src/App.tsx` fájlt és ideiglenesen adj hozzá egy Tailwind osztályt teszteléshez:

```tsx
function App() {
  return <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind!</h1>;
}

export default App;
```

Ha nagy kék félkövér szöveget látsz, a Tailwind működik! ✅

---

## Task 3: Alapértelmezett fájlok takarítása

Távolítsuk el az alapértelmezett Vite tartalmat, hogy tiszta lappal kezdhessünk.

### Step 3.1: App.tsx takarítása

Cseréld le a `src/App.tsx` tartalmát erre:

```tsx
function App() {
  return (
    <div>
      <h1>MITS Dashboard</h1>
    </div>
  );
}

export default App;
```

### Step 3.2: Felesleges fájlok törlése

Töröld ezeket a fájlokat (a Vite template-tel jöttek):

- `src/App.css`
- `src/assets/react.svg`

### Step 3.3: main.tsx takarítása

Nyisd meg a `src/main.tsx` fájlt és győződj meg róla, hogy így néz ki (távolítsd el az App.css importot, ha van):

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

A böngésződnek most már csak "MITS Dashboard"-ot kellene mutatnia egyszerű szövegként.

---

## Task 4: Középre igazított kártya layout létrehozása

Most hozzuk létre a fő layoutot egy képernyő közepén lévő kártyával.

### Step 4.1: Layout megértése

Amit szeretnénk:

- Teljes képernyő magasságú háttér
- Kártya vízszintesen és függőlegesen középre igazítva
- Szürke háttér, hogy a fehér kártya kitűnjön

### Step 4.2: Középre igazított layout létrehozása

Frissítsd a `src/App.tsx` fájlt:

```tsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div>Card will go here</div>
    </div>
  );
}

export default App;
```

**Bontsuk fel ezeket az osztályokat:**

| Osztály            | Mit csinál                                   |
| ------------------ | -------------------------------------------- |
| `min-h-screen`     | Minimum magasság 100vh (teljes viewport magasság) |
| `flex`             | Engedélyezi a flexboxot                      |
| `items-center`     | Függőlegesen középre igazítja a gyerekeket (cross-axis) |
| `justify-center`   | Vízszintesen középre igazítja a gyerekeket (main-axis) |
| `bg-gray-50`       | Világosszürke háttérszín                     |

Most már látnod kellene a "Card will go here" szöveget egy világosszürke háttéren középre igazítva.

---

## Task 5: Kártya komponens stílusozása

### Step 5.1: Kártya struktúra hozzáadása

Frissítsd a `src/App.tsx` fájlt a kártya struktúrával:

```tsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900">
          ES2025 TRAINING HU S17 - Module B
        </h2>
        <p className="mt-3 text-sm text-gray-600">
          Create a server-side rendered administrative interface for SkillShare
          Academy platform management with role-based access control and OWASP
          security compliance.
        </p>
      </div>
    </div>
  );
}

export default App;
```

### Step 5.2: Kártya osztályok megértése

**Container osztályok:**

| Osztály             | Mit csinál                          |
| ------------------- | ----------------------------------- |
| `max-w-md`          | Maximum szélesség 28rem (448px)     |
| `p-6`               | Padding 1.5rem (24px) minden oldalon |
| `bg-white`          | Fehér háttér                        |
| `rounded-lg`        | Nagy border radius (8px)            |
| `border`            | 1px szilárd szegély                 |
| `border-gray-200`   | Világosszürke szegélyszín           |
| `shadow-lg`         | Nagy box shadow mélységhez          |

**Cím osztályok:**

| Osztály           | Mit csinál                       |
| ----------------- | -------------------------------- |
| `text-xl`         | Betűméret 1.25rem (20px)         |
| `font-bold`       | Betűsúly 700                     |
| `text-gray-900`   | Nagyon sötétszürke szöveg (majdnem fekete) |

**Leírás osztályok:**

| Osztály           | Mit csinál                 |
| ----------------- | -------------------------- |
| `mt-3`            | Margin-top 0.75rem (12px)  |
| `text-sm`         | Betűméret 0.875rem (14px)  |
| `text-gray-600`   | Közepes szürke szöveg      |

### Step 5.3: Eredmény ellenőrzése

A böngésződnek most egy szép kártyát kellene megjelenítenie:

- ✅ Fehér háttér
- ✅ Lekerekített sarkok
- ✅ Finom szürke szegély
- ✅ Árnyék mélységhez
- ✅ Félkövér cím
- ✅ Halvány leírás szöveg
- ✅ Szürke háttéren középre igazítva

---

## Task 6: Verziókezelés Git & GitHub-bal

Állítsuk be a verziókezelést a projektedhez Git és GitHub használatával. Ez egy professzionális gyakorlat, amely segít követni a változásokat és együttműködni másokkal.

### Step 6.1: Git repository inicializálása

A projekt mappádban inicializáld a Git repositoryt:

```bash
git init
```

Ez létrehoz egy `.git` mappát, amely követi a projekted történetét.

### Step 6.2: .gitignore létrehozása

Hozz létre egy `.gitignore` fájlt a projekt root-jában, hogy kizárd azokat a fájlokat, amelyeket nem kell követni:

```
# Dependencies
node_modules/

# Build output
dist/
dist-ssr/

# Environment files
.env
.env.local

# Editor directories and files
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
```

> **Miért?** A `.gitignore` fájl megakadályozza, hogy a nagy függőségek és generált fájlok Git-ben legyenek követve.

### Step 6.3: Feature branch létrehozása

Hozz létre és válts át egy feature branchre a munkádhoz:

```bash
git checkout -b feat/module-1-workshop
```

> **Best Practice**: Használj leíró branch neveket, mint `feat/module-1-workshop` funkciókhoz, `fix/bug-name` javításokhoz.

### Step 6.4: Munkád stage-elése és commitolása

Add hozzá az összes fájlt a staging area-hoz:

```bash
git add .
```

Ellenőrizd, mi lesz commitolva:

```bash
git status
```

Commitold a munkádat egy leíró üzenettel:

```bash
git commit -m "feat: complete module 1 - setup project with Tailwind and basic card"
```

> **Pro Tipp**: Írj egyértelmű commit üzeneteket. Jó formátum: `type: description`
>
> - `feat:` új funkciókhoz
> - `fix:` hibajavításokhoz
> - `docs:` dokumentációhoz
> - `style:` formázáshoz

### Step 6.5: Váltás main branchre

```bash
git checkout main
```

### Step 6.6: Feature branch merge-elése

Merge-eld a feature branch-et a main-be:

```bash
git merge feat/module-1-workshop
```

Ez behozza a változásaidat a feature branch-ből a main branch-be.

### Step 6.7: GitHub repository létrehozása

1. Menj a [GitHub.com](https://github.com)-ra és jelentkezz be
2. Kattints a **+** ikonra (jobb felső sarok) → **New repository**
3. Nevezd el a repositoryt: `mits-dashboard`
4. Tartsd **Public** vagy **Private**-ként (a te választásod)
5. **NE** inicializáld README-mel, .gitignore-ral vagy licenccel
6. Kattints a **Create repository** gombra

### Step 6.8: Remote hozzáadása és push

A GitHub megmutatja a parancsokat. Futtasd ezeket a terminálban:

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR-USERNAME/mits-dashboard.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Cseréld le a `YOUR-USERNAME`-t a tényleges GitHub felhasználónevedre.

> **Megértés**:
>
> - `origin` a GitHub remote neve
> - `-u` (vagy `--set-upstream`) beállítja az upstream követést (összekapcsolja a helyi main-t a távoli main-nal)
> - Az `-u` flag csak az **első push**-hoz szükséges
> - Ezt az kezdeti beállítást követően használhatod az egyszerűbb `git push` parancsot

> **Megjegyzés**: Néhány fejlesztő az első alkalommal is csak a `git push`-t szeretné használni `-u` nélkül, de minden alkalommal meg kell adnod az `origin main`-t. Az `-u` egyszeri használata később spórolja a gépelést!

### Step 6.9: Ellenőrzés GitHub-on

1. Frissítsd a GitHub repository oldalt
2. Látnod kellene az összes fájlt
3. Ellenőrizd, hogy a `node_modules` és `dist` NINCS ott (köszönhetően a `.gitignore`-nak!)

### Step 6.10: Git workflow megértése

Itt van, amit most tanultál:

```
1. Feature branch létrehozása → Izolált munkavégzés
2. Változások commitolása → Pillanatképek mentése
3. Váltás main-re → Visszatérés a stabil branch-re
4. Merge → Változások behozása a main-be
5. Push GitHub-ra → Biztonsági mentés és megosztás
```

Ez a **feature branch workflow**, amelyet professzionális csapatok használnak!

---

## 🎉 Gratulálunk!

Befejezted a Module 1-et! Most már van:

1. ✅ Egy működő Vite + React + TypeScript projekt
2. ✅ Tailwind CSS telepítve és konfigurálva
3. ✅ Egy szépen stílusozott kártya komponens
4. ✅ Megértés az alapvető Tailwind utility osztályokról
5. ✅ Projekt verziókezelés alatt Git & GitHub-bal

## Kihívás gyakorlatok (Opcionális)

Próbáld ki ezeket a módosításokat, hogy megszilárdítsd a megértésedet:

1. **Háttérszín megváltoztatása** - Próbáld ki a `bg-blue-50` vagy `bg-slate-100`-at a `bg-gray-50` helyett

2. **Kártya szélesebbé tétele** - Változtasd a `max-w-md`-t `max-w-lg`-ra vagy `max-w-xl`-re

3. **Árnyék beállítása** - Próbáld ki a `shadow-sm`, `shadow`, `shadow-xl`, vagy `shadow-2xl`-t

4. **Szövegszínek megváltoztatása** - Próbáld ki különböző szürke árnyalatokat a címhez és leíráshoz

5. **Több padding hozzáadása** - Próbáld ki a `p-8`-at a `p-6` helyett

## Mi következik?

A **Module 2**-ben felfedezzük a Tailwind színpalettáját több kártya variáció létrehozásával:

- Világos téma kártya
- Sötét téma kártya
- Színes akcentus kártya

Megtanulod, hogyan működik a Tailwind színrendszere és kísérletezhetsz különböző színkombinációkkal!

---

## Gyors referencia: Használt fő Tailwind osztályok

```
Layout:
  min-h-screen    → teljes viewport magasság
  flex            → flexbox engedélyezése
  items-center    → függőleges középre igazítás
  justify-center  → vízszintes középre igazítás

Kártya Container:
  max-w-md        → max szélesség 448px
  p-6             → padding 24px
  bg-white        → fehér háttér
  rounded-lg      → 8px border radius
  border          → 1px szegély
  border-gray-200 → világosszürke szegély
  shadow-lg       → nagy árnyék

Tipográfia:
  text-xl         → 20px betűméret
  text-sm         → 14px betűméret
  font-bold       → félkövér szöveg
  text-gray-900   → sötét szöveg
  text-gray-600   → halvány szöveg
  mt-3            → 12px felső margin
```
