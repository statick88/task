# Task Manager

Este proyecto es una aplicación de gestión de tareas construida con React y Supabase.

Tarea añadida: Notificaciones por correo electrónico cuando se asigna una tarea.

Realizado por: Grupo6

- Arrieta Camilo
- Bustamante Cristian
- Lema Allison

## Tecnologías utilizadas

- React.js
- Supabase
- Emailjs

## Cómo contribuir

1. Haz un "Fork" del repositorio.
2. Clona tu fork en tu máquina local (`git clone https://github.com/statick88/task`).
3. Crea una nueva rama para tus cambios (`git checkout -b nombre-de-tu-rama`).
4. Realiza tus cambios y haz un commit (`git commit -m "Descripción de los cambios"`).
5. Haz un push a tu rama (`git push origin nombre-de-tu-rama`).
6. Crea un "Pull Request" desde tu rama en GitHub.

## Configuración de Supabase

1. Crea una cuenta en [Supabase](https://supabase.io/).
2. Crea un nuevo proyecto.
3. En la sección "Database", crea una nueva tabla para las tareas. Puedes usar el siguiente código SQL, toma en cuenta que para la
   modificación se agregó el campo "email":
```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  email VARCHAR(255) NOT NULL
);
```	
4. Configura las variables de entorno `VITE_REACT_APP_SUPABASE_URL` y `VITE_REACT_APP_SUPABASE_ANON_KEY` con los valores proporcionados por Supabase.

## Configuración de EmailJs
1. Crea una cuenta en [EmailJS](https://dashboard.emailjs.com/sign-up).
2. En la opcion servicio de correo, configura con tu cuenta personal y extrae el id de servicio a utilizar en 
   el componente Correo.jsx.
3. En la pestaña de template email, configura tu mensaje de envio y asunto, luego en configuración extrae el template id
  para usarlo en Correo.jsx.
4. En la pestaña de Account, extrae la llave publica de usuario para añadirlo en Correo.jsx.

## Mejoras futuras

- ❌ Autenticación de usuarios.
- ❌ Asignación de tareas a usuarios.
- ❌ Actualización de tareas: permitir a los usuarios modificar las tareas existentes.
- ❌ Notificaciones por correo electrónico cuando se asigna una tarea. (Realizada)
- ❌ Filtros para la lista de tareas.
- ❌ Ruta de tareas completadas: mostrar en una ruta separada las tareas que ya se han realizado.