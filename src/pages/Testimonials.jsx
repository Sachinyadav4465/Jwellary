import React from 'react';


const Testimonials = () => {

    const testimonialsData = [
        {
            id: 1,
            image: "https://i.pinimg.com/736x/a3/1b/2e/a31b2ee2bdf3a8c5e65f99d935e64055.jpg", // Placeholder images
            text: '"The diamond necklace I purchased is breathtaking. The quality and sparkle are unmatched."',
            name: "Sophia L.",
            location: "New York"
        },
        {
            id: 2,
            image: "https://i.pinimg.com/736x/3c/63/1b/3c631b97815217aaa9716d368feb990a.jpg",
            text: '"Aeternitas\' gold collection is truly regal. The craftsmanship on my bridal set is exquisite."',
            name: "Priya K.",
            location: "Dubai"
        },
        {
            id: 3,
            image: "https://i.pinimg.com/1200x/2c/e3/98/2ce398b6e5a2999258f2327bbbb72a73.jpg",
            text: '"I adore my pearl earrings. They are the epitome of elegance and grace. Thank you!"',
            name: "Isabella R.",
            location: "London"
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">

                <div className="row justify-content-center mb-5">
                    <div className="col-auto text-center">
                        <h2 className="testimonials-title fw-bold  ">Customer Testimonials</h2>
                    </div>
                </div>


                <div className="row g-4 justify-content-center">
                    {testimonialsData.map((item) => (
                        <div key={item.id} className="col-12 col-md-4 testimonial-card-wrapper">


                            <img
                                src={item.image}
                                alt={item.name}
                                className="testimonial-avatar"
                            />


                            <div className="custom-testimonial-card text-center h-100 d-flex flex-column justify-content-between">
                                <div>

                                    <div className="star-rating mb-2">
                                        ★★★★★
                                    </div>


                                    <p className="testimonial-text mb-4">
                                        {item.text}
                                    </p>
                                </div>


                                <div className="testimonial-author">
                                    {item.name}, <span className="fw-normal">{item.location}</span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;