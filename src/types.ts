import React from "react"

export type FCWithChildren<T> = React.FC<T & { children?: React.ReactNode }>
