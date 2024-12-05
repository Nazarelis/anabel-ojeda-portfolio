import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ButtonsContact () {
    return (
        <>
        
        <div className='w-24 rounded-full'>
            <a className='w-full' href="https://wa.me/5491125196070" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon fontSize="large" sx={{ color: '#01405B' }}/>
            </a>
        </div>

        <div className='w-24 rounded-full'>
            <a className='w-full' href="mailto:anabelojeda2001@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon fontSize="large" sx={{ color:'#01405B' }}/>
            </a>
        </div>

        <div className='w-24 rounded-full'>
            <a className='w-full' href="https://www.linkedin.com/in/anabel-ojeda/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" sx={{ color: '#01405B' }}/>
            </a>
        </div>


        </>
    )
}

export default ButtonsContact