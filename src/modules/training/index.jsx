import { Module } from "../../components/Module";

function Course({ to, tittle, price, image, lessons }) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-400 bg-slate-200 text-center hover:bg-yellow-200 rounded-md p-4"
    >
      <p>Todos los laboratorios</p>
      <h2 className="text-xl font-bold">Aprende {tittle}</h2>
      <div className="grid grid-cols-2 divide-x divide-gray-400 py-2">
        <div>
          <strong>{lessons} Lecciones</strong>{" "}
        </div>
        <div>
          <strong>{price}</strong>{" "}
        </div>
      </div>
      <img src={image} alt="" className="w-full" />
    </a>
  );
}

export function Training() {
  const courses = [
    {
      course: "Excel",
      price: "Gratis",
      image: "assets/img/courses/excel.jpg",
      lessons: 14,
      to: "https://arsabi.thinkific.com/collections/aprende-excel",
    },
    {
      course: "Power Apps",
      price: "20 $",
      image: "assets/img/courses/power-apps.jpg",
      lessons: 27,
      to: "https://arsabi.thinkific.com/collections/power-platform",
    },
    {
      course: "Power Platform",
      price: "Gratis",
      image: "assets/img/courses/power-platform.jpg",
      lessons: 9,
      to: "https://arsabi.thinkific.com/collections/power-platform",
    },
    {
      course: "PowerBI",
      price: "5 $",
      image: "assets/img/courses/powerbi.jpg",
      lessons: 12,
      to: "https://arsabi.thinkific.com/collections/aprende-power-bi",
    },
  ];
  return (
    <Module title="Cursos">
      <div className="grid grid-cols-3 gap-4 p-4">
        {courses.map((course, index) => (
          <Course
            key={index}
            to={course.to}
            title={course.course}
            price={course.price}
            image={course.image}
            lessons={course.lessons}
          />
        ))}
      </div>
    </Module>
  );
}
