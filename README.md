![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Aseprite](https://img.shields.io/badge/Aseprite-7D929E?style=for-the-badge&logo=Aseprite&logoColor=white)
![GSAP](https://img.shields.io/badge/gsap-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

# 🌾 Tiny Tiller 🌾
Welcome to **Tiny Tiller**! This project is a visual and creative interpretation of the classic **Toy Robot** programming challenge, transformed into a retro farm experience.

Instead of a simple robot on an empty grid, I have designed an interactive harvesting environment where programming logic meets digital art.

---

## The Creative Touch

What sets this project apart from a standard technical test is its visual identity:
* **Original Art:** All assets (farmer, plants, rocks, mushrooms, and backgrounds) have been designed and exported pixel by pixel by me using **Aseprite**.
* **Retro Aesthetic:** I customised the interface to look like a classic game console, using the **VT323** font and wood textures with solid shadows to achieve an ‘indie game’ look.

##  Stack 

* **React + Vite:** For a rapid development environment and modern component structure.
* **Tailwind CSS:** Used for layout, grid system, and visual depth effects.


##  Challenge Logic (Toy Robot)

The core of the project implements the classic grid movement rules:
1.  **PLACE X,Y,F**: Places the farmer in an initial position and direction.
2.  **MOVE**: Moves forward one square, respecting the boundaries of the terrain.
3.  **LEFT / RIGHT**: Turns 90 degrees to change orientation.
4.  **REPORT**: Reports the current position on the control panel.
5.  **Collision Detection**: The system prevents the character from leaving the map or falling into the void.

##  Local Installation

If you want to explore the code or run it on your machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/Juls010/Tiny_Tiller.git
   ```
   
2. Install the dependencies:
   ```bash
   npm install
   ```
   
3. Start the development server:
   ```bash
   npm run dev
   ```
---

   Lovingly crafted by Julia 💞
   
