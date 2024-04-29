import React, { useContext, useEffect, useState } from 'react';
import 'animate.css';
import { AuthContext } from '../Components/AuthProvider';
import { MdDeleteForever } from "react-icons/md";
import { HiPencilSquare } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
 
const Mylist = () => {


  const {user} = useContext(AuthContext) || {};
  const [spoti , setSpoti] = useState([]);
    useEffect(() => {
        document.title = 'Your List';
        return () => {
          document.title = 'Title';
        };
      }, []);


 useEffect(()=>{
   fetch(`http://localhost:5000/mylist/${user.email}`)
   .then(res => res.json())
   .then(data =>{
    setSpoti(data)
    console.log(data);
   })
 },[user])

//  const handleDelete = (_id) => {
//   console.log(_id);
//   fetch(`http://localhost:5000/mylist/${_id}`, {
//     method: 'DELETE',
//   })
//   .then(response => {
//     if (response.ok) {
//       // Remove the deleted item from state
//       setSpoti(prevSpoti => prevSpoti.filter(item => item._id !== _id));
//       console.log('Item deleted successfully');
//     } else {
//       console.error('Failed to delete item');
//     }
//   })
//   .catch(error => console.error('Error deleting item:', error));
// };

const handleDelete = (_id) =>{
  console.log(_id)
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
     
      fetch(`http://localhost:5000/mylist/${_id}` , {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
          Swal.fire({
            title: "Deleted!",
            text: "Your Spot has been deleted.",
            icon: "success"
          });
        }
      })
      console.log('delete hoise');
    }
  });
             
}
 

    return (
        <div>
           <div className='border border-black mt-5 mb-5 rounded-2xl'>
           <div className="container p-2 mx-auto rounded-lg sm:p-4 dark:text-gray-800">
	<h2 className=" underline text-4xl  font-bold animate__animated  animate__heartBeat animate__infinite leading-tight mb-5">My List</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full rounded-xl text-xs table-fixed">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-36" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-4 text-lg">Spots</th>
					<th className="p-4 text-lg">Country</th>
					<th className="p-4 text-lg">Location</th>
					<th className="p-4 text-lg">Avg.Cost</th>
					<th className="p-4 text-lg text-right">Travel-time</th>
					<th className="p-4 text-lg">User Email</th>
					<th className="p-4 text-lg">Update</th>
					<th className="p-4 text-lg">Delete</th>
				</tr>
			</thead>
			<tbody>
				
				
				
         {
          spoti.map(sp => (
            <tr key={sp.id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
            <td className="p-3">
              <p>{sp.spot}</p>
            </td>
            <td className="p-3">
              <p>{sp.country}</p>
            </td>
            <td className="p-3">
              
              <p className="dark:text-gray-600">{sp.location}</p>
            </td>
            <td className="p-3">
              
              <p className="dark:text-gray-600">{sp.cost}</p>
            </td>
            <td className="p-3  text-center">
              <p>{sp.time}</p>
            </td>
            <td className="p-3 text-right">
              <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                <span>{sp.email}</span>
              </span>
            </td>
            <td className="p-3 text-right">
              <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
              <NavLink to="/update" className='flex'><HiPencilSquare className="text-2xl ml-6"/></NavLink>
              </span>
            </td>
            <td className="p-3 text-right">
              <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
               {/* delete */}
                <button onClick={()=>handleDelete(sp._id)} className='flex ml-5'><MdDeleteForever className="text-2xl "/></button>
              </span>
            </td>
          </tr>
          ))
         }
				
			</tbody>
		</table>
	</div>
</div>
           </div>
        </div>
    );
};

export default Mylist;