import TeamPic from '../../Assests/teamwork.jpg';
import TeamPic2 from '../../Assests/teamwork2.jpg';
function WhoWeAre() {
    return (
        <>
        <section className="pt-20">
            <div className="w-full h-[500px] overflow-hidden relative">

                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 to-transparent"></div>
                
                <div className="absolute top-6 right-6 z-20 max-w-md">
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                        Not just a team — we're a family of growth
                    </h3>
                </div>

                <img
                    src={TeamPic}
                    alt="Trosc Team"
                    className="w-full h-full object-cover object-center"
                />
            </div>
        </section>

        <section id="about" className=" text-white">
            <div className="w-full max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          Who We’re?
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src={TeamPic2}
              alt="Trosc Members"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed">
              <strong>Trosc</strong> is a vibrant student team from the Faculty
              of Computers and Information, dedicated to guiding learners
              through every track. We offer clear explanations, hands-on tasks,
              and continuous support to help you excel in Frontend & UI/UX,
              Backend, Mobile, Cyber Security, AI, and 3D.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Our content is complete, engaging, and designed to make complex
              concepts simple and fun. We believe in learning by doing, growing
              together, and turning challenges into achievements. Ready to level
              up your skills and join a community of passionate learners? Join
              our team now and be part of the Trosc experience!
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}

export default WhoWeAre;
