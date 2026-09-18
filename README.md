# 💼 Plantilla de Portfolio con React (Data-Driven)

Plantilla reutilizable de portfolio para desarrolladores, construida con **React y Vite**. El contenido vive en archivos JSON separados de la lógica, así que se puede adaptar a cualquier perfil editando solo datos.

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

> 📌 **Nota:** este repositorio es una **plantilla base** usada en un portfolio anterior, mantenida aquí como referencia y punto de partida reutilizable — no es el portfolio activo actual.

## 🔗 Proyecto en vivo

👉 [Ver proyecto en vivo](https://reactjsportfoliotemplate.netlify.app/)

## ✨ Características

- **Arquitectura por componentes**: Navbar, Hero, About, Experience, Projects y Contact, cada uno con su propio módulo de estilos (`.module.css`).
- **Contenido data-driven**: habilidades, historial de experiencia y proyectos se cargan desde archivos JSON (`skills.json`, `history.json`, `projects.json`), permitiendo actualizar el contenido sin tocar los componentes.
- **Navbar responsive** con menú hamburguesa que se transforma en overlay en pantallas pequeñas.
- Animaciones sutiles: efecto **floating** en la imagen del hero, hover con gradiente deslizante en las tarjetas de "About", y blur decorativo de fondo.
- Sistema de **variables CSS** centralizadas (`vars.css`) para colores y tipografías, facilitando el reskinning del template.
- Tipografías cargadas vía `@fontsource` (Roboto y Outfit), sin depender de CDNs externos de Google Fonts.

## 🛠️ Tecnologías utilizadas

- **React** — componentes funcionales con hooks (`useState` para el estado del menú móvil).
- **Vite** — bundler y entorno de desarrollo.
- **CSS Modules** — estilos con scope local por componente, evitando colisiones de clases.
- **JSON** — como fuente de datos para contenido dinámico (skills, experiencia, proyectos).

## 📂 Estructura del proyecto

```
├── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── vars.css
│   ├── utils.js
│   ├── data/
│   │   ├── skills.json
│   │   ├── history.json
│   │   └── projects.json
│   └── components/
│       ├── Navbar/
│       ├── Hero/
│       ├── About/
│       ├── Experience/
│       ├── Projects/
│       └── Contact/
└── README.md
```

## 🚀 Cómo usarlo localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/carlos-daniel07/react-portfolio-template.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd react-portfolio-template
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Corre el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```

## 🎨 Cómo personalizarlo

- Edita `src/data/skills.json`, `history.json` y `projects.json` para cambiar el contenido sin tocar componentes.
- Cambia la paleta de colores y fuentes en `src/vars.css`.
- Reemplaza las imágenes dentro de `src/assets/` (hero, about, contact, nav).

## 🧠 Qué aprendí / practiqué

- Separar **contenido de lógica** usando archivos JSON como fuente de datos, un patrón útil para plantillas reutilizables.
- Usar **CSS Modules** para evitar colisiones de nombres de clases entre componentes sin necesidad de convenciones tipo BEM.
- Construir un menú de navegación responsive controlado por un solo estado (`menuOpen`) reutilizado tanto para el ícono como para la visibilidad del menú.

## 📸 Vista previa

<img width="1920" height="1536" alt="image" src="https://github.com/user-attachments/assets/152c58d5-1b72-4c40-8c4c-742f5560833e" />

## 📄 Licencia

Este proyecto es de uso libre con fines educativos, como plantilla base o punto de partida para portfolios propios.

---

Hecho con 💻 por [Carlos Daniel](https://github.com/carlos-daniel07)
