import { DeleteUser } from "../../pages/Dashboard/pages/Users";

interface Props{
   user:DeleteUser
    isOpen:boolean,
    handleCloseModal:()=>void
}
export const DeleteModal = (props:Props) => {
  
  const handleDelete = () => {
    // Call onDelete function passed from parent component
   props.handleCloseModal(); // Close the modal after deleting
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ${props.isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete {props.user.name}  account?</h2>
        <h4 className="text-lg font-semibold mb-4 text-red-500">Please Note: This action is irriversible?</h4>
        <div className="flex justify-between">
          <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2">Yes, delete</button>
          <button onClick={props.handleCloseModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};