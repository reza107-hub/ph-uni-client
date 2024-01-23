import { useGetAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemester";

const AcademicSemester = () => {
  const { data } = useGetAcademicSemesterQuery(undefined);
  console.log(data);
  return <div>This is academicSemester</div>;
};

export default AcademicSemester;
