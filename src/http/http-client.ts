import { pause } from "../utils";
import mockData from "../mock-data.json";

export class HttpClient {
  static async get<R>(url: string, headers?: HeadersInit): Promise<R> {
    const response = await fetch(url, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }

    return response.json();
  }

  static async post<R, T = Object>(url: string, data: T): Promise<R> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }

    return response.json();
  }

  static async put<R, T = Object>(
    url: string,
    data: T,
    headers?: HeadersInit
  ): Promise<R> {
    const response = await fetch(url, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }

    return response.json();
  }

  static async delete<R, T = Object>(
    url: string,
    data: T,
    headers?: HeadersInit
  ): Promise<R> {
    const response = await fetch(url, {
      method: "DELETE",
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }

    return response.json();
  }

  static async emitateGet<T>(url: string): Promise<T> {
    await pause(2000);
    return mockData as T;
  }
}
