import { HTMLAttributes } from "react";

export interface ContentProps extends HTMLAttributes<HTMLElement> {}

export const Content = (props: ContentProps) => {
    const {children, ...other} = props
    
    return <main {...other}>{children}</main>
}