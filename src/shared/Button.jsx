import React from 'react'
import { classNames } from './Utils'

export function PageButton({ children, className, ...rest }) {
    return (
        <button
            type="button"
            className={
                classNames(
                    "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-gray-700 text-sm font-medium text-gray-500 hover:bg-gray-50",
                    className
                )}
            {...rest}
        >
            {children}
        </button>
    )
}
