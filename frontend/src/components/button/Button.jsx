import '../../css/button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large',
    'btn--full'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    loading
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
        type = {type} >{
            loading?<div className='loader'></div>:children}</button>
    )
}