import { Button as MUIButton } from "@mui/base";

const Button = ({children, ...props}) => {
	const buttonClasses = `bg-primary opacity-75 hover:opacity-100 px-3 py-1 rounded ${props.className || ""}`.trim();
	return <MUIButton className={buttonClasses} {...props}>{children}</MUIButton>
}
export default Button;
