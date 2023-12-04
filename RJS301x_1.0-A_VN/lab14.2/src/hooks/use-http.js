import { useCallback, useState } from "react";

/**
 * @typedef {(data: any) => void} UseHttpCallback
 */

/**
 * @typedef UseHttpConfig
 * @property {string} url
 * @property {string} [method]
 * @property {Record<string, string>} [headers]
 * @property {any} [body]
 */

/**
 * @typedef UseHttpHook
 * @property {boolean} isLoading
 * @property {string} error
 * @property {(callback: UseHttpCallback, config: UseHttpConfig) => Promise<void>} sendRequest
 */

/**
 * @returns {UseHttpHook}
 */
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /** @type {UseHttpHook["sendRequest"]} */
  const sendRequest = useCallback(
    async (
      callback,
      config = {
        url: "",
        method: "",
        headers: undefined,
        body: undefined,
      },
    ) => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(config.url, {
          method: config.method,
          headers: config.headers,
          body:
            config.body === undefined ? undefined : JSON.stringify(config.body),
        });

        if (!res.ok) {
          throw new Error("Request failed!");
        }

        const data = await res.json();

        callback(data);
      } catch (err) {
        setError(err.message ?? "Something went wrong!");
      }

      setIsLoading(false);
    },
    [],
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
