import React from 'react'

function ContactUs() {

    const contactCard = [
        {
            image: "https://tse2.mm.bing.net/th/id/OIP.aFPTtZ0Co3u_TpDL1scJAwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            contactAdd: "Cantact us by call",
            contactLoction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            image: "https://tse1.mm.bing.net/th/id/OIP.QytRdi7tMkNLM6eIsGh-4gHaHx?rs=1&pid=ImgDetMain&o=7&rm=3",
            contactAdd: "Contact us with email",
            contactLoction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/1275/1275303.png",
            contactAdd: "Address",
            contactLoction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
    ]


    return (
        <div>
            <div className="contactheader">
                <p className='contactText'>CONTACT US</p>
                <p className='trust'>Trusted  <span className='partner'>Partner</span></p>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla nemo voluptates tempora dolor
                    aliquam dolore eius voluptatum a culpa nam!
                </p>
            </div>
            <br />

            <div className="contactcardWrapper">

                {
                    contactCard?.map((i)=>{
                        return(
                            <div className="conatctCard">
                                <img src={i.image} alt="conatct-img" width={40} height={40} />
                                <p>{i.contactAdd}</p>
                                <p className='contactLocation' >{i.contactLoction}</p>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}

export default ContactUs
