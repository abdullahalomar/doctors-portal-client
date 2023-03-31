import React from 'react';
import qoutation from '../../assets/images/Mask Group 7@2x 1.png';
import Reviews from './Reviews';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people1.png';
import people3 from '../../assets/images/people1.png';

const Testimonials = () => {

    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            title: 'California',
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            id: 2,
            name: 'Winson Herry',
            title: 'California',
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            id: 3,
            name: 'Winson Herry',
            title: 'California',
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        },
    ];

    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold text-primary'>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <img src={qoutation} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review=> <Reviews
                    key={review.id}
                    review={review}
                    ></Reviews>)
                }
            </div>
        </div>
    );
};

export default Testimonials;