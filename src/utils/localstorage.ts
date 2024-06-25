function get<T>(key: string): T | null {
  const storedValue = localStorage.getItem(key);
  return storedValue ? (JSON.parse(storedValue) as T) : null;
}

function set<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

function remove(key: string) {
  localStorage.removeItem(key);
}

function clear() {
  localStorage.clear();
}

export const LocalStorage = {
  get,
  set,
  remove,
  clear,
};
