import React, { useEffect, useState } from 'react'
import ReactHlsPlayer from 'react-hls-player/dist'
import './Videos.css'

const Videos = () => {
  const [MyVideos, setvideos] = useState([])

// set the video link that is clicked................  

  const [VideoLink, setvideoLink] = useState(
    'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
  )

// fetch the data from API...........................

  useEffect(() => {
    fetch(
      'https://care-box-backend.herokuapp.com/api/v1/applicant_test/get_video_link/',
    )
      .then((res) => res.json())
      .then((data) => setvideos(data))
  }, [])
  console.log(VideoLink)

  return (
    <div className="container">
      <h1 className="text-center mt-5">Care-Box Ltd.</h1>
      <h1 className="p-3">Task-1</h1>
      <section className="py-5 row">

        {/* Video player section...............................  */}

        <div className="col-lg-8">

            {/* npm packages for video player ................ */}

          <ReactHlsPlayer
            className="video-box-css"
            src={VideoLink}
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
          />
        </div>

        {/* list of videos div............................... */}

        <div className="col-lg-4 text-center">
          <h2 className="py-3">List of Videos</h2>
          <div className="">

            {/* map() to get data from the Array................ */}
            {MyVideos.map((videos) => {
              return (
                <button
                  className="coustom-css"
                  onClick={() => {
                    setvideoLink(videos.link)
                  }}
                >
                  Stream link-{videos.id} <br />
                </button>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Videos
