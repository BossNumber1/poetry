import { useCallback } from "react";
import axios from "axios";

export const useHttpGet = () => {
    const requestGet = useCallback(async (url) => {
        const response = await axios.get(url).then((response) => {
            return response;
        });

        return await response.data;
    }, []);

    return { requestGet };
};

export const useHttpPost = () => {
    const requestPost = useCallback(async (url, body) => {
        try {
            const response = await axios({
                method: "post",
                url: url,
                data: body,
            }).then((response) => {
                return response;
            });

            return await response.data;
        } catch (e) {
            throw e;
        }
    }, []);

    return { requestPost };
};
