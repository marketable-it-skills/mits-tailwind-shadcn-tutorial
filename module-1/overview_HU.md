# Module 1: Projekt beállítás és az első kártya

## Áttekintés

Ebben a modulban egy modern React fejlesztői környezetet állítasz be és létrehozod az első UI komponensedet - egy egyszerű projekt kártyát. A modul végére egy szépen stílusozott kártyád lesz a képernyő közepén, teljes egészében Tailwind CSS utility osztályokkal építve.

## Mi az a Tailwind CSS?

A **Tailwind CSS** egy utility-alapú CSS keretrendszer, amely lehetővé teszi modern felhasználói felületek gyors építését egyedi CSS írása nélkül. A külön stylesheetekben írt CSS szabályok helyett előre definiált utility osztályokat alkalmazol közvetlenül a HTML elemekre.

### Hagyományos CSS vs Tailwind

**Hagyományos megközelítés:**

```css
/* styles.css */
.card {
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
}
```

```html
<div class="card">Content</div>
```

**Tailwind megközelítés:**

```html
<div class="p-6 bg-white rounded-lg">Content</div>
```

### Miért szeretik a fejlesztők a Tailwindet

- **Gyorsabb fejlesztés** - Nincs váltás HTML és CSS fájlok között
- **Konzisztencia** - Egy design rendszert használ előre definiált spacing, színek és méretekkel
- **Nincs elnevezés** - Nem kell class neveket kitalálni, mint `.card-container-wrapper`
- **Kisebb CSS** - A Tailwind eltávolítja a nem használt stílusokat production-ben
- **Responsive design** - Beépített utilityk breakpointokhoz (`md:`, `lg:`, stb.)

### Fő koncepciók

- **Utility osztályok** - Egy célú osztályok, mint `p-4` (padding), `text-xl` (szöveg méret)
- **Kompozíció** - Kombináld több utilityt összetett designok létrehozásához
- **Nincs varázslat** - Minden osztály standard CSS tulajdonságokra mutat
- **JIT compilation** - A Tailwind csak azt a CSS-t generálja, amit ténylegesen használsz

Ebben a modulban cselekvéssel fogsz tanulni - építs egy valódi kártya komponenst és értsd meg, hogyan működnek együtt a Tailwind utilityk!

## Mit fogsz tanulni

- **Vite + React + TypeScript** projekt beállítása
- **Tailwind CSS v4** telepítése és konfigurálása Vite pluginnal
- A Tailwind **utility-first** megközelítésének megértése
- **Flexbox** használata elemek középre igazításához
- Kártya komponens létrehozása:
  - Háttér és padding
  - Szegélyek és lekerekített sarkok
  - Árnyékok mélységhez
  - Tipográfiai stílusozás

## Miért fontos ez

Ez a modul megalapozza az alapokat minden következő dologhoz. Megértés, hogyan lehet:

1. **Modern React projektet beállítani** - A Vite villámgyors fejlesztést biztosít hot module replacement-tel
2. **Tailwind CSS-t használni** - A utility osztályok lehetővé teszik a gyors UI fejlesztést egyedi CSS írása nélkül
3. **Alapvető komponenseket építeni** - A kártyák alapvető UI építőelemek, amelyeket mindenhol használnak

## PRD kapcsolat

Ez a modul a **MITS Project Dashboard** első részét implementálja (lásd PRD):

> **Core Features → Project Cards → Visual Components**
>
> - Title - Nagy, félkövér címsor, amely a modul nevét jeleníti meg
> - Description - Csonkított szöveg előnézet

Egyszerűen kezdünk csak ezzel a két elemmel, a képernyő közepén. Későbbi modulokban hozzáadunk további funkciókat, mint badgek, tagek, színek és témák.

## Előfeltételek

A modul elkezdése előtt győződj meg róla, hogy rendelkezel:

- **Node.js** (v18 vagy újabb) - [Letöltés itt](https://nodejs.org/)
- **npm** (Node.js-szel együtt jön)
- **Git** - [Letöltés itt](https://git-scm.com/)
- **GitHub account** - [Regisztráció itt](https://github.com)
- **Kódszerkesztő** (VS Code ajánlott)
- Alapvető **HTML, CSS és JavaScript** ismeretek
- **React alapok** ismerete (komponensek, JSX)

## Időbecslés

⏱️ **30-45 perc**

## Modul struktúra

1. **Task 1**: Új Vite + React + TypeScript projekt létrehozása
2. **Task 2**: Tailwind CSS telepítése és konfigurálása
3. **Task 3**: Alapértelmezett fájlok takarítása
4. **Task 4**: Egyszerű középre igazított kártya létrehozása
5. **Task 5**: Kártya stílusozása Tailwind osztályokkal
6. **Task 6**: Verziókezelés beállítása Git & GitHub-bal

## Várható eredmény

A modul végére lesz:

Egyetlen kártya a képernyő közepén:

- Fehér háttér
- Lekerekített sarkok és finom szegély
- Árnyék mélységhez
- Félkövér cím és halvány leírás szöveg
- Szürke oldal háttér

![Várható eredmény](assets/project-description-images/module-1-solution.png)
Kezdjük el! 🚀
