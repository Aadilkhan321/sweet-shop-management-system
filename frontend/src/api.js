const BASE_URL = "http://127.0.0.1:8000/api";

export function getToken() {
  return localStorage.getItem("token");
}

export async function apiRequest(url, method = "GET", body = null) {
  const headers = { "Content-Type": "application/json" };
  const token = getToken();

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${url}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  return res.json();
}
