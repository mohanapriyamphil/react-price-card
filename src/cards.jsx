import './cards.css';

// const Cards = (props)=> {
//     return(
//         <div className='container'>
//             <div className='card'>
//                 <h6>{data[0].subType}</h6>
//                 <h1>{data[0].title}</h1>
//                 <hr></hr>
//                 <p>{data[0]['features'][0]['title']}</p>
//                 <p>{data[0]['features'][1]['title']}</p>
//                 <p>{data[0]['features'][2]['title']}</p>
//                 <p>{data[0]['features'][3]['title']}</p>
//                 <p>{data[0]['features'][4]['title']}</p>
//                 <p>{data[0]['features'][5]['title']}</p>
//                 <p>{data[0]['features'][6]['title']}</p>
//                 <p>{data[0]['features'][7]['title']}</p>
//                 <div><button>BUTTON</button></div>
//             </div>
//             <div className='card'>
//                 <h6>{data[1].subType}</h6>
//                 <h1>{data[1].title}</h1>
//                 <hr></hr>
//                 <p>{data[1]['features'][0]['title']}</p>
//                 <p>{data[1]['features'][1]['title']}</p>
//                 <p>{data[1]['features'][2]['title']}</p>
//                 <p>{data[1]['features'][3]['title']}</p>
//                 <p>{data[1]['features'][4]['title']}</p>
//                 <p>{data[1]['features'][5]['title']}</p>
//                 <p>{data[1]['features'][6]['title']}</p>
//                 <p>{data[1]['features'][7]['title']}</p>
//                 <div><button>BUTTON</button></div>
//             </div>
//             <div className='card'>
//                 <h6>{data[2].subType}</h6>
//                 <h1>{data[2].title}</h1>
//                 <hr></hr>
//                 <p>{data[2]['features'][0]['title']}</p>
//                 <p>{data[2]['features'][1]['title']}</p>
//                 <p>{data[2]['features'][2]['title']}</p>
//                 <p>{data[2]['features'][3]['title']}</p>
//                 <p>{data[2]['features'][4]['title']}</p>
//                 <p>{data[2]['features'][5]['title']}</p>
//                 <p>{data[2]['features'][6]['title']}</p>
//                 <p>{data[2]['features'][7]['title']}</p>
//                 <div><button>BUTTON</button></div>
//             </div>

//         {props.children}
//         </div>
//     );
// };

// Cards.propTypes = {
//     children: propTypes.string,
// }

const Cards = () => {
  const data = [
    {
      subType: 'FREE',
      title: '$0/month',
      features: [
        {title: 'Single User', isEnabled: true},
        {title: '50 GB Storage', isEnabled: true},
        {title: 'Unlimited Public Projects', isEnabled: false},
        {title: 'Community Access', isEnabled: false},
        {title: 'Unlimited Private Projects', isEnabled: false},
        {title: 'Dedicated Phone Support', isEnabled: false},
        {title: 'Free Subdomains', isEnabled: false},
        {title: 'Monthly Status Reports', isEnabled: false},
      ]
    },
    {
      subType: 'PLUS',
      title: '$9/month',
      features: [
        {title: '5 Users', isEnabled: true},
        {title: '50 GB Storage', isEnabled: true},
        {title: 'Unlimited Public Projects', isEnabled: true},
        {title: 'Community Access', isEnabled: true},
        {title: 'Unlimited Private Projects', isEnabled: true},
        {title: 'Dedicated Phone Support', isEnabled: true},
        {title: 'Free Subdomains', isEnabled: true},
        {title: 'Monthly Status Reports', isEnabled: false},
      ]
    },
    {
      subType: 'PRO',
      title: '$49/month',
      features: [
        {title: 'Unlimited Users', isEnabled: true},
        {title: '50 GB Storage', isEnabled: true},
        {title: 'Unlimited Public Projects', isEnabled: true},
        {title: 'Community Access', isEnabled: true},
        {title: 'Unlimited Private Projects', isEnabled: true},
        {title: 'Dedicated Phone Support', isEnabled: true},
        {title: 'Free Subdomains', isEnabled: true},
        {title: 'Monthly Status Reports', isEnabled: true},
      ]
    }
  ]
  return(
    <div className='container'>
      {data.map((cardData) =>
        <div key={cardData.subType} className='card'>
          <h6>{cardData.subType}</h6>
          <h1>{cardData.title}</h1>
          <hr></hr>
          <ul>
            {cardData.features.map((feature, index) =>
              <li key={index} className={feature.isEnabled? 'enabled' : 'disabled'} >{feature.title}</li>
            )}
          </ul>
          <div><button>BUTTON</button></div>
        </div>
      )}
    </div>
  )
}


export default Cards