import PropTypes from 'prop-types';


function CardButton({text}){

    return (
        <>
            <button className="font-raleway hover:bg-[#414857] rounded-3xl whitespace-nowrap text-sm flex justify-center items-center w-28 h-8 hover:bg-[#414857] text-[#E9E9E9]">
            {text}
            </button>
        </>
    )

}

CardButton.propTypes = {
    text: PropTypes.string,

};

export default CardButton;