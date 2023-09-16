import './App.css'
import Course from './Course';

function App() {
  const course = [
    {
      id: 1,
      image: `image/Rectangle 2-2.png`,
      title: 'Introduction to C Programming',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      price: 15000,
      credit: '1hr'
    },
    {
      id: 2,
      image: 'image/Rectangle 2-3.png',
      title: 'Introduction to Algorithms',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      price: 25000,
      credit: '2hr'
    },
    {
      id: 3,
      image: 'image/Rectangle 2-4.png',
      title: 'Introduction to C++ for DSA',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      price: 10000,
      credit: '10hr'
    },
    {
      id: 4,
      image: 'image/Rectangle 3.png',
      title: 'Basic Data Structures',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      price: 35000,
      credit: '5hr'
    },
    {
      id: 5,
      image: 'image/Rectangle 2.png',
      title: 'Introduction to OOP Python',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      price: 19000,
      credit: '5hr'
    },
    {
      id: 6,
      image: 'image/Rectangle 2-5.png',
      title: 'Software Engineering',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      price: 23000,
      credit: '2hr'
    },
    {
      id: 7,
      image: 'image/Rectangle 3-1.png',
      title: 'AWS, Cloud Computing',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      price: 35000,
      credit: '5hr'
    },
    {
      id: 8,
      image: 'image/Rectangle 2-1.png',
      title: 'Database (MySQL)',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      price: 19000,
      credit: '5hr'
    },
    {
      id: 9,
      image: 'image/Rectangle 2-6.png',
      title: 'Problem-Solving Part',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      price: 23000,
      credit: '2hr'
    }
  ]

  return (
    <>
      <h1 className="text-[#1C1B1B] text-center text-3xl font-bold mt-12 mb-8">Course Registration</h1>
      <div className="flex gap-6 justify-evenly mb-20">
        <div className="grid grid-cols-3 gap-6">
          {
            course.map(course => <Course key={course.id}
              course={course}></Course>)
          }
        </div>
        <div>
          <div className="card w-84 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3>Credit Hour Remaining 7 hr</h3>
              <hr/>
              <h2 className="text-xl text-[#1C1B1B] font-bold">Course Name</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <hr/>
              <h3 className="text-[#1C1B1BCC] font-medium">Total Credit Hour : 13</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;