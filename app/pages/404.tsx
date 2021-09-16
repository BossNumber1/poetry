import React from "react";
import { useRouter } from "next/router";

export default function Error() {
    const router = useRouter();

    React.useEffect(() => {
        router.push("http://localhost:3000/");
    });

    return (
        <div className="errorMessage">
            Oops! Немного не туда попал. Перенаправляю на верный адрес...
            <style jsx>{`
                .errorMessage {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                }
            `}</style>
        </div>
    );
}
