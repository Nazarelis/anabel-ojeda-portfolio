import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ButtonsContact () {
    return (
        <>
        
        <div className='w-20 h-20 md:w-24 md:h-24 flex items-center justify-center'>
            <a className='w-full h-full flex items-center' href="https://wa.me/5491125196070" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon sx={{ color:'#01405B', fontSize: "3rem", width: '100%'  }}/>
            </a>
        </div>

        <div className='w-20 h-20 flex items-center justify-center'>
            <a className='w-full' href="mailto:anabelojeda2001@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon sx={{ color:'#01405B', fontSize: "3rem", width: '100%'  }}/>
            </a>
        </div>

        <div className='w-20 h-20 flex items-center justify-center '>
            <a className='w-full' href="https://www.linkedin.com/in/anabel-ojeda/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ color:'#01405B', fontSize: "3rem", width: '100%'  }}/>
            </a>
        </div>


        </>
    )
}

export default ButtonsContact