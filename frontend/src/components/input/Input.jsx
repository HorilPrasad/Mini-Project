import '../../css/input.css'
export const Input = ({
    type,
    placeholder,
    name,
    value,
    onChange,
    maxLength,
    minLength
}) =>{
    return <input className="input-box" type={type} maxLength={maxLength} minLength={minLength} placeholder={placeholder} name={name}value={value} onChange={onChange}/>
}