import PropTypes from 'prop-types';


function Button({text, textColor, bgColor, borderColor, sizeText}) {

    return (
        
        <div className=
        {`flex 
        hover:border-4 
        rounded-3xl 
        w-40 
        h-10 
        items-center 
        justify-center 
        ${textColor} 
        ${bgColor} 
        hover:bg-transparent
        ${borderColor}`
        }>
                <a href='https://www.linkedin.com/in/anabel-ojeda/'>
                <button className={`${sizeText}`}>
                        {text}
                </button>
                </a>
        </div>
        


)}

Button.propTypes = {
        text: PropTypes.string,
        textColor: PropTypes.string, 
        bgColor: PropTypes.string, 
        bgHoverColor: PropTypes.string, 
        borderColor: PropTypes.string,
        sizeText: PropTypes.string
      };
      
export default Button;