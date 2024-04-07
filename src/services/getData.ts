interface ApiResponse<T> {
  data: T | null;
  status: number;
  message?: string;
}

export const getData = async <T>(url: string): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Error al obtener los datos desde getData"
      );
    }

    return { data, status: response.status };
  } catch (error) {
    return { data: null, status: 500, message: (error as Error).message };
  }
};
