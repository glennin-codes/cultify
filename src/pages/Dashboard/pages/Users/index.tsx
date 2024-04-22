import { PencilIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { UseGetUserStore } from "../../../../hooks/getUsersHooks";
import { useEffect, useState } from "react";
import { formatDateString } from "./helper/date";
import { mostFrequentDiseaseName } from "./helper/mostFrequent";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { UserData } from "../../../../hooks/ProfileUserStore";
import { EditUserModal } from "../../../../components/modal/EditUserModal";
const TABLE_HEAD = [
  "Name",
  "PhoneNumber",
  "Email",
  "Prediction cont",
  "most Predicted disease",
  "Date Reg.",
  " ",
];

// const TABLE_ROWS = [
//   {
//     name: "John Michael",
//     phoneNumber:"0713322025",
//     date: "23/04/18",
//    predictions.length():"10"
//   },
//   {
//     name: "Alexa Liras",
//     phoneNumber: "0713322025",
//     date: "23/04/18",
//    predictions.length():"3"
//   },
//   {
//     name: "Laurent Perrier",
//     phoneNumber: "0713322025",
//     date: "19/09/17",
//    predictions.length()
//   },
//   {
//     name: "Michael Levi",
//     phoneNumber: "0713322025",
//     date: "24/12/08",
//    predictions.length()
//   },
//   {
//     name: "Richard Gran",
//     phoneNumber:"0713322025",
//     date: "04/10/21",
//    predictions.length()
//   },
// ];

function AllUsers() {
  const { getUsers, Users, isLoading, error, success } = UseGetUserStore();
const [data,setData]=useState({
  firstName:'',
  lastName:'',
  phoneNumber: '',
  email:'',
  location:'',
  password:'',
  id:''
});
  useEffect(() => {
    getUsers();
  }, []);
  const [open, setOpen] = useState(false);
  console.log(Users);
  console.log(error);
  console.log(success);
  const isLast = (index: number) => {
    return index === (Users?.length ?? 1) - 1;
  };
const getDataAndEdit=(user:UserData)=>{
 setData(user);
setOpen(true);
}

const handleClose = ()=>{
  setData({
    firstName:'',
    lastName:'',
    phoneNumber: '',
    email:'',
    location:'',
    password:'',
    id:''
  });
  setOpen(false);
  
}
  return (
    <div className="h-full w-screen  md:w-full  py-6 px-8 overflow-x-auto">
      <table className="w-full table-auto text-left ">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          User Management and Prediction Overview
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Manage user accounts and explore prediction insights, including
            commonly predicted diseases per month and year and gain insights
            into user prediction patterns.
          </p>
        </caption>

        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
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
          {Users &&
            Users.map(
              (
                {
                  firstName,
                  lastName,
                  phoneNumber = "",
                  createdAt,
                  email,
                  predictions,
                  location,
                  password,
                  _id

                },
                index
              ) => {
                const classes = isLast(index)
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {firstName + " " + lastName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {phoneNumber}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Array.isArray(predictions) && predictions.length}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip
                        content={
                          <div className="w-80">
                            <Typography color="white" className="font-medium">
                              Top Detected Disease
                            </Typography>
                            {predictions?.length > 0 ? (
                              Array.from(
                                mostFrequentDiseaseName(predictions)
                              ).map(([yearMonth, diseaseName]) => {
                                const [year, month] = yearMonth.split("-");
                                const formattedMonth = new Date(
                                  `${year}-${month}-01`
                                ).toLocaleString("en-US", { month: "long" });

                                return (
                                  <div key={yearMonth}>
                                    <Typography
                                      variant="small"
                                      color="white"
                                      className="font-normal opacity-80"
                                    >
                                      {`In ${year} ${formattedMonth}, the most frequent detected disease is: ${
                                        diseaseName
                                          ? diseaseName
                                          : "No data available"
                                      }`}{" "}
                                      for user {firstName + " " + lastName}
                                    </Typography>
                                  </div>
                                );
                              })
                            ) : (
                              <Typography
                                variant="small"
                                color="white"
                                className="font-normal opacity-80"
                              >
                                No prediction made by user so far
                              </Typography>
                            )}
                          </div>
                        }
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {predictions?.length > 0 ? (
                            Array.from(
                              mostFrequentDiseaseName(predictions)
                            ).map(([yearMonth, diseaseName]) => {
                              const [year, month] = yearMonth.split("-");
                              const formattedMonth = new Date(
                                `${year}-${month}-01`
                              ).toLocaleString("en-US", { month: "long" });

                              return `${year}-${formattedMonth} ${
                                diseaseName ? diseaseName : "No data available"
                              }`;
                            })
                          ) : (
                            <BsFillExclamationOctagonFill />
                          )}
                        </Typography>
                      </Tooltip>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {formatDateString(createdAt)}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton onClick={()=>{
                          getDataAndEdit({
                            firstName,lastName,location,email,phoneNumber ,id:_id,password
                          })
                        }}  variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 1
        </Typography>
        <div className="flex gap-2">
          <Button
            className="opacity-100 cursor-not-allowed focus:cursor-auto "
            variant="outlined"
            size="sm"
          >
            Previous
          </Button>
          <Button
            className="opacity-100 cursor-not-allowed focus:cursor-auto "
            variant="outlined"
            size="sm"
          >
            Next
          </Button>
        </div>
      </CardFooter>
      <EditUserModal isOpen={open} setValues={setData} onClose={handleClose} values={data}  />
    </div>
  );
}
export default AllUsers;
