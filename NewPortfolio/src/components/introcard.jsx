import React from 'react'

const introcard = () => {
  return (
     <div class="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto mb-4">
          <div class="flex flex-col md:flex-row justify-between gap-6">
            <div class="flex flex-col gap-4 w-full md:w-1/2">
              <div id="about1" class="bg-blue-100 p-4 rounded-lg shadow">
                About{" "}
              </div>
              <div id="intro" class="bg-green-100 p-4 rounded-lg shadow">
                Hello! I'm Anand Kumar Agrahari, a Passionate Computer Science
                Engineer.
              </div>
            </div>

            <div
              id="aboutcontent"
              class="bg-yellow-100 p-4 rounded-lg shadow w-full md:w-1/2"
              >
              <p className="text-left  leading-relaxed ">
                I am currently pursuing a B.Tech in Computer Science and
                Engineering at Galgotias University, where I am developing a
                strong foundation in software development, problem-solving, and
                emerging technologies.
                <p>
                  <br />
                  My core expertise lies in Java programming, with a keen
                  interest in exploring web development, artificial
                  intelligence, and machine learning. I am driven by a passion
                  for innovation and continuously strive to transform ideas into
                  scalable, efficient solutions.
                </p>
                <br />
                <p>
                  I thrive in dynamic environments that challenge me to think
                  critically and push my technical boundaries. Whether it's
                  building robust applications, solving complex coding problems,
                  or learning new technologies, I am committed to continuous
                  growth and excellence.
                </p>
              </p>
            </div>
          </div>
        </div>
  )
}

export default introcard