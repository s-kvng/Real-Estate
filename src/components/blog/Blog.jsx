import React from 'react'
import Back from '../common/Back';
import img from '../images/about.jpg';
import RecentCard from '../home/recent/RecentCard';

const Blog = () => {
  return (
    <>
        <section className="blog-out  mb5  ">
            <Back  name="Blog"  title="Blog Grid - Our Blogs" cover={img}/>

            <div className=" container recent mt">
                <RecentCard />
            </div>

        </section>
    </>
  )
}

export default Blog