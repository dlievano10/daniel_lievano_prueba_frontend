// styles
import './style.scss';

const Footer = () => {
    return (
        <>
            <div className='footer-seccion'>
                <div>
                    <h2>Lorem ipsum</h2>
                    <p>
                        Eu consequat dolore aute commodo esse aliquip non qui incididunt culpa tempor sit laborum.
                    </p>
                </div>

                <div>
                    <h2>Lorem ipsum</h2>
                    <p>
                        Eu consequat dolore aute commodo esse aliquip non qui incididunt culpa tempor sit laborum.
                    </p>
                </div>

                <div>
                    <h2>Lorem ipsum</h2>
                    <p>
                        Eu consequat dolore aute commodo esse aliquip non qui incididunt culpa tempor sit laborum.
                    </p>
                </div>
            </div>
            <div className='footer-end'>
                <p>Culpa commodo cillum cillum minim anim culpa dolore. <a onClick={() => console.log('footer link')} className='link-footer'>Link here</a> exercitation veniam.</p>
            </div>
        </>
    )
}

export default Footer