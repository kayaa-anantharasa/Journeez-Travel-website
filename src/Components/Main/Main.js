import React from 'react'
import './Main.css';
import img from '../../Assets/1.jpg'
import img1 from '../../Assets/2.jpg'
import img2 from '../../Assets/3.jpg'
import img3 from '../../Assets/4.jpg'
import img4 from '../../Assets/5.jpg'
import img5 from '../../Assets/6.jpg'
import img6 from '../../Assets/7.jpg'
import img7 from '../../Assets/8.jpg'


import {GrFormLocation} from 'react-icons/gr'
import {BsClipboardCheck} from 'react-icons/bs'




 const Data = [
  {
    id:1,
    imgSrc:img,
    destTitle:'Sigiriya',
    location:'Matale',
    grade:'g',
    fees:'$145',
    description:'It is also known as the Lion Rock, due to the presence of a lion statue that once stood at the entrance of the fortress.Sigiriya was built by King Kasyapa in the 5th century AD as a palace complex, and it also served as a fortress. '
  },

  {
    id:2,
    imgSrc:img1,
    destTitle:' Udawalawe National Park',
    location:'Udawalawe',
    grade:'g',
    fees:'$455',
    description:'Udawalawe National Park is a popular wildlife reserve located in the southern part of Sri Lanka. The park covers an area of approximately 308 square kilometers. The park is home to a wide range of animal species, including elephants, leopards, sambar deer, water buffalo, and spotted deer. It also has a large bird population with over 200 species recorded in the area.'
  },

  {
    id:3,
    imgSrc:img2,
    destTitle:'Little Adams Peak',
    location:'Ella',
    grade:'g',
    fees:'$155',
    description:'Little Adams Peak is a popular hiking destination located in Ella, Sri Lanka. It is named after its larger counterpart, Adams Peak, which is a sacred mountain in Sri Lanka. Little Adams Peak is a relatively easy hike compared to Adams Peak, making it accessible to most people.'
  },

  {
    id:4,
    imgSrc:img3,
    destTitle:'Royal Botanical Gardens',
    location:'Kandy',
    grade:'g',
    fees:'$55',
    description:'There is an amazing colony of fruit bats in the trees by the river.'
  },

  {
    id:5,
    imgSrc:img4,
    destTitle:'Pidurangala Rock',
    location:'Sigiriya',
    grade:'g',
    fees:'455',
    description:'Pidurangala Rock is a popular tourist attraction located near Sigiriya, Sri Lanka. It is a large rock formation that rises 200 meters above the surrounding landscape and offers stunning views of the surrounding countryside.'
  },

  {
    id:6,
    imgSrc:img5,
    destTitle:'Nine Arches Bridge',
    location:'Ella',
    grade:'g',
    fees:'$455',
    description:'The Nine Arch Bridge is an ingenious railway construction built between the railways station Ella and Demodara.'
  },

  {
    id:7,
    imgSrc:img6,
    destTitle:'Mirissa Beach',
    location:'Mirissa',
    grade:'g',
    fees:'$455',
    description:'Boats and carts stacked with ice and displaying today’s catch , prawns, lobsters, fish, calamari etc.'
  },

  {
    id:8,
    imgSrc:img7,
    destTitle:'Old Town of Galle',
    location:'Galle',
    grade:'g',
    fees:'$55',
    description:'There are many versions of how the suffix ‘Galle” came about. One version of it is that it derived from ‘Gallus’ from the Dutch language meaning chicken. Another is that it was a ‘Galaa’ in Sinhalese language meaning a place where cattle were herded.'
  },

  
  ]
const Main = () => {
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>Most visited destinations</h3>
      </div>

      <div className='secContent grid'>
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
             
              <div key={id} className='singleDestination'>
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle}/>
                  </div>
                <div className='cardInfo'>
                <h4 className='destTitle'>{destTitle}</h4>
                <span className='contient flex'>
                   <GrFormLocation className='icon'/>
                   <span className='name'>{location}</span>
                </span>

                <div className='fees flex'>
                  <div className='grade'>
                    <span>{grade}  <small className='small'> +1</small></span>
                  </div>
                  <div className='price'>
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className='desc'>
                  <p>{description}</p>
                </div>
                <button className='btn flex'>
                  DETAILS<BsClipboardCheck className='icon'/>
                </button>
              </div>
            </div>
         
            )
            })
          }
      </div>
    </section>
  )
}

export default Main