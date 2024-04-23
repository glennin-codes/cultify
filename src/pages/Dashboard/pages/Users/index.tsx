import { PencilIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Alert,
} from "@material-tailwind/react";
import { UseGetUserStore } from "../../../../hooks/getUsersHooks";
import { useEffect, useState } from "react";
import { formatDateString } from "./helper/date";
import { mostFrequentDiseaseName } from "./helper/mostFrequent";
import { BsFillExclamationOctagonFill, BsFillTrashFill } from "react-icons/bs";
import { UserData } from "../../../../hooks/ProfileUserStore";
import { EditUserModal } from "../../../../components/modal/EditUserModal";
import { UpdateUserStore } from "../../../../hooks/UpdateUserStore";
import { DeleteModal } from "../../../../components/modal/deleteActionModal";
import { DeleteUserStore } from "../../../../hooks/DeleteUserStore";
const TABLE_HEAD = [
  "Name",
  "PhoneNumber",
  "Email",
  "Prediction cont",
  "most Predicted disease",
  "Date Reg.",
  " ",
  " ",
];

export type DeleteUser = {
  name: string;
  id: string;
};

function AllUsers() {
  const { getUsers, Users, isLoading, error } = UseGetUserStore();
  const { success, resetStates } = UpdateUserStore();
  const { deleteSucess, deleteError, resetDeleteStates } = DeleteUserStore();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    location: "",
    password: "",
    id: "",
  });
  useEffect(() => {
    getUsers();
  }, [success, deleteSucess]);

  const [open, setOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteUser, setDeleteUser] = useState<DeleteUser>({
    name: "",
    id: "",
  });

  const isLast = (index: number) => {
    return index === (Users?.length ?? 1) - 1;
  };
  const getDataAndEdit = (user: UserData) => {
    setData(user);
    setOpen(true);
  };

  const handleClose = () => {
    setData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      location: "",
      password: "",
      id: "",
    });
    setOpen(false);
  };
  const closeAlert = () => {
    if (success || error) {
      resetStates();
    }
    if (deleteSucess || deleteError) {
      resetDeleteStates();
    }
  };
  const handleCloseModal = () => {
    setDeleteModalOpen(false);
  };
  const handleDelete = (deleteUser: DeleteUser) => {
    setDeleteUser(deleteUser);
    setDeleteModalOpen(true);
  };
  return (
    <>
      <div className="h-full w-screen  md:w-full  py-6 px-8 overflow-x-auto">
        {success && (
          <Alert
            open={success ? true : false}
            onClose={closeAlert}
            className="rounded-none border-solid border-l-4 border-[#2ec946] bg-[#2ec946]/10 ] text-center font-medium text-[#2ec946]"
          >
            {success}
          </Alert>
        )}
        {deleteSucess && (
          <Alert
            open={deleteSucess ? true : false}
            onClose={closeAlert}
            className="rounded-none border-solid border-l-4 border-[#2ec946] bg-[#2ec946]/10 ] text-center font-medium text-[#2ec946]"
          >
            {deleteSucess}
          </Alert>
        )}
        {error && (
          <Alert
            open={error ? true : false}
            onClose={closeAlert}
            className=" border-solid border-l-4 border-[#EF4444] bg-red-500/20 text-white p-2 rounded text-center font-medium text-red-500"
          >
            {error}
          </Alert>
        )}
        {deleteError && (
          <Alert
            open={deleteError ? true : false}
            onClose={closeAlert}
            className=" border-solid border-l-4 border-[#EF4444] bg-red-500/20 text-white p-2 rounded text-center font-medium text-red-500"
          >
            {deleteError}
          </Alert>
        )}
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
                    _id,
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
                                  diseaseName
                                    ? diseaseName
                                    : "No data available"
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
                          <IconButton
                            onClick={() => {
                              getDataAndEdit({
                                firstName,
                                lastName,
                                location,
                                email,
                                phoneNumber,
                                id: _id,
                                password,
                              });
                            }}
                            variant="text"
                          >
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Delete">
                          <IconButton
                            className="bg-red-500 text-white px-3 py-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                            onClick={() => {
                              handleDelete({
                                name: firstName + " " + lastName,
                                id: _id,
                              });
                            }}
                            variant="text"
                          >
                            <BsFillTrashFill className="h-4 w-4" />
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
        <EditUserModal
          isOpen={open}
          setValues={setData}
          onClose={handleClose}
          values={data}
        />
        <DeleteModal
          handleCloseModal={handleCloseModal}
          isOpen={deleteModalOpen}
          user={deleteUser}
        />
      </div>
    </>
  );
}
export default AllUsers;
