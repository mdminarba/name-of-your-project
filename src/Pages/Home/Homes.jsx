import PropTypes from 'prop-types'
import icon1 from '../../../src/assets/icon/Frame (1).svg'
import icon2 from '../../../src/assets/icon/Frame (2).svg'
import icon3 from '../../../src/assets/icon/Fram (1).svg'
import icon from '../../../src/assets/icon/Framee (1).svg'
import moment from 'moment';

const Homes = ({ news }) => {
  const { title, image_url, thumbnail_url, author ,details,total_view,rating,img} = news
  return (
    <div className='border my-5 p-5'>
      <div className=" flex justify-between bg-[#F3F3F3] p-2 rounded-md">
        <div className="flex gap-5 items-center">
          <div className="">
            <img className='w-10 h-10 rounded-full' src={thumbnail_url} alt="" />
          </div>
          <div className="">
            <h2 className="text-xl font-semibold ">{author.name}</h2>
            <h4 className=" mt-2 text-[#403F3F] font-medium">{moment().format("DD, M YYYY")}</h4>
          </div>
        </div>
        <div className="flex gap-3">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
        </div>
      </div>

      <div className="">
        <h2 className="text-[26px] font-extrabold my-6 text-[#403F3F]">{title}</h2>
      </div>
      <div className="mt-3">
        <div className="">
          <img src={image_url} alt="" />
        </div>
        <div className="">
          <p className="mt-5">
            {details}
          </p>
          <div className="flex justify-between items-center ">
            <div className="flex gap-1 my-2">
              <img src={icon3} alt="" />
              <img src={icon3} alt="" />
              <img src={icon3} alt="" />
              <img src={icon3} alt="" />
              <img src={icon3} alt="" />
              <div className="ml-2">{rating.number}</div>
            </div>
            <div className="flex gap-2">
              <img src={icon} alt="" />
              {total_view}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Homes.propTypes = {
  news: PropTypes.object
}

export default Homes