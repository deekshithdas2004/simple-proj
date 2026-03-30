import React from 'react'
import RequirementForm from './RequirementForm.jsx'
import { useNavigate } from 'react-router-dom'

function Home() {
    const ourHighlights = [
        {
            image: "https://thumbs.dreamstime.com/b/seller-icon-trendy-logo-concept-white-background-e-commerce-payment-collection-suitable-use-web-apps-mobile-print-131189854.jpg",
            count: "1900",
            lable: "Sellers"
        },
        {
            image: "https://img.freepik.com/premium-vector/marine-logo-design-vector-with-modern-unique-style_231513-2127.jpg?w=2000",
            count: "3000",
            lable: "Customers"
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/021/351/448/original/customer-icon-for-your-website-design-logo-app-ui-free-vector.jpg",
            count: "4000",
            lable: "Enquiry"
        },
        {
            image: "https://thumbs.dreamstime.com/b/customer-support-enquiry-icon-blue-color-design-use-commercial-purposes-print-media-web-any-type-projects-vector-eps-254322470.jpg",
            count: "4444",
            lable: "Feedback"
        },
    ];

    const navigateTo=useNavigate();


    return (
        <div>
            <div className="homeSection1">
                <p className='yourSolution' >Your One Stop Solution</p>
                <p className='marineServices' >For All Merine Services</p>
                <button className='createReqbtn' onClick={()=>{
                    navigateTo("/create-request")
                }} >Create a Requistion</button>
            </div>

            <h1 className='highlightsTitle'>Our Highlights</h1>
            <div className="homeSection2">
                {
                    ourHighlights.map((j) => {
                        return <div className="highlightcard">
                            <img src={j.image} alt="highlightimg" width={60} height={60} />
                            <p className="count">{j.count}</p>
                            <p className="lable">{j.lable}</p>
                        </div>
                    })
                }
            </div>

            <h1 className="tellUstext">Tell Us what you are looking for ?</h1>
            <div className="homeSection3">
                <div className="formSection1">
                    <h1 className="textConnect">Connect with our Team</h1>
                    <div className="shipSection"></div>
                    <div className="points">
                        <p className='journey' >
                            Lorem ipsum dolor sit.Lorem ipsum dolor sit.
                            ipsum dolor sit Lorem ipsum dolor siy.
                            Lorem, ipsum dolor.
                            </p>
                        <p className='journey' >
                            Lorem ipsum dolor sit.Lorem ipsum dolor sit.
                            Lorem ipsum dolor sit. Lorem ipsum dolor
                            consectetur adipisicing.
                            </p>
                        <p className='journey' >
                            Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum
                            dolor sit Lorem ipsum dolor sit
                            amet consectetur adipisicing elit.
                            </p>
                    </div>
                </div>
                <div className="formSection2">
                    <RequirementForm />
                </div>
            </div>
        </div>
    )
}

export default Home
