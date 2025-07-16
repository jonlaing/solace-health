import { useQuery } from "@tanstack/react-query";
import { advocatesSchema } from "../schemas/advocates";

interface UseAdvocatesConfig {
  query?: string;
  page?: number;
}

const fetchAdvocates = async ({ query, page }: UseAdvocatesConfig = {}) => {
  const params = new URLSearchParams();

  if (query) {
    params.append("query", query);
  }

  if (page) {
    params.append("page", page.toString());
  }

  const url = `/api/advocates${query || page ? `?${params.toString()}` : ""}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch advocates");
  }

  const json = await response.json();
  return advocatesSchema.parse(json.data);
};

export const useAdvocates = ({ query, page }: UseAdvocatesConfig = {}) => {
  return useQuery({
    queryKey: ["advocates", query, page],
    queryFn: () => fetchAdvocates({ query, page }),
  });
};

