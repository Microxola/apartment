import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import { backendurl } from '../App'
import { toast } from 'react-toastify'
import Title from '../components/Title'
import { useEffect } from 'react'


const Add = ({token}) => {

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  })

  const [inputs, setInputs] = useState({
    roomType: '',
    Type: '',
    name: '',
    address: '',
    Bedroom: '',
    Bathroom: '',
    Kitchen: '',
    plot: '',
    Garage: '',
    Furnishing: '',
    pricePerNight: 0,
    amenities: {
      'A/C & Heating': false,
      'Garages': false,
      'Swimming Pool': false,
      'Parking': false,
      'Garden': false,
      'Disabled Access': false,
      'Pet Friendly': false,
      'Ceiling Height': false,
      'Wifi': false,
      'Elevator': false,
      'Fireplace': false,
      'Refrigerator': false,
      'Wardrobe': false,
    },
      nearby: {
      'School & Collage': false,
      'Gym': false,
      'Shopping Mall': false,
      'River': false,
      'Grocery Center': false,
      'University': false,
      'Police Station': false,
      'Metro Station': false,
      'Hospital': false,
      'Bus Station': false,
      'Market': false,
    }
  })
  // hotels
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState('');

    useEffect(() => {
    axios.get(backendurl+'/api/hotels/hotels')  // Replace with your actual endpoint
      .then((response) => {
        setHotels(response.data.Hotels);
      })
      .catch((error) => {
        console.error('Error fetching hotels:', error);
      });
  }, []);

  const handleChange = (e) => {
    setSelectedHotel(e.target.value);
    console.log("Selected Hotel ID:", e.target.value);
  };

  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
        e.preventDefault();

        //check if all inputs are filled
        if(!inputs.roomType || !inputs.pricePerNight || !inputs.amenities || !Object.values(images).some(image => image)){
          toast.error("Please fill in all the details")
          return;
        }
        setLoading(true);

        try {
          const formData = new FormData();
          formData.append("roomType", inputs.roomType);
          formData.append("Type", inputs.Type);
          formData.append("pricePerNight", inputs.pricePerNight);
          formData.append("name", inputs.name);
          formData.append("address", inputs.address);
          formData.append("hotels", selectedHotel); // ✅ correct
          formData.append("Bedroom", inputs.Bedroom);
          formData.append("Bathroom", inputs.Bathroom);
          formData.append("Kitchen", inputs.Kitchen);
          formData.append("plot", inputs.plot);
          formData.append("Garage", inputs.Garage);
          formData.append("Furnishing", inputs.Furnishing);

          //converting the amenities to an array and keeps the selected one only.
          const amenity = Object.keys(inputs.amenities).filter(key => inputs.amenities[key])
          formData.append("amenities", JSON.stringify(amenity));
          console.log(amenity);
          
          //converting the nearby to an array and keeps the selected one only.
          const nearbys = Object.keys(inputs.nearby).filter(key => inputs.nearby[key])
          formData.append("nearby", JSON.stringify(nearbys));

          // adding images to formData
          Object.keys(images).forEach((key) => {
            images[key] && formData.append('images', images[key])
          })
          console.log(nearbys);
          
          

          const {data} = await axios.post(backendurl+"/api/rooms", formData,
                    {headers: {token}}
                )
            if(data.success){
              toast.success(data.message);
              setInputs({
                  roomType: '',
                  pricePerNight: 0,
                  address: '',
                  Bedroom: '',
                  Bathroom: '',
                  Kitchen: '',
                  plot: '',
                  Garage: '',
                  Furnishing: '',
                  amenities: {
                    'A/C & Heating': false,
                    'Garages': false,
                    'Swimming Pool': false,
                    'Parking': false,
                    'Garden': false,
                    'Disabled Access': false,
                    'Pet Friendly': false,
                    'Ceiling Height': false,
                    'Wifi': false,
                    'Elevator': false,
                    'Fireplace': false,
                    'Refrigerator': false,
                    'Wardrobe': false,
                    }
              })
              setImages({
                      1: null,
                      2: null,
                      3: null,
                      4: null,
              })
            }else{
              toast.error(data.message);

            }
        } catch (error) {
          toast.error(error.message)
          console.log(error.message);
          
        }finally{
          setLoading(false);
        }
  }

  return (
    <form onSubmit={submitHandler}>
        <Title align='left' font='outfit' title='Add New Property' subTitle='Fill in the 
        details carefully an accurate property details, pricing and amenities
        to enhance the user experience.'/>
        {/* upload area for images */}
        <p className='text-gray-800 mt-10'>Property Images</p>
        <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
            {Object.keys(images).map((key) => (
              <label htmlFor={`roomImages${key}`} key={key}>
                <img className='max-h-13 cursor-pointer opacity-80' 
                src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}/>
                <input type="file" accept='image/*' hidden  id={`roomImages${key}`}
                onChange={(e)=> setImages({...images, [key]: e.target.files[0]})}/>
              </label>
            ))}
        </div>
        <div className='w-[200px]'>
          <div>
              <p className='mb-2'>Select Hotel</p>
               <select value={selectedHotel} onChange={handleChange} className='w-full px-3 py-2'>
                  <option value="">-- Select a Hotel --</option>
                  {hotels.map((hotel) => (
                    <option key={hotel._id} value={hotel._id}>
                      {hotel.name}
                    </option>
                  ))}
      </select>
        </div>
        </div>
        {/* property names and co starts here */}
         <div className='w-full'>
             <p className='mb-2'>Property Name</p>
        <input onChange={(e)=> setInputs({...inputs, name: e.target.value})} value={inputs.name} type="text" placeholder='Property name' className='w-full max-w-[500px] px-3 py-2'/>
      </div>
       <div className='w-full'>
             <p className='mb-2'>Property Address</p>
        <input onChange={(e)=> setInputs({...inputs, address: e.target.value})} value={inputs.address} type="text" placeholder='Property address' className='w-full max-w-[500px] px-3 py-2'/>
      </div>
        {/* property names and co ends here */}
                  {/* other property stuff starts from here */}
        <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
            <div className='w-full'>
                <p className='mb-2'>Number of Bedroom</p>
                <input onChange={(e)=> setInputs({...inputs, Bedroom: e.target.value})} value={inputs.Bedroom} type="Number" placeholder='Number of Bedroom' className='w-full max-w-[500px] px-3 py-2'/>
            </div>
            <div className='w-full'>
                  <p className='mb-2'>Number of Bathroom</p>
                  <input onChange={(e)=> setInputs({...inputs, Bathroom: e.target.value})} value={inputs.Bathroom} type="Number" placeholder='Number of Bathroom' className='w-full max-w-[500px] px-3 py-2'/>
            </div>
        </div>



         <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
            <div className='w-full'>
                <p className='mb-2'>Number of Kitchen</p>
                <input onChange={(e)=> setInputs({...inputs, Kitchen: e.target.value})} value={inputs.Kitchen} type="Number" placeholder='Number of Kitchen' className='w-full max-w-[500px] px-3 py-2'/>
            </div>
            <div className='w-full'>
                  <p className='mb-2'>Number of plot or sqr feet</p>
                  <input onChange={(e)=> setInputs({...inputs, plot: e.target.value})} value={inputs.plot} type="text" placeholder='Number of square feet' className='w-full max-w-[500px] px-3 py-2'/>
            </div>
        </div>


         <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
            <div className='w-full'>
                <p className='mb-2'>Number of Garage Space</p>
                <input onChange={(e)=> setInputs({...inputs, Garage: e.target.value})} value={inputs.Garage} type="Number" placeholder='Number of Garage parking space' className='w-full max-w-[500px] px-3 py-2'/>
            </div>
            <div className='w-full'>
                  <p className='mb-2'>Furnishing Status</p>
                  <input onChange={(e)=> setInputs({...inputs, Furnishing: e.target.value})} value={inputs.Furnishing} type="text" placeholder='Furnishing Status' className='w-full max-w-[500px] px-3 py-2'/>
            </div>
        </div>
                  {/* other property stuff starts from here */}
       
        <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
              <div className="flex-1 max-w-48">
                  <p className="text-gray-800 mt-4">Apartment Type</p>
                  <select onChange={(e) => setInputs({...inputs, roomType: e.target.value})}
                  id="" value={inputs.roomType}
                   className='border opacity-70 border-gray-300 mt-1 rounded
                  p-2 w-full'>
                    <option value="">Select Apartment Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Houses">Houses</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Villas">Villas</option>
                  </select>
              </div>
              {/* new status type */}
              <div className="flex-1 max-w-48">
                  <p className="text-gray-800 mt-4">Type</p>
                  <select onChange={(e) => setInputs({...inputs, Type: e.target.value})}
                    value={inputs.Type}
                   className='border opacity-70 border-gray-300 mt-1 rounded
                  p-2 w-full'>
                    <option value="">Type</option>
                    <option value="Sell">Sell</option>
                    <option value="Rent">Rent</option>

                  </select>
              </div>
              <div>
                <p className='mt-4 text-gray-800'>
                  Price <span className='text-xs'>/night</span>
                </p>
                <input type="number" placeholder='0' className='border border-gray-300
                mt-1 rounded p-2 w-24' value={inputs.pricePerNight} onChange={(e) => setInputs({...inputs, pricePerNight: e.target.value})}/>
              </div>
        </div>

        <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4 justify-around'>
                  {/* first */}
                  <div>
                     <p className='text-gray-800 mt-4'>Amenities</p>
                      <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm gap-1'>
                          {
                            Object.keys(inputs.amenities).map((amenity, index) => (
                              <div key={index}>
                                  <input type="checkbox" id={`amenities${index+1}`}
                                    checked={inputs.amenities[amenity]} onChange={()=>
                                      setInputs({...inputs, amenities: {...inputs.amenities, [amenity]: !inputs.amenities[amenity]}})
                                    } />
                                    <label htmlFor={`amenities${index+1}`} className='px-1'>{amenity}</label>
                              </div>
                            ))
                          }
                      </div>
                  </div>
                  {/* second */}
                  <div>
                     <p className='text-gray-800 mt-4'>What's Nearby</p>
                    <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm gap-1'>
                        {
                          Object.keys(inputs.nearby).map((nearby, index) => (
                            <div key={index}>
                                <input type="checkbox" id={`nearby${index+1}`}
                                  checked={inputs.nearby[nearby]} onChange={()=>
                                    setInputs({...inputs, nearby: {...inputs.nearby, [nearby]: !inputs.nearby[nearby]}})
                                  } />
                                  <label htmlFor={`nearby${index+1}`} className='px-1'>{nearby}</label>
                            </div>
                          ))
                        }
                    </div>
                  </div>
        </div>
        {/* <p className='text-gray-800 mt-4'>Amenities</p>
        <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm gap-1'>
            {
              Object.keys(inputs.amenities).map((amenity, index) => (
                <div key={index}>
                    <input type="checkbox" id={`amenities${index+1}`}
                      checked={inputs.amenities[amenity]} onChange={()=>
                        setInputs({...inputs, amenities: {...inputs.amenities, [amenity]: !inputs.amenities[amenity]}})
                      } />
                      <label htmlFor={`amenities${index+1}`} className='px-1'>{amenity}</label>
                </div>
              ))
            }
        </div> */}
        <button className='bg-blue-600 text-white px-8 py-2 rounded 
        mt-8 cursor-pointer' disabled={loading} type='submit'>
         { loading ? 'Adding....' : 'Add Room'}
        </button>
    </form>
  )
}

export default Add
