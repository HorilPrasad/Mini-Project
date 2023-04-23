import { ServiceList } from '../ServicesList';
import '../../css/home.css'
import { Button } from '../button/Button';
import { Divider } from '../divider/Divider';
import Card from '../card/Card';
import ReviewCard from '../review/ReviewCard';
import { useEffect, useState } from 'react';
const Home = () => {

    const [feadback, setfeadback] = useState();

    const getFeadbackData = async () => {
        const res = await fetch('http://localhost:5000/api/feedback');

        if (res.status === 200) {
            const data = await res.json();
            setfeadback(data);
        }
    }
    useEffect(() => {
        getFeadbackData();
    }, []);


    return (
        <>
            <section className="hero">
                <div className="hero-left">
                    <h1>Service with care, satisfaction guaranteed.</h1>
                    <p>We are a certified company. We Provide the best services like <strong>carpainter, cleaning, electrician, plumber</strong> and more.</p>
                    <Button buttonSize="btn--large">Explore</Button>
                </div>
                <div className="hero-right">
                    <img src="https://www.freepnglogos.com/uploads/workers-png/workers-how-build-loyal-construction-staff-steps-5.png" alt="heor image" />
                </div>
            </section>
            {/* Services */}
            <div className="services-dividor">
                <Divider>Services</Divider>
            </div>
            <section className="services">
                {ServiceList.map((item, index) => {
                    return (
                        <Card key={index} service={item.title} imageUrl={item.imageUrl}></Card>
                    )
                })}
            </section>
            {/* <!-- About Us --> */}
            <div className="about-divider">
                <Divider>About Us</Divider>
            </div>
            <section className="about-us">
                <div className="about-left">
                    <div className="about-left-card1">
                        <Card type="card-only-image" imageUrl="https://c8.alamy.com/comp/2HX2KRK/cleaner-girl-working-2HX2KRK.jpg"></Card>
                    </div>
                    <div className="about-left-card">
                        <Card type="card-only-image" imageUrl="https://d340nzc93vsu6w.cloudfront.net/pubredesign/img/young-housewife-cleaning-with-rug-detergent-isolated.png"></Card>
                    </div>
                </div>

                <div className="about-right">
                    <h1>Why will you Choose our services?</h1>
                    <p className="about-tagline">Efficient, Friendly, Residential & Commercial Workers. Your Satisfaction is guaranteed</p>
                    <ul>
                        <li>
                            <img src="https://static.vecteezy.com/system/resources/previews/010/160/867/non_2x/check-mark-icon-sign-design-free-png.png" alt="check" height="20px" width="20px" />
                            <p>Easy to get help</p></li>
                        <li>
                            <img src="https://static.vecteezy.com/system/resources/previews/010/160/867/non_2x/check-mark-icon-sign-design-free-png.png" alt="check" height="20px" width="20px" />
                            <p>Saves your time</p></li>
                        <li>
                            <img src="https://static.vecteezy.com/system/resources/previews/010/160/867/non_2x/check-mark-icon-sign-design-free-png.png" alt="check" height="20px" width="20px" />
                            <p>Seamless Communication</p>
                        </li>
                        <li>
                            <img src="https://static.vecteezy.com/system/resources/previews/010/160/867/non_2x/check-mark-icon-sign-design-free-png.png" alt="check" height="20px" width="20px" />
                            <p>Provide professional workers</p>
                        </li>
                    </ul>
                    <Button buttonSize="btn--large">View Details</Button>
                </div>
            </section>

            <div className="review-divider">
                <Divider>User reviews</Divider>
            </div>

            <section className="review">
                {
                    feadback &&
                    feadback.slice(0, 3).map((item, index) => {
                        return (
                            <ReviewCard key={index} data={item} />
                        )
                    })


                }

            </section>
        </>
    );
};

export default Home;