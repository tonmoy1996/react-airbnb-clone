import React from 'react';
import '../css/home.css';
import Card from '../components/Card';
import Banner from '../components/Banner';
function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='home_section'>
        <Card
          src='https://images.pexels.com/photos/4247768/pexels-photo-4247768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Home Sweet'
          price='£120/night'
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
        />
        <Card
          src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Home Sweet'
          price='£120/night'
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
        />
        <Card
          src='https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Home Sweet'
          price='£120/night'
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
        />
      </div>
      <div className='home_section'>
        <Card
          src='https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Home Sweet'
          price='£120/night'
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <Card
          src='https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Home Sweet'
          price='£120/night'
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <Card
          src='https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Home Sweet'
          price='£120/night'
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </div>
    </div>
  );
}

export default Home;
