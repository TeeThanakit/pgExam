import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";
import GeneralPublicForm from "./components/GeneralPublicForm";
import StudentFrom from "./components/StudentForm";

function App() {
  const [member, setMember] = useState(1);
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  const style = "w-3/5 mx-auto flex justify-center pt-5 border"

  return (
    <div className="mx-auto">
      <h1 className="text-2xl font-bold mb-5">Register Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label className="mb-2">First name:</label>
          <input
            id="FirstName"
            type="text"
            className={style}
            {...register("FirstName")}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Last name:</label>
          <input
            id="LastName"
            type="text"
            className={style}
            {...register("LastName")}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Email:</label>
          <input
            id="email"
            type="email"
            className={style}
            {...register("email")}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Phone number:</label>
          <input
            id="PhoneNumber"
            type="number"
            className={style}
            {...register("PhoneNumber")}
          />
        </div>

        <div className="flex flex-col justify-center">
          <label className="mb-2">Membership Type:</label>
          <div className="flex space-x-4">
            <button
              type="button"
              className={`${member === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setMember(1)}
            >
              General public
            </button>
            <button
              type="button"
              className={`${member === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setMember(2)}
            >
              Student
            </button>
            <button
              type="button"
              className={`${member === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setMember(3)}
            >
              Shop
            </button>
          </div>
        </div>

        {member == 1 ? <GeneralPublicForm register={register}/> : ""}
        {member == 2 ? <StudentFrom register={register}/> : ""}
        

        <button
          type="submit"
          className="w-full bg-blue-500 my-4"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
