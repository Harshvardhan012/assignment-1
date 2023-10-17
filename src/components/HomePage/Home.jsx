import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.jpeg";
import h1 from "../img/photo_home.png"
import h2 from "../img/home_img2.jpeg"

const Home = () => {

    let val = [
        {
            "id": 1,
            "name": "Michael Jackson",
            "image": "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80",
            "intro": "Expertise in accounting and finance, specializing in financial statements and auditing.",
            "rating": 4.8,
            "reviewCount": 89,
            "taskComplexity": "Basic to complex tasks",
            "price": "€4,370",
            "deliveryTime": "Delivers within 2 days",
            "testimonial": {
                "text": "Exceptional service in managing personal finances and deep understanding of financial markets.",
                "author": "John Doe"
            },
            "about": {
                "from": "INDIA",
                "partnerSince": 2011,
                "averageResponseTime": "30 minutes",
                "description": "Professional Chartered Accountant offering diverse accounting and financial services.",
                "services": ["Financial accounting", "Bookkeeping", "Balance Sheets"],
                "benefits": ["One-time delivery", "24/7 support"]
            }
        },
        {
            "id": 2,
            "name": "Lucy Brown",
            "image": "https://images.unsplash.com/photo-1556746818-17b142980bb2?fit=crop&w=800&q=80",
            "intro": "Dedicated accountant with expertise in taxation and corporate finance.",
            "rating": 4.5,
            "reviewCount": 75,
            "taskComplexity": "Intermediate to advanced tasks",
            "price": "€3,900",
            "deliveryTime": "Delivers within 3 days",
            "testimonial": {
                "text": "Lucy has been an invaluable asset to our company's financial planning.",
                "author": "Alice Martin"
            },
            "about": {
                "from": "USA",
                "partnerSince": 2013,
                "averageResponseTime": "45 minutes",
                "description": "Committed to delivering top-notch accounting services to businesses and individuals.",
                "services": ["Taxation", "Corporate Finance", "Auditing"],
                "benefits": ["Error-free documentation", "Expert consultations"]
            }
        },
        {
            "id": 3,
            "name": "Robert Smith",
            "image": "https://images.unsplash.com/photo-1517433456452-f9633a875fbc?fit=crop&w=800&q=80",
            "intro": "Experienced in overseeing financial management of medium to large enterprises.",
            "rating": 4.6,
            "reviewCount": 65,
            "taskComplexity": "Advanced financial tasks",
            "price": "€4,500",
            "deliveryTime": "Delivers within 4 days",
            "testimonial": {
                "text": "Robert's strategic approach to financial management has been pivotal to our company's success.",
                "author": "James Walker"
            },
            "about": {
                "from": "UK",
                "partnerSince": 2010,
                "averageResponseTime": "25 minutes",
                "description": "Specialized in strategic financial planning and corporate finance.",
                "services": [
                    "Corporate finance",
                    "Strategic planning",
                    "Asset management"
                ],
                "benefits": [
                    "Comprehensive financial review",
                    "Customized financial solutions"
                ]
            }
        },
        {
            "id": 4,
            "name": "Anita Patel",
            "image": "https://images.unsplash.com/photo-1563990112129-a9a72c04f5d7?fit=crop&w=800&q=80",
            "intro": "Passionate about helping startups navigate the complexities of financial compliance.",
            "rating": 4.9,
            "reviewCount": 95,
            "taskComplexity": "Basic to intermediate tasks",
            "price": "€3,900",
            "deliveryTime": "Delivers within 2 days",
            "testimonial": {
                "text": "Anita's insights have been invaluable to our startup. Her expertise in financial compliance is unmatched.",
                "author": "Raj Mehta"
            },
            "about": {
                "from": "INDIA",
                "partnerSince": 2018,
                "averageResponseTime": "20 minutes",
                "description": "Focuses on financial compliance and advisory services for startups.",
                "services": ["Financial compliance", "Advisory services", "Tax planning"],
                "benefits": ["Startup-friendly", "Tailored financial strategies"]
            }
        },
        {
            "id": 5,
            "name": "Johnathan Lee",
            "image": "https://images.unsplash.com/photo-1556157382-97eda2d62296?fit=crop&w=800&q=80",
            "intro": "Expert in streamlining business operations with financial acumen.",
            "rating": 4.5,
            "reviewCount": 72,
            "taskComplexity": "Intermediate tasks",
            "price": "€4,200",
            "deliveryTime": "Delivers within 3 days",
            "testimonial": {
                "text": "Johnathan's ability to marry financial expertise with operational efficiency has transformed our business.",
                "author": "Linda Kim"
            },
            "about": {
                "from": "CANADA",
                "partnerSince": 2012,
                "averageResponseTime": "35 minutes",
                "description": "Specializing in operational finance and business transformation.",
                "services": [
                    "Operational finance",
                    "Business strategy",
                    "Risk assessment"
                ],
                "benefits": ["Business transformation", "Operational efficiency"]
            }
        },
        {
            "id": 6,
            "name": "Sophia Fernandez",
            "image": "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?fit=crop&w=800&q=80",
            "intro": "Champion in guiding SMEs through their financial journeys with transparency and integrity.",
            "rating": 4.8,
            "reviewCount": 88,
            "taskComplexity": "Basic to advanced tasks",
            "price": "€4,250",
            "deliveryTime": "Delivers within 2 days",
            "testimonial": {
                "text": "Sophia's consultative approach and deep knowledge have helped our business thrive financially.",
                "author": "Carlos Rodriguez"
            },
            "about": {
                "from": "SPAIN",
                "partnerSince": 2016,
                "averageResponseTime": "28 minutes",
                "description": "Dedicated to offering top-tier financial consulting for small to medium enterprises.",
                "services": ["Financial consulting", "SME advisory", "Growth strategies"],
                "benefits": ["Transparent communication", "Integrity-driven solutions"]
            }
        },
        {
            "id": 7,
            "name": "William O'Connell",
            "image": "https://images.unsplash.com/photo-1542751371-6533d14d705f?fit=crop&w=800&q=80",
            "intro": "Master of tax strategy and international finance regulations.",
            "rating": 4.6,
            "reviewCount": 78,
            "taskComplexity": "Advanced tasks",
            "price": "€5,000",
            "deliveryTime": "Delivers within 4 days",
            "testimonial": {
                "text": "William's strategies saved us from major tax implications during our international expansion.",
                "author": "Fiona Gallagher"
            },
            "about": {
                "from": "IRELAND",
                "partnerSince": 2009,
                "averageResponseTime": "32 minutes",
                "description": "Expertise in handling complex international finance and tax scenarios.",
                "services": [
                    "Tax strategy",
                    "International finance",
                    "Regulatory compliance"
                ],
                "benefits": ["Global finance solutions", "Tax efficiency"]
            }
        },
        {
            "id": 8,
            "name": "Nina Johansson",
            "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?fit=crop&w=800&q=80",
            "intro": "Specializes in financial forensics and fraud examination.",
            "rating": 4.9,
            "reviewCount": 92,
            "taskComplexity": "Advanced forensic tasks",
            "price": "€5,150",
            "deliveryTime": "Delivers within 5 days",
            "testimonial": {
                "text": "Nina's forensic skills have been instrumental in protecting our firm from potential financial frauds.",
                "author": "Marcus Blom"
            },
            "about": {
                "from": "SWEDEN",
                "partnerSince": 2013,
                "averageResponseTime": "26 minutes",
                "description": "Focused on protecting businesses through financial forensics and fraud examination.",
                "services": [
                    "Financial forensics",
                    "Fraud examination",
                    "Risk management"
                ],
                "benefits": ["Financial protection", "Fraud prevention"]
            }
        },
        {
            "id": 9,
            "name": "Oliver Bernard",
            "image": "https://images.unsplash.com/photo-1579637305941-57a5d3807b1d?fit=crop&w=800&q=80",
            "intro": "Dedicated to empowering non-profits with financial strategies and sustainability.",
            "rating": 4.7,
            "reviewCount": 85,
            "taskComplexity": "Intermediate to advanced tasks",
            "price": "€4,800",
            "deliveryTime": "Delivers within 3 days",
            "testimonial": {
                "text": "Oliver's insights have optimized our non-profit's financial health and long-term sustainability.",
                "author": "Clara Mathews"
            },
            "about": {
                "from": "AUSTRALIA",
                "partnerSince": 2017,
                "averageResponseTime": "30 minutes",
                "description": "Passionate about bolstering the financial backbone of non-profit organizations.",
                "services": [
                    "Non-profit finance",
                    "Sustainability planning",
                    "Grants management"
                ],
                "benefits": ["Enhanced sustainability", "Optimized financial health"]
            }
        },
        {
            "id": 10,
            "name": "Isabella Martinez",
            "image": "https://images.unsplash.com/photo-1588392382834-a891154bca4d?fit=crop&w=800&q=80",
            "intro": "Expert in mergers, acquisitions, and corporate restructuring with a decade of experience.",
            "rating": 4.8,
            "reviewCount": 90,
            "taskComplexity": "Complex corporate tasks",
            "price": "€6,000",
            "deliveryTime": "Delivers within 6 days",
            "testimonial": {
                "text": "Isabella played a pivotal role in our successful merger, showcasing exemplary financial acumen.",
                "author": "Rafael Vega"
            },
            "about": {
                "from": "MEXICO",
                "partnerSince": 2014,
                "averageResponseTime": "28 minutes",
                "description": "Specializes in navigating the financial complexities of mergers and acquisitions.",
                "services": [
                    "Mergers and acquisitions",
                    "Corporate restructuring",
                    "Financial strategy"
                ],
                "benefits": ["Strategic financial guidance", "Efficient restructuring"]
            }
        }
    ];

    let navigate = useNavigate();

    let [text, settext] = useState("")
    const [details, setdetails] = useState(val);

    const onChange = (val) => {
        settext(val);
    }

    const check = (e) => {
        e.preventDefault();
        onChange(e.target.value);
    }


    const fun = (e) => {
        {
            if(text)
            {
                let found = 0;
                details.map((search) => {
                    if(search.name.toLowerCase() === text.toLowerCase())
                    {
                        found = 1;
                        navigate(`id/${search.id}`);
                    }
                })
                if(found === 0)
                {
                    settext("");
                    alert(`${text.toUpperCase()} does not exist in database`)
                }
            }
            else
                alert("Input Field is Empty");
        }
    }
    return (
        <>
            {/* Other Content */}
            <div className='sec_2'>
                {/* left part */}
                <div className='left'>
                    {/* Main text */}
                    <div>
                        <p className='heading'>Find <a style={{ color: '#bf00ff' }}>Partners</a> (CAs)<br />available online</p>
                    </div>
                    {/* Desc text */}
                    <div>
                        <p style={{ fontSize: '18px', marginBottom: '30px' }}><b>CONNECT</b> with us where your services are listed and visible to myriad of businesses seeking CA's for compliance support</p>
                    </div>

                    {/* Search Field */}
                    <div>
                        <div className="input-group mb-3 d-flex">
                            <div className="d-flex serachsection ">
                                <input
                                    type="text"
                                    placeholder="Search by name"
                                    style={{ padding: '15px', borderRadius: '7px', width: "350px" }}
                                    value={text}
                                    onChange={check}
                                    className="searchtext"
                                    name="search"
                                    autoComplete="off"
                                />
                                <button
                                    type="button"
                                    id="search"
                                    onClick={fun}
                                    style={{ width: '150px', marginLeft: '-10px' }}
                                    className="btn btn-primary me-4"
                                > Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* search results */}
                <div>
                    {text && (
                        <ul className="search_result list-group">
                            {details
                                .filter((search) =>
                                    search.name.toLowerCase().includes(text.toLowerCase())
                                )
                                .map((search, k) => (
                                    <Link
                                        to={`id/${search.id}`}
                                        style={{ textDecoration: "none" }}
                                        key={k}
                                    >
                                        <li className="list_item list-group-item ">
                                            {search.name.substring(0, 50)}
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    )}
                </div>

                {/* Right part */}
                <div className='right'>
                    <div>
                        <img src={p1} className='card-img pic1' alt="" />
                    </div>
                    <div>
                        <img src={p2} className='card-img pic2' alt="" />
                    </div>
                    <div>
                        <img src={p3} className='card-img pic3' alt="" />
                    </div>
                </div>
            </div>

            {/* Join us Section */}
            <div>
                <div className='join-us'>
                    <h1 className='heading'> <b>Want to <a style={{ color: '#bf00ff' }}>Join</a> Us?</b></h1>
                    <p>To remain with us, it is essaential that you diligently follow the step provided</p>
                </div>

                {/* Cards */}
                <div>
                    <div className='container recommend'>
                        <div className="card-group">
                            <div className="card ">
                                <span className='badge'>1<span className='badge-sm'>st</span></span>
                                <div className="card-body">
                                    <div className='card_text'>
                                        <h5 className="card-title"><b>Commencement of business</b></h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">invested shareholder must confirm payment and office address</h6>
                                    </div>
                                    <div className='d-flex card-home'>
                                        <div>
                                            <h3 style={{ color: 'rgb(18, 157, 238)', fontSize: '18px' }}><b>Due Date</b></h3>
                                            <h6 style={{ fontSize: '13px' }}>Within 180</h6>
                                            <h6 style={{ fontSize: '13px' }}>Days</h6>
                                        </div>
                                        <div className='ms-5 ps-4'>
                                            <h3 style={{ color: 'rgba(249, 95, 72, 0.872)', fontSize: '18px' }}><b>Penalty fees</b></h3>
                                            <h6 style={{ fontSize: '13px' }}><b>₹50,000</b> for the company</h6>
                                            <h6 style={{ fontSize: '13px' }}><b>₹50,000</b>/day the directors</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card ms-4 ">
                                <span className='badge'>2<span className='badge-sm'>nd</span></span>

                                <div className="card-body">
                                    <div className='card_text'>
                                        <h5 className="card-title"><b>Auditor Appointment</b></h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Company informs new auditor and sumbits ADT.1 form to ROC.</h6>
                                    </div>
                                    <div className='d-flex card-home'>
                                        <div>
                                            <h3 style={{ color: 'rgb(18, 157, 238)', fontSize: '18px' }}><b>Due Date</b></h3>
                                            <h6 style={{ fontSize: '13px' }}>Within 30</h6>
                                            <h6 style={{ fontSize: '13px' }}>Days</h6>
                                        </div>
                                        <div className='ms-5 ps-4'>
                                            <h3 style={{ color: 'rgba(249, 95, 72, 0.872)', fontSize: '18px' }}><b>Penalty fees</b></h3>
                                            <h6 style={{ fontSize: '13px' }}><b>₹300</b> per month.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card ms-4 ">
                                <span className='badge'>3<span className='badge-sm'>rd</span></span>

                                <div className="card-body">
                                    <div className='card_text'>
                                        <h5 className="card-title"><b>DIN eKYC</b></h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Directors share personal information for identification & verification</h6>
                                    </div>
                                    <div className='d-flex card-home'>
                                        <div>
                                            <h3 style={{ color: 'rgb(18, 157, 238)', fontSize: '18px' }}><b>Due Date</b></h3>
                                            <h6 style={{ fontSize: '13px' }}>Every Year</h6>
                                        </div>
                                        <div className='ms-5 ps-4'>
                                            <h3 style={{ color: 'rgba(249, 95, 72, 0.872)', fontSize: '18px' }}><b>Penalty fees</b></h3>
                                            <h6 style={{ fontSize: '13px' }}><b>₹5000</b> one time</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-group mt-5 ">
                            <div className="card ">
                                <span className='badge'>4<span className='badge-sm'>th</span></span>
                                <div className="card-body">
                                    <div className='card_text'>
                                        <h5 className="card-title"><b>DPT-3</b></h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            Compaines report money taken from people to ROC; auditors confirm details</h6>
                                    </div>
                                    <div className='d-flex card-home'>
                                        <div>
                                            <h3 style={{ color: 'rgb(18, 157, 238)', fontSize: '18px' }}><b>Due Date</b></h3>
                                            <h6 style={{ fontSize: '13px' }}>Within 30</h6>
                                            <h6 style={{ fontSize: '13px' }}>Days</h6>
                                        </div>
                                        <div className='ms-5 ps-4'>
                                            <h3 style={{ color: 'rgba(249, 95, 72, 0.872)', fontSize: '18px' }}><b>Penalty fees</b></h3>
                                            <h6 style={{ fontSize: '13px' }}><b>₹300</b> per month.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card ms-4 ">
                                <span className='badge'>5<span className='badge-sm'>th</span></span>
                                <div className="card-body">
                                    <div className='card_text'>
                                        <h5 className="card-title"><b>MCA Form AOC-4</b></h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            it's like an offical report card for a company's documents</h6>
                                    </div>
                                    <div className='d-flex card-home'>
                                        <div>
                                            <h3 style={{ color: 'rgb(18, 157, 238)', fontSize: '18px' }}><b>Due Date</b></h3>
                                            <h6 style={{ fontSize: '13px' }}>On or Before 30th November</h6>
                                        </div>
                                        <div className='ms-5 ps-4'>
                                            <h3 style={{ color: 'rgba(249, 95, 72, 0.872)', fontSize: '18px' }}><b>Penalty fees</b></h3>
                                            <h6 style={{ fontSize: '13px' }}><b>₹200</b> per day(No upper limit)*</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card ms-4 ">
                                <span className='badge'>6<span className='badge-sm'>th</span></span>
                                <div className="card-body">
                                    <div className='card_text'>
                                        <h5 className="card-title"><b>MCA Form MGT-7</b></h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            Compaines must annually report activies and finances to the registar.</h6>
                                    </div>
                                    <div className='d-flex card-home'>
                                        <div>
                                            <h3 style={{ color: 'rgb(18, 157, 238)', fontSize: '18px' }}><b>Due Date</b></h3>
                                            <h6 style={{ fontSize: '13px' }}>On or Before 30th November</h6>
                                        </div>
                                        <div className='ms-5 ps-4'>
                                            <h3 style={{ color: 'rgba(249, 95, 72, 0.872)', fontSize: '18px' }}><b>Penalty fees</b></h3>
                                            <h6 style={{ fontSize: '13px' }}><b>₹200</b> per day(No upper limit)*</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className='my-4'>
                            * For from AOC-4 and MGT-7, you will be charged penalty of ₹200 <b>every day</b> until you file the form. There
                            is no maximum penalty amount. So, if you dont't fill the form for a year, you will owe ₹73,000 per form
                        </p>

                    </div>
                </div>
            </div >

            {/* Last section */}
            <div className='d-flex'>
                {/* Left part */}
                <div className='sec3-left'>
                    <div className='sec3-heading'>
                        <h1 className='heading'> <b><a style={{ color: '#bf00ff' }}>All-in-One</a> platform<p>that Makes Easier</p></b></h1>
                        <p style={{ width: '24rem', marginBottom: '35px' }}>We are more than a platform; We are your Success partner. Discover our services to achieve your business and educaional goals</p>
                        {/* images part */}

                        <div className='d-flex'>
                            <div className='d-flex'>
                                <i className="fa-solid fa-magnifying-glass fa-2xl pt-4 me-4" style={{ color: '#21e0e4' }}></i>
                                <p>
                                    <span><b>SEARCH </b>for </span>vital<br /> company<br /> information
                                </p>
                            </div>
                            <div>
                                <div className='d-flex ms-5'>
                                    <i className="fa-solid fa-2xl fa-handshake pt-4 me-4" style={{ color: '#21e0e4' }}></i>
                                    <p>
                                        <span><b>Connect </b>with the </span><br /> resource to meet <br />your business needs
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex'>
                                <i className="fa-solid fa-book fa-2xl pt-4 me-4" style={{ color: '#21e0e4' }}></i>
                                <p>
                                    <span><b>RESEARCH </b>and </span><br />generate reports <br />that drive growth
                                </p>
                            </div>
                            <div>
                                <div className='d-flex ms-5'>
                                    <i className="fa-solid fa-2xl fa-graduation-cap pt-4 me-4" style={{ color: '#21e0e4' }}></i>
                                    <p>
                                        <span><b>ACADEMY </b>to give you </span><br /> the skills for success <br />in your career
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right part */}
                <div className='d-flex'>
                    <div className='message'>
                        <p className='mb-4 px-4'><span className='pink-mess'>Hey, check out loreumipsum services.</span></p>
                        <p className='mt-4'><span className='pink-mess'>I learned from their video, got my first job.</span></p>
                        <p className='mt-4 mb-5'><span className='pink-mess'>You won't be disappoint with their services.</span></p>
                        <p className='mt-5'><span className='blue-mess'>I got perfect analysis report form them too.</span></p>
                        <p className='mt-4' style={{ marginLeft: '175px' }}><span className='blue-mess'>Oh,that's great.</span></p>
                        <img src={h2} className='imgh2' alt="" />
                    </div>
                    <div className='sec-1'>
                        <img src={h1} className='imgh1' alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
