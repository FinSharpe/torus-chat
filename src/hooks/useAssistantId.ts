import { useQueryState } from "nuqs";

export const useAssistantId = () => {
    const envAssistantId: string | undefined =
        process.env.NEXT_PUBLIC_ASSISTANT_ID;
    return useQueryState("assistantId", {
        defaultValue: envAssistantId || "",
    });
}