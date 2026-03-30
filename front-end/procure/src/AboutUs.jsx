import React from 'react'

function AboutUs() {
    const featureCard=[
        {
            image:"https://www.shutterstock.com/image-vector/growth-leaves-logo-template-260nw-1151853227.jpg",
            title:"Real time Support",
            content:"We are a dedicated and innovative company committed to delivering high-quality"
        },
        {
            image:"https://thumbs.dreamstime.com/b/minimalist-depiction-graph-line-rising-simple-blocks-symbolizing-steady-progress-business-345901058.jpg",
            title:"AI Based Solutions",
            content:"We are a dedicated and innovative company committed to delivering high-quality"
        },
        {
            image:"https://static.vecteezy.com/system/resources/previews/015/742/223/original/trend-up-line-graph-growth-progress-detail-infographic-chart-diagram-suitable-for-business-data-and-market-analysis-line-graph-rising-up-and-grow-business-day-by-day-concept-free-vector.jpg",
            title:"Advanced Dashboards",
            content:"We are a dedicated and innovative company committed to delivering high-quality"
        },
        {
            image:"https://img.freepik.com/premium-vector/graph-chart-icon-logo-design-vector-template-illustration_929446-362.jpg?w=2000",
            title:"High Security",
            content:"We are a dedicated and innovative company committed to delivering high-quality"
        }
    ];


    return (
        <div>

        <div className='aboutUsWrapper'>
            <div className='textContainer'>
                <p className='textOur'>
                    Our <span className='vision'>Vision</span>
                </p>
                <p>We are a dedicated and innovative company committed to delivering high-quality solutions that help businesses grow and succeed. With a strong focus on creativity, reliability, and customer satisfaction, we strive to provide services that meet the evolving needs of our clients. Our team works with passion and expertise to ensure every project is handled with care and precision. We believe in building long-term relationships by offering value-driven results and maintaining transparency in everything we do. Our goal is to empower our clients with effective solutions that make a lasting impact in today’s competitive world.</p>
            </div>
            <div className='imgContainer'>
                <img src="https://tse4.mm.bing.net/th/id/OIP.sic51r086L_9q9shGZJb-AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="shiping" width={300} height={250} style={{ borderRadius: "10px" }} />
            </div>
        </div>

        <div className='aboutUsWrapper'>
            <div className='imgContainer'>
                <img src="https://images.pexels.com/photos/843085/pexels-photo-843085.jpeg?cs=srgb&dl=pexels-george-desipris-843085.jpg&fm=jpg"
                    alt="shiping" width={300} height={250} style={{ borderRadius: "10px" }} />
            </div>
            <div className='textContainer'>
                <p className='textOur'>
                    What <span className='vision'>We Offer</span>
                </p>
                <p>Welcome to where innovation, quality, and customer satisfaction come together to deliver exceptional results. We are dedicated to providing reliable and effective solutions that help businesses grow and succeed in today’s fast-paced and competitive environment. Our team of skilled professionals works with passion and commitment to understand your needs and transform your ideas into reality. We focus on delivering services that are not only efficient but also tailored to meet your specific goals.
                    we believe in building strong and lasting relationships with our clients by maintaining transparency, trust, and consistent communication. Every project we undertake is handled with care, attention to detail, and a commitment to excellence. Whether you are a small startup or an established organization, we strive to provide value-driven solutions that make a meaningful impact.
                    We are always ready to support you at every step of your journey. Partner with us and experience a professional approach that prioritizes your success and helps you achieve your business objectives with confidence.</p>
                </div>
        </div>

        <div className="fratures">
            <p className="featureTitle">Features</p>
            <div className="featureBoxesWrapper">

                {
                    featureCard.map((ele)=>{
                        return <div className='Card'>
                            <img src={ele.image} alt="img" width={44} height={44} />
                            <p className='cardTitle'>{ele.title}</p>
                            <p className='cardContent' >
                                {ele.content}
                                </p>
                        </div>
                    })
                }

            </div>
        </div>

        </div>
    )
}

export default AboutUs;
