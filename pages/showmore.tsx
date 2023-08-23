import { log } from "console";
import { useState, useEffect } from "react";


const ShowMore = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);
    const showMoreItems=()=>{
        setVisible(prevState => prevState+3)

    }
  useEffect(() => {
     fetch(`https://64e5e3f209e64530d17f340d.mockapi.io/users?page=1&limit=${visible}`)
      .then((res) => {
       return res.json()
      })
      .then(data=>{
       setItems(data)
          console.log(data)
      })
      
  }, [visible]);
  return <>
  {
    items.map(item=>(
        <div className="bg-white shadow-md p-6 rounded-lg m-2" key={item.id}>
            <h2 className="text-xl font-semibold mb-4">{item.id}</h2>
            <p className="text-gray-600">{item.name}</p>
            <p className="text-gray-600">{item.createdAt}</p>
        </div>
    ))

  }
      <button onClick={showMoreItems} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">
          show more
      </button>
  </>;
};
export default ShowMore;
