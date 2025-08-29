import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";

const useClientData = (docId) => {
  const key = docId ? `/getClientDataByDocId?docId=${docId}` : null;

  const { data, error, isLoading } = useSWR(key, fetcher, {
    revalidateOnFocus: false,
  });

  return {
    clientData: data,
    isLoading,
    isError: error,
  };
};

export default useClientData;
