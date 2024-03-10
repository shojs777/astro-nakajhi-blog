import { SpearlyApiClient } from "@spearly/sdk-js";

const apiClient = new SpearlyApiClient(import.meta.env.SPEARlY_API_KEY);

export { apiClient };
