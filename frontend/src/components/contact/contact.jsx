import React from 'react';


class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount(){
    //     window.addEventListener('scroll',this.toggleNavbar)
    // }

    // componentWillUnmount() {
    //     window.$nv.className = `navbar`
    //     window.$ft.className = `footer-container`
    // }

    // toggleNavbar=()=>{
    //     window.$nv = document.querySelector('.navbar');
    //     window.$ft = document.querySelector('.footer-container');
    //     window.$nv.className = `navbar white`
    //     window.$ft.className = `footer-container white`
    // }

    render() {
        return (
            <div className='about-container'>
                <div className='about-box'>
                    <div className='card-cont-1'>

                        <div className='card card1'>
                           <div className='name-box box1'>
                                <div className='name1'>Amgaa</div>
                                <div className='name2'>Khosbayar</div>
                           </div>
                            <div className='social-box'>
                                <div className='info-box'>
                                    <div className='one'>Role :</div> 
                                    <div className='two'>Flex-Engineer</div>
                                </div>
                                <div className='info-box'>
                                    <div className='one'>Favorite Food : </div>
                                    <div className='two'>Carbonara</div>
                                </div>
                                <div className='portfolio social'>
                                    <a href="https://amgaa9193.github.io/amgaakhosbayar.github.io/" rel='noopener noreferrer' target="_blank">Portfolio</a></div>
                                <div className='github social'><a href="https://github.com/Amgaa9193" rel='noopener noreferrer' target="_blank">Github</a></div>
                                <div className='linkedin social'><a href="https://github.com/Amgaa9193" rel='noopener noreferrer' target="_blank">LinkedIn</a></div>
                                <div className='angellist social'><a href="https://angel.co/u/amgaa-khosbayar" rel='noopener noreferrer' target="_blank">AngelList</a></div>
                                
                            </div>
                        </div>

                        <div className='card card2'>
                            <div className='name-box box2'>
                                <div className='name1'>Christopher</div>
                                <div className='name2'>C Fleming</div>
                            </div>
                            <div className='social-box'>
                                <div className='info-box'>
                                    <div className='one'>Role :</div>
                                    <div className='two'>Flex-Engineer</div>
                                </div>
                                <div className='info-box'>
                                    <div className='one'>Favorite Food : </div>
                                    <div className='two'>Soba noodles</div>
                                </div>
                                <div className='portfolio social'>
                                    <a href="https://christophercfleming.github.io/" rel='noopener noreferrer' target="_blank">Portfolio</a></div>
                                <div className='github social'><a href="https://github.com/ChristopherCFleming" rel='noopener noreferrer' target="_blank">Github</a></div>
                                <div className='linkedin social'><a href="https://www.linkedin.com/in/christophercfleming/" rel='noopener noreferrer' target="_blank">LinkedIn</a></div>
                                <div className='angellist social'><a href="https://angel.co/u/christopher-c-fleming" rel='noopener noreferrer' target="_blank">AngelList</a></div>

                            </div>
                        </div>
                    </div>
                    <div className='card-cont-2'>
                        <div className='card card3'>
                            <div className='name-box box3'>
                                <div className='name1'>Nikolay</div>
                                <div className='name2'>Shatalov</div>
                            </div>
                            <div className='social-box'>
                                <div className='info-box'>
                                    <div className='one'>Role :</div>
                                    <div className='two'>Frontend-Engineer</div>
                                </div>
                                <div className='info-box'>
                                    <div className='one'>Fav Food : </div>
                                    <div className='two'>Russian Dumplings</div>
                                </div>
                                <div className='portfolio social'>
                                    <a href="https://nikolayshatalov.com/" rel='noopener noreferrer' target="_blank">Portfolio</a></div>
                                <div className='github social'><a href="https://github.com/Nikoobox" rel='noopener noreferrer' target="_blank">Github</a></div>
                                <div className='linkedin social'><a href="https://www.linkedin.com/in/nikolay-shatalov-0963b28b/" rel='noopener noreferrer' target="_blank">LinkedIn</a></div>
                                <div className='angellist social' rel='noopener noreferrer' target="_blank"><a href="https://angel.co/u/nikolay-shatalov" >AngelList</a></div>

                            </div>
                        </div>

                        <div className='card card4'>
                            <div className='name-box box4'>
                                <div className='name1'>Italo</div>
                                <div className='name2'>Lujan</div>
                                <div className='name2'>Pedreschi</div>
                            </div>
                            <div className='social-box'>
                                <div className='info-box'>
                                    <div className='one'>Role :</div>
                                    <div className='two'>Backend-Engineer</div>
                                </div>
                                <div className='info-box'>
                                    <div className='one'>Favorite Food : </div>
                                    <div className='two'>Lasagna</div>
                                </div>
                                <div className='portfolio social'>
                                    <a href="https://italolujanpedreschi.github.io/" rel='noopener noreferrer' target="_blank">Portfolio</a></div>
                                <div className='github social'><a href="https://github.com/ItaloLujanPedreschi" rel='noopener noreferrer' target="_blank">Github</a></div>
                                <div className='linkedin social'><a href="https://www.linkedin.com/in/italo-lujan-pedreschi-98169373/" rel='noopener noreferrer' target="_blank">LinkedIn</a></div>
                                <div className='angellist social'><a href="https://angel.co/u/italo-lujan-pedreschi" >AngelList</a></div>
                            </div>
                        </div>
                    </div>

                </div>
                  
            </div>
        );
    }
}

export default Contact;