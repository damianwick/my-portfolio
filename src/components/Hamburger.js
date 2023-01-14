import './Hamburger.css'

export default function Hamburger({ isActive }) {
    return (
        <>
            <div id='hamburger-menu'>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <style jsx="true">{`
                @media only screen and (max-width: 1024px) {
                    #hamburger span {
                        width: ${isActive ? '25px' : '40px'}
                    }
                    #hamburger-menu span:nth-child(2) {
                        opacity: ${isActive ? '0' : '1'};
                    }
                    #hamburger-menu span:nth-child(3) {
                        transform: ${isActive ? 'rotate(45deg) translateX(10px)' : 'translateY(20px)'};
                    }
                    #hamburger-menu span:nth-child(1) {
                        transform: ${isActive ? 'rotate(-45deg) translateY(10px)' : ''};
                    }
                }
            `}
            </style>
        </>
    )
}