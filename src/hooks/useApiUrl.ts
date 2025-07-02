import { useQueryState } from "nuqs";

export const useApiUrl = () => {
    const envApiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
    return useQueryState("apiUrl", {
        defaultValue: envApiUrl || "",
    });
}