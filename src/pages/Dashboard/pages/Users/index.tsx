import { PencilIcon } from "@heroicons/react/24/outline";
import { Card, CardFooter, Typography,Button, Tooltip, IconButton } from "@material-tailwind/react";
import { UseGetUserStore } from "../../../../hooks/getUsersHooks";
import { useEffect } from "react";
const TABLE_HEAD = ["Name", "PhoneNumber", "Date", "PredictionCount"," "];

const TABLE_ROWS = [
  {
    name: "John Michael",
    phoneNumber:"0713322025",
    date: "23/04/18",
   PredictionCount:"10"
  },
  {
    name: "Alexa Liras",
    phoneNumber: "0713322025",
    date: "23/04/18",
   PredictionCount:"3"
  },
  {
    name: "Laurent Perrier",
    phoneNumber: "0713322025",
    date: "19/09/17",
   PredictionCount:"5"
  },
  {
    name: "Michael Levi",
    phoneNumber: "0713322025",
    date: "24/12/08",
   PredictionCount:"8"
  },
  {
    name: "Richard Gran",
    phoneNumber:"0713322025",
    date: "04/10/21",
   PredictionCount:"2"
  },
];
const isLast = (index:number)=>{
  return index === TABLE_ROWS.length - 1;
}

 function AllUsers() {
  const { getUsers, Users, isLoading, error } = UseGetUserStore();

  useEffect(() => {
    getUsers(); // This will be triggered when the component mounts
  }, []); // Empty dependency array means it will only run once, similar to componentDidMount
console.log(Users)
  return (
    <div className="h-full w-screen  md:w-full  py-6 px-8 overflow-x-auto">
    
      <table className="w-full table-auto text-left whitespace-nowrap">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, phoneNumber, date,PredictionCount }, index) =>{
               const classes = isLast(index)
               ? "p-4"
               : "p-4 border-b border-blue-gray-50";
              return(
               <tr key={index} className="even:bg-blue-gray-50/50">
                 <td className={classes}>
                   <Typography variant="small" color="blue-gray" className="font-normal">
                     {name}
                   </Typography>
                 </td>
                 <td className={classes}>
                   <Typography variant="small" color="blue-gray" className="font-normal">
                     {phoneNumber}
                   </Typography>
                 </td>
                 <td className={classes}>
                   <Typography variant="small" color="blue-gray" className="font-normal">
                     {date}
                   </Typography>
                 </td>
                 <td className={classes}>
                   <Typography variant="small" color="blue-gray" className="font-normal">
                     {PredictionCount}
                   </Typography>
                 </td>
                 
                 <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
               </tr>
             )})}
          
           
        </tbody>
      </table>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
      </div>
    
  );
}
export default AllUsers;