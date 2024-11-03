
export default function GeneralPublicForm({ register }) {


  const style = "w-3/5 mx-auto flex justify-center pt-5 border"
  return (
    <>
      <div className="flex flex-col">
        <label className="mb-2">Id Card</label>
        <input
          id="idCard"
          type="text"
          className={style}
          {...register("idCard")}
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2">Date of Birth</label>
        <input
          id="DateofBirth"
          type="text"
          className={style}
          {...register("DateofBirth")}
        />
      </div>
    </>
  );
}
