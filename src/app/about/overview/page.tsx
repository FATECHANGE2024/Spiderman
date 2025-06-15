import Navbar from "@/app/component/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="h-screen w-full overflow-hidden">
      <img
        className="object-cover h-full w-full inset-0"
        alt="Banner"
        src="/media/bg1.jpg"
      />  
    </section>

      <section>
        <p className="m-6"><span className="text-6xl">B</span>orn in semi urban city of Bilaspur &#40;C.G.&#41;,Shri Jai Narayan Chouksey, completed his post graduation from Robertson College, Jabalpur. He established Lakshmi Narain College of Technology &#40;LNCT&#41;, Bhopal in 1994 under the banner of H.K. Kalchuri Education Trust. Since then, With the commitment of &#34;Working Towards Being the Best&#34;, LNCT Group has achieved many milestones. The institute is successfully meeting the objective of producing skilled manpower of the highest quality who is able to cope up with the challenges of ever evolving industrial needs of the country.The Alumni of LNCT Group are working all across the Globe in Big Multi National Companies.<br /><br /><img src="/media/img1.jpg" className="float-right ml-4 w-[50%] lg:w-[500px]" /> Today, LNCT Group is one of the Largest and most preferred Educational Group for Engineering, Management, Pharmacy, Medical with ISO-9001 certification and NBA accreditation for many Engineering courses.. Bright young students from all across the country are coming to fulfill their dream in this group. The LNCT Campus at Bhopal is spread over a lush green environment of approx. 50 acres. The campus constitutes of many buildings that houses the academics and research centers. In addition to this, the academic building has tutorial rooms, lecture halls, computer and electronics labs and offices of the administrations and faculty. The campus is fully equipped with facilities like Wi-Fi,central library &#40;digital library, Internet lab&#41;, digital classrooms, hostel, mess,Central workshop, Auditorium Sports Ground etc.LNCT (Lakshmi Narain College of Technology) today continues to stand as a prominent pillar of technical and professional education in India, especially in central India. On this day, LNCT reflects the spirit of innovation, discipline, and academic excellence that has defined its legacy for decades. The campus is alive with the vibrant energy of students engaged in a range of activities—from cutting-edge research in the labs to spirited cultural and sports events that build camaraderie and holistic development.<br /><br />With world-class infrastructure, experienced faculty, and a forward-looking curriculum, LNCT today emphasizes skill development alongside theoretical knowledge, ensuring students are well-prepared for the rapidly evolving demands of industry. Seminars, workshops, and industry interaction sessions are regularly held, providing real-world exposure and placement opportunities. Additionally, the institution continues to focus on inclusivity, ethics, and social responsibility, nurturing not just engineers and managers, but future leaders with integrity and vision. Whether in the classrooms, tech incubators, or student clubs, LNCT today embodies progress, passion, and purpose, echoing its motto of &#34;Working Towards Being the Best.&#34;Today at LNCT, the atmosphere is dynamic and filled with ambition as students and faculty alike immerse themselves in the pursuit of academic and professional excellence. The campus is a hub of activity, with students attending expert lectures, working on live projects, and preparing for upcoming tech fests and competitions.</p>
      </section><br /><br />

      <section className="flex flex-col font-san">

        <div className="flex items-center"><img src="/media/vision.jpg" className="w-[100px] h-[100px] float-left" /><p>To be a premier institute where engineering education and research converge to produce engineers as responsible citizens.</p></div><br /><br />

        <div className="flex">
          <div className="w-[110px] shrink-0 relative"><img src="/media/mission.jpg" className="w-[100px] h-[100px] absolute top-0 left-0" /></div>
          <div>
            <ul>
              <li>• To improve continually in the teaching-learning process by strengthening infrastructural facilities and faculty credentials.</li>
              <li>• To undertake interdisciplinary research and development by engaging the faculty and students in curricular, co-curricular and industry collaborated projects towards problem solving.</li>
              <li>• To enhance proportion of skilled based courses beyond curriculum to create more employable graduates.</li>
              <li>• To inculcate human values, ethics, patriotism and responsibility in our outgoing engineers by providing conducive environment.</li>
            </ul>
          </div>
        </div><br /><br />

        <div className="flex">
          <div className="w-[110px] shrink-0 relative"><img src="/media/program.jpg" className="w-[100px] h-[100px] absolute top-0 left-0" /></div>
          <div>
            <ul>
              <li>• To understand the applications of science and humanities ,basic introductory engineering courses , core subjects of the curriculum of the course and interdisciplinary subjects, a specialized group subjects, electives, projects ,seminars, group discussion supplemented by site visits and local short tours.</li>
              <li>• To make students familiar with modern equipments, instruments ,instrumentations , software and other computational, mathematical, design and project management tools.</li>
              <li>• They should be capable themselves to handle complex problems based on their acquired knowledgeable with other available sources of information and references.</li>
              <li>• They should be able to carry out research, design, consultancy services innovations and patents to the existing situations independently for the betterment of society.</li>
              <li>• To use up-to-date techniques and skills required in modern era to analyze problems in industrial field.</li>
              <li>• They should be competent to model real life problems using software and hardware platforms both in offline and in real time mode.</li>
              <li>• They should do analysis independently of real life problems of design and use computing systems appropriate to their solutions that are technically sound, economically feasible, viable and sustainable.</li>
              <li>• To make the students conversant with the methods and the instruments being presently used in field thus bridging the gaps between the curriculum and industry requirements.</li>
            </ul>
          </div>
        </div><br /><br />

      </section>

    </div>
  );
}
