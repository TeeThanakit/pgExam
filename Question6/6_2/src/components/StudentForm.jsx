export default function StudentFrom({ register }) {

  const style = "w-3/5 mx-auto flex justify-center pt-5 border"
  return (
    <>
      <div className="flex flex-col">
        <label className="mb-2">Education</label>
        <input
          id="Education"
          type="text"
          className={style}
          {...register("Education")}
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2">Student Id</label>
        <input
          id="StudentId"
          type="text"
          className={style}
          {...register("StudentId")}
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2">Self Image</label>
        <input
          id="SelfImage"
          type="img"
          className={style}
          {...register("SelfImage")}
        />
      </div>
      <div className="flex flex-col mb-3">
        <label className="mb-2">Card expired date</label>
        <input
          id="Cardexpireddate"
          type="date"
          className={style}
          {...register("Cardexpireddate")}
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2">Date of Birth</label>
        <input
          id="DateofBirth"
          type="date"
          className={style}
          {...register("DateofBirth")}
        />
      </div>
    </>
  );
}
