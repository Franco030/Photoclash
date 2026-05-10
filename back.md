# Documentación: Backend PhotoClash API

## 1. Estructura de la Base de Datos (Diagrama Entidad-Relación Lógico)

Se recomienda una base de datos relacional (PostgreSQL o MySQL) debido a la naturaleza estructurada de los torneos y los votos.

* **Tabla `Users`**
* `id` (ID, Primary Key)
* `username` (String, Unique)
* `avatar_url` (String, Nullable)
* `title` (String) - *Ej: "Leyenda Urbana", "Promesa"*
* `score` (Int) - *Puntos acumulados para el ranking global*
* `win_rate` (Int) - *Porcentaje de victorias (0-100)*
* `created_at` (Timestamp)


* **Tabla `Tournaments`**
* `id` (ID, Primary Key)
* `title` (String)
* `description` (Text)
* `status` (Enum: 'active', 'voting', 'closed')
* `cover_image_url` (String)
* `created_at` (Timestamp)
* `end_date` (Timestamp)


* **Tabla `PhotoEntries`** (Las fotos que suben los usuarios)
* `id` (ID, Primary Key)
* `tournament_id` (UUID, Foreign Key -> Tournaments.id)
* `author_id` (UUID, Foreign Key -> Users.id)
* `image_url` (String) - *URL del bucket (S3, Cloudinary, etc.)*
* `votes` (Int, Default: 0)
* `submitted_at` (Timestamp)


* **Tabla `Votes`** (Crucial para evitar que un usuario vote dos veces por el mismo par)
* `id` (ID, Primary Key)
* `tournament_id` (UUID, Foreign Key -> Tournaments.id)
* `winner_entry_id` (UUID, Foreign Key -> PhotoEntries.id)
* `loser_entry_id` (UUID, Foreign Key -> PhotoEntries.id)
* `voter_id` (UUID, Foreign Key -> Users.id)
* `created_at` (Timestamp)



---

## 2. Contrato de la API (Endpoints)

El backend debe exponer los siguientes endpoints bajo el prefijo `/api/v1/`.

### Flujo de Torneos y Exploración

**1. Obtener torneos activos**

* **Endpoint:** `GET /tournaments`
* **Respuesta Exitosa (200 OK):**
```json
[
  {
    "id": "uuid-1234",
    "title": "Atardeceres de la Ciudad",
    "description": "Captura la esencia del crepúsculo.",
    "status": "active",
    "participantsCount": 124,
    "coverImageUrl": "https://bucket.../image.jpg",
    "createdAt": "2026-05-01T00:00:00Z",
    "endDate": "2026-05-15T00:00:00Z"
  }
]

```



**2. Obtener el Ranking Global (Salón de la Fama)**

* **Endpoint:** `GET /users/ranking`
* **Query Params:** `?limit=50`
* **Respuesta Exitosa (200 OK):**
```json
[
  {
    "id": "uuid-5678",
    "username": "@maestro_luz",
    "avatarUrl": "https://bucket.../avatar.jpg",
    "title": "Leyenda Urbana",
    "score": 2450,
    "winRate": 92
  }
]

```



### Flujo de Participación (Uploads)

**3. Subir una fotografía a un torneo**

* **Endpoint:** `POST /tournaments/:id/participate`
* **Request:** Debe ser `multipart/form-data` (para recibir el archivo físico de la imagen) o requerir una arquitectura de *Presigned URL's* si deciden subir directo de la app a S3.
* **Respuesta Exitosa (201 Created):**
```json
{
  "id": "uuid-photo-999",
  "authorId": "uuid-my-user",
  "imageUrl": "https://bucket.../my-upload.jpg",
  "votes": 0,
  "submittedAt": "2026-05-10T21:00:00Z"
}

```



**4. Obtener el Dashboard del Usuario**

* **Endpoint:** `GET /users/me/dashboard`
* **Respuesta Exitosa (200 OK):**
```json
{
  "activeTournaments": 12,
  "winRate": 85,
  "myUploads": [
    {
      "id": "uuid-photo-999",
      "tournamentId": "uuid-1234",
      "imageUrl": "https://bucket.../my-upload.jpg",
      "votes": 15,
      "submittedAt": "2026-05-10T21:00:00Z"
    }
  ]
}

```



### Flujo de Duelo (Clash & Voting)

**5. Obtener un emparejamiento (Matchmaking de fotos)**

* **Descripción:** El backend debe devolver dos fotografías aleatorias (o calculadas por Elo/Score) del mismo torneo, asegurándose de que el usuario que lo solicita NO sea el autor de ninguna de las dos.
* **Endpoint:** `GET /tournaments/:id/clash`
* **Respuesta Exitosa (200 OK):**
```json
{
  "competitorA": {
    "id": "uuid-photo-A",
    "imageUrl": "https://bucket.../photoA.jpg"
  },
  "competitorB": {
    "id": "uuid-photo-B",
    "imageUrl": "https://bucket.../photoB.jpg"
  }
}

```



**6. Registrar un voto**

* **Endpoint:** `POST /tournaments/:id/vote`
* **Payload (JSON):**
```json
{
  "winnerEntryId": "uuid-photo-A",
  "loserEntryId": "uuid-photo-B"
}

```


* **Respuesta Exitosa (200 OK):** `{ "message": "Voto registrado exitosamente." }`

---

## 3. Notas Críticas de Arquitectura

1. **Almacenamiento de Imágenes:** La API no debe guardar imágenes en Base64 en la base de datos. Deben implementar un servicio como AWS S3, Google Cloud Storage o Cloudinary, y la base de datos solo debe guardar la URL (String) resultante.
2. **Autenticación:** Dado que la aplicación maneja el bloqueo inicial de forma biométrica local, el backend debe proporcionar un sistema basado en tokens (JWT). Al iniciar la app, el frontend enviará un token guardado de forma segura para identificar los requests.
3. **Concurrencia de Votos:** Al ser una aplicación competitiva, la actualización de la columna `votes` en la tabla `PhotoEntries` debe manejar condiciones de carrera (Race Conditions) usando transacciones o incrementos atómicos en la base de datos.