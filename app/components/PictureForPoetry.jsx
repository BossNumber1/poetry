import React from "react";
import Image from "next/image";

export default function PictureForPoetry({ selectedScriptSection }) {
    return (
        <>
            {selectedScriptSection === 0 && (
                <div style={{ marginTop: "34px" }}>
                    <Image
                        src="/one.jpg"
                        alt="first_picture"
                        width={500}
                        height={333}
                    />
                </div>
            )}
        </>
    );
}
