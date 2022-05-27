import styles from '../../styles/Home.module.css'

const Subscribe = () => {
    return (
      <div className="my-[138px] bg-[#F2994A] h-[422px] mx-[70px] rounded-[84px] ">
        <div className="flex justify-between items-center h-[422px] bg-[url('/images/shapes.png')] bg-no-repeat bg-left-top">
          <div className=" flex justify-end items-end w-[50%]">
            <h3 className="font-semibold text-5xl leading-relaxed text-white">
              Never Want to Miss <br /> Any Job News?
            </h3>
          </div>
          <div className={styles.subscribe_shape}>
            <div className="max-w-[576px] p-6 rounded-[52px] bg-white relative ">
              <input
                type="text"
                className="border-none "
                placeholder="Enter your email address here..."
              />
              <button className="bg-[#F2994A] w-[130px] h-[45px] text-[21px] font-normal leading-relaxed text-white rounded-[52px] after:absolute after:border-[#E0E0E0] after:border-l-4 after:left-72 after:top-6 after:bottom-6">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Subscribe;