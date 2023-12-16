import React, { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
	return <button className="text-teal-400" {...props} />
}
