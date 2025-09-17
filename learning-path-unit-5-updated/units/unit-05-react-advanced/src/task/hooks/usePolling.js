import { useEffect, useRef, useState, useCallback } from "react";

/**
 * usePolling(fetcher, intervalMs)
 * Returns { data, loading, error, refresh }
 * - Starts an interval that calls `fetcher` every `intervalMs`
 * - Cleans up on unmount
 * - `refresh()` triggers an immediate fetch
 */
export function usePolling(fetcher, intervalMs = 5000) {
  const isMounted = useRef(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const doFetch = useCallback(async () => {
    if (!fetcher) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetcher();
      if (isMounted.current) setData(Array.isArray(res) ? res : []);
    } catch (err) {
      if (isMounted.current) setError(err);
    } finally {
      if (isMounted.current) setLoading(false);
    }
  }, [fetcher]);

  useEffect(() => {
    isMounted.current = true;
    // initial fetch
    doFetch();

    // TODO(CLEANUP): set up interval for doFetch using intervalMs and clear it on unmount

    return () => {
      isMounted.current = false;
    };
  }, [doFetch, intervalMs]);

  // TODO: expose doFetch under the name of refresh
  return { data, loading, error };
}
