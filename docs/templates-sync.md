**Templates Server Sync**

- **Purpose:**: Describe the lightweight server-sync endpoint used by the Offer Builder for saving/loading templates.

**API Endpoints**
- **GET** `/api/templates` — returns `{ templates: [...] }`.
- **POST** `/api/templates` — accepts JSON `{ templates: [...] }` and overwrites the server store.
- **DELETE** `/api/templates` — clears the server store.

**Storage**
- **File:** `data/templates-store.json` — server writes/reads this file. It is created automatically when saving.

**Protection / Env var**
- **Env var:** `TEMPLATES_API_KEY` (optional). If set in the server environment, requests must include the same string in header `x-api-key`.
- If `TEMPLATES_API_KEY` is NOT set, the API is open to local calls from the app.

**How the Offer Builder uses it**
- The Offer Builder UI exposes a "Sync key" input. If you set `TEMPLATES_API_KEY` on the server, paste the same key into that input before using "Sync to server" or "Load from server".

**Quick curl examples**
- Upload templates (replace `<KEY>` if applicable):

```bash
curl -X POST /api/templates \
  -H "Content-Type: application/json" \
  -H "x-api-key: <KEY>" \
  -d '{"templates":[{"name":"Example","outcome":"...","createdAt":"..."}]}'
```

- Download templates:

```bash
curl -X GET /api/templates -H "x-api-key: <KEY>"
```

**Security note**
- This is a minimal, file-backed store intended for simple sync during development. For production use, replace with a proper authenticated API and database-backed storage. Keep `TEMPLATES_API_KEY` secret and rotate it if exposed.
