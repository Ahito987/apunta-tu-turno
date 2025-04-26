TurnosApp

# TurnosApp

**TurnosApp** es una aplicación web sencilla que permite a los usuarios registrar, visualizar y eliminar turnos personales. Funciona completamente en el navegador, guardando los datos en el almacenamiento local (`localStorage`).

## Características

- Añadir un turno seleccionando:
  - Fecha
  - Hora
  - Tipo de turno (Mañana, Tarde, Noche, Vacaciones, Libranza, Débito Horario)
  - Nota opcional
- Visualización de los turnos en:
  - Tabla
  - Tarjetas individuales (Cards)
- Eliminación de turnos registrados.
- Diseño responsive y optimizado para móviles.
- No requiere conexión a internet después de ser cargada.

## Instalación

Puedes alojarla fácilmente en GitHub Pages, Netlify o cualquier servidor web, o simplemente abrir el archivo `index.html` en tu navegador.

### Para desplegar en GitHub Pages:
1. Sube los archivos (`index.html`, `style.css`, `script.js` si los separas) a un repositorio.
2. En la configuración del repositorio, habilita GitHub Pages desde la rama `main` o `docs`.
3. ¡Listo! Tu app estará disponible en una URL pública.

### Para empaquetar como APK para Android:

1. Usa herramientas como [**WebView Gold**, **PWA2APK**, **Bubblewrap**] o crea una app nativa ligera en Android Studio que cargue tu página web.
2. Alternativamente, si quieres hacerlo fácil:
   - Instala **CapacitorJS** o **Cordova**.
   - Empaqueta tu sitio como una app webview.
   - Compila usando Android Studio.

Te puedo guiar en ese proceso si quieres. 🚀

## Cómo usar TurnosApp

1. Abre la aplicación en tu navegador o dispositivo.
2. Completa el formulario con la fecha, hora, tipo de turno y una nota si deseas.
3. Presiona **"Añadir turno"**.
4. Tus turnos aparecerán en una tabla y también en formato de tarjeta.
5. Puedes eliminar un turno haciendo clic en el icono 🗑️.

## Captura de Pantalla

![Pantalla TurnosApp](./pantalla.png)

*(Agrega aquí una captura de pantalla si quieres)*

---

Hecho con ❤️ para la organización y la gestión de tus turnos personales.
