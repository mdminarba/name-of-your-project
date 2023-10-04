import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrekingNews = () => {
  return (
    <div className='flex  mt-4 items-center'>
      <button  className='btn  py-2  btn-secondary text-white'>Breking-News</button>
      <Marquee pauseOnHover={true} speed={100} className=" text-2xl rounded-md text-white bg-blue-400 py-2">
      <Link className="mr-12" to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
      <Link  className="mr-12" to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
      <Link  className="mr-12" to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
      <Link  className="mr-12" to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
      </Marquee>
    </div>
  )
}

export default BrekingNews