import React from "react";
import iconSprite from "../../assets/sprite/SpriteIcons.svg";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return <svg width={props.width || "29"} height={props.height || "42"} viewBox={props.viewBox || "0 0 29 42"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`} />
        </svg>
}


