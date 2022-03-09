const Button = ({button}) => {
  return (
    <>
        <p id="btn">
           <a href=" " > {button} </a>
        </p>
    </>
  )
}

Button.defaultProps = {
value : 'button',
}

export default Button