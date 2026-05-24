const BASE_URL = import.meta.env.VITE_API_URL;

// ========== CATEGORY ==========
export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);
  return res.json();
};

export const createCategory = async (name: string) => {
  const res = await fetch(`${BASE_URL}/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
};

export const updateCategory = async (id: number, name: string) => {
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
};

export const deleteCategory = async (id: number) => {
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

// ========== SPEAKER ==========
export const getSpeakers = async () => {
  const res = await fetch(`${BASE_URL}/speakers`);
  return res.json();
};

export const createSpeaker = async (data: { name: string; role: string }) => {
  const res = await fetch(`${BASE_URL}/speakers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateSpeaker = async (id: number, data: { name: string; role: string }) => {
  const res = await fetch(`${BASE_URL}/speakers/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteSpeaker = async (id: number) => {
  const res = await fetch(`${BASE_URL}/speakers/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

// ========== EVENT ==========
export const getEvents = async () => {
  const res = await fetch(`${BASE_URL}/events`);
  return res.json();
};

export const createEvent = async (data: {
  name: string;
  location: string;
  dateEvent: string;
  description: string;
  categoryId: number;
  speakerId: number;
}) => {
  const res = await fetch(`${BASE_URL}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateEvent = async (id: number, data: {
  name: string;
  location: string;
  dateEvent: string;
  description: string;
  categoryId: number;
  speakerId: number;
}) => {
  const res = await fetch(`${BASE_URL}/events/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteEvent = async (id: number) => {
  const res = await fetch(`${BASE_URL}/events/${id}`, {
    method: "DELETE",
  });
  return res.json();
};