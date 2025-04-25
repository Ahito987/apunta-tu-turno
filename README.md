TurnosApp

TurnosApp es una aplicación web sencilla para gestionar tus turnos de trabajo. Puedes seleccionar fecha, hora, tipo de turno y agregar notas. Los datos se almacenan localmente en el navegador (localStorage).

Tecnologías utilizadas

HTML5

CSS3

JavaScript (Vanilla)

Estructura del proyecto

TurnosApp/
├── index.html
├── style.css (estilos incluidos en index.html)
├── script.js (código JS incluido en index.html)

Instrucciones para usarlo localmente

Descarga o clona este repositorio.

Abre el archivo index.html en tu navegador.

No necesitas servidor. Funciona directamente en tu navegador.

Publicarlo en GitHub Pages

Sube los archivos a un repositorio en GitHub.

Entra en Settings > Pages.

Selecciona la rama donde está el código y carpeta /root.

Guarda y accede a tu enlace de GitHub Pages.

Convertirlo en una APK (Android)

Instala Node.js y npm: https://nodejs.org/

Instala Capacitor:

npm install --global @capacitor/cli

Crea un proyecto:

npx create-react-app turnosapp (puede ser un proyecto vacío si quieres)
cd turnosapp

Copia tu archivo index.html dentro de /public o crea estructura compatible.

Inicializa Capacitor:

npx cap init "TurnosApp" "com.turnos.app"

Agrega plataforma Android:

npx cap add android

Sincroniza tu app:

npx cap copy
npx cap open android

Compila APK en Android Studio y firma tu aplicación.

Autor

TurnosApp creado en 2025.

Diseño inspirado en apps de gestión personal.v
