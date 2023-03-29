import { pause } from "../utils";
import mockData from "../mock-data.json";

export class HttpClient {
  static async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
  }

  static async post<T>(url: string, data: T): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async put<T>(url: string, data: T): Promise<T> {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async delete<T>(url: string, data: T): Promise<T> {
    const response = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async emitateGet<T>(url: string): Promise<T> {
    await pause(2000);
    return mockData as T;
  }
}
