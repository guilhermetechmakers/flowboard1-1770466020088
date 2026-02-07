const API_BASE = import.meta.env.VITE_API_URL ?? "/api";

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error((error as { message?: string }).message ?? "Request failed");
  }
  return response.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string) =>
    fetch(`${API_BASE}${path}`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(handleResponse<T>),

  post: <T>(path: string, body?: unknown) =>
    fetch(`${API_BASE}${path}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    }).then(handleResponse<T>),

  put: <T>(path: string, body?: unknown) =>
    fetch(`${API_BASE}${path}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    }).then(handleResponse<T>),

  patch: <T>(path: string, body?: unknown) =>
    fetch(`${API_BASE}${path}`, {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    }).then(handleResponse<T>),

  delete: <T>(path: string) =>
    fetch(`${API_BASE}${path}`, {
      method: "DELETE",
      credentials: "include",
    }).then(handleResponse<T>),
};
