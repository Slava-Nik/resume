import React from 'react';
import {IconProps} from "../../../types/global";

function TelegramIcon({...props}:IconProps) {
    const {width = 24, height = 24, className} = props;
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
            clipRule="evenodd"
        >
            <path d="M12 0C5.374 0 0 5.372 0 12c0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.133.43.166.646.085a.678.678 0 00.422-.491c.507-2.382 1.737-8.412 2.198-10.578a.457.457 0 00-.151-.443.47.47 0 00-.465-.082c-2.446.906-9.979 3.732-13.058 4.871a.484.484 0 00-.316.467.483.483 0 00.346.445c1.381.413 3.193.988 3.193.988s.847 2.558 1.288 3.858a.512.512 0 00.352.336.505.505 0 00.474-.121l1.805-1.704s2.084 1.527 3.266 2.369zm-6.423-5.062l.98 3.231.218-2.046 5.941-5.358a.162.162 0 00.019-.22.165.165 0 00-.219-.037l-6.939 4.43z"></path>
        </svg>
    );
}

export default TelegramIcon;