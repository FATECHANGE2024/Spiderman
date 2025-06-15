import Navbar from "@/app/component/Navbar/Navbar";

export default function Committee() {

  const committees = [
  {
    title: "Anti-Ragging Committee",
    codes: ["ARC-LNCT-2020", "ARC-LNCT-2021", "ARC-LNCT-2022", "ARC-LNCT-2023"],
  },
  {
    title: "Academic Advisory Body",
    codes: ["AAB-LNCT-2020", "AAB-LNCT-2021", "AAB-LNCT-2022", "AAB-LNCT-2023"],
  },
  {
    title: "Equipment Audit Committee",
    codes: ["EAC-LNCT-2020", "EAC-LNCT-2021", "EAC-LNCT-2022", "EAC-LNCT-2023"],
  },
  {
    title: "Finance Committee",
    codes: ["FC-LNCT-2020", "FC-LNCT-2021", "FC-LNCT-2022", "FC-LNCT-2023"],
  },
  {
    title: "Governing Body",
    codes: ["GB-LNCT-2020", "GB-LNCT-2021", "GB-LNCT-2022", "GB-LNCT-2023"],
  },
  {
    title: "Grievance Redressal Committee",
    codes: ["GRFC-LNCT-2020", "GRFC-LNCT-2021", "GRFC-LNCT-2022", "GRFC-LNCT-2023"],
  },
  {
    title: "Staff Selection Commission",
    codes: ["SSC-LNCT-2020", "SSC-LNCT-2021", "SSC-LNCT-2022", "SSC-LNCT-2023"],
  },
  {
    title: "Internal Complaint Committee",
    codes: ["ICC-LNCT-2020", "ICC-LNCT-2021", "ICC-LNCT-2022", "ICC-LNCT-2023"],
  },
  {
    title: "Library Committee",
    codes: ["LC-LNCT-2020", "LC-LNCT-2021", "LC-LNCT-2022", "LC-LNCT-2023"],
  },
  {
    title: "Proctorial Board",
    codes: ["PB-LNCT-2020", "PB-LNCT-2021", "PB-LNCT-2022", "PB-LNCT-2023"],
  },
  {
    title: "SC-ST Committee",
    codes: ["SC-ST-LNCT-2020", "SC-ST-LNCT-2021", "SC-ST-LNCT-2022", "SC-ST-LNCT-2023"],
  },
  {
    title: "PAQIC - Accreditation",
    codes: ["PAQIC-LNCT-2020", "PAQIC-LNCT-2021", "PAQIC-LNCT-2022", "PAQIC-LNCT-2023"],
  },
];
  return (
    <div>
      <Navbar />
      <section className="h-screen w-full overflow-hidden">
      <img
        className="object-cover h-full w-full inset-0"
        alt="Banner"
        src="/media/Committee.jpg"
      />
      </section>

      <div className="min-h-screen p-8 bg-white text-black">
      <h1 className="text-4xl font-bold mb-6 text-center">LNCT Group of Colleges | Committees 2023-24</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {committees.map((committee, index) => (
          <div key={index} className="border rounded-xl p-4 shadow-sm hover:shadow-md bg-gray-200 hover:bg-gray-300 transition">
            <h2 className="text-lg font-semibold mb-2">{committee.title}</h2>
            <ul className="list-disc pl-5 text-blue-600">
              {committee.codes.map((code, idx) => (
                <li key={idx}>
                  <a href={`#`} className="hover:underline">
                    {code}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
