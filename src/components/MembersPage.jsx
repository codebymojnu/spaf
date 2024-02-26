// MembersPage.jsn
import MemberCard from "./MemberCard";

// Sample data for members
const members = [
  {
    name: "মোঃমাসুদুর রহমান মাসউদ",
    photo: "/memberImages/masud.jpg",
    title: "ফাউন্ডার",
    description: "Studied British common law at University of London",
  },
  {
    name: "মুজাহিদুল ইসলাম মুজাহিদ",
    photo: "/memberImages/masud.jpg",
    title: "পরিচালনা পরিষদের সদস্য",
    description: "Description 2",
  },
  {
    name: "রিয়াজুল ইসলাম রুহী",
    photo: "/memberImages/masud.jpg",
    title: "পরিচালনা পরিষদের সদস্য",
    description: "Description 1",
  },
  {
    name: "অর্জুন সিংহ রায়",
    photo: "/memberImages/masud.jpg",
    title: "পরিচালনা পরিষদের সদস্য",
    description: "Description 2",
  },
  {
    name: "সাদিকুর ইসলাম সাদিক",
    photo: "/memberImages/masud.jpg",
    title: "পরিচালনা পরিষদের সদস্য",
    description: "Description 1",
  },
  {
    name: "মমিনুল ইসলাম মমিন",
    photo: "/memberImages/masud.jpg",
    title: "পরিচালনা পরিষদের সদস্য",
    description: "Description 2",
  },
  {
    name: "মোবাসসেরুল ইসলাম",
    photo: "/memberImages/masud.jpg",
    title: "পরিচালনা পরিষদের সদস্য",
    description: "Studied British common law at University of London",
  },
  {
    name: "আসাদুজ্জামান সোহেল",
    photo: "/memberImages/masud.jpg",
    title: "সম্পাদকীয় পরিষদের সদস্য",
    description: "Description 2",
  },
  {
    name: "মাসুম বিল্লাহ",
    photo: "/memberImages/masud.jpg",
    title: "সম্পাদকীয় পরিষদের সদস্য",
    description: "Description 1",
  },
  {
    name: "আবু সাঈদ",
    photo: "/memberImages/masud.jpg",
    title: "সম্পাদকীয় পরিষদের সদস্য",
    description: "Description 2",
  },
  {
    name: "শামিম আহসান",
    photo: "/memberImages/masud.jpg",
    title: "সম্পাদকীয় পরিষদের সদস্য",
    description: "Description 1",
  },
  {
    name: "মজনু মিয়া",
    photo: "/memberImages/masud.jpg",
    title: "সম্পাদকীয় পরিষদের সদস্য",
    description: "Description 2",
  },
  {
    name: "ফিরোজ আহমেদ লিপু",
    photo: "/memberImages/masud.jpg",
    title: "সম্পাদকীয় পরিষদের সদস্য",
    description: "Studied British common law at University of London",
  },
  {
    name: "মজনু মিয়া",
    photo: "/memberImages/masud.jpg",
    title: "সম্পাদকীয় পরিষদের সদস্য",
    description: "Description 2",
  },
  {
    name: "তৌহিদুল ইসলাম",
    photo: "/memberImages/masud.jpg",
    title: "পরিকল্পনা পরিষদের সদস্য",
    description: "Description 1",
  },
  {
    name: "ইয়াসিন আলী",
    photo: "/memberImages/masud.jpg",
    title: "পরিকল্পনা পরিষদের সদস্য",
    description: "Description 2",
  },
  {
    name: "সাইদুল ইসলাম রাজু",
    photo: "/memberImages/masud.jpg",
    title: "পরিকল্পনা পরিষদের সদস্য",
    description: "Description 1",
  },
  {
    name: "সাজু সরকার",
    photo: "/memberImages/masud.jpg",
    title: "পরিকল্পনা পরিষদের সদস্য",
    description: "Description 2",
  },
  {
    name: "আশিকুর রহমান আকাশ",
    photo: "/memberImages/masud.jpg",
    title: "পরিকল্পনা পরিষদের সদস্য",
    description: "Studied British common law at University of London",
  },
  {
    name: "আশরাফুল আলম",
    photo: "/memberImages/masud.jpg",
    title: "পরিকল্পনা পরিষদের সদস্য",
    description: "Description 2",
  },
  {
    name: "আরিফুর রহমান",
    photo: "/memberImages/masud.jpg",
    title: "পরিকল্পনা পরিষদের সদস্য",
    description: "Description 1",
  },
  {
    name: "আবু খাইর",
    photo: "/memberImages/masud.jpg",
    title: "যুগ্ন সাধারণ সম্পাদক",
    description: "Description 2",
  },
  {
    name: "কামরুল ইসলাম",
    photo: "/memberImages/masud.jpg",
    title: "দপ্তর সম্পাদক",
    description: "Description 1",
  },
  {
    name: "মতিউর রহমান",
    photo: "/memberImages/masud.jpg",
    title: "পচার সম্পাদক",
    description: "Description 2",
  },
  {
    name: "মোঃ শরিফুল ইসলাম সোহেল",
    photo: "/memberImages/masud.jpg",
    title: "পরিবেশ বিষয়ক সম্পাদক",
    description: "Studied British common law at University of London",
  },
  {
    name: "রিশাত মুনতাসীর",
    photo: "/memberImages/masud.jpg",
    title: "স্বাস্থ্য বিষয়ক সম্পাদক",
    description: "Description 2",
  },
  {
    name: "মোছাঃ শিমু খাতুন",
    photo: "/memberImages/masud.jpg",
    title: "মহিলা ও শিশু বিষয়ক সম্পাদক",
    description: "Description 1",
  },

  {
    name: "মোঃ বিল্লাল হোসেন",
    photo: "/memberImages/masud.jpg",
    title: "শিক্ষা বিষয়ক সম্পাদক",
    description: "Description 2",
  },
  {
    name: "হাঃ মোঃ আব্দুর রউফ",
    photo: "/memberImages/masud.jpg",
    title: "ত্রান ও বস্ত্র বিষয়ক সম্পাদক",
    description: "Description 1",
  },
  {
    name: "মাওঃ মোঃ রিয়াজুল ইসলাম রুহি",
    photo: "/memberImages/masud.jpg",
    title: "মিডিয়া বিষয়ক সম্পাদক",
    description: "Description 2",
  },
  {
    name: "মোঃ মোতালেব হোসেন",
    photo: "/memberImages/masud.jpg",
    title: "পরিকল্পনা বিষয়ক সম্পাদক",
    description: "Studied British common law at University of London",
  },
  {
    name: "শওন আহমেদ লেবু",
    photo: "/memberImages/masud.jpg",
    title: "কোষাধ্যক্ষ",
    description: "Description 2",
  },
  {
    name: "মোঃ তমাল হোসেন",
    photo: "/memberImages/masud.jpg",
    title: "তথ্য বিষয়ক সম্পাদক",
    description: "Description 1",
  },

  {
    name: "কামরুল ইসলাম",
    photo: "/memberImages/masud.jpg",
    title: "প্রশাসনিক বিষয়ক সম্পাদক",
    description: "Description 2",
  },
  {
    name: "খাইরুল ইসলাম",
    photo: "/memberImages/masud.jpg",
    title: "আন্তর্জাতিক বিষয়ক সম্পাদক",
    description: "Description 1",
  },
  {
    name: "আরিফ বিল্লাহ নোমান",
    photo: "/memberImages/masud.jpg",
    title: "ইনফরমেশন অ্যান্ড কমিউনিকেশন বিষয়ক সম্পাদক",
    description: "Description 2",
  },
  {
    name: "তানজিমুল ইসলাম",
    photo: "/memberImages/masud.jpg",
    title: "শিক্ষা বিষয়ক সম্পাদক",
    description: "Studied British common law at University of London",
  },
  {
    name: "আশিকুর রহমান আকাশ",
    photo: "/memberImages/masud.jpg",
    title: "স্কুল ও কলেজ বিষয়ক সম্পাদক",
    description: "Description 2",
  },
  {
    name: "হাঃ মোঃ আশরাফুল ইসলাম",
    photo: "/memberImages/masud.jpg",
    title: "মাদরাসা বিষয়ক সম্পাদক",
    description: "Description 1",
  },

  {
    name: "মোঃ সোহাগ হোসেন",
    photo: "/memberImages/masud.jpg",
    title: "যোগাযোগ বিষয়ক সম্পাদক",
    description: "Description 2",
  },
  {
    name: "মকবুল হোসেন মামুন",
    photo: "/memberImages/masud.jpg",
    title: "সহ. যোগাযোগ বিষয়ক সম্পাদক",
    description: "Description 1",
  },
  {
    name: "আরিফ বিল্লাহ",
    photo: "/memberImages/masud.jpg",
    title: "ইভেন্ট অ্যান্ড মিটিং বিষয়ক সম্পাদক",
    description: "Description 2",
  },
  {
    name: "মোঃ খাদিমুল ইসলাম",
    photo: "/memberImages/masud.jpg",
    title: "অপারেশন অ্যান্ড মিটিং বিষয়ক সম্পাদক",
    description: "Studied British common law at University of London",
  },
  {
    name: "মোঃ রাসেল মিয়া",
    photo: "/memberImages/masud.jpg",
    title: "অনুদান বিষয়ক সম্পাদক",
    description: "Description 2",
  },
  {
    name: "মোঃ আবু মোন্নাফ আলী",
    photo: "/memberImages/masud.jpg",
    title: "সমাজসেবা বিষয়ক সম্পাদক",
    description: "Description 1",
  },
  {
    name: "মোঃরুমান",
    photo: "/memberImages/masud.jpg",
    title: "প্রকাশনা বিষয়ক সম্পাদক",
    description: "Description 1",
  },
  {
    name: "মোছাঃ সাবানা খাতুন",
    photo: "/memberImages/masud.jpg",
    title: "নারী উন্নয়ন বিষয়ক সম্পাদক",
    description: "Description 1",
  },
  {
    name: "তামিম ইসলাম",
    photo: "/memberImages/masud.jpg",
    title: "সদস্য",
    description: "Description 2",
  },
  {
    name: "আফজাল হোসেন",
    photo: "/memberImages/masud.jpg",
    title: "সদস্য",
    description: "Description 1",
  },
  {
    name: "আব্দুল্লাহ আল মামুন",
    photo: "/memberImages/masud.jpg",
    title: "সদস্য",
    description: "Description 2",
  },
  {
    name: "আবু আসানাত আব্দুল্লাহ",
    photo: "/memberImages/masud.jpg",
    title: "সদস্য",
    description: "Studied British common law at University of London",
  },
  {
    name: "সৈকত",
    photo: "/memberImages/masud.jpg",
    title: "সদস্য",
    description: "Description 2",
  },
  {
    name: "সোহেল রানা",
    photo: "/memberImages/masud.jpg",
    title: "সদস্য",
    description: "Description 1",
  },
  {
    name: "সোলাইমান আলী",
    photo: "/memberImages/masud.jpg",
    title: "সদস্য",
    description: "Description 2",
  },
  {
    name: "আশরাফুল ইসলাম",
    photo: "/memberImages/masud.jpg",
    title: "সদস্য",
    description: "Description 1",
  },
  {
    name: "আল-আমিন",
    photo: "/memberImages/masud.jpg",
    title: "সদস্য",
    description: "Description 2",
  },
  // Add more members as needed
];

function MembersPage() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="mt-4 text-3xl font-bold text-center mb-8">
        আমাদের গর্বিত সদস্যবৃন্দ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Display member cards */}
        {members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
      {/* Display invitation form */}
    </div>
  );
}

export default MembersPage;
