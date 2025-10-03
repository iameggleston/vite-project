type ClientResponse<T> = {
  contents: T[];
};

type GetParams = {
  endpoint: string;
};

export const client = {
  async get<T = unknown>({ endpoint }: GetParams): Promise<ClientResponse<T>> {
    // Dummy implementation to avoid runtime errors when API client is not configured
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`[dummy-client] get called for endpoint: ${endpoint}`);
    }

    return { contents: [] };
  },
};
